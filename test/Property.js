import Flow from '../src'

describe('Property Tests', function () {
  it('A new property should have an ID', function (done) {
    let property = new Flow.Property('Name', 'datatype')
    if (property.id) { done() } else { done('property does not have an ID') }
  })

  it('property should not be created without a name', function (done) {
    try {
      let property = new Flow.Property()
      if (property.id) { done('property created and has an id') } else { done('property created but does not have an ID') }
    } catch (e) {
      done()
    }
  })

  it('property should not be created without a datatype', function (done) {
    try {
      let property = new Flow.Property('name', null)
      if (property.id) { done('property created and has an id') } else { done('property created but does not have an ID') }
    } catch (e) {
      done()
    }
  })

  it('should set a name ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'string')
      property.name = 'New name'

      if (property.name === 'New name') {
        done()
      } else {
        done('property has a wrong name')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id. ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'string')
      if (property.id) { done() } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set a description ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'string')
      property.description = 'New description'

      if (property.description === 'New description') {
        done()
      } else {
        done('property has a wrong description')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should set required ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'string')
      property.required = true

      if (property.required) {
        done()
      } else {
        done('property has a wrong required field.')
      }
    } catch (e) {
      done('Error thrown.')
    }
  })

  it('should get an id. ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'string')
      if (property.id) { done() } else {
        done('Does not have an ID')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set values - select single', function (done) {
    try {
      var property = new Flow.Property('Country', 'select-single')
      property.values = ['India', 'USA']
      done()
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should set values - select multiple ', function (done) {
    try {
      var property = new Flow.Property('Country', 'select-multiple')
      property.values = ['India', 'USA']
      done()
    } catch (e) {
      done('Error thrown')
    }
  })

  it('should not set values when datatype is somethign else from select-single or select multiple', function (done) {
    try {
      var property = new Flow.Property('Country', 'string')
      property.values = ['India', 'USA']
      done('Values set.')
    } catch (e) {
      done()
    }
  })

  it('should not set an id ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'string')
      property.id = 'New id'
      done('ID is set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type text', function (done) {
    try {
      var property = new Flow.Property('Sample', 'text')
      property.data = 'New data'
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type text ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'text')
      property.data = 1
      done('Incorrect data of type text')
    } catch (e) {
      done()
    }
  })

  it('should set data of type number', function (done) {
    try {
      var property = new Flow.Property('Sample', 'number')
      property.data = 1
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type number ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'number')
      property.data = 'Sample'
      done('Incorrect data of type number')
    } catch (e) {
      done()
    }
  })

  it('should set data of type URL', function (done) {
    try {
      var property = new Flow.Property('Sample', 'url')
      property.data = 'http://google.com'
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type URL ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'url')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type Email', function (done) {
    try {
      var property = new Flow.Property('Sample', 'email')
      property.data = 'sample@smapl.com'
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type Email ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'email')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type Date', function (done) {
    try {
      var property = new Flow.Property('Sample', 'date')
      property.data = new Date()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should set string as dates', function (done) {
    try {
      var property = new Flow.Property('Sample', 'date')
      property.data = new Date().toString()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type Date ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'date')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type DateTime', function (done) {
    try {
      var property = new Flow.Property('Sample', 'datetime')
      property.data = new Date()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type datetime ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'datetime')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type time', function (done) {
    try {
      var property = new Flow.Property('Sample', 'time')
      property.data = new Date()
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type time ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'time')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type boolean', function (done) {
    try {
      var property = new Flow.Property('Sample', 'boolean')
      property.data = true
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type boolean ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'boolean')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set data of type list', function (done) {
    try {
      var property = new Flow.Property('Sample', 'list')
      property.data = []
      done()
    } catch (e) {
      done('Data cannot be set')
    }
  })

  it('should not set incorrect data of type list ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'list')
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should not set incorrect data of type select-multiple ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'select-multiple')
      property.values = ['1', '2', '3']
      property.data = ['1']
      done()
    } catch (e) {
      done('Incorrect data set')
    }
  })

  it('should not set incorrect data of type select-multiple ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'select-multiple')
      property.values = ['1', '2', '3']
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should set multiple values in select-multiple ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'select-multiple')
      property.values = ['1', '2', '3']
      property.data = ['1', '2']
      done()
    } catch (e) {
      done('Incorrect data set')
    }
  })

  it('should not set incorrect data of type select-single ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'select-single')
      property.values = ['1', '2', '3']
      property.data = ['1']
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should not set incorrect data of type select-single ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'select-single')
      property.values = ['1', '2', '3']
      property.data = 'Sample'
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('should not set multiple values in select-single ', function (done) {
    try {
      var property = new Flow.Property('Sample', 'select-single')
      property.values = ['1', '2', '3']
      property.data = ['1', '2']
      done('Incorrect data set')
    } catch (e) {
      done()
    }
  })

  it('link propertys ', function (done) {
    try {
      var propertyA = new Flow.Property('Sample', 'string')
      var propertyB = new Flow.Property('Sample', 'string')
      propertyB.linkToProperty(propertyA)
      propertyA.data = 'sample'
      if (propertyB.data === 'sample') {
        done()
      } else {
        done('Properties cannot be linked. ')
      }
    } catch (e) {
      done('Error thrown')
    }
  })

  it('unlink propertys ', function (done) {
    try {
      var propertyA = new Flow.Property('Sample', 'string')
      var propertyB = new Flow.Property('Sample', 'string')
      propertyB.linkToProperty(propertyA)
      propertyA.data = 'sample'
      if (propertyB.data === 'sample') {
        propertyB.unlinkProperty()
        propertyA.data = 'Sample1'
        if (propertyB.data === 'sample' && propertyA.data === 'Sample1') {
          done()
        } else {
          done('Properties cannot be unlinked.')
        }
      } else {
        done('Properties cannot be linked. ')
      }
    } catch (e) {
      done('Error thrown')
    }
  })
})
