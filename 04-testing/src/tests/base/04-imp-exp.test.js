import { getHeroeById, getHeroesByOwner } from '../../base/04-imp-exp';
describe('Pruebas en el archivo 04-imp.exp.js', () => {
    test('getHeroeId debe retornar el heroe apartir del ID ', () => {
        const idTest = 3;
        const heroeValiantTest = {id:3, name: 'Peter Stancheck', owner: 'Valiant'};
        const heroeById = getHeroeById(idTest);

        expect( heroeById ).toEqual( heroeValiantTest );
    });
    test('getHeroesId debe retorn undefined si no existe un heroe apartir del id ', () => {
        const idTest = 100;
        const heroeById = getHeroeById(idTest);

        expect( heroeById ).toBe( undefined );
    });
    test('getHeroeByOwner debe devolver un listado de heroe apartir de un owner', () => {
        const ownerTest = 'Marvel';
        const heroesMarvelTest = [{id:2, name: 'Spiderman', owner: 'Marvel'}];
        const heroeByOwner = getHeroesByOwner(ownerTest);
        expect( heroeByOwner ).toEqual( heroesMarvelTest );
    });
})
