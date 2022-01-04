const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "yooncheol",
  database: "myapp"
});
exports.pool = pool;
