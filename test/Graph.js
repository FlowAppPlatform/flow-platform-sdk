import Flow from '../src/index'
import AddComponent from './components/AddComponent'

describe('Graph Tests', function() {
  it('A new graph should have an ID', function(done) {
    let graph = new Flow.Graph('Name')
    if (graph.id) {
      done()
    } else {
      done('Graph does not have an ID')
    }
  })

  it('Graph should not be created without a name', function(done) {
    try {
      let graph = new Flow.Graph()
      if (graph.id) {
        done('Graph created and has an id')
      } else {
        done('Graph created but does not have an ID')
      }
    } catch (e) {
      done()
    }
  })

  it('Graph should add any object in place of a component', function(done) {
    try {
      let graph = new Flow.Graph()
      graph.addComponent('Component')
      done('Added string in place of a component.')
    } catch (e) {
      done()
    }
  })

  it('Graph should remove any object in place of a component', function(done) {
    try {
      let graph = new Flow.Graph()
      graph.removeComponent('Component')
      done('Removed string in place of a component.')
    } catch (e) {
      done()
    }
  })

  it('Should not add null as a component', function(done) {
    try {
      let graph = new Flow.Graph()
      graph.addComponent()
      done('Added null in place of a component.')
    } catch (e) {
      done()
    }
  })

  it('Should not remove null as a component', function(done) {
    try {
      let graph = new Flow.Graph()
      graph.removeComponent()
      done('Removed null in place of a component.')
    } catch (e) {
      done()
    }
  })

  it('Should not add any object in place of component', function(done) {
    try {
      let graph = new Flow.Graph()
      graph.addComponent({})
      done('Added an object in place of a component.')
    } catch (e) {
      done()
    }
  })

  it('Should not remove object as a component', function(done) {
    try {
      let graph = new Flow.Graph()
      graph.removeComponent({})
      done('Removed an object in place of a component.')
    } catch (e) {
      done()
    }
  })

  it('Should add a component to the graph', function(done) {
    try {
      var graph = new Flow.Graph('Math')

      var addComponent = new AddComponent()
      addComponent.getProperty('Property 1').data = 1
      addComponent.getProperty('Property 2').data = 2

      graph.addComponent(addComponent)

      done()
    } catch (e) {
      done('Error: Component cannot be removed.')
    }
  })

  it('Should remove a component to the graph', function(done) {
    try {
      var graph = new Flow.Graph('Math')

      var addComponent = new AddComponent()
      addComponent.getProperty('Property 1').data = 1
      addComponent.getProperty('Property 2').data = 2

      graph.addComponent(addComponent)
      graph.removeComponent(addComponent)

      done()
    } catch (e) {
      done('Error: Component cannot be removed.')
    }
  })

  it('should not throw an error when you try to remove a component which is not added. ', function(done) {
    try {
      var graph = new Flow.Graph('Math')

      var addComponent = new AddComponent()
      addComponent.getProperty('Property 1').data = 1
      addComponent.getProperty('Property 2').data = 2

      graph.removeComponent(addComponent)

      done()
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should set a name ', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      graph.name = 'New name'

      if (graph.name === 'New name') {
        done()
      } else {
        done('Graph has a wrong name')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should set any other datatype other than string as name ', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      graph.name = 1

      if (graph.name === 1) {
        done('Number set as name')
      } else {
        done('Graph has a wrong name')
      }
    } catch (e) {
      done()
    }
  })

  it('should get an id. ', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      if (graph.id) {
        done()
      } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should not set an id ', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      graph.id = 'New id'
      done('ID is set')
    } catch (e) {
      done()
    }
  })

  it('should create a map', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      graph.map({
        componentOne: 'AddComponent',
        componentTwo: 'SubComponent'
      })
      done('Map was created')
    } catch (e) {
      done()
    }
  })

  it('should create a graph with init()', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      graph.init({
        componentOne: 'AddComponent',
        componentTwo: 'SubComponent'
      })
      done('Map was created')
    } catch (e) {
      done()
    }
  })

  it('should not create a graph', function(done) {
    try {
      var graph = new Flow.Graph('Math')
      graph.map('Not an Object')
      done('Map was created')
    } catch (e) {
      done()
    }
  })

  it('should return component with getComponent()', function(done) {
    try {
      var graph = new Flow.Graph('Math')

      var addComponent = new AddComponent()
      addComponent.getProperty('Property 1').data = 1
      addComponent.getProperty('Property 2').data = 2

      graph.addComponent(addComponent)
      const returnedComponent = graph.getComponent(addComponent.id)

      if (!returnedComponent) {
        done('Component was not returned')
      }

      if (returnedComponent._type !== 'component') {
        done('returned object is not of type component')
      }

      const notFoundComponent = graph.getComponent('notfound')

      if (notFoundComponent !== null) {
        done('a non existing component was returned')
      }

      done()
    } catch (e) {
      done('error is thrown')
    }
  })

  it('should throw when componentId is not a string', function(done) {
    try {
      var graph = new Flow.Graph('Math')

      graph.getComponent({ something: 'here' })
      done('did not throw error')
    } catch (e) {
      done()
    }
  })
})
