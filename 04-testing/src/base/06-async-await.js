export const getCity = async() => {

    try {

        const resp   = await fetch(`https://api.mocki.io/v1/b043df5a`);
        const json = await resp.json();

        const { city } = json[0];

        return city;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
}



