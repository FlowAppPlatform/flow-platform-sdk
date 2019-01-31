/**
 * Documentation at /docs/README.md
 */

import Component from './Component'
import Port from './Port'
import Property from './Property'
import Graph from './Graph'

var Flow = {
  Component,
  Port,
  Property,
  Graph,
  isServer() {
    if (typeof window !== 'undefined') {
      return false
    }

    return true
  },
  isClient() {
    return !this.isServer()
  }
}

export default Flow
