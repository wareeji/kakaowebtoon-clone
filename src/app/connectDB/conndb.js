const mysql = require('mysql2')
export const conndb = mysql.createPool(process.env.DATABASE_URL)

