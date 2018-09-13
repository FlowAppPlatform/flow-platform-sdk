# Graphs

Graphs is the canvas where [components](../Component/README.md) can be added and connected together. 

### Creating a new graph. 

Graph have a name. Let's create a new graph with the name - Math. 

```
var graph = new Flow.Graph("Math");
```

Params: 
- name is of type string. 

Returns: 
- a new [Graph](../Graph/README.md) object. 

### Add components to a graph

Here's how you would add [components](../Component/README.md) on the graph: 

```
graph.addComponent(component);
```

Params: 
- component is of type [Component](../Component/README.md)

Returns: 
- void

### Remove components from a graph

Here's how you would remove [components](../Component/README.md) from the graph: 

```
graph.removeComponent(component);
```

Params: 
- component is of type [Component](../Component/README.md)

Returns: 
- void

### Name 

To change the name of the graph. 

```
graph.name = "New Name";
```

To get the current name of the graph.

```
var name = graph.name;
```

### ID

Graph have ID. These are read-only. You can get the ID for your graph by:

```
var id = graph.id;

```

### Map a graph

You can create and store a JSON representation of your Graph by
```javascript
graph.init({
    componentOne: 'AddComponent',
    componentTwo: 'SubComponent'
})
```
Params:
* map is a JSON Object.

Returns:
* void

Once you have created your Graph map, get it by
```javascript
graph.toJson()
```

Params:
* none

Returns:
* a graph map

You can also change your map by
```javascript
graph.map = {
            componentOne: 'newComponent',
            componentTwo: 'subComponent'
            }
```

Or get your current map by
```javascript
var map = graph.map
```
