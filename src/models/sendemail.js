var nodemailer = require('nodemailer');

const passwd="ReactTest@314";
const serveremail="reacttest314@gmail.com";



  let transporter = nodemailer.createTransport({
         host: 'smtp.mailtrap.io',
         port: 2525,
         auth: {
            user: "85dec7268e11da",
            pass: "87a7f7580b28fc"
         }
 });



var message = {
    from: "reacttest314@gmail.com",
    to: "larrywen@hotmail.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}


const sendEmail=(email,title,content)=>{

    message.to=email;
    message.subject=title;
    message.text=content;

    console.log("send email to ",message);
    transporter.sendMail(message, function(error, info){
    if (error) {
        console.log("error: ",error);
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

}

module.exports=(sendEmail);