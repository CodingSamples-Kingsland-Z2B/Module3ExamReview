let PizzaUni = require("./PizzUni.js");
let chai = require("chai");
let assert = chai.assert;

describe("PizzUni",function(){
    describe("constructor",function(){
        let test = new PizzaUni();
        it("registeredUsers is by default is an empty array",function(){
            assert.equal(test.registeredUsers.length,0);
        });
        it("available productis by default is an object with 2 properties",function(){
            assert.equal(test.availableProducts.drinks.length,3);
            assert.equal(test.availableProducts.pizzas.length,3);
            
            let pizzaList = ['Italian Style', 'Barbeque Classic', 'Classic Margherita'];
            for(let index in pizzaList){
                assert.equal(test.availableProducts.pizzas[index],pizzaList[index]);
            }
            let drinklist = ['Coca-Cola', 'Fanta', 'Water'];
            for(let index in drinklist){
                assert.equal(test.availableProducts.drinks[index],drinklist[index]);
            }
        });
        it("orders, by default is an empty array",function(){
            assert.equal(test.orders.length,0);
        });
    });
    describe("registerUser",function(){
        it("recieves a string as an input",function(){
            assert.isString("myemail@email.com");
        });
        it("if the email is already used for registration, throw and error",function(){
            test = new PizzaUni();
            test.registerUser("myemail@email.com");
            assert.throws(() => test.registerUser("myemail@email.com"),`This email address (myemail@email.com) is already being used!`);
        });
        it("the email is registered successfully it will return an object with the email and order history",function(){
            test = new PizzaUni();
            let registerUser = test.registerUser("myemail@email.com");
            assert.equal(registerUser.email,"myemail@email.com");
            assert.equal(registerUser.orderHistory.length,0);
        });
    });
    describe("makeAnOrder",function(){
        it("must have a registered user",function(){
            test = new PizzaUni();
            test.registerUser("myemail@email.com");
            assert.throws(()=> test.makeAnOrder("my2email@email.com",'Classic Margherita','water'),`You must be registered to make orders!`);
        });
        it("needs to have a correct pizza, throws if not",function(){
            test = new PizzaUni();
            test.registerUser("myemail@email.com");
            assert.throws(()=> test.makeAnOrder("myemail@email.com",'Margherita','Water'),'You must order at least 1 Pizza to finish the order.');
        });
        it("needs to have a correct drink, will just not add a drink if not",function(){
            test = new PizzaUni();
            test.registerUser("myemail@email.com");
            test.makeAnOrder("myemail@email.com",'Classic Margherita','Tea');
            assert.equal(test.orders[0].orderedDrink,undefined);
        });
        it("valid orders are put inot the users order history",function(){
            test = new PizzaUni();
            test.registerUser("myemail@email.com");
            test.makeAnOrder("myemail@email.com",'Classic Margherita','Water');
            assert.equal(test.orders.length,1);
        });
    });
    describe("",function(){
        it("",function(){

        });
        it("",function(){
            
        });
        it("",function(){
            
        });
    });
    describe("",function(){
        it("",function(){

        });
        it("",function(){
            
        });
        it("",function(){
            
        });
    });
});