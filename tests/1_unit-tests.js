const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();
const a2b = 'american-to-british';
const b2a = 'british-to-american'

suite('Unit Tests', () => {
  suite('American to British English tests', () => {

    test('Translate "Mangoes are my favorite fruit." to British English', (done) => {
      const input = "Mangoes are my favorite fruit.";
      const output = { text: input, translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done();
    });

    test('Translate "I ate yogurt for breakfast." to British English', (done) => {
      const input = "I ate yogurt for breakfast.";
      const output = { text: input, translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done();
    });

    test('Translate "We had a party at my friend\'s condo." to British English', (done) => {
      const input = "We had a party at my friend's condo.";
      const output = { text: input, translation: 'We had a party at my friend\'s <span class="highlight">flat</span>.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "Can you toss this in the trashcan for me?" to British English', (done) => {
      const input = "Can you toss this in the trashcan for me?";
      const output = { text: input, translation: 'Can you toss this in the <span class="highlight">bin</span> for me?' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "The parking lot was full." to British English', (done) => {
      const input = "The parking lot was full.";
      const output = { text: input, translation: 'The <span class="highlight">car park</span> was full.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "Like a high tech Rube Goldberg machine." to British English', (done) => {
      const input = "Like a high tech Rube Goldberg machine.";
      const output = { text: input, translation: 'Like a high tech <span class="highlight">Heath Robinson device</span>.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "To play hooky means to skip class or work." to British English', (done) => {
      const input = "To play hooky means to skip class or work.";
      const output = { text: input, translation: 'To <span class="highlight">bunk off</span> means to skip class or work.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "No Mr. Bond, I expect you to die." to British English', (done) => {
      const input = "No Mr. Bond, I expect you to die.";
      const output = { text: input, translation: 'No <span class="highlight">Mr</span> Bond, I expect you to die.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "Dr. Grosh will see you now." to British English', (done) => {
      const input = "Dr. Grosh will see you now.";
      const output = { text: input, translation: '<span class="highlight">Dr</span> Grosh will see you now.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Translate "Lunch is at 12:15 today." to British English', (done) => {
      const input = "Lunch is at 12:15 today.";
      const output = { text: input, translation: 'Lunch is at <span class="highlight">12.15</span> today.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });
  });

  suite('British to American English tests', () => {

    test('Translate "We watched the footie match for a while." to American English', (done) => {
      const input = "We watched the footie match for a while.";
      const output = { text: input, translation: 'We watched the <span class="highlight">soccer</span> match for a while.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "Paracetamol takes up to an hour to work." to American English', (done) => {
      const input = "Paracetamol takes up to an hour to work.";
      const output = { text: input, translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "First, caramelise the onions." to American English', (done) => {
      const input = "First, caramelise the onions.";
      const output = { text: input, translation: 'First, <span class="highlight">caramelize</span> the onions.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "I spent the bank holiday at the funfair." to American English', (done) => {
      const input = "I spent the bank holiday at the funfair.";
      const output = { text: input, translation: 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "I had a bicky then went to the chippy." to American English', (done) => {
      const input = "I had a bicky then went to the chippy.";
      const output = { text: input, translation: 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', (done) => {
      const input = "I\'ve just got bits and bobs in my bum bag.";
      const output = { text: input, translation: 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', (done) => {
      const input = "The car boot sale at Boxted Airfield was called off.";
      const output = { text: input, translation: 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "Have you met Mrs Kalyani?" to American English', (done) => {
      const input = "Have you met Mrs Kalyani?";
      const output = { text: input, translation: 'Have you met <span class="highlight">Mrs.</span> Kalyani?' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "Prof Joyner of King\'s College, London." to American English', (done) => {
      const input = "Prof Joyner of King\'s College, London.";
      const output = { text: input, translation: '<span class="highlight">Prof.</span> Joyner of King\'s College, London.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Translate "Tea time is usually around 4 or 4.30." to American English', (done) => {
      const input = "Tea time is usually around 4 or 4.30.";
      const output = { text: input, translation: 'Tea time is usually around 4 or <span class="highlight">4:30</span>.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });
  });

  suite('Highlight translation tests', () => {

    test('Highlight translation in "Mangoes are my favorite fruit."', (done) => {
      const input = "Mangoes are my favorite fruit.";
      const output = { text: input, translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Highlight translation in "I ate yogurt for breakfast."', (done) => {
      const input = "I ate yogurt for breakfast.";
      const output = { text: input, translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.' };
      assert.deepEqual(translator.translate(input, a2b), output);
      done(); 
    });

    test('Highlight translation in "We watched the footie match for a while."', (done) => {
      const input = "We watched the footie match for a while.";
      const output = { text: input, translation: 'We watched the <span class="highlight">soccer</span> match for a while.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', (done) => {
      const input = "Paracetamol takes up to an hour to work.";
      const output = { text: input, translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.' };
      assert.deepEqual(translator.translate(input, b2a), output);
      done(); 
    });

  });
});
