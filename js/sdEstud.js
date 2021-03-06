var arch;
function cargarP(){
	$("#lis").empty();
	$("#lis").append($("<li>",{"class":"active","id":"prin"}).append($("<a>",{"href":"#"}).text("Principiante")));
	$("#lis").append($("<li>",{"id":"med"}).append($("<a>",{"href":"#"}).text("Intermedio").click(cargarM)));
	$("#lis").append($("<li>",{"id":"avaz"}).append($("<a>",{"href":"#"}).text("Avanzado").click(cargarA)));
	$("#cuer").empty();
	$("#cuer").append("<h4><small>Intermedio</small></h4><hr style=\"margin-bottom:20px;\">");
	arch.forEach(function(item){
		if(item.difi == "Principiante"){
			agregarP(item);
		}
	});
}
function cargarM(){
	$("#lis").empty();
	$("#lis").append($("<li>",{"id":"prin"}).append($("<a>",{"href":"#"}).text("Principiante").click(cargarP)));
	$("#lis").append($("<li>",{"class":"active","id":"med"}).append($("<a>",{"href":"#"}).text("Intermedio")));
	$("#lis").append($("<li>",{"id":"avaz"}).append($("<a>",{"href":"#"}).text("Avanzado").click(cargarA)));
	$("#cuer").empty();
	$("#cuer").append("<h4><small>Intermedio</small></h4><hr style=\"margin-bottom:20px;\">");
	arch.forEach(function(item){
		if(item.difi == "Intermedio"){
			agregarI(item);
		}
	});
}
function cargarA(){
	$("#lis").empty();
	$("#lis").append($("<li>",{"id":"prin"}).append($("<a>",{"href":"#"}).text("Principiante").click(cargarP)));
	$("#lis").append($("<li>",{"id":"med"}).append($("<a>",{"href":"#"}).text("Intermedio").click(cargarM)));
	$("#lis").append($("<li>",{"class":"active","id":"avaz"}).append($("<a>",{"href":"#"}).text("Avanzado")));
	$("#cuer").empty();
	$("#cuer").append("<h4><small>Intermedio</small></h4><hr style=\"margin-bottom:20px;\">");
	arch.forEach(function(item){
		if(item.difi == "Avanzado"){
			agregarA(item);
		}
	});
}

function agregarP(item){
	$('#cuer').append(
		$('<div>').attr({"class":"panel-group","id":"accordion","style":"margin-bottom: 5px;"}).append(
			$('<div>').attr({'class':'panel panel-info'}).append(
				$('<div>').attr('class','panel-heading').append(
					$('<h4>').attr({'class':'panel-title','style':'overflow:auto'}).append(
						$('<a>').attr({
							'data-toggle':'collapse',
							'data-parent':'#accordion',
							'href':'#collapse' + item.id
						}).append("<span style=\"margin-top:8px;font-weight: bold;\">"+ item.titulo)
					)
					.append($("<a>",{"href":"sb_estd2.html"}).append($("<button>",{"class":"btn btn-info","style":"float:right"}).text("Tomar")))
				),
				$('<div>').attr({
							'class':'panel-collapse collapse',
							'id':'collapse' + item.id
							}).append( 
								$('<div>').attr({"class":"panel-body","id":item.id}).append(
									"Autor: " + item.autor + "<br>" +
									"Descripcion: " + item.descri + "<br>" +
									"<strong>Resuelto por: " + item.nEstd +"</strong><br><br>"
								)
							)
			)
		)
	)
	
	item.etiquetas.split(",").forEach(function(o){
		$("#"+item.id).append($("<span>",{"class":"bg-primary","style":"padding: 2px 5px 2px 5px;margin-right:1%;"}).text(o));
	})
	
	var i = item.id;
	localStorage.setItem("id",i);
}

function agregarI(item){
	$('#cuer').append(
		$('<div>').attr({"class":"panel-group","id":"accordion","style":"margin-bottom: 5px;"}).append(
			$('<div>').attr({'class':'panel panel-warning'}).append(
				$('<div>').attr('class','panel-heading').append(
					$('<h4>').attr({'class':'panel-title','style':'overflow:auto'}).append(
						$('<a>').attr({
							'data-toggle':'collapse',
							'data-parent':'#accordion',
							'href':'#collapse' + item.id
						}).append("<span style=\"margin-right: 2%;font-weight: bold;\">"+ item.titulo)
					)
					.append($("<a>",{"href":"sb_estd2.html"}).append($("<button>",{"class":"btn btn-warning","style":"float:right"}).text("Tomar")))
				),
				$('<div>').attr({
							'class':'panel-collapse collapse',
							'id':'collapse' + item.id
							}).append( 
								$('<div>').attr({"class":"panel-body","id":item.id}).append(
									"Autor: " + item.autor + "<br>" +
									"Descripcion: " + item.descri + "<br>" +
									"<strong>Resuelto por: " + item.nEstd +"</strong><br><br>"
								)
							)
			)
		)
	)
	
	item.etiquetas.split(",").forEach(function(o){
		$("#"+item.id).append($("<span>",{"class":"bg-primary","style":"padding: 2px 5px 2px 5px;margin-right:1%;"}).text(o));
	})
	
	var i = item.id;
	localStorage.setItem("id",i);
}

function agregarA(item){
	$('#cuer').append(
		$('<div>').attr({"class":"panel-group","id":"accordion","style":"margin-bottom: 5px;"}).append(
			$('<div>').attr({'class':'panel panel-danger'}).append(
				$('<div>').attr('class','panel-heading').append(
					$('<h4>').attr({'class':'panel-title','style':'overflow:auto'}).append(
						$('<a>').attr({
							'data-toggle':'collapse',
							'data-parent':'#accordion',
							'href':'#collapse' + item.id
						}).append("<span style=\"margin-right: 2%;font-weight: bold;\">"+ item.titulo)
					)
					.append($("<a>",{"href":"sb_estd2.html"}).append($("<button>",{"class":"btn btn-danger","style":"float:right"}).text("Tomar")))
				),
				$('<div>').attr({
							'class':'panel-collapse collapse',
							'id':'collapse' + item.id
							}).append( 
								$('<div>').attr({"class":"panel-body","id":item.id}).append(
									"Autor: " + item.autor + "<br>" +
									"Descripcion: " + item.descri + "<br>" +
									"<strong>Resuelto por: " + item.nEstd +"</strong><br><br>"
								)
							)
			)
		)
	)
	
	item.etiquetas.split(",").forEach(function(o){
		$("#"+item.id).append($("<span>",{"class":"bg-primary","style":"padding: 2px 5px 2px 5px;margin-right:1%;"}).text(o));
	})
	
	var i = item.id;
	localStorage.setItem("id",i);
}

$(document).ready(function(){
	url = "json/ejercicios.json";
	$.getJSON(url,function(resp){
		arch = resp;
		arch.forEach(function(item){
			if(item.difi == "Principiante"){
					agregarP(item);
			}
		})
	})
	$("#prin").click(cargarP);
	$("#med").click(cargarM);
	$("#avaz").click(cargarA);

})