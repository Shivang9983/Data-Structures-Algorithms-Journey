/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */


Function.prototype.callPolyfill = function (context, ...args) {
    const fn = this;
    const key = Symbol();

    Object.defineProperty(context, key, {
        value: fn,
        configurable: true
    });

    try {
        return context[key](...args);
    } finally {
        delete context[key];
    }
};


/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */