import { getHeroeByIdAsync } from "../../base/05-promesas";

describe('Test fichero 05-promesas.test.js', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', ( done ) => {
        const id = 3;
        const heroeTest = {id:3, name: 'Peter Stancheck', owner: 'Valiant'};
        getHeroeByIdAsync(id).then(
            heroe => {
                expect( heroe ).toEqual( heroeTest );
                done();
            }
        );
    });

    test('getHeroeByIdAsync si no existe el heroe debe devolver un error', ( done ) => {
        const id = 30;
        const msgTest = 'No se pudo encontrar el héroe';
        getHeroeByIdAsync(id).catch(
            err => {
                expect( err ).toEqual( msgTest );
                done();
            }
        );
    });
})
