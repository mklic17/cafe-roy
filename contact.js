$('.emailUs').on('click', function(ev){
  ev.preventDefaults;
  window.location.href = 'mailto:cafeRoy@DePauw.edu?subject=ContactUs&=Hello,';
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.6400, lng: -86.8630},
    zoom: 16,
  });
  var marker = new google.maps.Marker({
   position: {lat: 39.6409, lng: -86.86357},
   map: map,
   title: 'Cafe Roy',
 });
 var contentString = '<div id="content">'+
     '<div id="siteNotice">'+
     '</div>'+
     '<h1 id="firstHeading" class="firstHeading">Cafe Roy</h1>'+
     '<div id="bodyContent">'+
     '<p><b>Cafe Roy</b>, is located on the northeastern part of Roy\'O West Library.  </p>'+
     '<a href="index.html">Home</a> '+

     '</div>'+
     '</div>';
 var infowindow = new google.maps.InfoWindow({
   content: contentString
 });

 marker.addListener('click', function() {
   infowindow.open(map, marker);
 });

}
