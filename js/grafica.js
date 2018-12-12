 google.load("visualization", "1", {packages:["corechart"]});
   google.setOnLoadCallback(dibujarGrafico);
   function dibujarGrafico() {
      //Get Datos Lista(Costo y Presupuesto)
      if (localStorage.getItem( "GraficName" )) {
          let nameList = JSON.parse( localStorage.getItem( "GraficName" ) );
          let DetailList = JSON.parse( localStorage.getItem( nameList ) );
          var presu = DetailList.presu;
          var cost = DetailList.cost;
     // Tabla de datos: valores y etiquetas de la gráfica
     var data = google.visualization.arrayToDataTable([
       ['Texto', 'Valor en $'],
       ['Presupuesto', presu],
       ['Costo Real', cost]   
     ]);
     var options = {
       title: 'Comparación entre Costo Real y Presupuesto'
     }
     // Dibujar el gráfico
     new google.visualization.BarChart( 
     //ColumnChart sería el tipo de gráfico a dibujar
       document.getElementById('GraficoGoogleChart-ejemplo-1')
     ).draw(data, options);
   }
  }