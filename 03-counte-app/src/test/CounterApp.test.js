import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
describe('Testeamos el componente counterapp', () => {
    test('Cargamos correctamente el componente CounterApp', () => {
        const wrapper = shallow(<CounterApp value={0} />)

        expect(wrapper).toMatchSnapshot();

    });

    test('Comprobamos que pasandole el valor incial este se carge correctamente', () => {
        const initialValue = 99;
        const wrapper = shallow(<CounterApp value={99} />);

        const valueCounter = wrapper.find('h2').text().trim();

        expect(valueCounter).toBe(initialValue.toString());
    });

    test('Probamos el boton Aumenta el valor al pulsar el boton aumentar ', () => {
        const wrapper = shallow(<CounterApp />); // Por defecto contador será 0

        const btn1 = wrapper.find('button').at(0); // Boton de incrementar

        btn1.simulate('click'); // Sumamos 1 a 0 el valorq ue debe retornar es 1

        const valueCounter = wrapper.find('h2').text().trim();

        expect(valueCounter).toBe('1');
    })

    test('Probamos Boton reiniciar contador ', () => {
        const wrapper = shallow(<CounterApp value={1} />); // Valor sera 1

        const btnIncrementar = wrapper.find('button').at(0); // Boton de incrementar
        btnIncrementar.simulate('click'); // 2
        btnIncrementar.simulate('click'); // 3
        btnIncrementar.simulate('click'); // 4
        const btnReset = wrapper.find('button').at(1); // Boton de reseteo

        btnReset.simulate('click'); // Reseteamos y tiene que coger el value que se le ha pasado al principio -> 1

        const valueCounter = wrapper.find('h2').text().trim();

        expect(valueCounter).toBe('1');
    })

    test('Probamos Boton descrementar contador ', () => {
        const wrapper = shallow(<CounterApp value={1} />); // Valor sera 1

        const btnDescrementar = wrapper.find('button').at(2); // Boton de incrementar

        btnDescrementar.simulate('click'); // Descrementamos el valor en 1 por lo cual 1-1=0

        const valueCounter = wrapper.find('h2').text().trim();

        expect(valueCounter).toBe('0');
    })
})
