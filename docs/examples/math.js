import Flow from 'flow-platform-sdk'
import AddComponent from 'add.js'
import SubtractComponent from 'subtract.js'

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
  console.log(subComponent.getPort('Result').getProperty('Property 3').data)
})

addComponent.execute()
