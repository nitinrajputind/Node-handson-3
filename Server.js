const express = require('express');
const UserRoute = require('./Router/UserRoute');
const { ApplicationLevel } = require('./Middleware/UserMiddleware');


// rest Object with Express
const app = express();

// rest Api 
app.get("/", (req,res)=>{
    res.send("WelCome To the Express !! Server is Runing Now");
});

// Application Level Middleware 

app.use(ApplicationLevel)
// User Routes
app.use("/user", UserRoute)




//PORT 
const PORT = 4000;

app.listen(PORT,()=>{
    try{
        console.log(`Server is Runing on http://localhost:${PORT}`)
    }
    catch(err){
        console.log(`Server is Showing Error to Start ${err}`)
    }
});