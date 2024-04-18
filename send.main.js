const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: 'cristiammontoya12@outlook.com',
            pass: ''
        }
    });

    const mailOptions = {
        from: 'cristiammontoya12@outlook.com',
        to: 'cristiammontoya12@gmail.com',
        subject: 'Asunto del correo',
        text: 'Contenido del correo'
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado con éxito', info }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error al enviar el correo', message: error.message }),
        };
    }
};
