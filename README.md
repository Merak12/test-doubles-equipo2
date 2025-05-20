# test-doubles-equipo2
Ana Luisa Cruz Flores | A01735115
Dylan Martínez Alonzo | A01736968
Alejandro Zurita Alcázar | A01736936
Valente Cisneros Gómez | A01736801


¿Qué Test Doubles se implementaron?
Spy, mock, fake, stub y dummy

¿Qué aprendieron al integrarlos?
Se comprendió la utilidad de cada Test Double al facilitar pruebas unitarias sin depender de componentes reales como bases de datos o servicios externos.
Aprendimos a aislar funcionalidades específicas para garantizar que los módulos se comporten correctamente bajo diferentes condiciones.
También se reforzó la importancia de mantener nuestras pruebas limpias, rápidas y predecibles, lo cual mejora significativamente el proceso de desarrollo ágil y el mantenimiento del software.

¿Qué problemas enfrentaron y cómo los resolvieron?
Configuración incompleta del entorno de pruebas: Algunos tests requerían ajustes en la inicialización de la app o uso de middlewares como express.json(), que si no estaban correctamente integrados, llevaban a fallos en el parseo de datos.
Falta de claridad entre tipos de doubles: Al principio, se confundieron los propósitos entre mocks, spies y stubs. Fue necesario repasar sus diferencias para asignar correctamente el tipo de doble a cada caso de uso.


Ana	Spy	spy/spy.test.js	✅
Ana Mock mock/mock.test.js
Dylan fake fake/fake.test.js ✅
Alex Stub	stub/stub.test.js	✅
Valente	dummy	dummy/dummy.test.js	✅

git add <fotoPruebas.png>
