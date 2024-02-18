const express =require('express')
const mysql=require('mysql')
const cors=require('cors')
const bodyParser = require('body-parser');



const app=express();
app.use(cors())
app.use(bodyParser())

const conn = mysql.createConnection({
host:'127.0.0.1',
user:'root',
password:'85TFMPV7@cP7vg3',
database:'rootdb',


})

conn.connect(err =>{
    if(err){
        console.log(err)
    }
    else{
        console.log('Database connected...')
    }
    app.listen(5000,()=>{console.log('Server is running...')})




   app.get('/', async function (err,data){ 

    const sel =  `SELECT * FROM new`;
     conn.query (sel, async function (err, result)  {

        if(err){
             console.log(err)
        }
        else {
        console.log([result]);
        data.send(result) 
        }
          
     }
       
     )
        
    })

})



    
    app.post('/',async function (req) { 
       

    let name = req.body.name;
    let text = req.body.Text;
    

        conn.query  (`INSERT INTO new (name, Text) VALUES (?, ?)`,[name,text], function post (res,err) {
            
          if(res) {
                console.log("Ошибка добавления новости в БД",err)
                
            }
            else {
                console.log("Новость успешно добавлена в БД")
               
            }  
        }
        )})

     
    