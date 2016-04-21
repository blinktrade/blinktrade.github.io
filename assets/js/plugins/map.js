$(document).ready(function(){

    if(!document.contains(document.querySelector('#map')))
        return;

    var cord = {
       brazil:   { latitude: -15.86, longitude: -47.55 },
       chile:    { latitude: -33.39, longitude: -70.78 },
       pakistan: { latitude: 33.61,  longitude: 73.09  },
       vietnam:  { latitude: 21.22,  longitude: 105.80 },
       ven:      { latitude: 10.28,  longitude: -66.81 }
    };

    var arcs = new Datamap({
        element: document.getElementById("map"),
        geographyConfig: {
          borderColor: 'rgb(75, 71, 86)',
          highlightFillColor: '#FC3959',
        },
        scope: 'world',
        width: null,
        height: 620,
        fills: {
            defaultFill: "#312f38",
            win: 'red'
        },
        setProjection: function(element) {
            var projection = d3.geo.equirectangular()
            .center([0,12])
            .scale(250)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

            var path = d3.geo.path().projection(projection);

            return {path: path, projection: projection};
        },
        data: {
            'ZAF': { fillKey: 'gt50' },
            'ZWE': { fillKey: 'lt25' },
            'NGA': { fillKey: 'lt50' },
            'MOZ': { fillKey: 'eq50' },
            'MDG': { fillKey: 'eq50' },
            'EGY': { fillKey: 'gt75' },
            'TZA': { fillKey: 'gt75' },
            'LBY': { fillKey: 'eq0' },
            'DZA': { fillKey: 'gt500' },
            'SSD': { fillKey: 'pink' },
            'SOM': { fillKey: 'gt50' },
            'GIB': { fillKey: 'eq50' },
            'AGO': { fillKey: 'lt50' }
        }
    });

    arcs.arc([
    // From Brazil to Venezuela
    {
        origin: cord.brazil,
        destination: cord.ven,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    },
    // From Venezuela to Pakistan
    {
        origin: cord.ven,
        destination: cord.pakistan,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    },
    // From Vietnam to pakistan
    {
        origin: cord.vietnam,
        destination: cord.pakistan,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    },
    // From Chile to Brazil
    {
        origin: cord.chile,
        destination: cord.brazil,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    },
    // From chile to venezuela
    {
        origin: cord.chile,
        destination: cord.ven,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    },
    // From Brazil to pakistan
    {
        origin: cord.brazil,
        destination: cord.pakistan,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    },
    // From Vietnam to brazil
    {
        origin: cord.vietnam,
        destination: cord.brazil,
        options: {
            strokeWidth: 2,
            greatArc: true
        }
    }
    ],  {
      strokeColor: '#FC3959',
      strokeWidth: 1,
      arcSharpness: 1.4,
      animationSpeed: 4000
    });

});

