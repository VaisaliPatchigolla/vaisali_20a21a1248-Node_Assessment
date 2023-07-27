var mysql=require('mysql');
var con =mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'Root',
    database: "parameter"

});
con.connect(function(err){
    if (err) throw err;
    console.log("its connected!");
    /*con.query("CREATE DATABASE parameter", function (err, result) {
        if (err) throw err;
        console.log("Database created");
        )};*/
        var sql = "CREATE TABLE employees(id (Primary Key, Auto-increment),name (VARCHAR, 255 characters),department (VARCHAR, 100 characters),salary (DECIMAL, 10, 2))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
})