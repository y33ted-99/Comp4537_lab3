// modules/Utils.js

class Utils {
    static getDate() {
      return new Date().toString();
    }
  
    static getGreeting(name) {
      const greeting = require('../lang/en/en.json');
      return `${greeting.message} ${name}. Server current date and time is ${this.getDate()}`;
    }
  }
  
  module.exports = Utils;
  