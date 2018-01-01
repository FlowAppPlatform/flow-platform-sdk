# CloudBoost Flow Docs

### Glossary

- [Component](./Component): Think of a component as a function. It's a black-box that takes some inputs, processes something and sends out output. For example: We can have component for sending an email, addition of two numbers, getting data from an API, etc. 

- [Variable](./Variable): Components can take inputs (think function parameters) and these are called variables. There can be 0 or more variables to a component.

- [Port](./Port): Ports are output points of a component. An example for this would be: 
    - For an email component, ports can be "error", "email sent", "email bounced", etc. 
    - For an add component, port can be "result" which sends out a result of two numbers. 


### Examples

- [Add Component](./examples/add.js)

### Contributing

Please read the guide [here](./Contributing).




