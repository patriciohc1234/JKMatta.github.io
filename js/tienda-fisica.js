(function(){
        var tienda = { };
        var selectedTienda = [];
        var xhttp = new XMLHttpRequest();
        var url = "https://dachser.pythonanywhere.com/TiendaFisica/";

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
            var container = document.getElementById( "fisica" );
            var containShop = document.createElement( "div" );
            var c1 = document.createElement( "div" );
            var nombre = document.createElement("h4");
            var c2 = document.createElement( "div" );
            var nombreSucursal = document.createElement("h4");
            var c3 = document.createElement( "div" );
            var direccion = document.createElement("h4");
            var c4 = document.createElement( "div" );
            var ciudad = document.createElement("h4");
            var c5 = document.createElement( "div" );
            var region = document.createElement("h4");

            containShop.className = "view-list";
            nombre.innerHTML = "<b>Nombre: </b>"+tienda.Nombre;
            nombreSucursal.innerHTML = "<b>Sucursal: </b>"+tienda.NombreSucursal;
            direccion.innerHTML = "<b>Direccion: </b>"+tienda.Direccion;
            ciudad.innerHTML = "<b>Ciudad: </b>"+tienda.Ciudad;
            region.innerHTML = "<b>Region: </b>"+tienda.Region;
            // Add childs
            c1.appendChild( nombre );
            c2.appendChild( nombreSucursal );
            c3.appendChild( direccion );
            c4.appendChild( ciudad );
            c5.appendChild( region );
            containShop.appendChild( c1 );
            containShop.appendChild( c2 );
            containShop.appendChild( c3 );
            containShop.appendChild( c4 );
            containShop.appendChild( c5 );
            container.appendChild( containShop );
        }

    })();