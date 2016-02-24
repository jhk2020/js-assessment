exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve, reject) {
      $.ajax(url).then(function(data) {
        resolve(data.people.map(function(person) {
          return person.name;
        }).sort())
      })
    })
  }
};
