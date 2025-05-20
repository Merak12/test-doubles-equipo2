function editarAlumno(alumno, db) {
    if (!alumno.correo || !alumno.horas_restantes || !alumno.semestre || !alumno.abrev_carrera) {
        throw new Error("Faltan datos");
    }
    db.exec(
        'UPDATE alumno SET horas_restantes = ?, semestre = ?, abrev_carrera = ? WHERE correo = ?',
        [alumno.horas_restantes, alumno.semestre, alumno.abrev_carrera, alumno.correo]
    );
    return db.queryRow(
        'SELECT nombre, apellido_p, horas_restantes, semestre, abrev_carrera FROM alumno WHERE correo = ?',
        [alumno.correo]
    );
}
module.exports = { editarAlumno };