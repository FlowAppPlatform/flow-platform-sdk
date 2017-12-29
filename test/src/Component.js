import assert from 'assert';
import Flow from '../../src/index'; 

describe('Component Tests', function() {
  
    it('Attach and run a task.', function(done) {
      var component = new Flow.Component("Sample Component");
      //attach a task. 
      
      component.attachTask(function(){
            // do nothing.  
      });

      component.execute();

      done();

    });

    it('Do not run a task if its not attached. ', function(done) {
        var component = new Flow.Component("Sample Component");
        
        //Task is commented and not attached. 
        // component.attachTask = function(){
        //       console.log("This is a task.");  
        // };
        //This should throw an error. 
        
        try{
            component.execute();
            done(err);
        }catch(e){
            done();
        }

  
      });

});