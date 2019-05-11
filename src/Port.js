/**
 * Documentation at /docs/classes/Port/README.md
 */

import Util from './Util'
import Property from './Property'

class Port {
  constructor(name) {
    // set initial properties
    if (!name) {
      throw new Error('Port Name is required.')
    }

    this._type = 'port'

    this.name = name
    this._id = Util.generateId()
    this._connectedComponents = []
    this._componentAttachedTo = null
    this._propertys = []
    this._socket = null
  }

  addProperty(property) {
    if (property instanceof Property) {
      if (!property.id) {
        throw new Error('Property does not have an ID.')
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (
          property.name === this._propertys[i].name ||
          property.id === this._propertys[i].id
        ) {
          throw new Error('Property with the same name or id already exists.')
        }
      }

      this._propertys.push(property)
    } else {
      throw new Error('propertys should be an instance of Property class.')
    }
  }

  removeProperty(property) {
    if (property instanceof Property || typeof property === 'string') {
      if (property instanceof Property && !property.id) {
        throw new Error('Property does not have an ID.')
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (typeof property === 'string') {
          if (property === this._propertys[i].name) {
            this._propertys.splice(i, 1)
            return
          }
        } else {
          if (
            property.name === this._propertys[i].name ||
            property.id === this._propertys[i].id
          ) {
            this._propertys.splice(i, 1)
            return
          }
        }
      }

      throw new Error('Property not found.')
    } else {
      throw new Error('propertys should be an instance of Property class.')
    }
  }

  updateProperty(property) {
    if (property instanceof Property) {
      if (!property.id) {
        throw new Error('Property does not have an ID.')
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (
          property.name === this._propertys[i].name ||
          property.id === this._propertys[i].id
        ) {
          this._propertys[i] = property
          return
        }
      }

      throw new Error('Property not found and is not updated.')
    } else {
      throw new Error('propertys should be an instance of Property class.')
    }
  }

  hasProperty(property) {
    if (property instanceof Property || typeof property === 'string') {
      if (property instanceof Property && !property.id) {
        throw new Error('Property does not have an ID.')
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (typeof property === 'string') {
          if (property === this._propertys[i].name) {
            return true
          }
        } else {
          if (
            property.name === this._propertys[i].name ||
            property.id === this._propertys[i].id
          ) {
            return true
          }
        }
      }
      return false
    } else {
      throw new Error('propertys should be an instance of Property class.')
    }
  }

  getProperty(property) {
    if (property instanceof Property || typeof property === 'string') {
      if (property instanceof Property && !property.id) {
        throw new Error('Property does not have an ID.')
      }

      for (let i = 0; i < this._propertys.length; i++) {
        if (typeof property === 'string') {
          if (property === this._propertys[i].name) {
            return this._propertys[i]
          }
        } else {
          if (
            property.name === this._propertys[i].name ||
            property.id === this._propertys[i].id
          ) {
            return this._propertys[i]
          }
        }
      }

      throw new Error(`Property ${property} not found.`)
    } else {
      throw new Error('Property should be an instance of property class.')
    }
  }

  // This passes the flow to components that this port is connected to.
  emit() {
    if (this._componentAttachedTo) {
      for (var i = 0; i < this._connectedComponents.length; i++) {
        if (this._componentAttachedTo.isOnGraph()) {
          this._componentAttachedTo._socket.emit(
            'execute-component-' + this._connectedComponents[i]
          )
        } else {
          throw new Error(
            'Port cannot be emitted because the component it belongs to does not belong to a graph.'
          )
        }
      }

      // Fire an onEmit Callback.
      if (this._onEmit) {
        this._onEmit()
      }
      // Announce emission
      this._componentAttachedTo._socket.emit(`emitted-port`, this)
    } else {
      throw new Error(
        'This port cannot emit because it does not belong to any component'
      )
    }
  }

  onEmit(callback) {
    this._onEmit = callback
  }

  connectComponent(component) {
    if (component && component._type && component._type === 'component') {
      if (!component.id) {
        throw new Error('Component does not have an ID.')
      }

      var componentId = component.id

      for (let i = 0; i < this._connectedComponents.length; i++) {
        if (componentId === this._connectedComponents[i]) {
          throw new Error(
            'Port is already connected to ' + component.name + '.'
          )
        }
      }

      this._connectedComponents.push(componentId)
    } else {
      throw new Error('component should be an instance of Component class.')
    }
  }

  connectComponentById(componentId) {
    if (componentId && typeof componentId === 'string') {
      if (!componentId) {
        throw new Error('Component ID is not of type string')
      }

      for (let i = 0; i < this._connectedComponents.length; i++) {
        if (componentId === this._connectedComponents[i]) {
          throw new Error('Port is already connected to ' + componentId + '.')
        }
      }

      this._connectedComponents.push(componentId)
    } else {
      throw new Error('component should be an instance of Component class.')
    }
  }

  disconnectComponentById(componentId) {
    if (componentId && typeof componentId === 'string') {
      if (!componentId) {
        throw new Error('Component ID is not of type string')
      }

      if (this._connectedComponents.indexOf(componentId) < 0) {
        throw new Error('Component is not connected to the port.')
      }

      this._connectedComponents.splice(
        this._connectedComponents.indexOf(componentId),
        1
      )
    } else {
      throw new Error('component should be an instance of Component class.')
    }
  }

  disconnectComponent(component) {
    if (component && component._type && component._type === 'component') {
      if (!component.id) {
        throw new Error('Component does not have an ID.')
      }

      var componentId = component.id
      if (this._connectedComponents.indexOf(componentId) < 0) {
        throw new Error('Component is not connected to the port.')
      }

      this._connectedComponents.splice(
        this._connectedComponents.indexOf(componentId),
        1
      )
    } else {
      throw new Error('component should be an instance of Component class.')
    }
  }

  getConnectedComponentIds() {
    return this._connectedComponents
  }

  // getters and setters
  get description() {
    return this._description
  }

  set description(description) {
    if (!Util.validateType(description, 'string')) {
      throw new Error('Description must be a string.')
    }

    this._description = description
  }

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
}

export default Port
