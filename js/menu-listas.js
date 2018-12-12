

(function(){
        var list = { };
        var selectedList = [];
        var xhttp = new XMLHttpRequest();
        var url = "https://dachser.pythonanywhere.com/Listas/";

        // Load old data
        if( localStorage.getItem( "selectedList" ) ) {
            selectedList = JSON.parse( localStorage.getItem( "selectedList" ) );
        }

        if (localStorage.getItem( "Listas" ) ) {
                let arrayList = JSON.parse( localStorage.getItem( "Listas" ) );
                for (var i = 0; i < arrayList.length; i++) {
                    var listContainer = document.getElementById( "listas" );
                    var listcreating = document.createElement( "p" );
                    var nameList = arrayList[i]
                    listcreating.innerHTML = nameList;
                    // Add childs
                    listContainer.appendChild( listcreating );
                }
        }else{
            var listContainer = document.getElementById( "listas" );
            var ldsspinner = document.createElement( "div" );
            var div1 = document.createElement( "div" );
            var div2 = document.createElement( "div" );
            var div3 = document.createElement( "div" );
            var div4 = document.createElement( "div" );
            var div5 = document.createElement( "div" );
            var div6 = document.createElement( "div" );
            var div7 = document.createElement( "div" );
            var div8 = document.createElement( "div" );
            var div9 = document.createElement( "div" );
            var div10 = document.createElement( "div" );
            var div11 = document.createElement( "div" );
            var div12 = document.createElement( "div" );

            ldsspinner.className = "lds-spinner";
            ldsspinner.appendChild( div1 );
            ldsspinner.appendChild( div2 );
            ldsspinner.appendChild( div3 );
            ldsspinner.appendChild( div4 );
            ldsspinner.appendChild( div5 );
            ldsspinner.appendChild( div6 );
            ldsspinner.appendChild( div7 );
            ldsspinner.appendChild( div8 );
            ldsspinner.appendChild( div9 );
            ldsspinner.appendChild( div10 );
            ldsspinner.appendChild( div11 );
            ldsspinner.appendChild( div12 );

            listContainer.appendChild( ldsspinner );
        }

                                                                            
        xhttp.onreadystatechange = function() {         
            if (this.readyState == 4 && this.status == 200) {
                var data = this.responseText;
                list = JSON.parse( data );
                for( let i in list.results ) {
                    console.log( list.results[ i ], i );
                    displayUser( list.results[ i ], i );
                }
            }
        }

        xhttp.open("GET", url, true);
        xhttp.send();

        var displayUser =  function( list, i  ){
            var listContainer = document.getElementById( "listas" );
            var listcreating = document.createElement( "p" );

            listcreating.innerHTML = list.Nombre;
            // Add childs
            listContainer.appendChild( listcreating );
        }

    })();