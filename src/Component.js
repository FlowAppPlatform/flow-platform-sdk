import Util from './Util'
import EventEmitter from 'events'
import Port from './Port'
import Variable from './Variable'

class Component {
  constructor () {
    // Icon URL is the URL of an Icon in SVG that can be showed in the UI.
    this._iconUrl = ''
    this._type = 'component'

    // These are number of outports.
    this._ports = []

    // A short description of the component.
    this._description = ''

    // List of all the outports. If we're building an email component. Ourports can be sent, bounced, error, etc.
    this._outPorts = {}

    // A socket object to communicate with other components.
    this._socket = new EventEmitter()

    // Genere a new ID for this instance.
    this._id = Util.generateId()

    this._task = null

    this._socket.on('execute-component-' + this.id, this.execute)

    this._variables = []

    // check if the env is NodeJS
    this._platform = 'browser'
    if (typeof (process) !== 'undefined' &&
            process.versions &&
            process.versions.node) {
      this._platform = 'node'
    }

    this._isProcessingTask = false
  }

  addVariable (variable) {
    if (variable instanceof Variable) {
      if (!variable.id) { throw new Error('Variable does not have an ID.') }

      for (let i = 0; i < this._variables.length; i++) {
        if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
          throw new Error('Variable with the same name or id already exists.')
        }
      }

      this._variables.push(variable)
    } else {
      throw new Error('variables should be an instance of Variable class.')
    }
  }

  removeVariable (variable) {
    if (variable instanceof Variable || typeof variable === 'string') {
      if (variable instanceof Variable && !variable.id) { throw new Error('Variable does not have an ID.') }

      for (let i = 0; i < this._variables.length; i++) {
        if (typeof variable === 'string') {
          if (variable === this._variables[i].name) {
            this._variables.slice(i, 1)
          }
        } else {
          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
            this._variables.slice(i, 1)
          }
        }
      }
    } else {
      throw new Error('variables should be an instance of Variable class.')
    }
  }

  updateVariable (variable) {
    if (variable instanceof Variable) {
      if (!variable.id) { throw new Error('Variable does not have an ID.') }

      for (let i = 0; i < this._variables.length; i++) {
        if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
          this._variables[i] = variable
          return
        }
      }

      throw new Error('Variable not found and is not updated.')
    } else {
      throw new Error('variables should be an instance of Variable class.')
    }
  }

  getVariable (variable) {
    if (variable instanceof Variable || typeof variable === 'string') {
      if (variable instanceof Variable && !variable.id) { throw new Error('Variable does not have an ID.') }

      for (let i = 0; i < this._variables.length; i++) {
        if (typeof variable === 'string') {
          if (variable === this._variables[i].name) {
            return this._variables[i]
          }
        } else {
          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
            return this._variables[i]
          }
        }
      }

      throw new Error('Variable not found.')
    } else {
      throw new Error('Variable should be an instance of variable class.')
    }
  }

  hasVariable (variable) {
    if (variable instanceof Variable || typeof variable === 'string') {
      if (variable instanceof Variable && !variable.id) { throw new Error('Variable does not have an ID.') }

      for (let i = 0; i < this._variables.length; i++) {
        if (typeof variable === 'string') {
          if (variable === this._variables[i].name) {
            return true
          }
        } else {
          if (variable.name === this._variables[i].name || variable.id === this._variables[i].id) {
            return true
          }
        }
      }
      return false
    } else {
      throw new Error('variables should be an instance of Variable class.')
    }
  }

  // execute the component task.
  execute () {
    if (!this._task) { throw new Error('No task attached.') }
    // check if task is attached and if its actually a function.
    if (this._isProcessingTask) { throw new Error('Component is already processing a task.') }

    if (this._task && Util.validateType(this._task, 'function')) {
      this._isProcessingTask = true
      this._task()
    }
  }

  taskComplete () {
    // Task is complete, and this component is no longer processing.
    this._isProcessingTask = false
  }
  // Task is a custom code as a function that runs when the component executes.
  attachTask (task) {
    if (!Util.validateType(task, 'function')) {
      throw new Error('Task must be a function.')
    }

    this._task = task
  }

  // Task is a custom code as a function that runs when the component executes.
  detachTask () {
    this._task = null
  }

  serialize () {
    return JSON.stringify(this)
  }

  addPort (port) {
    if (port instanceof Port) {
      if (!port.id) { throw new Error('Port does not have an ID.') }

      for (let i = 0; i < this._ports.length; i++) {
        if (port.name === this._ports[i].name || port.id === this._ports[i].id) {
          throw new Error('Port with the same name or id already exists.')
        }
      }

      if (port._componentAttachedTo) { throw new Error('This port is already attached with other component') }

      port._componentAttachedTo = this
      this._ports.push(port)
    } else {
      throw new Error('Port should be an instance of Port class.')
    }
  }

  removePort (port) {
    if (port instanceof Port) {
      if (!port.id) { throw new Error('Port does not have an ID.') }
      if (this._ports.indexOf(port) < 0) {
        throw new Error('Port not found in the component.')
      }
      this._ports.slice(this._ports.indexOf(port), 1)
      port._componentAttachedTo = null
    } else {
      throw new Error('Port should be an instance of Port class.')
    }
  }

  getPort (port) {
    if (port instanceof Port || typeof port === 'string') {
      if (port instanceof Port) {
        if (!port.id) { throw new Error('Port does not have an ID.') }

        if (this._ports.indexOf(port) < 0) {
          throw new Error('Port not found in the component.')
        }

        return this._ports[this._ports.indexOf(port)]
      }

      if (typeof port === 'string') {
        for (var i = 0; i < this._ports.length; i++) {
          if (this._ports[i].name === port) {
            return this._ports[i]
          }
        }

        throw new Error('Port with name ' + port + ' not found in the component.')
      }
    } else {
      throw new Error('Port should be an instance of Port class.')
    }
  }

  hasPort (port) {
    if (port instanceof Port) {
      if (!port.id) { throw new Error('Port does not have an ID.') }
      if (this._ports.indexOf(port) < 0) {
        return false
      }

      return true
    } else {
      throw new Error('Port should be an instance of Port class.')
    }
  }

  getPorts () {
    return this._ports
  }

  // getters and setters
  get description () {
    return this._description
  }

  set description (description) {
    if (!Util.validateType(description, 'string')) {
      throw new Error('Description must be a string.')
    }

    this._description = description
  }

  get task () {
    return this._name
  }

  set task (task) {
    this.attachTask(task)
  }

  get name () {
    return this._name
  }

  set name (name) {
    if (!Util.validateType(name, 'string')) {
      throw new Error('Name must be a string.')
    }
    this._name = name
  }

  get iconUrl () {
    return this._iconUrl
  }

  set iconUrl (iconUrl) {
    if (!Util.validateType(iconUrl, 'url')) {
      throw new Error('iconUrl must be a URL.')
    }
    this._iconUrl = iconUrl
  }

  get outPorts () {
    return this._outPorts
  }

  get id () {
    return this._id
  }
}

// export.
module.exports = Component
