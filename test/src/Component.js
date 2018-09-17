import Flow from '../../src/index'
import AddComponent from './components/AddComponent'
import SubtractComponent from './components/SubtractComponent'

describe('Component Tests', function () {
  it('A new component should have an ID', function (done) {
    let component = new Flow.Component()
    if (component.id) { done() } else { done('component does not have an ID') }
  })

  it('should set a name ', function (done) {
    try {
      var component = new Flow.Component()
      component.name = 'New name'

      if (component.name === 'New name') {
        done()
      } else {
        done('component has a wrong name')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id. ', function (done) {
    try {
      var component = new Flow.Component()
      if (component.id) { done() } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set a description ', function (done) {
    try {
      var component = new Flow.Component()
      component.description = 'New description'

      if (component.description === 'New description') {
        done()
      } else {
        done('component has a wrong description')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should set a name ', function (done) {
    try {
      var component = new Flow.Component()
      component.name = 'Sample'

      if (component.name === 'Sample') {
        done()
      } else {
        done('component has a wrong name')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should set a iconUrl ', function (done) {
    try {
      var component = new Flow.Component()
      component.iconUrl = 'Sample'

      if (component.iconUrl === 'Sample') {
        done('Error - Wrong URL set. ')
      } else {
        done('component has a wrong iconUrl')
      }
    } catch (e) {
      done()
    }
  })

  it('should set a iconUrl ', function (done) {
    try {
      var component = new Flow.Component()
      component.iconUrl = 'https://google.com'

      if (component.iconUrl === 'https://google.com') {
        done()
      } else {
        done('component has a wrong iconUrl')
      }
    } catch (e) {
      done('URL cannot be set')
    }
  })

  it('should set a task ', function (done) {
    try {
      var component = new Flow.Component()
      component.task = 'Sample'

      if (component.task === 'Sample') {
        done('Error - Wrong URL set. ')
      } else {
        done('component has a wrong task')
      }
    } catch (e) {
      done()
    }
  })

  it('should set a task ', function (done) {
    try {
      var component = new Flow.Component()
      component.task = function () {

      }

      if (component.task) {
        done()
      } else {
        done('component has a wrong task')
      }
    } catch (e) {
      done('Task cannot be set')
    }
  })

  it('should get an id.', function (done) {
    try {
      var component = new Flow.Component()
      if (component.id) { done() } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Add variable to component', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true

      component.addVariable(var3)
      done()
    } catch (e) {
      done('Error thrown' + JSON.stringify(e))
    }
  })

  it('Remove variable from the  component', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true

      component.addVariable(var3)
      component.removeVariable(var3)
      done()
    } catch (e) {
      done('Error thrown' + JSON.stringify(e))
    }
  })

  it('Should not add any other object as variable', function (done) {
    try {
      var component = new Flow.Component()

      component.addVariable('a')
      done('Error added an object that was not a variable')
    } catch (e) {
      done()
    }
  })

  it('Should not add same variable twice.', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true

      component.addVariable(var3)
      component.addVariable(var3)
      done('Error added same variable twice')
    } catch (e) {
      done()
    }
  })

  it('Shoud not remove same variable twice', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Component('Variable 3', 'number')
      var3.required = true

      component.addVariable(var3)
      component.removeVariable(var3)
      component.removeVariable(var3)
      done('Removed same variable twice')
    } catch (e) {
      done()
    }
  })

  it('Shoud return true if it has a variable', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true

      component.addVariable(var3)
      if (component.hasVariable(var3)) {
        done()
      } else {
        done('Incorrect return type in hasVariable')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Shoud return true if it has a variable', function (done) {
    try {
      var port = new Flow.Port('Result')

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true

      if (!port.hasVariable(var3)) {
        done()
      } else {
        done('Incorrect return type in hasVariable')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Shoud not process with a wrong param in hasVariable', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true

      component.hasVariable(1)
      done('Has Variable executed with wrong param.')
    } catch (e) {
      done()
    }
  })

  it('Should return a variable in GetVariable', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true
      component.addVariable(var3)
      if (component.getVariable('Variable 3').id === var3.id) {
        done()
      } else {
        done('Incorrect return type in getVariable')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Should return a variable in GetVariable', function (done) {
    try {
      var component = new Flow.Component()

      var var3 = new Flow.Variable('Variable 3', 'number')
      var3.required = true
      component.addVariable(var3)
      if (component.getVariable('Variable 3')._type === 'variable') {
        done()
      } else {
        done('Incorrect return type in getVariable')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Add port to component', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')

      component.addPort(port)
      done()
    } catch (e) {
      done('Error thrown' + JSON.stringify(e))
    }
  })

  it('Remove port from the  component', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')

      component.addPort(port)
      component.removePort(port)
      done()
    } catch (e) {
      done('Error thrown' + JSON.stringify(e))
    }
  })

  it('Should not add any other object as port', function (done) {
    try {
      var component = new Flow.Component()
      component.addPort('a')
      done('Error added an object that was not a port')
    } catch (e) {
      done()
    }
  })

  it('Should not add same port twice.', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')

      component.addPort(port)
      component.addPort(port)
      done('Error added same port twice')
    } catch (e) {
      done()
    }
  })

  it('Shoud not remove same port twice', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')

      component.addPort(port)
      component.removePort(port)
      component.removePort(port)
      done('Removed same port twice')
    } catch (e) {
      done()
    }
  })

  it('Shoud return true if it has a port', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')

      component.addPort(port)
      if (component.hasPort(port)) {
        done()
      } else {
        done('Incorrect return type in hasPort')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Shoud return false if it does not have a port', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')

      if (!component.hasPort(port)) {
        done()
      } else {
        done('Incorrect return type in hasPort')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Shoud not process with a wrong param in hasPort', function (done) {
    try {
      var component = new Flow.Component()
      component.hasPort(1)
      done('Has port executed with wrong param.')
    } catch (e) {
      done()
    }
  })

  it('Should return a port in GetPort', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')
      component.addPort(port)
      if (component.getPort('Result').id === port.id) {
        done()
      } else {
        done('Incorrect return type in getVariable')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Should return a port in GetPort', function (done) {
    try {
      var component = new Flow.Component()

      var port = new Flow.Port('Result')
      component.addPort(port)
      if (component.getPort('Result')._type === 'port') {
        done()
      } else {
        done('Incorrect return type in getPort')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('Attach and run a task.', function (done) {
    let component = new Flow.Component()
    // attach a task.

    component.attachTask(function () {
      // do nothing.
    })

    component.execute()

    done()
  })

  it('Do not run a task if its not attached. ', function (done) {
    let component = new Flow.Component()

    // Task is commented and not attached.
    // component.attachTask = function(){
    //       console.log("This is a task.");
    // };
    // This should throw an error.

    try {
      component.execute()
      done(new Error('Component Executed without a task.'))
    } catch (e) {
      done()
    }
  })

  it('Create a simple add component', function (done) {
    var addComponent = new AddComponent()
    addComponent.getVariable('Variable 1').data = 1
    addComponent.getVariable('Variable 2').data = 2
    addComponent.getPort('Result').onEmit(function () {
      addComponent.getVariable('Variable 1')
      if (addComponent.getPort('Result').getVariable('Variable 3').data === 3) {
        done()
      } else {
        done('Failed')
      }
    })
    addComponent.execute()
  })

  it('Should not execute a connected component if it does not belong to a graph.', function (done) {
    var addComponent = new AddComponent()
    addComponent.getVariable('Variable 1').data = 1
    addComponent.getVariable('Variable 2').data = 2

    var subComponent = new SubtractComponent()
    subComponent.getVariable('Variable 1').linkToVariable(addComponent.getPort('Result').getVariable('Variable 3'))
    subComponent.getVariable('Variable 2').data = 2

    addComponent.getPort('Result').connectComponent(subComponent)

    subComponent.getPort('Result').onEmit(function () {
      if (subComponent.getPort('Result').getVariable('Variable 3').data === 1) {

      } else {

      }
    })
    try {
      addComponent.execute()
      done('Component executed without a graph.')
    } catch (e) {
      done()
    }
  })

  it('Connect two components and execute.', function (done) {
    var graph = new Flow.Graph('Math')

    var addComponent = new AddComponent()
    addComponent.getVariable('Variable 1').data = 1
    addComponent.getVariable('Variable 2').data = 2

    graph.addComponent(addComponent)

    var subComponent = new SubtractComponent()
    subComponent.getVariable('Variable 1').linkToVariable(addComponent.getPort('Result').getVariable('Variable 3'))
    subComponent.getVariable('Variable 2').data = 2

    graph.addComponent(subComponent)

    addComponent.getPort('Result').connectComponent(subComponent)

    subComponent.getPort('Result').onEmit(function () {
      if (subComponent.getPort('Result').getVariable('Variable 3').data === 1) {
        done()
      } else {
        done('Result failed.')
      }
    })

    addComponent.execute()
  })

  it('should set the _executionPlatform with valid string', function (done) {
    try {
      let component = new Flow.Component()

      component.setExecutionPlatform('server')
      done()
    } catch (e) {

    }
  })

  it('should not set the _executionPlatform with an invalid string', function (done) {
    try {
      let component = new Flow.Component()

      component.setExecutionPlatform('invalid string')
    } catch (e) {
      done()
    }
  })

  it('should set _executionPlatform with a valid array', function (done) {
    try {
      let component = new Flow.Component()

      component.setExecutionPlatform(['server', 'client'])
      done()
    } catch (e) {

    }
  })

  it('should not set _executionPlatform with an invalid array', function (done) {
    try {
      let component = new Flow.Component()

      component.setExecutionPlatform(['serv', 'client'])
    } catch (e) {
      done()
    }
  })
})
