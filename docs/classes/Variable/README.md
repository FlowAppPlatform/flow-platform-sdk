# Variables

Variable are like any other variable in JavaScript. For example, if you're creating a component to add two numbers. Then you need two variables to represent the input and one variable to represent the output. 

Variable are used in [Components](../Component/README.md) as holders to store data for input, and are also used in [Ports](../Port/README.md) for data outputs. 

### Create a new variable

```
var var1 = new Flow.Variable('Variable 1', 'number')
```

Params: 
- name is of type string
- DataType is of type string, but should be from a list of pre-defined Flow Data Types. For more information on this. Please check the next section.

Returns: 
- a new Variable Object

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

#### Setting Data to a Variable

Variables finally have data. You can set it by: 

```
variable.data = 5;
```

You can set any type of data which matches the variable DataType. 

### Adding variables to components

You can add variables to [components](../Component/README.md) for input processng. For example, A component that does addition has two input variables - Variable 1 and Variable 2. 

```
component.addVariable(variable);
```

Params: 
- variable is an instance of a Variable class. 

Returns: 
- void

### Adding variables to ports

You can add variables to [ports](../Port/README.md) for output processng. For example, A component that does addition has one output variables on its result port - Variable 3. Here `port` is an instance of [Port](../Port/README.md) class. 

```
port.addVariable(variable);
```

Params: 
- variable is an instance of a Variable class. 

Returns: 
- void

### Link variable to other variables

You can link one variable to another. For example, If you've linked Variable A to Variable B. If the value of variable A changes, then the Value of variable B changes too (and vice-versa). This is very useful when you connect the output variable of one component to input vairable of another component. 

```
variableA.linkToVariable(varbaleB);
```

Params: 
- variable is an instance of a Variable class. 

Returns: 
- void

When the variables are linked, If you change the data of variable A, it'll also change the data of variable B. for example: 

```
variableA.data = 1;
console.log(variableB.data); // this is also 1, because two variables are linked. 
```

For a more complete example, Please refer to [Usage Guide](../usage/README.md)

### More Options

#### Name 

To change the name of the Variable. 

```
variable.name = "New Name";
```

To get the current name of the variable.

```
var name = variable.name;
```

#### Description 

To add or change the description of the Variable. 

```
variable.description = "New Description";
```

To get the current description of the variable.

```
var name = variable.description;
```

#### ID

Variable have ID. These are read-only. You can get the ID for your variable by:

```
var id = variable.id;
```

#### Required

This denotes if this variable is required or optional

```
variable.required = true;
```

#### Data Type

Variables have DataType. You can set it by:

```
variable.datatype = "number";
```





