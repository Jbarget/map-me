var map = L.map('map').setView([46.321234, 5.808122], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jbarget.o89b5cbg',
    accessToken: 'pk.eyJ1IjoiamJhcmdldCIsImEiOiJjaWhjZDE0ZW8wMmJjdGNsejl0M2JiZnZvIn0.RpRDGObfdNuHY3LwNUZjug'
}).addTo(map);

L.marker([41.2969, 2.0783]).addTo(map)
  .bindPopup("<b>You in da airport, looking beaut</b><br><img width=500 height=335 src = 'https://cloud.githubusercontent.com/assets/11725595/11348622/7e4f24d4-921f-11e5-8790-6f214ae6a1e4.JPG'/>");

L.marker([41.384469,2.181719]).addTo(map)
  .bindPopup("<b>You with a fluffy jumper and me being silly</b><br><img width=400 height=500 src = 'https://cloud.githubusercontent.com/assets/11725595/13113571/79975122-d587-11e5-8e10-6791cc2029de.jpg'/>");

L.marker([41.413594,2.151171]).addTo(map)
  .bindPopup("<b>Me posin'</b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13113592/95022a36-d587-11e5-8149-f6171e9522e0.JPG'/>");

L.marker([41.377445,2.189845]).addTo(map)
  .bindPopup("<b>Us on the beach having loads more fun than anyone else</b><br><img width=400 height=500 src = 'https://cloud.githubusercontent.com/assets/11725595/13113798/9c8135da-d588-11e5-9866-2fb1c3fcf9af.jpg'/>");

L.marker([51.5196869,-0.1382005]).addTo(map)
  .bindPopup("<b>This is where I want you feel/be with me</b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13113908/0f95b82a-d589-11e5-801b-a8f83538b6b1.jpg'/>");

L.marker([41.385999,2.1791541]).addTo(map)
  .bindPopup("<b>This is the most beautiful i've ever seen you</b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13114003/83b9a64e-d589-11e5-9789-17e0e6649681.JPG'/>");

L.marker([51.5277483,-0.2189593]).addTo(map)
  .bindPopup("<b>Our first proper proper time me taking you for dinner </b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13114170/33cc2d9a-d58a-11e5-80dd-b740736a6680.JPG'/>");

L.marker([53.3786039,-2.3471263]).addTo(map)
  .bindPopup("<b>That time we killed all the santa's </b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13114378/1e4a3768-d58b-11e5-8201-3774a649e84e.JPG'/>");

L.marker([53.381551,-2.3713045]).addTo(map)
  .bindPopup("<b>That place I always forget the name of which was very us</b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13114656/5fae9c34-d58c-11e5-90a1-c5d4cad6e364.JPG'/>");

L.marker([51.536706,-0.164847]).addTo(map)
  .bindPopup("<b>The fallen tree on the way to Primrose :) </b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13114970/bd0eaecc-d58d-11e5-9cc4-4f1a2f5a778e.JPG'/>");

L.marker([53.373994,-2.3601002]).addTo(map)
  .bindPopup("<b>Christmas Day at yours :) </b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13114803/fc344a54-d58c-11e5-9b41-abb82ff55382.jpg'/>");

L.marker([51.539576,-0.16312]).addTo(map)
  .bindPopup("<b>A really good eve with you in Primrose </b><br><img width=500 height=370 src = 'https://cloud.githubusercontent.com/assets/11725595/13115065/34ce594e-d58e-11e5-894d-d4a66528fcc9.JPG'/>")

L.marker([51.5285861,-0.1523414]).addTo(map)
  .bindPopup("<b>You being very serious on the way to the secret garden </b><br><img width=400 height=500 src = 'https://cloud.githubusercontent.com/assets/11725595/13115077/4ac5c7be-d58e-11e5-9a3e-5a28fe55edf6.jpg'/>")

L.marker([51.538242,-0.160199]).addTo(map)
  .bindPopup("<b>My favourite day with you last summer </b><br><img width=400 height=500 src = 'https://cloud.githubusercontent.com/assets/11725595/13115336/3b7b11d2-d58f-11e5-9963-c071607c345d.jpg'/>")
