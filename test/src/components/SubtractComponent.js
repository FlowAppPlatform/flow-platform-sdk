import Flow from '../../../src/index'

class SubtractComponent extends Flow.Component {
  constructor () {
    super()

    // construct the component.
    this.name = 'Subtract'

    var var1 = new Flow.Property('Property 1', 'number')
    var1.required = true

    this.addProperty(var1)

    var var2 = new Flow.Property('Property 2', 'number')
    var2.required = true

    this.addProperty(var2)

    var port = new Flow.Port('Result')

    var var3 = new Flow.Property('Property 3', 'number')
    var3.required = true

    port.addProperty(var3)

    this.addPort(port)

    this.attachTask(function () {
      this.getPort('Result').getProperty('Property 3').data = this.getProperty('Property 1').data - this.getProperty('Property 2').data
      this.getPort('Result').emit()
      this.taskComplete()
    })
  }
};

module.exports = SubtractComponent
