exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var result = [];
    Object.getOwnPropertyNames(obj).forEach(function(key) {
      result.push(key + ': ' + obj[key]);
    });
    return result;
  }
};
