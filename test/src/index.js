import Flow from '../../src/index'
import Graph from './Graph'
import Variable from './Variable'
import Component from './Component'
import Port from './Port'

var Tests = {
  Component,
  Port,
  Variable,
  Graph
}

describe('should isServer & isClient works', function () {
  it('isServer returns true for node env', function (done) {
    global.window = undefined;
    const runningOnServer = Flow.isServer()
    if (runningOnServer) {
      done()
    } else {
      done('isServer not working correctly')
    }
  })

  it('isServer returns false for browser env', function (done) {
    global.window = {};
    const runningOnServer = Flow.isServer()
    if (!runningOnServer) {
      done()
    } else {
      done('isServer not working correctly')
    }
  })

  it('isClient returns false for node env', function (done) {
    global.window = undefined;
    const runningOnServer = Flow.isClient()
    if (!runningOnServer) {
      done()
    } else {
      done('isClient not working correctly')
    }
  })

  it('isClient returns true for browser env', function (done) {
    global.window = {};
    const runningOnServer = Flow.isClient()
    if (runningOnServer) {
      done()
    } else {
      done('isClient not working correctly')
    }
  })
})
