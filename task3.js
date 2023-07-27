var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'harshinipachigolla@gmail.com',
        pass:'kify lkmy zshm ofgz',
    }

    });
    var mailOptions={
        from:'harshinipachigolla@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'Assessment-1248',
        text:'Mail  from Vaisali(20A21A1248)',
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log('error');
        }
        else{
            console.log('email sent :'+info.response);
        }
    })