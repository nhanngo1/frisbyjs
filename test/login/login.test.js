const frisby = require('frisby');

it('should be a teapot', function() {
    console.log("hahah")
    return frisby.get('http://httpbin.org/status/418')
        .expect('status', 418);
});