import Flow from '../../../src/index'

class SubtractComponent extends Flow.Component {
  constructor () {
    super()

    // construct the component.
    this.name = 'Subtract'

    var var1 = new Flow.Variable('Variable 1', 'number')
    var1.required = true

    this.addVariable(var1)

    var var2 = new Flow.Variable('Variable 2', 'number')
    var2.required = true

    this.addVariable(var2)

    var port = new Flow.Port('Result')

    var var3 = new Flow.Variable('Variable 3', 'number')
    var3.required = true

    port.addVariable(var3)

    this.addPort(port)

    this.attachTask(function () {
      this.getPort('Result').getVariable('Variable 3').data = this.getVariable('Variable 1').data - this.getVariable('Variable 2').data
      this.getPort('Result').emit()
      this.taskComplete()
    })
  }
};

module.exports = SubtractComponent
