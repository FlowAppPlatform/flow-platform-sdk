# Designing a component

*This documentation is intended for Flow [Component](../Component/README.md) developers*

We're going to create a sample Add Component which adds two numbers. This component has two propertys for inputs, and one port for output which sends out the result. 

### Before you begin

Create a new NodeJS project. Create a new file called `index.js`. This is the entry point of your code. 

Import the CloudBoost Flow SDK into your project. 

```
var Flow = require('flow-platform-sdk');
```

You can also inmport other NPM modules that you need to build your component. 

### Create a new class

Create a new class. This class should extend `Flow.Component`

```javascript

class AddComponent extends Flow.Component{

} 

```

#### Constructor

Constructor is the most important piece of your component design. It helps construct your component. 

```javascript
class AddComponent extends Flow.Component{
    constructor(){
        //DO NOT forget to call the constructor of Flow.Component class. 
        super(); 
    }
}

```

#### Set a name

Every component has a name. Set your's here. 

```javascript
//In the constructor, after calling super()
this.name = "Add";
```

#### Add propertys

Since we're creating an Add component. This will have two propertys - Property 1 and Property 2. 

```javascript
//In the constructor, after calling super()

//Create a new Property - Variale 1
var var1 = new Flow.Property("Property 1","number");
var1.required = true;

//Add Property 1 to component.
this.addProperty(var1);

//Create a new Property - Variale 2
var var2 = new Flow.Property("Property 2", "number");
var2.required = true;

//Add Property 1 to component.
this.addProperty(var2);
```

[More information on propertys.](../Property/README.md)


#### Add port

Since we're creating an Add component. This will have one output port - Result, and the result of the addition will be stored in - Property 3. 

```javascript
//In the constructor, after calling super()

//Create a Result Output Port and Property 3.
var port = new Flow.Port("Result");
var var3 = new Flow.Property("Property 3", "number");
var3.required = true;

//Add Property 3 to port. 
port.addProperty(var3);

//Add port to component.
this.addPort(port);
```

[More information on ports.](../Port/README.md)

#### Task

Every component has a task. This is the business logic of the component. In our case, our task is to add two numbers. You need to pass your business logic as a callback to attachTask function of the component. 

**Important:**
- Do not forget to `emit` the output after you're done with the output. 
- Do not forget to mark the task as complete. 

```javascript
//In the constructor, after calling super()

//Attach task function is a business logic function that adds two functions. 
this.attachTask(function(){

    //Add two numbers and store it in result property. 
    this.getPort("Result").getProperty("Property 3").data = this.getProperty("Property 1").data + this.getProperty("Property 2").data;

    //Emit the output from that port. 
    this.getPort("Result").emit();

    //Mark task as complete.
    this.taskComplete();
});
```

#### Conclusion

And that's it! You've created your first component. You can see the [complete code of the component here](../examples/add.js). Please also check [this article](../examples/use-a-component.md) on how can you use your new component. 

You can publish this component to NPM for others to use. 



 
