import { retornaArreglo } from "../../base/03-deses-arr";
describe('Pruebas en desestructuración', () => {
    test('Debe retornar un string y numero en un array', () => {
        const [letras, numeros] = retornaArreglo();

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    });
});
