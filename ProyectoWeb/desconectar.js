/* 
JavaScript / XML
web o pagina: ejercicios de XML y JavaScript
autor: Prof. Carlos Boni
fecha: 12 mayo 2021
resumen: lectura y carga en array bidimensional de un XML

sintesis:
la lógica se basa en el uso de tres variables de tipo sessionStorage
usuarioLogueado : si existe, su valor es el nombre de usuario en sesion
usuarioIntentando y claveIntentando: si existen significa que debemos
validarlas para crear usuarioLogueado si corresponde
*/

// variable global de la pagina

// las siguientes variables estarán como sessionStorage
let usrIntentando = "";
let claveIntentando = "";

function controlar(){
	// determinamos en qué estado se carga la página:
	// 1 - sin usuario
	// 2 - usuario intentando ingresar
	// 3 - usuario con sesion iniciada
	$("#ingresar").show();
	$("#desconectar").hide();
			
	if (sessionStorage.getItem("usrLogueado")) {
		// estado 3 de nuestro diagrama de estados - con usuario
		// estamos cargando la página teniendo un usuario logueado previamente
		// y con la sesión activa pues no se ha desconectado aún
		// ocultamos formulario de login y mostramos desconectar
		$("#ingresar").hide();
		$("#desconectar").show();	
		
	} else {
		//if (sessionStorage.getItem("usuarioIntentando")) {
			// estado 2 de nuestro diagrama de estados - transición
			// estamos recargando luego de que haya un intento de login
			// debemos validar si el usuario existe
			validarXML();
			// tardo un poco en recargar para dar tiempo a AJAX?
			//for(let timer=1;timer<1000000;timer++);
			//location.reload();
			
		//} else {
			// estado 1 de nuestro diagrama de estados - sin usuario
			// mostramos formulario de login y ocultamos desconectar
			//$("#ingresar").show();
			//$("#desconectar").hide();
		}
		nombreUSR();
	}

	function desconectar(){
		sessionStorage.removeItem("usrLogueado");
		sessionStorage.removeItem("usrIntentando");
		sessionStorage.removeItem("claveIntentando");
		location.reload();
	}

	
	function intentar(){
		
		  
		  // oculta la opción de login 
		  $("#ingresar").hide();
		  
		  // Almacena un valor usando el método setItem del objeto localStorage
		  var x=document.forms["miFormulario"]["usrIntentando"].value;
		  var y=document.forms["miFormulario"]["claveIntentando"].value;
		  sessionStorage.setItem("usrIntentando", x);
		  sessionStorage.setItem("claveIntentando", y);
		  validarXML();
		  location.reload();
		  return;
		  
		  // ya tengo en memoria webStorage lo que puso en el formulario
		  // al recargarse la página podré recordar esta información

		
	}
	
	function validarXML() {
		
		// lee desde aquí.
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				miFuncion(this);
			}
		};
		xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados.xml", true);
		xhr.send();
	}

	function miFuncion(xml) {
	  var i;
	  var usrNom;
	  var usrPsw;
	  var usuario = [];
	  var xmlDoc = xml.responseXML;
	  var x = xmlDoc.getElementsByTagName("usuario");
	  sessionStorage.removeItem("usrLogueado");
	  
	  for (i = 0; i <x.length; i++) { 
		// leo las etiquetas que me interesan del objeto
		usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
		usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
		// actualizo la tabla de visualización
		if ((usrNom == sessiosStorage.getItem("usrIntentando")) && (usrPsw == sessionStrorage.getItem("claveIntentando"))) {
		  // destaca el usuario que coincide con lo que buscamos
		  sessionStorage.setItem("usrLogueado",usrNom);
		}
	  }
	  return;
	}

	function nombreUSR(){
		if(sessionStorage.usrLogueado){
			$("#mensajeUSR").text('Hola ' + sessionStorage.getItem("usrLogueado"));
			$("#mensajeSesion").text('Logout');
		}
		else{
			$("#mensajeUSR").text('Usuario no registrado');
			$("#mensajeSesion").text('Login');
		}
	}

	
	
