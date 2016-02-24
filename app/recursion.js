exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];
    function recurse(directory) {
    }
  },

  permute: function(arr) {
    var result = [];
    function recurse(entry, options) {
      if (entry.length === arr.length) {
        result.push(entry);
        return;
      } else {
        for (var i = 0; i < options.length; i++) {
          recurse(entry.concat([options[i]]), options.slice(0, i).concat(options.slice(i + 1)));
        }
      }
    }
    recurse([], arr);
    return result;
  },

  fibonacci: function(n) {
    function recurse(n) {
      if (n === 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        return recurse(n - 2) + recurse(n - 1);
      }
    }
    return recurse(n);
  },

  validParentheses: function(n) {
    var result = [];
    function recurse(str, leftParans, rightParans) {
      if (rightParans === n && leftParans === n) {
        result.push(str);
      } else {
        if (leftParans < n) {
          recurse(str + '(', leftParans + 1, rightParans);
        }
        if (rightParans < leftParans) {
          recurse(str + ')', leftParans, rightParans + 1);
        }
      }
    }
    recurse('', 0, 0);
    console.log(result)
    return result;
  }
};
