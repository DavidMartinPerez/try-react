describe('pruebas simuladas para probar jest', () => {
    test('deben ser iguales los string', () => {

        // 1. inicialización
        const mensaje = 'Hola mundo';

        // 2. estimulo
        const mensaje2 = `Hola mundo`;

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});