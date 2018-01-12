import Flow from 'cloudboost-flow'
import AddComponent from 'add.js'
import SubtractComponent from 'subtract.js'

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
    console.log(subComponent.getPort('Result').getVariable('Variable 3').data);
})

addComponent.execute()