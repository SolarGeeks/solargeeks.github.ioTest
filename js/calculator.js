// Object Literals
var power_bank = []


user_account = {
    name : "Hello",
    username : "MmmMMm",
    num_items : ["mmm", 2, 3, 6, "kkk"],
    custom_items: [],
    default_items: [],

    method1 : function(){alert("Method had been called" + this.property1)}
};
 
timObject.method1();
alert(timObject.property3[2]) // will yield 3
 
var circle = { x : 0, y : 0, radius: 2 } // another example
 
// nesting is no problem.
var rectangle = { 
    upperLeft : { x : 2, y : 2 },
    lowerRight : { x : 4, y : 4}
}
 
alert(rectangle.upperLeft.x) // will yield 2
 