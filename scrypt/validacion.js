// funcion para validar el login 
function validar()
		{
			var usuario = document.getElementById("idUser").value;
			var Contraseña = document.getElementById("idPass").value;	
// compramos el usuario y contraseña 
			if(usuario == "admin" && Contraseña == 12345 )
			{
				alert("Usuario y Contraseña es validos");
                window.location = "./paginas/productos.html";
			}
            if(usuario == "egoo" && Contraseña == 54321)
            {
                alert("usuario y contraseña es valido");
                window.location = "./paginas/productos.html";
            }
			else
			{
				alert("el usuario o contraseña ingresado es incorrecto");
			}
		}