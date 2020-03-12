var Request = require("request");

describe("server test", () =>{
var server;
beforeAll(() =>{
    server = require("../../index");
});
afterAll(() =>{
    server.close();
});
describe('GET /', () =>{
    var data = {};
beforeAll((done) =>{
Request.get('http://localhost:5000/', (error, response, body) =>{
        data.status = response.statusCode;
        data.body = body;
        done();

      });
    });

    it('status 200', () =>{ 
        expect(data.status).toBe(200);

    });

  it('body', () => {
        expect(data.body).toBe('hello server');
    })

})

});