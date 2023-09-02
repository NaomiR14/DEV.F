const formulario = document.getElementById('formulario')

const datosUsuarios = [
    {
        user: 'migue',
        password: 'fernando'
    },

    {
        user: 'fernando',
        password:'465'
    },

    {
        user:'andrea',
        password: '786'
    }
]

//console.log(formulario)

function validar (paramUserio, paramPass){

    console.log(paramUserio, paramPass)

    for(let i = 0; i < datosUsuarios.length; i++){
        if(paramUserio == datosUsuarios[i].user && paramPass == datosUsuarios[i].password){
            
            console.log('puedes ingresar')

        } else if(paramUserio != datosUsuarios[i].user) {
            
            console.log('usuario incorrecto')
            mostrarError('Usuario')

        }else if(paramPass != datosUsuarios[i].password) {
           
            console.log('password incorrecto')
            mostrarError('Password')

        } else {

            console.log('datos incorrectos')
        }
    }

}

//Template Strings sirven para concatenar informacion mas limpiamente.
function mostrarError (tipo){
    let tipoDeError = document.getElementById(`error${tipo}`)

    tipoDeError.classList.remove('hide')
    tipoDeError.classList.add('Error')
}

formulario.addEventListener('submit', (evento)=>{  //la funcion flecha solo vive en esta parte del codigo

    evento.preventDefault()
    //console.log('Me diste click')

    let usuarioInput = document.getElementById('usuario').value
    //console.log(usuarioInput)

    let passwordInput = document.getElementById('password').value
    console.log(usuarioInput, passwordInput)

    validar(usuarioInput, passwordInput)


})