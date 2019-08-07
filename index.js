

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.foo = factory();
    }
}(typeof this == 'undefined' ? window : this, function () {
    const cssClassnames = (classes) => {
      if (Object.prototype.toString.call(classes) !== '[object Object]') {
          return '';
      }

      return Object.entries(classes)
          .reduce((total, [name, condition]) => {
              return `${total} ${condition ? name : ''}`;
          }, '')
          .trim();
    };
    
    return cssClassnames;
}));
