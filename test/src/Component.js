import assert from 'assert';
import Flow from '../../src/index'; 

describe('Component Tests', function() {
  
    it('Attach and run a task.', function(done) {
      var component = new Flow.Component();
      //attach a task. 
      
      component.attachTask(function(){
            // do nothing.  
      });

      component.execute();

      done();

    });

    it('Do not run a task if its not attached. ', function(done) {
        var component = new Flow.Component();
        
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


      it("Create a simple add component", function(done){

        var addComponent = new AddComponent();
        addComponent.getVariable("Variable 1").data =1; 
        addComponent.getVariable("Variable 2").data =2;
        addComponent.getPort("Result").onEmit(function(){
            addComponent.getVariable("Variable 1");
            if( addComponent.getPort("Result").getVariable("Variable 3").data === 3){
                done();
            } else{
                done("Failed");
            }
        });
        addComponent.execute();
      });


      it("Connect two components together and process data.", function(done){

        var addComponent = new AddComponent();
        addComponent.getVariable("Variable 1").data =1; 
        addComponent.getVariable("Variable 2").data =2;

        var subComponent = new SubtractComponent();
        subComponent.getVariable("Variable 1").data = addComponent.getPort("Result").data;
        subComponent.getVariable("Variable 2").data =2;

        addComponent.getPort("Result").connectComponent(subComponent);

        subComponent.getPort("Result").onEmit(function(){
            
            if( subComponent.getPort("Result").getVariable("Variable 3").data === 2){
                done();
            } else{
                done("Failed");
            }
        });
        addComponent.execute();        
      });

});



class AddComponent extends Flow.Component{
    constructor(){
        super();

        //construct the component.
        this.name = "Add";

        var var1 = new Flow.Variable("Variable 1","number");
        var1.required = true;

        this.addVariable(var1);

        var var2 = new Flow.Variable("Variable 2", "number");
        var2.required = true;

        this.addVariable(var2);

        var port = new Flow.Port("Result");
        
        var var3 = new Flow.Variable("Variable 3", "number");
        var3.required = true;

        port.addVariable(var3);

        this.addPort(port);

        this.attachTask(function(){
            this.getPort("Result").getVariable("Variable 3").data = this.getVariable("Variable 1").data + this.getVariable("Variable 2").data;
            this.getPort("Result").emit();
            this.taskComplete();
        });

    }

}


class SubtractComponent extends Flow.Component{
    constructor(){
        super();

        //construct the component.
        this.name = "Subtract";

        var var1 = new Flow.Variable("Variable 1","number");
        var1.required = true;

        this.addVariable(var1);

        var var2 = new Flow.Variable("Variable 2", "number");
        var2.required = true;

        this.addVariable(var2);

        var port = new Flow.Port("Result");
        
        var var3 = new Flow.Variable("Variable 3", "number");
        var3.required = true;

        port.addVariable(var3);

        this.addPort(port);

        this.attachTask(function(){
            this.getPort("Result").getVariable("Variable 3").data = this.getVariable("Variable 1").data - this.getVariable("Variable 2").data;
            this.getPort("Result").emit();
            this.taskComplete();
        });

    }

};