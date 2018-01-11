# Graphs

Graphs is the canvas where [components](../Component/README.md) can be added and connected together. 

## Before you begin

Install `cloudboost-flow` module in your project via NPM. 

`npm install cloudboost-flow --save`

Import it into yoru project. 

`import Flow from cloudboost-flow`

## Creating a new graph. 

Graph have a name. Let's create a new graph with the name - Math. 

```
var graph = new Flow.Graph("Math");
```

Params: 
- name is of type string. 
Returns: 
- a new [Graph](../Graph/README.md) object. 

## Add components to a graph

Here's how you would add [components](../Component/README.md) on the graph: 

```
graph.addComponent(component);
```

Params: 
- component is of type [Component](../Component/README.md)
Returns: 
- void

## Remove components from a graph

Here's how you would remove [components](../Component/README.md) from the graph: 

```
graph.removeComponent(component);
```

Params: 
- component is of type [Component](../Component/README.md)
Returns: 
- void

## Name 

To change the name of the graph. 

```
graph.name = "New Name";
```

To get the current name of the graph.

```
var name = graph.name;
```

## ID

Graph have ID. These are read-only. You can get the ID for your graph by:

```
var id = graph.id;
```
