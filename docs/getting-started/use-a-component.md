# Using Components

*This documentation is intended for Flow [Component](../Component/README.md) developers*

We're going to Add and then Subtract two numbers. We'll use an [AddComponent](../examples/add.js) and a [SubtractComponent](../examples/subtract.js) Components. 

### Before you begin

Create a new NodeJS project. Create a new file called `index.js`. This is the entry point of your code. 

Import the CloudBoost Flow SDK into your project. 

```
var Flow = require('flow-platform-sdk');
```

Now, import both add component and subtract component. 

```
var AddComponent = require('add.js');
var SubtractComponent = require('subtract.js');
```

### Create a graph. 

Graph is like a canvas where you can add, connect and execute components. [Please check here for more information](../Graph/README.md)

```
var graph = new Flow.Graph('Math')
```

### Creating and adding components on the graph.

Now, we create an instance of AddComponent and an instance of SubtractComponent and we add these to the graph. 

```
//Create an add component
var addComponent = new AddComponent()
addComponent.getProperty('Property 1').data = 1
addComponent.getProperty('Property 2').data = 2

//add ADD component to the graph
graph.addComponent(addComponent)


//create a subtract component. 
var subComponent = new SubtractComponent()
subComponent.getProperty('Property 1').linkToProperty(addComponent.getPort('Result').getProperty('Property 3'))
subComponent.getProperty('Property 2').data = 2

//Add subtract component to the graph.
graph.addComponent(subComponent)
```

### Connecting components

You need to connect the result port of add component to a property of subtract component. 

```
addComponent.getPort('Result').connectComponent(subComponent)
```

### Execute the component. 

Execute the add component. 

```
addComponent.execute()
```

You can also check the result by passing a callback to the onEmit function of the SubtractComponent Result port. 

```
subComponent.getPort('Result').onEmit(function () {
      console.log(subComponent.getPort('Result').getProperty('Property 3').data); // Output: 1
})
```

#### Conclusion

And that's it! You've created your first graph. You can see the [complete code here](../examples/math.js). Please also check [this article](.create-a-component.md) on how can you use your own custom components. 
