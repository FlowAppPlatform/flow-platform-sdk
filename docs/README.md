# CloudBoost Flow Docs

### Glossary

- [Component](./classes/Component): Think of a component as a function. It's a black-box that takes some inputs, processes something and sends out output. For example: We can have component for sending an email, addition of two numbers, getting data from an API, etc. 

- [Variable](./classes//Variable): Components can take inputs (think function parameters) and these are called variables. There can be 0 or more variables to a component.

- [Port](./classes//Port): Ports are output points of a component. An example for this would be: 
    - For an email component, ports can be "error", "email sent", "email bounced", etc. 
    - For an add component, port can be "result" which sends out a result of two numbers. 

### Docs

- [Building your first component](./getting-started/README.js)


### Examples

- [Add Component](./examples/add.js)
- [Sendgrid Send Email Component](./examples/sendgrid-send-email.js)

### Contributing

Please read the guide [here](./contributing).




