import Flow from '../../src/index'

describe('Variable Tests', function () {
  it('A new variable should have an ID', function (done) {
    let variable = new Flow.Variable('Name', 'datatype')
    if (variable.id) { done() } else { done('variable does not have an ID') }
  })

  it('variable should not be created without a name', function (done) {
    try {
      let variable = new Flow.Variable()
      if (variable.id) { done('variable created and has an id') } else { done('variable created but does not have an ID') }
    } catch (e) {
      done()
    }
  })

  it('variable should not be created without a datatype', function (done) {
    try {
      let variable = new Flow.Variable('name', null)
      if (variable.id) { done('variable created and has an id') } else { done('variable created but does not have an ID') }
    } catch (e) {
      done()
    }
  })

  it('should set a name ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'string')
      variable.name = 'New name'

      if (variable.name === 'New name') {
        done()
      } else {
        done('variable has a wrong name')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id. ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'string')
      if (variable.id) { done() } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set a description ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'string')
      variable.description = 'New description'

      if (variable.description === 'New description') {
        done()
      } else {
        done('variable has a wrong description')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should set required ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'string')
      variable.required = true

      if (variable.required) {
        done()
      } else {
        done('variable has a wrong required field.')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id. ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'string')
      if (variable.id) { done() } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set values - select single', function (done) {
    try {
      var variable = new Flow.Variable('Country', 'select-single')
      variable.values = ['India', 'USA']
      done()
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set values - select multiple ', function (done) {
    try {
      var variable = new Flow.Variable('Country', 'select-multiple')
      variable.values = ['India', 'USA']
      done()
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should not set values when datatype is somethign else from select-single or select multiple', function (done) {
    try {
      var variable = new Flow.Variable('Country', 'string')
      variable.values = ['India', 'USA']
      done('Values set.')
    } catch (e) {
      done()
    }
  })

  it('should not set an id ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'string')
      variable.id = 'New id'
      done('ID is set')
    } catch (e) {
      done()
    }
  })

  it('should not set data of type text', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'text')
      variable.data = 'New data'
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type text ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'text')
      variable.data = 1
      done('Incorrect data of type text')
    } catch (e) {
      done()
    }
  })

  it('should not set data of type number', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'number')
      variable.data = 1
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type number ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'number')
      variable.data = 'Sample'
      done('Incorrect data of type number')
    } catch (e) {
      done()
    }
  })
})
