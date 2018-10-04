import UrlRegex from 'url-regex'

class Util {
  static validateType (value, type) {
    // define types here.
    type = type.toLowerCase() // lowercase type.
    var validTypes = this.getValidDataTypes()

    if (validTypes.indexOf(type) < 0) { throw new Error(type + ' is not a valid type.') }

    if (type === 'text' || type === 'string' || type === 'url' || type === 'email') {
      if (typeof value !== 'string') { return false }
    }

    if (type === 'number' || type === 'int' || type === 'integer' || type === 'decimal' || type === 'float' || type === 'double' || type === 'rating') {
      if (typeof value !== 'number') { return false }
    }

    if (type === 'bool' || type === 'boolean') {
      if (typeof value !== 'boolean') { return false }
    }

    if (type === 'function') {
      if (typeof value !== 'function') { return false }
    }

    if (type === 'date' || type === 'datetime' || type === 'time') {
      if (typeof value === 'string') {
        value = new Date(value)
        if (value.toString() === 'Invalid Date') { throw new Error(value + ' is not a valid ' + type) }
      }
      if (!(value instanceof Date)) { return false }
    }

    if (type === 'rating') {
      if (value < 0 || value > 5) { return false }
    }

    // validate for URL.
    if (type === 'url') {
      if (!UrlRegex({exact: true}).test(value)) {
        return false
      }
      return true
    }

    // validate for Email.
    if (type === 'email') {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!re.test(value)) {
        return false
      }

      return true
    }

    if (type === 'select-single') {
      if (value instanceof Array && value.length <= 1) { return false }
    }

    if (type === 'select-nultiple') {
      if (value instanceof Array) { return false }
    }

    if (type === 'list') {
      if (!(value instanceof Array)) { return false }
    }

    return true
  }

  static generateId () {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < 12; i++) {
      id = id + possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return id
  }

  static isNotNull (value) {
    if (value !== null && value !== '' && value !== undefined) {
      return true
    }

    return false
  }

  static getValidDataTypes () {
    return ['number', 'decimal', 'text', 'date', 'datetime', 'time', 'url', 'rating', 'email', 'string', 'int', 'integer', 'float', 'double', 'bool', 'boolean', 'function', 'list', 'select-multiple', 'select-single', 'object']
  }
}

module.exports = Util
