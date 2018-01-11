import Flow from '../../src/index'
import AddComponent from './components/AddComponent'
import SubtractComponent from './components/SubtractComponent'

describe('Component Tests', function () {
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
})
