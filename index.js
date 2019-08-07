/*@preserve
 * @sunpietro/css-classnames - CSS classnames helper tool v1.0.1
 * https://github.com/sunpietro/css-classnames
 *
 * Copyright 2019 Piotr Nalepa
 * https://blog.piotrnalepa.pl
 *
 * Released under the MIT license
 * https://github.com/sunpietro/css-classnames/blob/master/LICENSE
 *
 * Date: 2019-08-06T21:30Z
 */
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.foo = factory();
  }
})(typeof this == "undefined" ? window : this, function() {
  const cssClassnames = classes => {
    if (Object.prototype.toString.call(classes) !== "[object Object]") {
      return "";
    }

    return Object.entries(classes)
      .reduce((total, [name, condition]) => {
        return `${total} ${condition ? name : ""}`;
      }, "")
      .trim();
  };

  return cssClassnames;
});
