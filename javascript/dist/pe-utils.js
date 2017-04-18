/**
 * 数组
 *
 * Created by chenjinlong on 18/04/2017.
 */
define(function () {
    var PEArray = function () {

    }

    PEArray.prototype = {
        /**
         * 判断数组是否为空
         *
         * @param array
         * @return {*|boolean}
         */
        isEmpty: function (array) {
            return array && array.length <= 0;
        },

        /**
         * 判断数组中是否存在指定元素
         *
         * @param prop
         * @param array
         * @return {boolean}
         */
        isExists: function (prop, array) {
            for (var obj in array) {
                if (obj == prop) {
                    return true;
                }
            }
            return false;
        },

        /**
         * 查询数字一维数组中的最大值
         *
         * @param jsonArr
         * @return {*}
         */
        maxDigit: function (jsonArr) {
            return Math.max.apply(null, jsonArr);
        },

        /**
         * 查询数字一维数组中的最小值
         *
         * @param jsonArr
         * @return {*}
         */
        minDigit: function (jsonArr) {
            return Math.min.apply(null, jsonArr);
        }
    };

    return PEArray;
});
/**
 * Packease-Utils-Frontend 基类
 *
 * Created by chenjinlong on 18/04/2017.
 */
define(function () {
    var PEBase = function () {

    };

    PEBase.prototype = {
        /**
         * Do an inheritance job.
         * 中介策略实现继承关系
         *
         * For example:
         *     extend(Cat,Animal);
         *     var cat1 = new Cat("大毛","黄色");
         *     alert(cat1.species); // 动物
         * @author chenjinlong 20170416
         * @param child
         * @param parent
         */
        extendUsingProxy: function (child, parent) {
            var F = function () {
            };
            F.prototype = parent.prototype;
            child.prototype = new F();
            child.prototype.constructor = child;
            child.uber = parent.prototype;
        },

        /**
         * Do an inheritance job.
         * 拷贝策略实现继承关系
         *
         * For example:
         *     extend(Cat,Animal);
         *     var cat1 = new Cat("大毛","黄色");
         *     alert(cat1.species); // 动物
         * @author chenjinlong 20170416
         * @param child
         * @param parent
         */
        extendUsingCopy: function (child, parent) {
            var p = parent.prototype;
            var c = child.prototype;
            for (var i in p) {
                c[i] = p[i];
            }
            c.uber = p;
        },

        /**
         * 判断某个proptotype对象和某个实例之间的关系
         *
         * @param instance
         * @param object
         * @return {boolean}
         */
        isPrototypeOf: function (instance, object) {
            return object.prototype.isPrototypeOf(instance)
        },

        /**
         * 判断某一个属性到底是本地属性，还是继承自prototype对象的属性
         *
         * @param instance
         * @param propertyName
         * @return {boolean}
         */
        hasOwnProperty: function (instance, propertyName) {
            return instance.hasOwnProperty(propertyName)
        },

        /**
         * 某个实例是否含有某个属性，不管是不是本地属性。
         *
         * @param instance
         * @param propertyName
         * @return {boolean}
         */
        propertyExists: function (instance, propertyName) {
            return propertyName in instance;
        },

        /**
         * 遍历某个对象的所有属性-属性key
         *
         * @param instance
         * @return {Array}
         */
        propertyKeys: function (instance) {
            var list = [];
            for (var prop in instance) {
                list.push(prop);
            }
            return list;
        },

        /**
         * 遍历某个对象的所有属性-属性value
         *
         * @param instance
         * @return {Array}
         */
        propertyValues: function (instance) {
            var list = [];
            for (var prop in instance) {
                list.push(instance[prop]);
            }
            return list;
        },

        /**
         * 拷贝对象-中介策略
         *
         * Example:
         *     var Doctor = object(Chinese);
         *     Doctor.career = '医生';
         * @param object
         * @return {F}
         */
        copyObjectUsingProxy: function (object) {
            function F() {
            }

            F.prototype = object;
            return new F();
        },

        /**
         * 拷贝对象-浅拷贝策略
         * Tips:父对象会受到影响
         *
         * Example:
         *    var Doctor = extendCopy(Chinese);
         *  　Doctor.career = '医生';
         *    alert(Doctor.nation); // 中国
         * @param p
         * @param c
         * @return {*|{}}
         */
        copyObjectUsingSimple: function (object) {
            var c = {};
            for (var i in object) {
                c[i] = object[i];
            }
            c.uber = object;
            return c;
        },

        /**
         * 拷贝对象-深拷贝策略
         * Tips:父对象不会受到影响
         *
         * Example:
         *     var Doctor = deepCopy(Chinese);
         *     Chinese.birthPlaces = ['北京','上海','香港'];
         *     Doctor.birthPlaces.push('厦门');
         * @param p
         * @param c
         * @return {*|{}}
         */
        copyObjectUsingDeep: function (object, c) {
            var c = c || {};
            for (var i in object) {
                if (typeof object[i] === 'object') {
                    c[i] = (object[i].constructor === Array) ? [] : {};
                    deepCopy(object[i], c[i]);
                } else {
                    c[i] = object[i];
                }
            }
            return c;
        },
    };

    return PEBase;
});
/**
 * 数字
 *
 * Created by chenjinlong on 18/04/2017.
 */
define(['PEBase'], function (PEBase) {

    var PENumeric = function () {
        this.peBase = PEBase;
    };

    PENumeric.prototype = {

        /**
         * 计算两个数字相除的结果
         *
         * @param numerator
         * @param denominator
         * @param fractions
         * 默认保留4位小数
         * @return {string}
         */
        divide: function (numerator, denominator, fractions) {
            return (numerator / denominator).toFixed(fractions >= 0 ? fractions : 4);
        },

        /**
         * 数字转换为百分数格式
         *
         * @param e
         * @param fractions
         * 默认保留2位小数
         * @return {string}
         */
        toPercentageFormat: function (digit, fractions) {
            return (Math.round(digit * 10000) / 100).toFixed(fractions >= 0 ? fractions : 2);
        },

        /**
         * 数字转换为以'万'为单位的数值
         *
         * @param digit
         * @param fractions
         * 默认保留2位小数
         * @return {number}
         */
        toTenThousandFormat: function (digit, fractions) {
            var temp = Math.pow(10, fractions >= 0 ? fractions : 2);
            return Math.round((digit / 10000) * temp) / temp;
        },
    };

    return PENumeric;
});
/**
 * 对象
 *
 * Created by chenjinlong on 18/04/2017.
 */
define(function () {
    var PEObject = function () {

    };

    PEObject.prototype = {
        /**
         * 判断json对象是否为空
         *
         * @param e
         * @return {boolean}
         */
        isEmptyObject: function (e) {
            var t;
            for (t in e)
                return false;
            return true
        },
    };

    return PEObject;
});

/**
 * 字符串
 *
 * Created by chenjinlong on 18/04/2017.
 */
define(function () {

    var PEString = function() {
    };

    PEString.prototype = {
        /**
         * 循环字符串，每达到指定长度后，插入特别字符
         *
         * @param str
         * 待处理字符串
         * @param specificSymbol
         * 分隔字符
         * @param maxInt
         * 分隔间隔长度
         * @return {*}
         */
        splitBySpecificSymbol: function (str, specificSymbol, maxInt) {
            var self = this;
            if (str.length <= 0) {
                return str;
            }
            var subStrBefore = str.substr(0, maxInt);
            var subStrAfter = str.substr(maxInt);
            if (subStrAfter.length > 0) {
                subStrBefore += specificSymbol + self.splitBySpecificSymbol(subStrAfter, specificSymbol, maxInt);
            } else {
                return subStrBefore;
            }
            return subStrBefore;
        }
    };
    return PEString;
});