var myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: center_map,
        zoom: 14,
        controls: ['routeButtonControl', 'fullscreenControl']
    }, {
        searchControlProvider: 'yandex#search'
    });
}
