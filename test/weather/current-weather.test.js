const frisby = require('frisby');

describe('Get current weather', function() {
    it('by city name', function() {
        return frisby.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=37c1fc0fcb5467308f1d68745f9fb340')
            .expect('json', 'name', 'Paris')
            .expect('status', 200);
    });
})