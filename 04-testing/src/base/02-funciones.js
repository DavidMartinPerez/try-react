export const getUser = () => ({
        uid: 'ABC123',
        username: 'joker'
});


const user = getUser();
console.log(user);

// Tarea
export const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Parker');
console.log( usuarioActivo );



