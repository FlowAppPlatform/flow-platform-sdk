/**
 * Documentation at /docs/classes/Graph/README.md
 */

import EventEmitter from 'event-emitter'
import Util from './Util'

class Graph {
  constructor (name) {
    this._socket = new EventEmitter()
    this._type = 'graph'
    this.name = name
    // Genere a new ID for this instance.
    this._id = Util.generateId()
    this._components = {}
  }

  addComponent (component) {
    if (typeof component === 'object' && component._type && component._type === 'component') {
      if (!component.id) {
        throw new Error('Component does not have an id. Please instantiate the component.')
      }

      this._components[component.id] = component
      component._attachSocket(this._socket)
    } else {
      throw new Error('Argument 1 is not of type Component')
    }
  }

  removeComponent (component) {
    if (typeof component === 'object' && component._type && component._type === 'component') {
      if (!component.id) {
        throw new Error('Component does not have an id. Please instantiate the component.')
      }

      delete this._components[component.id]
      component._detachSocket()
    } else {
      throw new Error('Argument 1 is not of type Component')
    }
  }

  init (graphJson, componentClasses) {

    this.name = graphJson.name;

    for(var i=0;i<graphJson.data.length; i++){
      if(graphJson.data[i].graphComponentId && componentClasses[graphComponentId]){
          let component = new componentClasses[graphJson.data[i].graphComponentId](graphJson.data[i].id);
          //add property data
          component.initProperties(graphJson.data[i].propertyData)
          //add connections. 
          component.initConnections(graphJson.data[i].connections)
          this.addComponent(component);
      }
    }

    if (typeof component === 'object') this._graph = graph
    else {
      throw new Error('Graph is not a valid JSON object')
    }
  }

  execute () {
    //execute the start component of a graph.
    if(this._components['start']){
      this._components['start'].execute();
    }
  }

  // getters and setters.
  get name () {
    return this._name
  }

  set name (name) {
    if (!Util.validateType(name, 'string')) {
      throw new Error('Name must be a string.')
    }
    this._name = name
  }

  get id () {
    return this._id
  }

  set id (id) {
    throw new Error('ID is read-only')
  }

  get graph () {
    return this._graph
  }

  set graph (graph) {
    if (typeof component === 'object') this._graph = graph
    else {
      throw new Error('Graph is not a valid JSON object')
    }
  }
}

module.exports = Graph
