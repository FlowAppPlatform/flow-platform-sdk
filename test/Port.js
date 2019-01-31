import Flow from '../src/index'
import AddComponent from './components/AddComponent'
import SubtractComponent from './components/SubtractComponent'

describe('Port Tests', function() {
  it('A new port should have an ID', function(done) {
    let port = new Flow.Port('Name')
    if (port.id) {
      done()
    } else {
      done('port does not have an ID')
    }
  })

  it('port should not be created without a name', function(done) {
    try {
      let port = new Flow.Port()
      if (port.id) {
        done('port created and has an id')
      } else {
        done('port created but does not have an ID')
      }
    } catch (e) {
      done()
    }
  })

  it('should set a name ', function(done) {
    try {
      var port = new Flow.Port('Sample')
      port.name = 'New name'

      if (port.name === 'New name') {
        done()
      } else {
        done('port has a wrong name')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id. ', function(done) {
    try {
      var port = new Flow.Port('Sample')
      if (port.id) {
        done()
      } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set a description ', function(done) {
    try {
      var port = new Flow.Port('Sample')
      port.description = 'New description'

      if (port.description === 'New description') {
        done()
      } else {
        done('port has a wrong description')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id.', function(done) {
    try {
      var port = new Flow.Port('Sample')
      if (port.id) {
        done()
      } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Add property to port', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      port.addProperty(var3)
      done()
    } catch (e) {
      done('Error thrown' + JSON.stringify(e))
    }
  })

  it('Remove property to port', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      port.addProperty(var3)
      port.removeProperty(var3)
      done()
    } catch (e) {
      done('Error thrown' + JSON.stringify(e))
    }
  })

  it('Should not add any other object as property', function(done) {
    try {
      var port = new Flow.Port('Result')

      port.addProperty('a')
      done('Error added an object that was not a property')
    } catch (e) {
      done()
    }
  })

  it('Should not add same property twice.', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      port.addProperty(var3)
      port.addProperty(var3)
      done('Error added same property twice')
    } catch (e) {
      done()
    }
  })

  it('Shoud not remove same property twice', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      port.addProperty(var3)
      port.removeProperty(var3)
      port.removeProperty(var3)
      done('Removed same property twice')
    } catch (e) {
      done()
    }
  })

  it('Shoud return true if it has a property', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      port.addProperty(var3)
      if (port.hasProperty(var3)) {
        done()
      } else {
        done('Incorrect return type in hasProperty')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Shoud return true if it has a property', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      if (!port.hasProperty(var3)) {
        done()
      } else {
        done('Incorrect return type in hasProperty')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Shoud return true if it has a property', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true

      port.hasProperty(1)
      done('Has Property executed with wrong param.')
    } catch (e) {
      done()
    }
  })

  it('Should return a property in GetProperty', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true
      port.addProperty(var3)
      if (port.getProperty('Property 3').id === var3.id) {
        done()
      } else {
        done('Incorrect return type in getProperty')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Should return a property in GetProperty', function(done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Property('Property 3', 'number')
      var3.required = true
      port.addProperty(var3)
      if (port.getProperty('Property 3')._type === 'property') {
        done()
      } else {
        done('Incorrect return type in getProperty')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Connect two components and execute.', function(done) {
    var graph = new Flow.Graph('Math')

    var addComponent = new AddComponent()
    addComponent.getProperty('Property 1').data = 1
    addComponent.getProperty('Property 2').data = 2

    graph.addComponent(addComponent)

    var subComponent = new SubtractComponent()
    subComponent
      .getProperty('Property 1')
      .linkToProperty(addComponent.getPort('Result').getProperty('Property 3'))
    subComponent.getProperty('Property 2').data = 2

    graph.addComponent(subComponent)

    addComponent.getPort('Result').connectComponent(subComponent)

    subComponent.getPort('Result').onEmit(function() {
      if (subComponent.getPort('Result').getProperty('Property 3').data === 1) {
        done()
      } else {
        done('Result failed.')
      }
    })

    addComponent.execute()
  })

  it('Connect two components and disconnect.', function(done) {
    var graph = new Flow.Graph('Math')

    var addComponent = new AddComponent()
    addComponent.getProperty('Property 1').data = 1
    addComponent.getProperty('Property 2').data = 2

    graph.addComponent(addComponent)

    var subComponent = new SubtractComponent()
    subComponent
      .getProperty('Property 1')
      .linkToProperty(addComponent.getPort('Result').getProperty('Property 3'))
    subComponent.getProperty('Property 2').data = 2

    graph.addComponent(subComponent)

    addComponent.getPort('Result').connectComponent(subComponent)
    addComponent.getPort('Result').disconnectComponent(subComponent)

    subComponent.getPort('Result').onEmit(function() {
      done('Subtract component which was disconnected executed.')
    })

    addComponent.getPort('Result').onEmit(function() {
      setTimeout(function() {
        done()
      }, 20)
    })

    addComponent.execute()
  })

  it('Connect not connect components twice. ', function(done) {
    var graph = new Flow.Graph('Math')

    var addComponent = new AddComponent()
    addComponent.getProperty('Property 1').data = 1
    addComponent.getProperty('Property 2').data = 2

    graph.addComponent(addComponent)

    var subComponent = new SubtractComponent()
    subComponent
      .getProperty('Property 1')
      .linkToProperty(addComponent.getPort('Result').getProperty('Property 3'))
    subComponent.getProperty('Property 2').data = 2

    graph.addComponent(subComponent)

    addComponent.getPort('Result').connectComponent(subComponent)

    try {
      addComponent.getPort('Result').connectComponent(subComponent)
      done('Conencted component twice.')
    } catch (e) {
      done()
    }
  })

  it('Connect not disconnect components twice. ', function(done) {
    var graph = new Flow.Graph('Math')

    var addComponent = new AddComponent()
    addComponent.getProperty('Property 1').data = 1
    addComponent.getProperty('Property 2').data = 2

    graph.addComponent(addComponent)

    var subComponent = new SubtractComponent()
    subComponent
      .getProperty('Property 1')
      .linkToProperty(addComponent.getPort('Result').getProperty('Property 3'))
    subComponent.getProperty('Property 2').data = 2

    graph.addComponent(subComponent)

    addComponent.getPort('Result').connectComponent(subComponent)
    addComponent.getPort('Result').disconnectComponent(subComponent)
    try {
      addComponent.getPort('Result').disconnectComponent(subComponent)
      done('Disconencted component twice.')
    } catch (e) {
      done()
    }
  })

  it('Emit should not execute, if not attached to a component', function(done) {
    try {
      var port = new Flow.Port('Result')
      port.emit()
      done('Emit executed without a component.')
    } catch (e) {
      done()
    }
  })

  it('On Emit should execute.', function(done) {
    var addComponent = new AddComponent()
    addComponent.getProperty('Property 1').data = 1
    addComponent.getProperty('Property 2').data = 2
    addComponent.getPort('Result').onEmit(function() {
      addComponent.getProperty('Property 1')
      if (addComponent.getPort('Result').getProperty('Property 3').data === 3) {
        done()
      } else {
        done('Failed')
      }
    })
    addComponent.execute()
  })

  it('Emit should execute other components', function(done) {
    var graph = new Flow.Graph('Math')

    var addComponent = new AddComponent()
    addComponent.getProperty('Property 1').data = 1
    addComponent.getProperty('Property 2').data = 2

    graph.addComponent(addComponent)

    var subComponent = new SubtractComponent()
    subComponent
      .getProperty('Property 1')
      .linkToProperty(addComponent.getPort('Result').getProperty('Property 3'))
    subComponent.getProperty('Property 2').data = 2

    graph.addComponent(subComponent)

    addComponent.getPort('Result').connectComponent(subComponent)

    subComponent.getPort('Result').onEmit(function() {
      if (subComponent.getPort('Result').getProperty('Property 3').data === 1) {
        done()
      } else {
        done('Result failed.')
      }
    })

    addComponent.execute()
  })
})
