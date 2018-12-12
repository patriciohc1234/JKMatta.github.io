
var arregloList = []; //no tocar

(function(){

	if (localStorage.getItem( "Listas" ) ){
		let arrayList = JSON.parse( localStorage.getItem( "Listas" ) );
		for (var i = 0; i < arrayList.length; i++) {
			let DetailList = JSON.parse( localStorage.getItem( arrayList[i] ) );
			let detalles = JSON.parse( localStorage.getItem( "Detail"+arrayList[i] ) );
			console.log("Lista Encontrada: "+ DetailList.nombre + " " + DetailList.cantidad);

			var listContainer = document.getElementById( "container-lists" );
			var DivViewList = document.createElement( "div" );

			var DivNombre = document.createElement( "div" );
			var Nombre = document.createElement( "h4" );

			var DivProductos = document.createElement( "div" );
			var Productos = document.createElement( "h4" );

			var DivComprados = document.createElement( "div" );
			var Comprados = document.createElement( "h4" );

			var DivPresupuesto = document.createElement( "div" );
			var Presupuesto = document.createElement( "h4" );

			var DivValor = document.createElement( "div" );
			var Valor = document.createElement( "h4" );

			var buttonView = document.createElement( "button" );
			var buttonDelete = document.createElement( "button" );

			DivViewList.className = "view-list";
			buttonView.href = "viewlist.html";

			buttonView.id = DetailList.nombre;
			buttonView.addEventListener("click", function( mouse ){
				SaveKeyList(DetailList.nombre);
			});
			

			if (localStorage.getItem( "Detail"+arrayList[i]  ) ){
				Nombre.innerHTML = "<b>Nombre: </b>"+DetailList.nombre;
				Productos.innerHTML = "<b>Productos: </b>"+DetailList.cantidad;
				Comprados.innerHTML = "<b>Comprados: </b>"+detalles.comp;
				Presupuesto.innerHTML = "<b>Presupuesto: $</b>"+detalles.presu;
				Valor.innerHTML = "<b>Valor: $</b>"+detalles.cost;
				buttonDelete.innerHTML = "Terminar";
				buttonView.innerHTML = "Ver";
			}else{
				Nombre.innerHTML = "<b>Nombre: </b>"+DetailList.nombre;
				Productos.innerHTML = "<b>Productos: </b>"+DetailList.cantidad;
				Comprados.innerHTML = "<b>Comprados: 0</b>";
				Presupuesto.innerHTML = "<b>Presupuesto: $0</b>";
				Valor.innerHTML = "<b>Valor: $0</b>";
				buttonDelete.innerHTML = "Terminar";
				buttonView.innerHTML = "Ver";
			}

			

			DivNombre.appendChild( Nombre );
			DivProductos.appendChild( Productos );
			DivComprados.appendChild( Comprados );
			DivPresupuesto.appendChild( Presupuesto );
			DivValor.appendChild( Valor );

			DivViewList.appendChild( DivNombre );
			DivViewList.appendChild( DivProductos );
			DivViewList.appendChild( DivComprados );
			DivViewList.appendChild( DivPresupuesto );
			DivViewList.appendChild( DivValor );
			DivViewList.appendChild( buttonDelete );
			DivViewList.appendChild( buttonView );

			listContainer.appendChild( DivViewList );
		}
	}else{
		console.log("No hay entradas en el localStorage");
	}

})();

function CreateNewList(){
    var name = document.getElementById("name");
    var cant = document.getElementById("cant");
    


    if (!name.value == " " && !cant.value == " ") {
        //Traemos los posibles datos de listas ya creadas
        if (localStorage.getItem( "Listas" ) ) {
            getListas();
        }

        let arrangeList = {
            nombre: name.value,
            cantidad: cant.value
        }

        arregloList.push(name.value);

        console.log(arregloList);
        console.log(arrangeList);
        localStorage.setItem(name.value, JSON.stringify(arrangeList)); //Agregamos Las Listas con la Key = NombreLista
        localStorage.setItem("Listas", JSON.stringify(arregloList)); //Agregamos Las Listas con la Key = Listas
        alert("Lista "+name.value+" creada!");
        location.reload();
    }else{
    	alert("Verifica los datos");
    }
}

function getListas(){
    arregloList = JSON.parse( localStorage.getItem( "Listas" ) );
    console.log( "GET: "+arregloList );
}

function SaveKeyList(i){
	window.location.href = 'viewlist.html';
	localStorage.setItem("viewList", JSON.stringify(i));
}