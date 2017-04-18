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