# Property

Property are like any other property in JavaScript. For example, if you're creating a component to add two numbers. Then you need two propertys to represent the input and one property to represent the output. 

Property are used in [Components](../Component/README.md) as holders to store data for input, and are also used in [Ports](../Port/README.md) for data outputs. 

### Create a new property

```
var var1 = new Flow.Property('Property 1', 'number')
```

Params: 
- name is of type string
- DataType is of type string, but should be from a list of pre-defined Flow Data Types. For more information on this. Please check the next section.

Returns: 
- a new Property Object

### Data Types

Here is a list of Flow datatypes. 

- *Number*  `number`
- *Text* `text`
- *Decimal* `decimal`
- *Date*  `date`
- *DateTime*  `datetime`
- *Time* `time`
- *URL*  `url`
- *Email* `email`
- *Boolean* `boolean`
- *List*  `list`: This is an array.  
- *Single Select* `select-single`: This is a single select box. For example country select. 
- *Select Multiple*  `select-multiple`: This is a multiple select box.   
- *Rating*  `rating`: Rating from 1 to 5.

#### Setting Data to a Property

Properties finally have data. You can set it by: 

```
property.data = 5;
```

You can set any type of data which matches the property DataType. 

### Adding propertys to components

You can add propertys to [components](../Component/README.md) for input processng. For example, A component that does addition has two input propertys - Property 1 and Property 2. 

```
component.addProperty(property);
```

Params: 
- property is an instance of a Property class. 

Returns: 
- void


### Link property to other propertys

You can link one property to another. For example, If you've linked Property A to Property B. If the value of property A changes, then the Value of property B changes too (and vice-versa). This is very useful when you connect the output property of one component to input property of another component. 

```javascript
propertyA.linkToProperty(propertyB);
```

Params: 
- property is an instance of a Property class. 

Returns: 
- void

When the propertys are linked, If you change the data of property A, it'll also change the data of property B. for example: 

```
propertyA.data = 1;
console.log(propertyB.data); // this is also 1, because two propertys are linked. 
```

For a more complete example, Please refer to [Usage Guide](../usage/README.md)

### Un-Link property from other propertys

You can unlink property from other property.  

```
property.unlinkProperty();
```

### More Options

#### Name 

To change the name of the Property. 

```
property.name = "New Name";
```

To get the current name of the property.

```
var name = property.name;
```

#### Description 

To add or change the description of the Property. 

```
property.description = "New Description";
```

To get the current description of the property.

```
var description = property.description;
```

#### ID

Property have ID. These are read-only. You can get the ID for your property by:

```
var id = property.id;
```

#### Required

This denotes if this property is required or optional

```
property.required = true;
```

#### Data Type

Properties have DataType. You can set it by:

```
property.dataType = "number";
```





