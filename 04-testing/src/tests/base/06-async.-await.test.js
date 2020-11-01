import { getCity } from "../../base/06-async-await";

describe('Pruebas testing de async-await', () => {

    test('getCity debe devolver `Stockholm`', async () => {
        const cityTest = 'Stockholm';
        const city = await getCity();

        expect( city ).toBe(cityTest);
    })
})
