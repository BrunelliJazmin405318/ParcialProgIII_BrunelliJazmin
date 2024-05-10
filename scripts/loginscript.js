$("#myForm").validate({
    rules: {
        usuario: {
          required:true,
          maxlength:50
        },
        password:{
            required:true,
            maxlength:20,
            
        }
    },
    messages:{
        usuario:{
            required:"Ingrese un usuario!",
            maxlength:"El usuario no puede tener mas de 50 caracteres"
        },
        password:{
            required:"Ingrese una contraseña!",
            maxlength:"La contraseña no puede tener mas de 20 caracteres"
        }
    },
    submitHandler: function(form){
        const inputUsuario = $("#inputUsuario");
    const inputPassword = $("#inputPassword");

    if (inputUsuario.val() === "alumnotup@frc.utn.edu.ar" && inputPassword.val() === "123456") {
        const email = inputUsuario.val();
        
        window.location.href = "pagina.html?email=" + encodeURIComponent(email);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
    }
})