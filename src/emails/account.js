const sgMail = require("@sendgrid/mail");
const sendgridAPIkey =process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIkey);

const sendWelcomeMail = (email, name)=>{
    sgMail.send({
        to:email,
        from:"xbebe346@gmail.com",
        subject:"Thanks for signing in",
        text:`welcome to the app, ${name}. It is good to have you with us.`
    })
}

const sendCancelMail = (email, name)=>{
    sgMail.send({
        to:email,
        from:"xbebe346@gmail.com",
        subject:"acccount removal",
        text:`It is a displeasure to see you go, ${name}. what can we do to get you back.`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelMail
}