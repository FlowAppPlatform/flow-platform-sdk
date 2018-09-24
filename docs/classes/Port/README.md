# Ports

Ports are output points of a [component](../Component/README.md). A component can have one or many ports. *A component will never have no ports.* A port can than connect to other one or more components.

### Create a new port

```
var port = new Flow.Port('PortName')
```

Params: 
- name is of type string

Returns: 
- a new Port Object

## Properties and Ports

### Adding propertys to ports

You can add propertys to [ports](../Port/README.md) for output processing. For example, A component that does addition has one output property on its result port - Result. Here `property` is an instance of [Property](../Property/README.md) class. 

```
port.addProperty(property);
```

Params: 
- property is an instance of a [Property](../Property/README.md) class. 

Returns: 
- void


### Remove propertys from ports

You can remove propertys from [ports](../Port/README.md). Here `property` is an instance of [Property](../Property/README.md) class. 

```
port.removeProperty(property);
```

Params: 
- property is an instance of a [Property](../Property/README.md) class. 

Returns: 
- void

### Check if the port has the property

You can check if the port has a property. Here `property` is an instance of [Property](../Property/README.md) class. 

```
port.hasProperty(property);
```

Params: 
- property is an instance of a [Property](../Property/README.md) class. 

Returns: 
- boolean

### Get Property

Get a property in the port by it's name. 

```
port.getProperty(propertyName);
```

Params: 
- propertyName is the name of the property and is of type `string` 

Returns: 
- property object which is of type [Property](../Property/README.md)

## Ports and Components

### Connect Components

You can connect other components to this port. Here `component` is an instance of [Component](../Component/README.md) class. 

```
port.connectComponent(component);
```

Params: 
- component is an instance of a [Component](../Component/README.md) class. 

Returns: 
- void


### Disconnect Components

You can disconnect components from the port. Here `component` is an instance of [Component](../Component/README.md) class. 

```
port.disconnectComponent(component);
```

Params: 
- component is an instance of a [Component](../Component/README.md) class. 

Returns: 
- void


## Port Execution

### Emit

When the component finishes a task. It *may* call the `emit` on the port. For example, A component responsible for sending an email will call emit on the *Sent* Port. If the email fails to deliver it may call emit on *Failed* port of the email sending component. When emit on the port is called, all the components this port is connected to starts executing. 

```
port.emit();
```

Params: None

Returns: 
- void

### On Emit

An event to know when the emit is being called.

```
port.onEmit(function(){
    console.log("Port Emitted")
});
```

Params: 
- callback: This function executes when the port emits.

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

#### ID

Port have ID. These are read-only. You can get the ID for your port by:

```
var id = port.id;
```



