// modules/Utils.js

class Utils {
    static getDate() {
      return new Date().toString();
    }
  
    // static getGreeting(name) {
    //   const greeting = require('../lang/en/en.json');
    //   return `${greeting.message} ${name}. Server current date and time is ${this.getDate()}`;
    // }

    static getGreetingMessage(name) {
        const filePath = path.join(__dirname, '../lang/en/en.json');
        const langFile = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const currentDate = this.getDate();
        return langFile.greetingMessage.replace('%1', name).replace('%2', currentDate);
    }
  }
  
  module.exports = Utils;
  