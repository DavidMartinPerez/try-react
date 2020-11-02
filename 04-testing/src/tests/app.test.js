import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import App from '../App'

describe('Testeamos un componente', () => {
    test('debe de mostrar <App/> correctamente', () => {
        const name = 'Bruce'
        const wrapper = shallow( <App nombre={name} /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el saludo introducido', () => {
        const nameTest = 'Parker';
        const saludoTest = 'Spiderman es'

        const wrapper = shallow( <App saludo={saludoTest} nombre={nameTest} /> );

        const textTest = wrapper.find( 'h1' ).text();

        expect( textTest ).toBe( `${saludoTest} ${nameTest}` );

    })
})
