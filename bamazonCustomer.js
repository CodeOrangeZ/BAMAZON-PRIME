// ======================================================

var mysql = require("mySql");
var inquirer = require("inquirer");

// ======================================================

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "BAMAZON"
});

connection.connect();

// ======================================================

var id;
var units;
var stock;
var price;

// ======================================================

function showDb() {
connection.query("SELECT * FROM `products`", function(err, res) {
  if (err) throw err;
  console.log(res);
});
};

function prompt() {
  inquirer.prompt([{
    type: "confirm",
    name: "confirm",
    message: "Would you like to make a purchase?",
  }]).then((answer) => {
    if (answer.confirm) {
      getId();
    }
    else {
      console.log("Thanks for shopping with BAMAZON!");
      process.exit();
      };
    });
  };

  function getId() {
    inquirer.prompt({
      type: "input",
      name: "id",
      message: "Please input the id number of the item you would like to purchase."
    }).then(function(answer) {
      id = parseInt(answer.id);
      getUnits();
    });
  };

function getUnits() {
  inquirer.prompt({
    type: "input",
    name: "units",
    message: "How many units would you like to purchase?"
  }).then(function(answer) {
    units = parseInt(answer.units);
    checkStock();
  });
};

function checkStock() {
  connection.query("SELECT stock_quantity, price FROM products WHERE ?", {item_id : id},
  function(err, res) {
    if (err) throw err;
    stock = res[0].stock_quantity;
    price = res[0].price;
    availablity();
  });
};

function availablity() {
   if (stock >= units) {
     var total = parseFloat( units * price ).toFixed(2);
     console.log("Product is Available! Your total is : $" + total);
     orderConfirm();
     }
   else {
     console.log("Product is unavailable! Please enter a new ammount.");
     getUnits();
     }
   };


function orderConfirm() {
  inquirer.prompt({
         type: "confirm",
         name: "purchase",
         message: "Would you like to continue with your purchase?"
       }).then((answer) => {
         if (answer.confirm) {
          //  removeStock();
          var updateStock = (stock - units);
          console.log(updateStock);
          connection.query("UPDATE products SET ? WHERE ?", [{
              stock_quantity: updateStock
          }, {
              item_id: id
          }]);
           console.log("Thank you for your purchase. Please shop with Bamazon again.");
          //  process.exit();
         }
         else {
           console.log("Thank you for shopping at BAMAZON!")
           process.exit();
         };
       });
         };

// function removeStock() {
//     var updateStock = (stock - units);
//     console.log(updateStock);
//     connection.query("UPDATE products SET ? WHERE ?", [{
//         stock_quantity: updateStock
//     }, {
//         item_id: id
//     }]);
// };


// =============================================

showDb();
prompt();
