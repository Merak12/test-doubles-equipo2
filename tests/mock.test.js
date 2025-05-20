const { editarAlumno } = require('../doubles/mock');

test('llama a db.exec y db.queryRow con los argumentos correctos', () => {
    const mockDb = {
        exec: jest.fn(),
        queryRow: jest.fn().mockReturnValue({ nombre: "Ana", apellido_p: "Flores", horas_restantes: 10, semestre: 3, abrev_carrera: "ISC" })
    };
    const alumno = { correo: "ana@email.com", horas_restantes: 10, semestre: 3, abrev_carrera: "ISC" };

    const result = editarAlumno(alumno, mockDb);

    expect(mockDb.exec).toHaveBeenCalledWith(
        'UPDATE alumno SET horas_restantes = ?, semestre = ?, abrev_carrera = ? WHERE correo = ?',
        [10, 3, "ISC", "ana@email.com"]
    );
    expect(mockDb.queryRow).toHaveBeenCalledWith(
        'SELECT nombre, apellido_p, horas_restantes, semestre, abrev_carrera FROM alumno WHERE correo = ?',
        ["ana@email.com"]
    );
    expect(result).toEqual({ nombre: "Ana", apellido_p: "Flores", horas_restantes: 10, semestre: 3, abrev_carrera: "ISC" });
});

test('lanza error si falta algún campo', () => {
    const mockDb = { exec: jest.fn(), queryRow: jest.fn() };
    const alumno = { correo: "", horas_restantes: 10, semestre: 3, abrev_carrera: "ISC" };
    expect(() => editarAlumno(alumno, mockDb)).toThrow("Faltan datos");
});

test('db.exec se llama exactamente una vez', () => {
    const mockDb = { exec: jest.fn(), queryRow: jest.fn().mockReturnValue({}) };
    const alumno = { correo: "anita@correo.com", horas_restantes: 5, semestre: 2, abrev_carrera: "ITI" };
    editarAlumno(alumno, mockDb);
    expect(mockDb.exec).toHaveBeenCalledTimes(1);
});

test('db.queryRow se llama exactamente una vez', () => {
    const mockDb = { exec: jest.fn(), queryRow: jest.fn().mockReturnValue({}) };
    const alumno = { correo: "valente@correo.com", horas_restantes: 8, semestre: 4, abrev_carrera: "IMT" };
    editarAlumno(alumno, mockDb);
    expect(mockDb.queryRow).toHaveBeenCalledTimes(1);
});

test('db.queryRow regresa el objeto esperado', () => {
    const esperado = { nombre: "Luis", apellido_p: "Perez", horas_restantes: 7, semestre: 5, abrev_carrera: "ISC" };
    const mockDb = { exec: jest.fn(), queryRow: jest.fn().mockReturnValue(esperado) };
    const alumno = { correo: "luis@email.com", horas_restantes: 7, semestre: 5, abrev_carrera: "ISC" };
    const result = editarAlumno(alumno, mockDb);
    expect(result).toBe(esperado);
});