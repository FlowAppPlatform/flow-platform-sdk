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

  it('should set data of type text', function (done) {
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

  it('should set data of type number', function (done) {
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

  it('should set data of type URL', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'url')
      variable.data = 'http://google.com'
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type URL ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'url')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type Email', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'email')
      variable.data = 'sample@smapl.com'
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type Email ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'email')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type Date', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'date')
      variable.data = new Date()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should set string as dates', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'date')
      variable.data = new Date().toString()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type Date ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'date')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type DateTime', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'datetime')
      variable.data = new Date()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type datetime ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'datetime')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type time', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'time')
      variable.data = new Date()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type time ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'time')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type boolean', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'boolean')
      variable.data = true
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type boolean ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'boolean')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type list', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'list')
      variable.data = []
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type list ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'list')
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should not set incorrect data of type select-multiple ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'select-multiple')
      variable.values = ['1', '2', '3']
      variable.data = ['1']
      done()
    } catch (e) {
      done('Incorrect data set')
    }
  })

  it('should not set incorrect data of type select-multiple ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'select-multiple')
      variable.values = ['1', '2', '3']
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set multiple values in select-multiple ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'select-multiple')
      variable.values = ['1', '2', '3']
      variable.data = ['1', '2']
      done()
    } catch (e) {
      done('Incorrect data set')
    }
  })

  it('should not set incorrect data of type select-single ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'select-single')
      variable.values = ['1', '2', '3']
      variable.data = ['1']
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should not set incorrect data of type select-single ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'select-single')
      variable.values = ['1', '2', '3']
      variable.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should not set multiple values in select-single ', function (done) {
    try {
      var variable = new Flow.Variable('Sample', 'select-single')
      variable.values = ['1', '2', '3']
      variable.data = ['1', '2']
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('link variables ', function (done) {
    try {
      var variableA = new Flow.Variable('Sample', 'string')
      var variableB = new Flow.Variable('Sample', 'string')
      variableB.linkToVariable(variableA)
      variableA.data = 'sample'
      if (variableB.data === 'sample') {
        done()
      } else {
        done('Variables cannot be linked. ')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('unlink variables ', function (done) {
    try {
      var variableA = new Flow.Variable('Sample', 'string')
      var variableB = new Flow.Variable('Sample', 'string')
      variableB.linkToVariable(variableA)
      variableA.data = 'sample'
      if (variableB.data === 'sample') {
        variableB.unlinkVariable()
        variableA.data = 'Sample1'
        if (variableB.data === 'sample' && variableA.data === 'Sample1') {
          done()
        } else {
          done('Variables cannot be unlinked.')
        }
      } else {
        done('Variables cannot be linked. ')
      }
    } catch (e) {
      done('Error thrown')
    }
  })
})
