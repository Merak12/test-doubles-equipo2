const { registerAlumno } = require('../doubles/spy');

test('llama a sendEmail al registrar alumno', () => {
    const spySendEmail = jest.fn();
    const alumno = { correo: "test@email.com", nombre: "Ana" };
    registerAlumno(alumno, spySendEmail);
    expect(spySendEmail).toHaveBeenCalledWith(
        "Felicidades el Registro fue exitoso",
        "handlers/mail.html",
        ["test@email.com"],
        "Ana"
    );
});

test('sendEmail se llama una vez', () => {
    const spySendEmail = jest.fn();
    const alumno = { correo: "valente@c.com", nombre: "Valente" };
    registerAlumno(alumno, spySendEmail);
    expect(spySendEmail).toHaveBeenCalledTimes(1);
});

test('sendEmail recibe el correo correcto', () => {
    const spySendEmail = jest.fn();
    const alumno = { correo: "otro@correo.com", nombre: "Ajelandro" };
    registerAlumno(alumno, spySendEmail);
    expect(spySendEmail.mock.calls[0][2]).toEqual(["otro@correo.com"]);
});

test('sendEmail recibe el nombre correcto', () => {
    const spySendEmail = jest.fn();
    const alumno = { correo: "d@y.com", nombre: "Dylan" };
    registerAlumno(alumno, spySendEmail);
    expect(spySendEmail.mock.calls[0][3]).toBe("Dylan");
});

test('sendEmail recibe el asunto esperado', () => {
    const spySendEmail = jest.fn();
    const alumno = { correo: "a@a.com", nombre: "Anaa" };
    registerAlumno(alumno, spySendEmail);
    expect(spySendEmail.mock.calls[0][0]).toBe("Felicidades el Registro fue exitoso");
});