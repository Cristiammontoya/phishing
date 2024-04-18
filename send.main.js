const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tu_correo@example.com',
            pass: 'tu_contraseña'
        }
    });

    const mailOptions = {
        from: 'tu_correo@example.com',
        to: 'correo_destinatario@example.com',
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
