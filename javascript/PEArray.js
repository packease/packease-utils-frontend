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