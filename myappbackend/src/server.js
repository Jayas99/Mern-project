import express from 'express'
import cors from 'cors'
import {db,connectToDB} from "./db.js";

const app = express()

app.use(express.json())

app.use(cors())

app.get('/insert1',async (req, res) => {

    const employees = [
        { name: "John Doe", department: "HR", salary: 50000 },
        { name: "Jane Smith", department: "Sales", salary: 60000 },
        { name: "Bob Johnson", department: "IT", salary: 70000 },
        { name: "Alice Brown", department: "Finance", salary: 80000 },
        { name: "Tom Wilson", department: "Marketing", salary: 55000 },
        { name: "Sara Lee", department: "HR", salary: 45000 },
        { name: "Mike Davis", department: "IT", salary: 65000 },
        { name: "Emily Green", department: "Sales", salary: 75000 },
        { name: "Jake Miller", department: "Marketing", salary: 60000 },
        { name: "Kelly Lee", department: "Finance", salary: 85000 },
      ];
      
    const details = await db.collection('mern2').insertMany(employees);
    res.json(details);
});




app.get('/',(req,res)=>{
    res.send("Server running successfully");
})
app.get('/users',async (req, res) => {
    const details = await db.collection('mern').findOne({name:"sri"})
    res.json(details);
});
app.get('/insert',async (req,res) => {
   const detai =await db.collection('mern').insertOne({name:"jayasree",age:18,salary:42457234527})
   res.json(detai);
});
app.get('/getdata',async(req,res) => {
    const details = await db.collection('mern2').find({}).toArray()
    res.send(details)
})
app.post('/insertdata/:name/:age',async (req,res) => {
    const d =await db.collection('mern').insertOne({name:req.params.name,age:req.params.age})
    res.json(d);
 });

 app.post('/login/:username/:password',async (req,res) => {
    const d =await db.collection('mern').findOne({username:req.params.username,password:req.params.password})
    if(d)
    {
        console.log("user not found")
    }
    else{
        res.json(d);
    }
 });


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})