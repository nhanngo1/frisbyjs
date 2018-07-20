const frisby = require('frisby');

it('should be a teapot0', function() {
    return frisby.get('http://httpbin.org/status/418')
        .expect('status', 418);
});

describe("test demo1", function() {
    it('should be a teapot1', function() {
        return frisby.get('http://httpbin.org/status/418')
            .expect('status', 418);
    });

    it('should be a teapot2', function() {
        return frisby.get('http://httpbin.org/status/418')
            .expect('status', 428);
    });
})