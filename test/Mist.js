var should = require('chai').should(),
    fs = require('fs');
     path = require('path');
    expect = require('chai').expect,
    supertest = require('supertest'),
    images = '',   
   download = require('url-download');
   var nightwatch = require('nightwatch');
 
//version 2 api minimum size // 

api = supertest('http://api.visqr.com/visualead-v3/new_api/generate_gen2?content=testme&api_key=6da24edf-4219-9669-d20b-00003fb6babb&qr_type=2&');
image = "";


describe('Version 3 + 31px', function() {

    it('testme', function(done) 
{
        api.get('image=https://static.dvidshub.net/images/cameraIcon.jpg&visual_level=3&output_type=2&version=4')
            .expect(200)
            .end(function(err, res) {
                var json = JSON.parse(res.text);
                if (err) return done(err);
                console.log(json);
              expect(json.response).to.equal(0);
                expect(json.data.error).to.equal('Chosen area (31x31) is too small. For the content you specified it must be bigger than 35x35.');
                expect(json.error_id).to.equal(77);

                done();
            });
    });

});






describe('90px', function() {

    it('testme', function(done) {

        api.get('image=http://i.shopbot.ca/n_4663/df/7e/7a990c64b710da15f35cf5c183907edf.jpg&visual_level=4&output_type=2&version=5')
            .expect(200)
            .end(function(err, res) {
                var json = JSON.parse(res.text);
                if (err) return done(err);
                console.log(json);
                expect(json.error).to.equal(true);
                expect(json.data[0].error).to.equal('Failed generating code. Requested dimensions are too small');
                expect(json.data[0].error_id).to.equal(610);

                done();
            });
    });

});


describe('85*85', function() {

    it('testme', function(done) {

        api.get('image=http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/image-85x85.jpg&visual_level=3&output_type=2&version=3')
            .expect(200)
            .end(function(err, res) {
                var json = JSON.parse(res.text);
                if (err) return done(err);
                console.log(json);
                expect(json.error).to.equal(true);
                expect(json.data[0].error).to.equal('Failed generating code. Requested dimensions are too small');
                expect(json.data[0].error_id).to.equal(610);

                done();
            });
    });

     });



describe('85*85', function() {

    it('testme', function(done) {

        api.get('image=http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2013/04/image-85x85.jpg&visual_level=3&output_type=2&version=3')
            .expect(200)
            .end(function(err, res) {
                var json = JSON.parse(res.text);
                if (err) return done(err);
                console.log(json);
                expect(json.error).to.equal(true);
                expect(json.data[0].error).to.equal('Failed generating code. Requested dimensions are too small');
                expect(json.data[0].error_id).to.equal(610);

                done();
            });
    });

     });


describe('85*85', function() {

    it('testme', function(done) {

        api.get('image=5x85.jpg&visual_level=3&output_type=2&version=3')
            .expect(200)
            .end(function(err, res) {
                var json = JSON.parse(res.text);
                if (err) return done(err);
                console.log(json);
                expect(json.error).to.equal(true);
                expect(json.data[0].error).to.equal('Failed to locate image. ');
                expect(json.data[0].error_id).to.equal(600);

                done();
            });
    });

     });



