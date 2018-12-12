

function Validate(){

		var user = document.getElementById("user");
	    var pass = document.getElementById("pass");

	    var Usuarios = { };
        var selectedUsers = [];
        var xhttp = new XMLHttpRequest();
        var url = "https://n0isu.pythonanywhere.com/Usuarios/";

        // Load old data
        if( localStorage.getItem( "selectedUsers" ) ) {
            selectedUsers = JSON.parse( localStorage.getItem( "selectedUsers" ) );
        }

                                                                            
        xhttp.onreadystatechange = function() {         
            if (this.readyState == 4 && this.status == 200) {
                var data = this.responseText;
                Usuarios = JSON.parse( data );
                for( let i in Usuarios.results ) {
                    console.log( Usuarios.results[ i ], i );
                    if (user.value == Usuarios.results[ i ].Username  && pass.value == Usuarios.results[ i ].PassUser) {
				    	window.location.href = 'menu.html';
				    	localStorage.setItem("LoginUser", JSON.stringify(user.value));
				        console.log("Exito!");
				    }
                }
            }
        }

        xhttp.open("GET", url, true);
        xhttp.send();
}