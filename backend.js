const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post("/",(req,res)=>{
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"vadlaabhiram229@gmail.com",
            pass:"bhra cnci qaci toxa"
        }
    });
    var mailOptions = {
        from:"vadlaabhiram229@gmail.com",
        to:req.body.email,
        subject:"sending Email using node.js by abhiram ",
        text:"I have successfully delivered the mail !!!!"
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);

        }
        else{
            console.log("email sent "+info.response)
        }
    });
    res.send(req.body);
})
 let port = 3001;
app.listen(port,()=>{
    console.log(`server has started at http://localhost:${port}`);
})