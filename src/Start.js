import Component from './Component'
import Port from './Port'

class Start extends Component {
  constructor () {
    super()

    this.name = 'Start'

    this.id = 'start'

    var port = new Port('start')

    this.addPort(port)
  }
}

module.exports = Start
