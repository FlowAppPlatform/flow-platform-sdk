/**
 * Documentation at /docs/classes/Variable/README.md
 */

import Util from './Util'

class Variable {
  constructor (name, dataType) {
    if (!name) {
      throw new Error('Name is required.')
    }

    if (!dataType) {
      throw new Error('DataType is required.')
    }

    this._type = 'variable'

    this.name = name
    this.dataType = dataType
    this.required = false
    this._id = Util.generateId()
    this._data = {}
    this.index = null
  }

  linkToVariable (variable) {
    if (variable && variable._type === 'variable') { this._data = variable._data }
  }

  set data (data) {
    if (Util.validateType(data, this.dataType)) {
      this._data._value = data
    } else {
      throw new Error('Data is not of type ' + this.dataType)
    }
  }

  get data () {
    return this._data._value
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

  // getters and setters
  get name () {
    return this._name
  }

  set name (name) {
    if (!Util.validateType(name, 'string')) {
      throw new Error('Name must be a string.')
    }
    this._name = name
  }

  // getters and setters
  get dataType () {
    return this._dataType
  }

  // DataType can be an array too. Like a selector box or an object of Params.
  set dataType (dataType) {
    if (!Util.validateType(dataType, 'string')) {
      throw new Error('DataType must be a string')
    }
    if (this._data && this._data._value) { delete this._data._value } // delete data which was there before if the type changes.
    this._dataType = dataType
  }

  get id () {
    return this._id
  }

  set id (id) {
    throw new Error('ID is read-only')
  }

  // DataType can be an array too. Like a selector box or an object of Params.
  set values (values) {
    if (!Util.validateType(values, 'list')) {
      throw new Error('Values must be an array.')
    }

    if (this.dataType === 'select-single' || this.dataType === 'select-multiple') { this._values = values } else { throw new Error('To use this property, the DataType should be select-single or select-multiple.') }
  }

  get values () {
    return this._values
  }

  set required (required) {
    if (!Util.validateType(required, 'boolean')) {
      throw new Error('Required must be a string.')
    }

    this._required = required
  }

  // getters and setters
  get required () {
    return this._required
  }
}

module.exports = Variable
