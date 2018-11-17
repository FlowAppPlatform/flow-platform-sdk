/**
 * Documentation at /docs/classes/Property/README.md
 */

import Util from './Util'

class Property {
  constructor (name, dataType) {
    if (!name) {
      throw new Error('Name is required.')
    }

    if (!dataType) {
      throw new Error('DataType is required.')
    }

    this._type = 'property'

    this.name = name
    this.dataType = dataType
    this.required = false
    this._id = Util.generateId()
    this._data = {}
    this.index = null
  }

  linkToProperty (property) {
    if (property && property._type === 'property') { this._data = property._data }
  }

  unlinkProperty () {
    this._data = JSON.parse(JSON.stringify(this._data))
  }

  set data (data) {
    if (Util.validateType(data, this.dataType)) {
      if (this.dataType === 'select-single' || this.dataType === 'select-multiple') {
        if (!(data instanceof Array)) {
          data = [data]
        }
        for (var i = 0; i < data.length; i++) {
          if (this._values.indexOf(data[i]) < 0) {
            throw new Error('Data does not belong to predefined values')
          }
        }
        if (this.dataType === 'select-single' && data && data.length > 1) {
          throw new Error('Only one item in the array can be saved with select-single datatype.')
        }
        this._data._value = data
      } else {
        this._data._value = data
      }
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

export default Property
