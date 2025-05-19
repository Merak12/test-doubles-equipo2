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