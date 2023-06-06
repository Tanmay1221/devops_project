const express = require('express');
const app = express();
var mysql = require('mysql')
const PORT = 8080

var pool =  mysql.createPool({
    connectionLimit: process.env.DB_CONNECTIONLIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})    

console.log(process.env.DB_CONNECTIONLIMIT)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_NAME)

app.get('/',(req,res)=> {
    pool.getConnection((err,conn)=>{
        if(err) {
            console.log(err)
            res.send('error occured')
        }
        else {
            conn.query('select * from Person',(err2,records,field)=>{
                if(!err2) {
                    res.send(records)
                }
                conn.release()
            })
        }
    })
})

app.get('/healthz',(req,res) => {
    res.send('health check passed')    
})

app.listen(PORT,()=>{
    console.log(`listing on port ${PORT}`)
})
