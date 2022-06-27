const americanOnly = require('./american-only.js');
const amToBritSpelling = require('./american-to-british-spelling.js');
const amToBritTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  translate(inputText, locale) {
    if (inputText == undefined || locale == undefined) {
      return { error: 'Required field(s) missing' }
    }
    if (inputText == '') {
      return { error: 'No text to translate' };
    }
    if (locale != 'american-to-british' && locale != 'british-to-american') {
      return { error: 'Invalid value for locale field' };
    }
    let ogText = '';
    ogText += inputText;
    
    let translation = '';
    if (locale == 'american-to-british') {
      translation = this.amerToBrit(inputText);
    } 
    if (locale == 'british-to-american') {
      translation = this.britToAmer(inputText);
    }
    if (translation.trim() == ogText) {
      return { text: inputText, translation: 'Everything looks good to me!' };
    }

    return { text: inputText, translation: translation.trim() };
  }

  getKey(dict, word) {
    return Object.keys(dict).find(key => dict[key] === word.toLowerCase());
  }
  getValue(dict, word) {
    return Object.values(dict).find(value => dict[word.toLowerCase()] === value)
  }

  amerToBrit(text) {
    let translation = '';
    translation += text;
    text = text.replace(/[.!?]+$/g, '');
    text = text.trim().split(' ');
    for (let i = 0; i < text.length; i++) {
      if (this.getValue(americanOnly, (text[i] + ' ' + text[i + 1] + ' ' + text[i + 2]))) {
        let regex = new RegExp(text[i] + ' ' + text[i + 1] + ' ' + text[i + 2], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(americanOnly, text[i] + ' ' + text[i + 1] + ' ' + text[i + 2]) + '</span>');
      }
      if (this.getValue(americanOnly, (text[i] + ' ' + text[i + 1]))) {
        let regex = new RegExp(text[i] + ' ' + text[i + 1], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(americanOnly, (text[i] + ' ' + text[i + 1])) + '</span>');
      }
      if (this.getValue(americanOnly, text[i])) {
        let regex = new RegExp(text[i], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(americanOnly, text[i]) + '</span>');
      }
      if (this.getValue(amToBritTitles, text[i])) {
        let regex = new RegExp(text[i], 'gi');
        let title = this.getValue(amToBritTitles, text[i]);
        title = title[0].toUpperCase() + title.slice(1,);
        translation = translation.replace(regex, '<span class="highlight">' + title + '</span>');
      }
      if (this.getValue(amToBritSpelling, text[i])) {
        let regex = new RegExp(text[i], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(amToBritSpelling, text[i]) + '</span>');
      }
      if (/(\d{1,2})([:])(\d\d)/.test(text[i])) {
        let regex = new RegExp(text[i], 'gi');
        let time = text[i].replace(':', '.')
        translation = translation.replace(regex, ('<span class="highlight">' + time + '</span>') )
      }
    }
    return translation;
  }

  britToAmer(text) {
    let translation = '';
    translation += text;
    text = text.replace(/[.!?]+$/g, '');
    text = text.trim().split(' ');
    for (let i = 0; i < text.length; i++) {
      if (this.getValue(britishOnly, (text[i] + ' ' + text[i + 1]  + ' ' + text[i + 2]))) {
        let regex = new RegExp(text[i] + ' ' + text[i + 1]  + ' ' + text[i + 2], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(britishOnly, text[i] + ' ' + text[i + 1]  + ' ' + text[i + 2]) + '</span>' );
      }
      if (this.getValue(britishOnly, (text[i] + ' ' + text[i + 1]))) {
        let regex = new RegExp(text[i] + ' ' + text[i + 1], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(britishOnly, text[i] + ' ' + text[i + 1]) + '</span>' );
      }
      if (this.getValue(britishOnly, text[i])) {
        let regex = new RegExp(text[i], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getValue(britishOnly, text[i]) + '</span>' );
      }
      if (this.getKey(amToBritSpelling, text[i])) {
        let regex = new RegExp(text[i], 'gi');
        translation = translation.replace(regex, '<span class="highlight">' + this.getKey(amToBritSpelling, text[i]) + '</span>');
      }
      if (this.getKey(amToBritTitles, text[i])) {
        let regex = new RegExp(text[i], 'gi');
        let title = this.getKey(amToBritTitles, text[i]);
        title = title[0].toUpperCase() + title.slice(1,);
        translation = translation.replace(regex, ('<span class="highlight">' + title + '</span>'));
      }
      if (/(\d{1,2})([.])(\d\d)/.test(text[i])) {
        let regex = new RegExp(text[i], 'gi');
        let time = text[i].replace('.', ':')
        translation = translation.replace(regex, ('<span class="highlight">' + time + '</span>') )
      }
    }

    return translation;
  }


}

module.exports = Translator;