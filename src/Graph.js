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
}

module.exports = Graph
