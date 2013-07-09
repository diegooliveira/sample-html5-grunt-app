/**
 * Sample Object
 */
function Person(){
    
    function _sayHello(who){
        console.log("hello " + who);
    }
    
    return {
        sayHello : _sayHello
    };
}