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