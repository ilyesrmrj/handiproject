const mysql = require("mysql");

/**
 * Init database
 */
const connection = mysql.createConnection({
  user: "user_name", // Your mysql username
  host: "ip_address", // "hyadescloud.com" or "192.168.1.195"
  password: "", // Password
  database: "database_name",
  // dateStrings: true
});

/**
 * Connect to database
 */
connection.connect(function (err) {
  if (err) {
    console.error("ERROR: Couldn't connect to database ", err);
  } else {
    console.log("SUCCESS: Connected to database");
  }
});

module.exports = connection;
