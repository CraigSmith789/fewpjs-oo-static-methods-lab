class Formatter {
  //add static methods here


  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(str) {
    let i, j, lowers;
    str = str.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    lowers = ['A', 'An', 'The', 'And', 'But', 'For', 'At',
      'By', 'For', 'From', 'Of'];
    for (i = 0, j = lowers.length; i < j; i++)
      str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
        function (txt) {
          return txt.toLowerCase();
        });
    return str;
  }
}
