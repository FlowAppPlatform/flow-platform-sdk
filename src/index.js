/**
 * Documentation at /docs/README.md
 */

import Component from './Component'
import Port from './Port'
import Variable from './Variable'
import Graph from './Graph'

var Flow = {
  Component,
  Port,
  Variable,
  Graph,
  isServer () {
    if (typeof window !== 'undefined') {
      return false
    }

    return true
  },
  isClient () {
    return !this.isServer()
  }
}

module.exports = Flow
