/**
 * 饿汉模式
 */
var Singleton = (function () {

    var instance;

    function Constructor() {
        return {
            getInstance: function () {
                return instance;             
            }
        };
    }

    if (!instance) {
        instance = new Constructor();
    }

    return Constructor;
})();

var a = new Singleton().getInstance();
var b = new Singleton().getInstance();
console.log('is singleton ? ' + (a === b));

/**
 * 懒汉模式
 */
var Singleton = (function () {

    var instance;

    function Constructor(name, age) {
        return {
            getInstance: function () {
                if (!instance) {
                    instance = new Constructor();
                    instance.name = name;
                    instance.age = age;
                }
                return instance;             
            }
        };
    }

    return Constructor;
})();

var a = new Singleton('aaa', 12).getInstance();
var b = new Singleton('bbb', 15).getInstance();
console.log('is singleton ? ' + (a === b));
