let style;
let model_name;
let modal_asked = "./models/style-transfer/la_muse/" ;

function ask(){
	style = ml5.styleTransfer(modal_asked , modelLoaded);
}

function modelLoaded() {
  console.log('Model Loaded!');
  style.transfer(document.getElementById('img'), function(err, resultImg) {
  	img.src = resultImg.src;
  });

}

function la_muse(){
	model_name = "la_muse";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}
function matilde_perez(){
	model_name = "matilde_perez";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}

function matta(){
	model_name = "matta";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}
function rain_princess(){
	model_name = "rain_princess";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}

function scream(){
	model_name = "scream";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}
function udnie(){
	model_name = "udnie";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}

function wave(){
	model_name = "wave";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}
function wreck(){
	model_name = "wreck";
	modal_asked = "./models/style-transfer/" + model_name + "/";
	ask();
}
