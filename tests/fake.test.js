const Socio  = require('../doubles/fake.js');

test("registro de socio", () => {
    const repo =  new Socio.FakeRepo();
    const register = new Socio.RegisterSocio(repo);

    const socio = {id: 1, name: 'Carmen', apellido_p:'Flores', apellido_m:'Cruz', correo:'test@example.com', contraseña:'1234', puesto:'CEO', celular:'7448831234'};

    expect(register.registerSocio(socio)).toBe(true);
    expect(register.showSocio(1)).toEqual(socio);
})