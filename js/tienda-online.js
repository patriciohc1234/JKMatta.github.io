(function(){
        var tienda = { };
        var selectedTienda = [];
        var xhttp = new XMLHttpRequest();
        var url = "https://dachser.pythonanywhere.com/TiendaOnline/";

        // Load old data
        if( localStorage.getItem( "selectedTienda" ) ) {
            selectedTienda = JSON.parse( localStorage.getItem( "selectedTienda" ) );
        }

                                                                            
        xhttp.onreadystatechange = function() {         
            if (this.readyState == 4 && this.status == 200) {
                var data = this.responseText;
                tienda = JSON.parse( data );
                console.log( tienda );
                for( let i in tienda.results ) {
                    displayUser( tienda.results[ i ], i );
                }
            }
        }

        xhttp.open("GET", url, true);
        xhttp.send();

        var displayUser =  function( tienda, i  ){
            var container = document.getElementById( "online" );
            var containShop = document.createElement( "div" );
            var c1 = document.createElement( "div" );
            var nombre = document.createElement("h4");
            var c2 = document.createElement( "div" );
            var nombreSucursal = document.createElement("h4");
            var c3 = document.createElement( "div" );
            var link = document.createElement("h4");
            var c4 = document.createElement( "div" );
            var email = document.createElement("h4");

            containShop.className = "view-list";
            nombre.innerHTML = "<b>Nombre: </b>"+tienda.Nombre;
            nombreSucursal.innerHTML = "<b>Sucursal: </b>"+tienda.NombreSucursal;
            link.innerHTML = "<b>Link: </b>"+tienda.Link;
            email.innerHTML = "<b>Email: </b>"+tienda.Email;
            // Add childs
            c1.appendChild( nombre );
            c2.appendChild( nombreSucursal );
            c3.appendChild( link );
            c4.appendChild( email );
            containShop.appendChild( c1 );
            containShop.appendChild( c2 );
            containShop.appendChild( c3 );
            containShop.appendChild( c4 );
            container.appendChild( containShop );
        }

    })();