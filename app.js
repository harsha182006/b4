const e=require("express")
const app=e()

app.use(e.json())

const details={
    fristname:"swaroop",
    lastname:"pranav",
    idno:"923"
}

const studentdata=[]

app.post("/post",(req,res)=>{
    console.log(req.body)
    studentdata.push(req.body)
    res.send(studentdata) 
})

app.get("/boys/cseb",(req,res)=>{
    res.send("hi cseb boys")
})
app.get("/girls/cseb",(req,res)=>{
    res.send(details)
})

app.listen(4500,()=>{
   console.log("server is running successfully") 
})