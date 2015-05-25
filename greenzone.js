google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(51.223013,4.417733),
            zoom: 13,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: true,
            scrollwheel: true,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b69439"
            },
            {
                "lightness": "61"
            },
            {
                "saturation": "16"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "color": "#93b439"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "color": "#de8c34"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#a54643"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#83b3c3"
            }
        ]
    }
],
        }
        var mapElement = document.getElementById('GreenzoneMap');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
        ['Lunchbox', 'undefined', 'undefined', 'undefined', 'undefined', 51.214135, 4.409238599999981, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png'],['Eten vol leven', 'undefined', 'undefined', 'undefined', 'undefined', 51.2219589, 4.404899999999998, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png'],['Greenway', 'undefined', 'undefined', 'undefined', 'undefined', 51.2192767, 4.4010776999999734, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png'],['Rosenobel', 'undefined', 'undefined', 'undefined', 'undefined', 51.2206105, 4.400447299999996, 'https://mapbuildr.com/assets/img/markers/solid-pin-red.png'],['De zoo', 'undefined', 'undefined', 'undefined', 'undefined', 51.2184295, 4.421587400000021, 'https://mapbuildr.com/assets/img/markers/solid-pin-yellow.png'],['Aquatopia', 'undefined', 'undefined', 'undefined', 'undefined', 51.2193572, 4.421567900000014, 'https://mapbuildr.com/assets/img/markers/solid-pin-yellow.png'],['De pauw pets', 'undefined', 'undefined', 'undefined', 'undefined', 51.21351929999999, 4.409322800000041, 'https://mapbuildr.com/assets/img/markers/solid-pin-yellow.png'],['Dierenasiel', 'undefined', 'undefined', 'undefined', 'undefined', 51.2198771, 4.401135599999975, 'https://mapbuildr.com/assets/img/markers/solid-pin-yellow.png'],['Oxfam', 'undefined', 'undefined', 'undefined', 'undefined', 51.22005110000001, 4.414137200000027, 'https://mapbuildr.com/assets/img/markers/solid-pin-orange.png'],['Het natuurhuis', 'undefined', 'undefined', 'undefined', 'undefined', 51.2168951, 4.412467800000059, 'https://mapbuildr.com/assets/img/markers/solid-pin-orange.png'],['Robuust', 'undefined', 'undefined', 'undefined', 'undefined', 51.2194376, 4.398355100000003, 'https://mapbuildr.com/assets/img/markers/solid-pin-orange.png'],['Oil & Vinegar', 'undefined', 'undefined', 'undefined', 'undefined', 51.2175543, 4.403883800000017, 'https://mapbuildr.com/assets/img/markers/solid-pin-orange.png'],['Stadspark', 'undefined', 'undefined', 'undefined', 'undefined', 51.213014, 4.412923200000023, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Park Spoor Noord', 'undefined', 'undefined', 'undefined', 'undefined', 51.2282994, 4.42857140000001, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Botanique', 'undefined', 'undefined', 'undefined', 'undefined', 51.213974, 4.4071060999999645, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png'],['Begijnhof', 'undefined', 'undefined', 'undefined', 'undefined', 51.22233989999999, 4.413734200000022, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}