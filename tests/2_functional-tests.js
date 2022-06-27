const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  suite('POST request to /api/translate tests', () => {

    test('Translation with text and locale fields: POST request to /api/translate', (done) => {
      const input = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-british';
      const output = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      chai.request(server)
        .post('/api/translate')
        .send({ text: input, locale: locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation'); 
          assert.equal(res.body.text, input);
          assert.equal(res.body.translation, output);
          done();
        });
    });

    test('Translation with text and invalid locale field: POST request to /api/translate', (done) => {
      const input = 'Mangoes are my favorite fruit.';
      const locale = 'american-to-spanish';
      const output = 'Invalid value for locale field';
      chai.request(server)
        .post('/api/translate')
        .send({ text: input, locale: locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error'); 
          assert.equal(res.body.error, output);
          done();
        });
    });

    test('Translation with missing text field: POST request to /api/translate', (done) => {
      const locale = 'american-to-british';
      const output = 'Required field(s) missing';
      chai.request(server)
        .post('/api/translate')
        .send({ locale: locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error'); 
          assert.equal(res.body.error, output);
          done();
        });
    });

    test('Translation with missing locale field: POST request to /api/translate', (done) => {
      const input = 'Mangoes are my favorite fruit.';
      const output = 'Required field(s) missing';
      chai.request(server)
        .post('/api/translate')
        .send({ text: input })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error'); 
          assert.equal(res.body.error, output);
          done();
        });
    });

    test('Translation with empty text: POST request to /api/translate', (done) => {
      const input = '';
      const locale = 'american-to-british';
      const output = 'No text to translate';
      chai.request(server)
        .post('/api/translate')
        .send({ text: input, locale: locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'error'); 
          assert.equal(res.body.error, output);
          done();
        });
    });

    test('Translation with text that needs no translation: POST request to /api/translate', (done) => {
      const input = 'To play hooky means to skip class or work.';
      const locale = 'british-to-american';
      const output = 'Everything looks good to me!';
      chai.request(server)
        .post('/api/translate')
        .send({ text: input, locale: locale })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation'); 
          assert.equal(res.body.translation, output);
          assert.equal(res.body.text, input);
          done();
        });
    });

  });
});
