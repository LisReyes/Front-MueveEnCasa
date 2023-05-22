// Lis Reyes

const iniciar = document.querySelector("#iniciar");
const registro = document.querySelector("#registro");

// TABS FORMULARIO
const tabLink = document.querySelectorAll('.tab-link');
// escondemos el formulario correpondinte a registro
document.querySelector("#formRegistro").style.display = 'none';
iniciar.addEventListener("click", () => {
    document.querySelector('#formLogin').style.display = 'block';
    document.querySelector('#formRegistro').style.display = 'none';    
});

registro.addEventListener("click", () => {
    document.querySelector('#formLogin').style.display = 'none';
    document.querySelector('#formRegistro').style.display = 'block';
});

for(let x=0; x<tabLink.length;x++){
    tabLink[x].addEventListener("click", () => {
        // removemos la clase active de todos los tabs encontrados
        tabLink.forEach((tab) => tab.classList.remove('active'));

        // Le agregamos la clase active al tab que se le hizo click
        tabLink[x].classList.add("active");
    });
}

// Mostrar contraseña
const mostrarClave = document.querySelectorAll('.mostrarClave');
const inputPass = document.querySelectorAll('.clave');

for(let i=0; i<mostrarClave.length; i++){
    mostrarClave[i].addEventListener("click", () => {
        // comprobamos que el tipo de input sea estrictamente password
        if(inputPass[i].type === "password"){
            // lo cambiamos a texto
            inputPass[i].setAttribute('type','text');
            //removemos la clase del icono
            mostrarClave[i].classList.remove('fa-eye');
            // agregamos el nuevo icono
            mostrarClave[i].classList.add('fa-eye=slash');
            // le agreagmos la clase active
            mostrarClave[i].classList.add('active');            
        }else{
            // le cambiamos el tipo de texto a password 
            inputPass[i].setAttribute('type','password');
            // removemos la clase del icono
            mostrarClave[i].classList.remove('fa-eye-slash');
            // agregamos el nuevo icono
            mostrarClave[i].classList.add('fa-eye');
            // le agregamos l clase active
            mostrarClave[i].classList.remove('active');
        }
    });
}

// Validamos los formularios de registro

let nombre, apellido, correo, password, cbx_notify, cbx_terminos;

if(document.getElementById('btnRegistro')){
    const btnRegistro = document.getElementById('btnRegistro');

    // evento click al boton registrar
    btnRegistro.addEventListener("click", (e) => {
        console.log("toy vivo");
        e.preventDefault();
        const msError = document.querySelector('#formRegistro .error-text');
        msError.innerHTML = "";
        msError.classList.remove('active');

       nombre = formRegistro.nombre.value.trim();
       apellido = formRegistro.apellido.value.trim();
       telefono = formRegistro.telefono.value.trim();
       correo = formRegistro.correo.value.trim();
       password = formRegistro.password.value.trim();


        // validamos que los campos NO ESTAN VACIOS
        if(nombre=="" && apellido=="" && telefono =="" && correo=="" && password==""){
            //mostramos error en pantalla
            mostrarError('Todos los campos son obligatorios',msError);
            //le agregamos la clase error a los input
            //le pasamos los daos array
            inputError([formRegistro.nombre,formRegistro.apellido,formRegistro.telefono,formRegistro.correo,formRegistro.password]);
            return false;
        }else{
            //removemos esa clase con la sigueinte funcion
            //inputErrorRemove([formRegistro.nombre,formRegistro.apellido,formRegistro.correo,formRegistro.password])
        }
        
        // validamos cada input
        if(nombre=="" || nombre == null){
            mostrarError("Ingrese su nombre",msError);
            inputError([formRegistro.nombre]);
            formRegistro.nombre.focus(); // fijamos en el elemento indicado
            return false;
        }else{
            if(!validarSoloLetras(nombre)){
                // si es diferente a true
                mostrarError('Ingrese un nombre válido, no se permiten caracteres especiales ', msError);
                inputError([formRegistro.nombre]);
                formRegistro.nombre.focus();
                return false;
            }
        }

        // Validamos el apellido
        if(apellido == "" || apellido == null){
            mostrarError('Ingrese su apellido', msError);
            inputError([formRegistro.apellido]);
            formRegistro.apellido.focus();
            return false;
        }else{
            if(!validarSoloLetras(apellido)){
                mostrarError('Ingrese un apellido válido, no se permiten caracteres especiales', msError);
                inputError([formRegistro.apellido]);
                formRegistro.apellido.focus();
                return false;
            }
        }

        if(telefono == "" || telefono == null){
            mostrarError('Ingrese su teléfono', msError);
            inputError([formRegistro.telefono]);
            formRegistro.telefono.focus();
            return false;
        }else{
            if(!validarSoloNumeros(telefono)){
                mostrarError("Ingrese un número válido",msError);
                inputError([formRegistro.telefono]);
                formRegistro.telefono.focus();
                return false;
            }
        }

        // Validamos el campo de correo
        if (correo == "" || correo == null) {
            mostrarError('Ingrese su correo', msError);
            inputError([formRegistro.correo]);
            formRegistro.correo.focus();
            return false;
        } else {
            // Utilizamos una expresión regular para verificar el formato del correo
            const correoRegex = /^\S+@\S+\.\S+$/;
            if (!correoRegex.test(correo)) {
                mostrarError('Ingrese un correo válido', msError);
                inputError([formRegistro.correo]);
                formRegistro.correo.focus();
                return false;
            }
        }

        if(password == "" || password == null){
            mostrarError('Ingrese una contraseña', msError);
            inputError([formRegistro.password]);
            document.getElementById('password').focus();
            return false;
        }else{
            if(password <= 8){
                mostrarError('Contraseña débil, minimo 8 caracteres', msError);
                inputError([formRegistro.password]);
                document.getElementById('password').focus();
                return false;
            }
        }

        //validamos el cbxx-terminos
        // if(cbx_terminos.checked==false){
        //     mostrarError('Por favor aceptar Términos y Condiciones',msError);
        //     //le agregamos un clase error a su elemento padre
        //     formRegistro.cbx_terminos.parentNode.classList.add('cbx-error');
        //     return false;
        // }else{
        //     formRegistro.cbx_terminos.parentNode.classList.remove('cbx-error');            
        // }
        //una vez hechas las verificaciones enviaremos el formulario para luego recibirlo con php
        //Se crea un objeto JSON
        const datos = {};
        datos.nombre = nombre;
        datos.apellido = apellido;
        datos.telefono = telefono;  
        datos.correo = correo;
        datos.password = password;
             
        console.log(datos);
    });

    formRegistro.cbx_terminos.addEventListener('change', (e) => {
        if(e.target.checked){
            formRegistro.cbx_terminos.parentNode.classList.remove('cbx-error');
        }
    })
}

// Validamos el formulario login
if(document.getElementById('btnLogin')){
    const btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();

        const msError = document.querySelector('#formLogin .error-text');
        msError.innerHTML = "";
        msError.classList.remove('active');

        correo = formLogin.correo.value.trim();        

        if(correo == ""  && password == ""){
            mostrarError('Por favor ingrese su usuario/contraseña', msError);
            inputError([formLogin.correo, formLogin.password]);
            return false;
        }else{

        }
        if(correo=="" || correo==null){
            mostrarError('Por favor ingrese su correo',msError);
            inputError([formLogin.correo]);
            formLogin.correo.focus();
            return false;
        }

        if(password=="" || password==null){
            mostrarError('Por favor ingrese su contraseña',msError);
            inputError([formLogin.password]);
            formLogin.password.focus();
            return false;
        }

        //enviamos el formulario ESTO ES IMPORTANTE
        formLogin.submit();
        return true;
    })
}


/*.---------------MOSTRAR ERROR----------*/
function mostrarError(mensaje,msError){
    //agregamos la clase active
    msError.classList.add('active');
    msError.innerHTML='<p>'+mensaje+'</p>';
}
/*------------------AGREGAR CLASS ERROR INPUT-----*/
function inputError(datos) {
    for (let i = 0; i < datos.length; i++) {
      if (datos[i].classList) {
        datos[i].classList.add('input-error');
      }
    }
  }
  
// Validamos solo letras
function validarSoloLetras(valor){
    if(!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/.test(valor)){
        return false;
    }
    return true;
}

// Validamos solo numeros
function validarSoloNumeros(valor){
    if(!/^([0-9]{8})*$/.test(valor)){
        return false;
    }
    return true;
}
function validarCorreo(valor){
    if(!/^[a-zA-Z0-9_.+-]+@(gmail|outlook|hotmail).mx$/.test(valor)){
        return false;
    }
    return true;
}