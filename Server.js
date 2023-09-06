const express = require('express');


// rest Object with Express
const app = express();

// rest Api 
app.get("/", (req,res)=>{
    res.send({
        "what is Express?" : "Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects."
    });
});


//PORT 
const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server is Runing on http://localhost:${PORT}`)
});