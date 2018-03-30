
//---npm packages to install ---
var mysql = require("mysql");
var inquirer = require("inquirer");

//---connection to mySQL database--
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root", 

  // Your password
  password: "",
  database: "bamazon_db"
});

//connects to mySQL database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

//create a starting prompt to ask customer the 2 questions: 
var products = function () {
	var query = 'SELECT * FROM products'
	connection.query(query, function(err, res) {
		console.table(res);
		start();
	})
}

//what is the ID of the product you would like to buy?
var start = function() {
	inquirer.prompt([{
		name: "choice",
		type: "input",
		message: "What is the ID of the product you would like to buy?",
			validate: function(value) {
			if(isNaN(value)==false) {
				return true;
			} 
				return false;
			}
  }, 
  {

  //how many would you like to buy?
		name: "amount",
		type: "input",
		message: "How many would you like to buy?",
		validate:  function(value) {
			if(isNaN(value)==false) {
				return true;
			} 
				return false;
			
		}
  }
//Once the customer places the order, the app should check to see if the store has enough of the product to fill the order
//If there is enough inventory, the order should be filled (SQL database needs to update reflecting the remaining quanity
//If there is not enough inventory, Insufficient Quantity should come up and the order will not be filled.
	]).then(function(answer) {
    var selection = answer.choice;
    var quantity = answer.amount;
    connection.query('SELECT product_name, department_name, price FROM products WHERE item_id = ' + selection, function(err, res) {
        if(err) throw err;
         console.table(res[0]);
    });
    connection.query('SELECT stock_quantity FROM products WHERE item_id = ' + selection, function(err, res) {
        if(err) throw err;
        if (res[0].stock_quantity < quantity) {
          console.log("We're sorry.  We currently don't have that in stock.");
          products();
        } else {
  
    var new_quantity = res[0].stock_quanity - quantity;
    connection.query('UPDATE products SET ? WHERE ?', 
        [{stock_quantity: new_quantity},{item_id: selection}], 
        function(err, res){
            if(err) throw err;
    });
    
   
    products();
      }
    });
  })
}; 

//The customer needs to know what their total is)

