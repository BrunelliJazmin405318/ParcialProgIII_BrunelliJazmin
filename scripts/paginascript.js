$(document).ready(function() {
    $("#form").validate({
        rules:{
            firstName:{
                required:true
            },
            lastName:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            address:{
                required:true
            },
            country:{
                required:true
            },
            city:{ 
                required:true
            },
            postalCode:{ 
                required:true,
                minlength:4
            }
        },
        messages:{
            firstName:{
                required:"Ingresa tu nombre"
            },
            lastName:{
                required:"Ingresa tu apellido"
            },
            email:{
                required:"Ingresa tu email",
                email:"Email inválido"
            },
            address:{
                required:"Ingresa tu dirección"
            },
            country:{
                required:"Ingresa tu país"
            },
            city:{ 
                required:"Ingresa tu ciudad"
            },
            postalCode:{ 
                required:"Ingresa tu código postal o zip",
                minlength:"Debe tener al menos 4 caracteres"
            }
        },
        submitHandler: function (form) {
            const emailQueryString = new URLSearchParams(window.location.search).get('email');
            $("#inputEmail").val(emailQueryString); 
            alert("Acción exitosa. Nombre: " + $("#inputFirstName").val() + " " + $("#inputLastName").val());
            form.submit();
        }
    });

    
    $("#form input[type='button']").click(function() {
        $("#form").submit();
    });
});