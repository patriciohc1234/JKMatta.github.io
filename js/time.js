( function() {
	var d = new Date();
	var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	var fecha = document.createElement( "p" );
	var hora = document.createElement( "p" );
	var dateContainer = document.getElementById( "date" );

	fecha.innerHTML = (days[d.getDay()] + " " + d.getDate() + " " + months[d.getMonth()] +", "+ d.getFullYear());
	hora.innerHTML = (d.getHours() + ":" + d.getMinutes());

	dateContainer.appendChild( fecha );
	dateContainer.appendChild( hora );

	let nameUser = JSON.parse( localStorage.getItem( "LoginUser" ) );
	var p = document.getElementById( "welcome" );
	p.innerHTML = "Sr(a). "+nameUser;
})();