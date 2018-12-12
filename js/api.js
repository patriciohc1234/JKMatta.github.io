//Creado por Javier Matta

function validar() {
    /*
    Descripcion: El siguiente codigo sirve para hcer la conexion y 
    verificacion de los datos ingresados, los cuales son: Usuario y contraseña
    */
        var users = { };
        var selectedUsers = [];
        var xhttp = new XMLHttpRequest();
        var url = "https://dachser.pythonanywhere.com/Usuarios/";

        var user = document.getElementById("user");
        var pass = document.getElementById("pass");

        // Load old data
        if( localStorage.getItem( "selectedUsers" ) ) {
            selectedUsers = JSON.parse( localStorage.getItem( "selectedUsers" ) );
        }

                                                                            
        xhttp.onreadystatechange = function() {         
            if (this.readyState == 4 && this.status == 200) {
                var data = this.responseText;
                users = JSON.parse( data );
                console.log( users );
                for( let i in users.results ) {
                    console.log( users.results[ i ], i );
                }
            }
        }

        xhttp.open("GET", url, true);
        xhttp.send();
}