function loadDocGame() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableGame(this);
    }
    xhttp.open("GET", "celulares (1).xml");
    xhttp.send();
  }
  function TableGame(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("cel");
    let table="<tr><th>Nombre</th><th>Año</th><th>color";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("Nombre")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Año")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("color")[0].childNodes[0].nodeValue 
      
      
    
      ;
    }
    document.getElementById("demo").innerHTML = table;
  }
  
  function loadDocCard() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      TableCard(this);
    }
    xhttp.open("GET", "series (1).xml");
    xhttp.send();
  }
  function TableCard(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("Serie");
    let table="<tr><th>Nombre</th><th>Año</th><th>Genero</th><th>temporadas";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("Nombre")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Año")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("Genero")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("temporadas")[0].childNodes[0].nodeValue 
      
      
      ;
    }
    document.getElementById("demo").innerHTML = table;
    xhttp.close();
  }