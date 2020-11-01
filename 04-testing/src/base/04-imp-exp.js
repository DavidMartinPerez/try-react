
export const heroes = [
    {id:1, name: 'Batman', owner: 'DC'},
    {id:2, name: 'Spiderman', owner: 'Marvel'},
    {id:3, name: 'Peter Stancheck', owner: 'Valiant'}
]




export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );


