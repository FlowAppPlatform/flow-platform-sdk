var Flow = require('flow-platform-sdk')

/*
We're creating an Add component whcih adds two numbers.
This component has two Properties - `Property 1`, and `Property 2` which denotes two numbers.
This component has one output port - Result. The output port has a property which sends out a result of two numbers and we call it `Property 3`.
*/

// Create a new class which extends Flow.Component.
class AddComponent extends Flow.Component {
  constructor() {
    // call the constructor of Flow.Component class.
    super()

    // construct the component.
    this.name = 'Add'

    // Create a new Property - Variale 1
    var var1 = new Flow.Property('Property 1', 'number')
    var1.required = true

    // Add Property 1 to component.
    this.addProperty(var1)

    // Create a new Property - Variale 2
    var var2 = new Flow.Property('Property 2', 'number')
    var2.required = true

    // Add Property 1 to component.
    this.addProperty(var2)

    // Create a Result Output Port and Property 3.
    var port = new Flow.Port('Result')
    var var3 = new Flow.Property('Property 3', 'number')
    var3.required = true

    // Add Property 3 to port.
    port.addProperty(var3)

    // Add port to component.
    this.addPort(port)

    // Attach task function is a business logic function that adds two functions.
    this.attachTask(function() {
      // Add two numbers and store it in result property.
      this.getPort('Result').getProperty('Property 3').data =
        this.getProperty('Property 1').data +
        this.getProperty('Property 2').data
      // Emit the output from that port.
      this.getPort('Result').emit()
      // Mark task as complete.
      this.taskComplete()
    })
  }
}

// To run this component for testing.
var addComponent = new AddComponent()
addComponent.getProperty('Property 1').data = 1
addComponent.getProperty('Property 2').data = 2
addComponent.getPort('Result').onEmit(function() {
  if (addComponent.getPort('Result').getProperty('Property 3').data === 3) {
    // Success.
  }
})

// do not forget to Execute the component.
addComponent.execute()
