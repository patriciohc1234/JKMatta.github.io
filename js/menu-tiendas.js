(function(){
        var producto = { };
        var selectedProductos = [];
        var xhttp = new XMLHttpRequest();
        var url = "https://dachser.pythonanywhere.com/TiendaFisica/";

        // Load old data
        if( localStorage.getItem( "selectedProductos" ) ) {
            selectedProductos = JSON.parse( localStorage.getItem( "selectedProductos" ) );
        }

                                                                            
        xhttp.onreadystatechange = function() {         
            if (this.readyState == 4 && this.status == 200) {
                var data = this.responseText;
                producto = JSON.parse( data );
                console.log( producto );
                for( let i in producto.results ) {
                    displayUser( producto.results[ i ], i );
                }
            }
        }

        xhttp.open("GET", url, true);
        xhttp.send();

        var displayUser =  function( producto, i  ){
            var listContainer = document.getElementById( "tiendas" );
            var listcreating = document.createElement( "p" );

            listcreating.innerHTML = producto.Nombre;
            // Add childs
            listContainer.appendChild( listcreating );
        }

    })();