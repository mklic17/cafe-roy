
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.6400, lng: -86.8630},
          zoom: 16,
        });
        var marker = new google.maps.Marker({
         position: {lat: 39.6408553, lng: -86.86370},
         map: map,
         title: 'Cafe Roy'
       });
      }
