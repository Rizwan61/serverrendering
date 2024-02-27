const express = require('express');
const app = express();
const mongoose = require("mongoose")



app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get('/',(req,res) =>{
    return res.render( "index");
})

app.get("/shop", (req, res) => {
    
    return res.render("shop", {
        
    });

})

app.get("/shopdetail", (req, res) => {
    
    return res.render("shopdetail", {
        
    });

})


app.get("/contact", (req, res) => {
    
    return res.render("contact", {
        
    });

})

app.get("/cart", (req, res) => {
    
    return res.render("cart", {
        
    });

})

app.get("/chackout", (req, res) => {
    
    return res.render("chackout", {
        
    });

})

app.get("/testimonial", (req, res) => {
    
    return res.render("testimonial", {
        
    });

})

app.get("/404", (req, res) => {
    
    return res.render("404.ejs", {
        
    });

})


const startServer = async () => {
    try {
           mongoose.connect("mongodb://localhost:27017/ejsdb").then(() => {
            //mongoose.connect(process.env.MONGO_DB_CONNECT_URL).then(() => {
            app.listen(4001, () => {
                console.log(`server is listening on port 4001`);
            })
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();