# CloudBoost Flow Docs

### Glossary

- [Component](./classes/Component/README.md): Think of a component as a function. It's a black-box that takes some inputs, processes something and sends out output. For example: We can have component for sending an email, addition of two numbers, getting data from an API, etc. 

- [Variable](./classes/Variable/README.md): Components can take inputs (think function parameters) and these are called variables. There can be 0 or more variables to a component.

- [Port](./classes/Port/README.md): Ports are output points of a component. An example for this would be: 
    - For an email component, ports can be "error", "email sent", "email bounced", etc. 
    - For an add component, port can be "result" which sends out a result of two numbers. 

- [Graph](./classes/Graph/README.md): Think of Graph as a canvas. Graphs are a collection of connected component. Two connected components cannnot be executed unless they're on the same graph. A business logic can be represented by many components on the graph. 

### Docs

- [Building your first component](./getting-started/README.md)
- [Using and running components](./usage/README.md)


### Examples

- [Add Component](./examples/add.js)
- [Sendgrid Send Email Component](./examples/sendgrid-send-email.js)

### Contributing

Please read the guide [here](./contributing)




