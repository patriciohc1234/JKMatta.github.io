
var Product = { }; //no tocar
var Count = { }; //no tocar
var arrayListProduct = []; //no tocar
var totalPresupuesto = 0;
var totalCosto = 0;
var comprados = c;
var contador = 0;
var cantMax = 0;
var s = 0;
var c = 0;


btnAdd.addEventListener("click", function( mouse ){
	AddProducts();
});

let nameList = JSON.parse( localStorage.getItem( "viewList" ) );
console.log("Lista Traida: "+nameList);
var listName = "Productos"+nameList;

(function(){

	if (localStorage.getItem( "viewList" )) {
		let getList = JSON.parse( localStorage.getItem( "viewList" ) );
		let detailsList = JSON.parse( localStorage.getItem( getList ) );
		var nombre = document.getElementById( "nameList" );
		nombre.innerHTML = detailsList.nombre;
		var cantidad = document.getElementById( "cantList" );
		cantidad.innerHTML = detailsList.cantidad;
		cantMax = detailsList.cantidad;

		//------------AGREGAR PRODUCTOS LA LA TABLA -------------------------
		let getItems = JSON.parse( localStorage.getItem( listName ) );
		for (var i = 0; i < getItems.length; i++) {
			console.log(getItems[i].nombre);
			var nid = "state"+i;
			var nameid = "button"+(i+1);
			var tbody = document.getElementById( "tbody" );
			var tr = document.createElement( "tr" );
			var tdId = document.createElement( "td" );
			var tdName = document.createElement( "td" );
			var tdPresu = document.createElement( "td" );
			var tdCosto = document.createElement( "td" );
			var tdTienda = document.createElement( "td" );
			var tdNota = document.createElement( "td" );
			var tdState = document.createElement( "td" );
			nid = document.createElement( "button" );

			tdId.innerHTML = i+1;
			contador = (i+1);
			console.log("Contador: "+contador);
			tdName.innerHTML = getItems[i].nombre;
			tdPresu.innerHTML = getItems[i].presupuesto;
			tdCosto.innerHTML = getItems[i].valor;
			tdTienda.innerHTML = getItems[i].tienda;
			tdNota.innerHTML = getItems[i].nota;
			nid.id = nameid;
			nid.innerHTML = "Check";

			tr.appendChild( tdId );
			tr.appendChild( tdName );
			tr.appendChild( tdPresu );
			tr.appendChild( tdCosto );
			tr.appendChild( tdTienda );
			tr.appendChild( tdNota );
			tdState.appendChild( nid );
			tr.appendChild( tdState );

			tbody.appendChild( tr );
		}

		let getButton = JSON.parse( localStorage.getItem( listName ) );
		for (var x = 0; x < getButton.length; x++) {
			var nameid = "button"+(x+1);
			var buton = document.getElementById( nameid );
			buton.onclick = function( mouse ){
				console.log(x);
				Count = {
					cont: s = s + 1,
				}
				localStorage.setItem("Count"+nameList, JSON.stringify(Count));
				let auxcontador = JSON.parse( localStorage.getItem( "Count"+nameList ) );
				c = auxcontador.cont;
				if (c == 3 ) {
					console.log("Lista Terminada!");
				}
			};
		}


		for (var i = 0; i < getItems.length; i++) {
			var Presupuesto = parseInt(getItems[i].presupuesto);
			var Costo = parseInt(getItems[i].valor);
			totalPresupuesto = totalPresupuesto + Presupuesto;
			totalCosto = totalCosto + Costo;
			console.log("Total Presupuesto: $"+totalPresupuesto);
			console.log("Total Costo: $"+totalCosto);

			var presu = document.getElementById( "presu" );
			presu.innerHTML = totalPresupuesto.toString();

			var cost = document.getElementById( "cost" );
			cost.innerHTML = totalCosto.toString();

			console.log("Tamaño Arreglo: "+arrayListProduct.length);

			Detail = {
				presu: totalPresupuesto,
				cost: totalCosto,
				comp: comprados
			}

			localStorage.setItem("Detail"+nameList, JSON.stringify(Detail));
		}

		localStorage.setItem("GraficName", JSON.stringify("Detail"+nameList));

		if(contador == cantMax){
			alert("Lista Llena");
			btnAdd.disabled = true;
			btnAdd.innerHTML = "No Disponible";
		}
		
	}

})();


function AddProducts(){

	if (localStorage.getItem( listName )) {
		var nombre = document.getElementById( "nombre" ); 
		var presupuesto = document.getElementById( "presupuesto" ); 
		var valor = document.getElementById( "valor" ); 
		var tienda = document.getElementById( "tienda" ); 
		var nota = document.getElementById( "nota" ); 

		Product = {
			nombre: nombre.value, 
			presupuesto: presupuesto.value, 
			valor: valor.value, 
			tienda: tienda.value, 
			nota: nota.value
		}

		arrayListProduct = JSON.parse( localStorage.getItem( listName ) );

		arrayListProduct.push(Product);
		localStorage.setItem("Productos"+nameList, JSON.stringify(arrayListProduct));
		console.log("nombre lista: "+nameList);
		console.log(arrayListProduct);

		alert("Producto Agregado");
		location.reload();
	}else{
		var nombre = document.getElementById( "nombre" ); 
		var presupuesto = document.getElementById( "presupuesto" ); 
		var valor = document.getElementById( "valor" ); 
		var tienda = document.getElementById( "tienda" ); 
		var nota = document.getElementById( "nota" ); 

		Product = {
			nombre: nombre.value, 
			presupuesto: presupuesto.value, 
			valor: valor.value, 
			tienda: tienda.value, 
			nota: nota.value
		}

		//arrayListProduct = JSON.parse( localStorage.getItem( listName ) );

		arrayListProduct.push(Product);
		localStorage.setItem("Productos"+nameList, JSON.stringify(arrayListProduct));
		console.log("nombre lista: "+nameList);
		console.log(arrayListProduct);

		alert("Producto Agregado");
		location.reload();
	}

	
}