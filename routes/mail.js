const express = require('express')
const router = express.Router()
const mailer = require('nodemailer')

router.post('/sendEmail',(req,res)=>{
try{
    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nityamj30@gmail.com',
          pass: 'shlc wwfr kxwl vjeo'
        }
      });
      
      var mailOptions = {
        from: 'nityamj30@gmail.com',
        to: 'nityam.anncode@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'I am Making EmailSender using Nodemailer with Nodejs.'
      };
      console.log(mailOptions)
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        // console.log(transporter)
      });
      res.send({
        status: "Sucess",
        msg: "Email Sent sucessfully"
      })
}catch(error){
    console.log("Error Occured",error)
    res.status(500).send('Internal Server Error');
}
})
  module.exports=router;