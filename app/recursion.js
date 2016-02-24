exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var result = [];
    var dirPath = [];
    function recurse(directory) {
      dirPath.push(directory.dir);
      for (var i = 0; i < directory.files.length; i++) {
        if (typeof directory.files[i] === 'object') {
          recurse(directory.files[i]);
          dirPath.pop();
        } else {
          var index = dirPath.indexOf(dirName);
          if (index > -1 || !dirName) {
            result.push(directory.files[i]);
          }
        }
      }
    }
    recurse(data);
    return result;
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
    return result;
  }
};
