const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();

app.use(bodyParser.json());

let alumnosDB = [];

function sendEmailDummy(subject, templatePath, recipients, nombre) {
    console.log(`Correo enviado a ${recipients.join(", ")} con asunto "${subject}"`);
    console.log(`Plantilla usada: ${templatePath}`);
    console.log(`Nombre del destinatario: ${nombre}`);
}

app.post("/register-alumno", async (req, res) => {
    const alumno = req.body;

    if (!alumno || typeof alumno !== "object") {
        return res.status(400).json({ error: "JSON inválido o faltan datos" });
    }

    try {
        const hash = await bcrypt.hash(alumno.contrasena, 10);
        alumno.contrasena = hash;

        alumno.id = alumnosDB.length + 1;
        alumnosDB.push(alumno);

        setTimeout(() => {
            sendEmailDummy(
                "Registro Exitoso Servicio Social",
                "handlers/mail.html",
                [alumno.correo],
                alumno.nombre
            );
        }, 0);

        res.status(201).json(alumno);

    } catch (err) {
        console.error("Error al registrar alumno:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


module.exports = app; 
