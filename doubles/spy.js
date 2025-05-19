function sendEmail(subject, templatePath, to, name) {
    console.log('Correo enviado a: ${to} con asunto: ${subject} para ${name}');
}

function registerAlumno(alumno, sendEmailFunc = sendEmail) {
    
    sendEmailFunc(
        "Felicidades el Registro fue exitoso",
        "handlers/mail.html",
        [alumno.correo],
        alumno.nombre
    );
}
module.exports = { registerAlumno, sendEmail };