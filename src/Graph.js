/**
 * Documentation at /docs/classes/Graph/README.md
 */

import EventEmitter from 'event-emitter'
import Util from './Util'

class Graph {
  constructor(name) {
    this._socket = new EventEmitter()
    this._type = 'graph'
    this.name = name
    // Genere a new ID for this instance.
    this._id = Util.generateId()
    this._components = {}
    this._executedComponent = null
    this._onCompleteCallback = null
    this._emittedPorts = {}

    // resolve dynamic properties before component.execute()
    this._socket.on(`resolve-properties`, componentId => {
      this.resolveProperties(componentId)
    })

    // component taskComplete callback
    this._socket.on(`component-executed`, componentId => {
      this._componentExecuted(componentId)
    })

    // keep track of emitted ports
    this._socket.on(`emitted-port`, port => {
      this._portEmitted(port)
    })
  }

  addComponent(component) {
    if (
      typeof component === 'object' &&
      component._type &&
      component._type === 'component'
    ) {
      if (!component.id) {
        throw new Error(
          'Component does not have an id. Please instantiate the component.'
        )
      }

      this._components[component.id] = component
      component._attachSocket(this._socket)
    } else {
      throw new Error('Argument 1 is not of type Component')
    }
  }

  getComponent(componentId) {
    if (typeof componentId !== 'string') {
      throw new Error('Expecing componentId to be a string')
    }
    const component = this._components[componentId]
    if (component) {
      return component
    }
    return null
  }

  _componentExecuted(componentId) {
    this._executedComponent = componentId
    let executedComponent = null
    if (this._graph && typeof this._onCompleteCallback === 'function') {
      executedComponent = this._graph.data.find(
        component => component.id === componentId
      )
      // when there's no connections => last component
      if (
        executedComponent &&
        executedComponent.connections &&
        executedComponent.connections.length === 0
      ) {
        const port = this._emittedPorts[componentId]
        const component = this._components[componentId]

        this._onCompleteCallback({
          component,
          port
        })
      }
    }
  }

  _portEmitted(port) {
    this._emittedPorts[port._componentAttachedTo.id] = port
  }

  onComplete(cb) {
    this._onCompleteCallback = cb
  }

  removeComponent(component) {
    if (
      typeof component === 'object' &&
      component._type &&
      component._type === 'component'
    ) {
      if (!component.id) {
        throw new Error(
          'Component does not have an id. Please instantiate the component.'
        )
      }

      delete this._components[component.id]
      component._detachSocket()
    } else {
      throw new Error('Argument 1 is not of type Component')
    }
  }

  init(graph, components) {
    if (graph && graph.data && graph.data.length !== 0) {
      this.name = graph.name
      this._graph = graph

      graph.data.forEach(component => {
        const { graphComponentId, id, propertyData, connections } = component
        if (graphComponentId && components[graphComponentId]) {
          // init the component
          const component = new components[graphComponentId](id)
          component.initProperties(propertyData)
          component.initConnections(connections)
          this.addComponent(component)
        }
      })
    } else {
      throw new Error('Graph JSON is not a valid JSON object')
    }
  }

  execute() {
    // execute the start component of a graph.
    if (this._components['start']) {
      this._components['start'].execute()
    }
  }

  resolveProperties(targetComponentId) {
    var targetComponent = this._components[targetComponentId]
    targetComponent._propertys.forEach(property => {
      // resolve path

      const { componentId, portId, propertyId } = resolvePath(property.data)

      // if resolved
      if (componentId && portId && propertyId) {
        const component = this._components[componentId]
        const { data } = component.getPort(portId).getProperty(propertyId)

        if (data) {
          property.data = data
        }
      }
    })
  }

  // getters and setters.
  get name() {
    return this._name
  }

  set name(name) {
    if (!Util.validateType(name, 'string')) {
      throw new Error('Name must be a string.')
    }
    this._name = name
  }

  get id() {
    return this._id
  }

  set id(id) {
    throw new Error('ID is read-only')
  }

  get graph() {
    return this._graph
  }

  set graph(graph) {
    if (typeof component === 'object') this._graph = graph
    else {
      throw new Error('Graph is not a valid JSON object')
    }
  }
}

export default Graph

function resolvePath(string) {
  if (typeof string !== 'string') {
    return string
  }

  if (string.charAt(0) !== '@') {
    return string
  }

  const [componentId, portId, propertyId] = string.substr(1).split('.')
  return {
    componentId,
    portId,
    propertyId
  }
}
