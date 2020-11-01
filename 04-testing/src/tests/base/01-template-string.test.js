import { getSaludo } from "../../base/01-template-string";

describe('Pruebas en el archivo 01-template-string.js', () => {
    test('getSaludo debe retornar `Hola Bruce`', () => {
        const nombre = 'Bruce';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( `Hola ${nombre}` );

    });

    test('getSaludo debe retornar `Hola Incognita` en caso de que no se le pase un parametro', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( `Hola Incognita` );

    });
});
