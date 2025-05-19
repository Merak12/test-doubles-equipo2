const request = require("supertest");
const app = require("../doubles/dummy.js"); 

describe("POST /register-alumno", () => {
    it("debería registrar un alumno correctamente", async () => {
        const alumnoDummy = {
            matricula: "A001",
            contrasena: "clave123",
            nombre: "María",
            apellido_p: "Sánchez",
            apellido_m: "Ramírez",
            correo: "maria@ejemplo.com",
            abrev_carrera: "ISC",
            semestre: 5
        };

        const res = await request(app)
            .post("/register-alumno")
            .send(alumnoDummy)
            .set("Accept", "application/json");

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("contrasena");
        expect(res.body.contrasena).not.toBe(alumnoDummy.contrasena); 
        expect(res.body.nombre).toBe("María");
    });

    it("debería retornar 400 si el JSON es inválido", async () => {
        const res = await request(app)
            .post("/register-alumno")
            .send("esto no es JSON válido")
            .set("Content-Type", "application/json");

        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({});

    });
});
