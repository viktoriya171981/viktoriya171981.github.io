'use strict;'
function computeSizeOfMapArea(imgId, svgId, polygonId) {
	var img = document.getElementById(imgId);
	var svg = document.getElementById(svgId);
	var polygon = document.getElementById(polygonId);
	var imgWidth = parseInt(getComputedStyle(img).width);
	var svgWidth = parseInt(svg.getAttribute('width'));	
	var ratio = imgWidth/svgWidth;
  var polygonPoints = polygon.getAttribute('points');
  polygonPoints = getNewPointsOfPolygon(polygonPoints, ratio);
  polygon.setAttribute('points', polygonPoints);
}

function getNewPointsOfPolygon(points, ratio) {
	var number=0;
	var newPointsString="";
  for (var i=0; i<points.length; i++) {
  	if (isNumeric(points[i]) ) {
  		number = number*10+parseInt(points[i]);
  	}
  	else
  	{  		
  		number*=ratio;
  		number = +number.toFixed(0);
  		newPointsString+=""+number+points[i];
  		number=0;
  	}  
  	if (i==points.length-1) {
  		number*=ratio;
  		number = +number.toFixed(0);
  		newPointsString+=""+number;
  		number=0;
  	}
  }
  return newPointsString;
}

function isNumeric(number) {
	return !isNaN(parseFloat(number)&&isFinite(number));
}

