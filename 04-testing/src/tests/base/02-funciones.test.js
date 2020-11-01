import { getUser, getUsuarioActivo } from "../../base/02-funciones"

describe('Pruebas en 02-funciones.js', () => {
    test('getUser debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'joker'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    });
    test('getUserActivo debe retornar un objecto con el atributo mandado ', () => {
        const nombre = 'Catwoman';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo( nombre );

        expect( userActivo ).toEqual(userTest);
    })
})
