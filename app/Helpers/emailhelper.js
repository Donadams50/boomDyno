const nodemailer = require("nodemailer"); 
const hbs = require('nodemailer-express-handlebars')
const dotenv=require('dotenv');

dotenv.config();
exports.emailUtility= async (emailFrom, emailTo, emailSubject,adminname, name, message, email, phoneNumber ) =>{
    console.log(emailFrom)
        let resp= await wrapedSendMail();
         return resp;

    async function wrapedSendMail(){
        return new Promise((resolve,reject)=>{
        let transport = nodemailer.createTransport({
        //     service: 'gmail',
        // auth: {
            
        //       user: '',
        //     pass:  ''         
        // },
      
        //host: "mail.privateemail.com",
        host: "server252.web-hosting.com",
         port: 465,
         secure: true, 
         auth: {
            user: process.env.user, // generated ethereal user
           pass: process.env.pass,
        } 
        });
  const handlebarsOptions= {
      viewEngine:{
          extName:'index.handlebars',
          partialsDir: './',
          layoutsDir: './',
          defaultLayout:'./app/Helpers/index'
      },
      viewPath:'./app/Helpers',
      extName:'.handlebars',
   
  };
        transport.use('compile', hbs(handlebarsOptions));
        const mailOptions = {
            // should be replaced with real  recipient's account 
            from: emailFrom,
            to: emailTo,         
            subject: emailSubject,
            text: emailSubject,
            template: 'index',
            context: {
                adminname: adminname,
                name: name,
                message: message,
                email: email,
                phoneNumber: phoneNumber
               
            }
        }; 


     let resp=false;
     transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('=======================================fail======================')
            console.log("error is "+error);
           reject(false); // or use rejcet(false) but then you will have to handle errors
           //return error
        } 
       else {
          
       console.log('=======================================success======================')
         console.log('Email sent: ' + info.response);    
           resolve(true);
        }
       });
     
       })
    }
       
  
} 

exports.emailUtilityMortion= async (emailFrom, emailTo, emailSubject,adminname, name, message, email ) =>{
    console.log(emailFrom)
        let resp= await wrapedSendMail();
         return resp;

    async function wrapedSendMail(){
        return new Promise((resolve,reject)=>{
        let transport = nodemailer.createTransport({
    
        host: "server254.web-hosting.com",
         port: 465,
         secure: true, 
         auth: {
            user: "morton@hackangelslab.com", 
           pass: "morton12345",
        } 
        });
  const handlebarsOptions= {
      viewEngine:{
          extName:'mortion.handlebars',
          partialsDir: './',
          layoutsDir: './',
          defaultLayout:'./app/Helpers/mortion'
      },
      viewPath:'./app/Helpers',
      extName:'.handlebars',
   
  };
        transport.use('compile', hbs(handlebarsOptions));
        const mailOptions = {
            // should be replaced with real  recipient's account 
            from: emailFrom,
            to: emailTo,         
            subject: emailSubject,
            text: emailSubject,
            template: 'mortion',
            context: {
                adminname: adminname,
                name: name,
                message: message,
                email: email
               
            }
        }; 


     let resp=false;
     transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('=======================================fail======================')
            console.log("error is "+error);
           reject(false); // or use rejcet(false) but then you will have to handle errors
           //return error
        } 
       else {
          
       console.log('=======================================success======================')
         console.log('Email sent: ' + info.response);    
           resolve(true);
        }
       });
     
       })
    }
       
  
} 