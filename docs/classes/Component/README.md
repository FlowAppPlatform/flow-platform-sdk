# Components

Components are units that do computation. Think of [component](../Component/README.md) as a function that takes in some params and returns an output. A component can have one or many [ports](../Port/README.md). *A component will never have no ports.* A port can then connect to other one or more components.

### Create a new component

[Please check this document to see how you can create your own component.](../getting-started/)

Once you have created a component. You can see the [complete code of the component](../examples/add.js) you've just created. Please also check [this article](../examples/use-a-component.md) on how can you use your new component. 

## Variables and Ports

### Adding variables to components

You can add variables to [component](../Component/README.md) for input processng. For example, A component that does addition has two input variables - Variable 1 and Variable 2. Here `variable` is an instance of [Variable](../Variable/README.md) class. 

```
component.addVariable(variable);
```

Params: 
- variable is an instance of a [Variable](../Variable/README.md) class. 

Returns: 
- void


### Remove variables from ports

You can remove variables from [component](../Component/README.md). Here `variable` is an instance of [Variable](../Variable/README.md) class. 

```
component.removeVariable(variable);
```

Params: 
- variable is an instance of a [Variable](../Variable/README.md) class. 

Returns: 
- void

### Check if the component has the variable

You can check if the component has a variable. Here `variable` is an instance of [Variable](../Variable/README.md) class. 

```
component.hasVariable(variable);
```

Params: 
- variable is an instance of a [Variable](../Variable/README.md) class. 

Returns: 
- boolean

### Get Variable

Get a variable in the component by it's name. 

```
component.getVariable(variableName);
```

Params: 
- variableName is the name of the variable and is of type `string` 

Returns: 
- variable object which is of type [Variable](../Variable/README.md)

## Ports and Components

### Adding port to components

You can add port to [component](../Component/README.md) for output processing. For example, A component that does addition has one output port - Result. Here `port` is an instance of [Port](../port/README.md) class. 

```
component.addPort(port);
```

Params: 
- port is an instance of a [Port](../Port/README.md) class. 

Returns: 
- void


### Remove ports from ports

You can remove ports from [component](../Component/README.md). Here `port` is an instance of [Port](../Port/README.md) class. 

```
component.removePort(port);
```

Params: 
- port is an instance of a [Port](../Port/README.md) class. 

Returns: 
- void

### Check if the component has the port

You can check if the component has a port. Here `port` is an instance of [Port](../Port/README.md) class. 

```
component.hasPort(port);
```

Params: 
- port is an instance of a [Port](../Port/README.md) class. 

Returns: 
- boolean

### Get Port

Get a port in the component by it's name. 

```
component.getPort(portName);
```

Params: 
- portName is the name of the port and is of type `string` 

Returns: 
- port object which is of type [Port](../Port/README.md)

### Get all Port

Get all the ports in a component

```
component.getPorts();
```


Returns: 
- Array - list of objects of type [Port](../Port/README.md)

## Component Execution

### Attach Task

You can attach a function to a component as `task` which will be executed when the component is executed. 

```
component.attachTask(function(){
    console.log("This is a simple task.");
});
```

Params: Callback

Returns: 
- void

### Execute

This fuction executes a task that was attached with `attachTask()`. Once the execution is complete. All the compoents attached to this component will execute (This depends on which port is being emitted, and the components attached to that port.)

```
component.execute();
```

Params: 
- None.

Returns: 
- void

### Task Complete

This fuction marks task as complete.  You need to call `taskComplete()` once all the computing in the component is finished. This function is usually used by component designer and not by someone who just uses the component. 

```
component.taskComplete();
```

Params: 
- None.

Returns: 
- void

### More Options

#### Name 

To change the name of the Port. 

```
port.name = "New Name";
```

To get the current name of the port.

```
var name = port.name;
```

#### Description 

To add or change the description of the port. 

```
port.description = "New Description";
```

To get the current description of the port.

```
var description = port.description;
```


#### Icon URL 

Every component can have an icon. This sets URL of Icon of the component. The icon should be in SVG.

```
component.iconUrl = "https://icon.com/icon_in_svg.svg";
```

We recommend using [Flaticon](https://www.flaticon.com) to find SVG icons for your components. It's free and easy to use. 

To get the Icon URL of the component.

```
var url = component.iconUrl;
```

#### ID

Port have ID. These are read-only. You can get the ID for your port by:

```
var id = port.id;
```


#### Is On Graph

To check if the component is on the graph. 

```
var isOnGraph = component.isOnGraph();
```

Params:
- None. 

Returns:
- Boolean


