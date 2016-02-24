exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(otherStr) {
      return str + ', ' + otherStr;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(number) {
      return function() {
        return fn(number);
      }
    })
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.apply(null, [str1, str2, str3]);
    }
  },

  useArguments : function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var otherArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(otherArgs));
    }
  },

  curryIt : function(fn) {
    return function(arg1) {
      return function(arg2) {
        return function(arg3) {
          return fn.apply(null, [arg1, arg2, arg3]);
        }
      }
    }
  }
};
