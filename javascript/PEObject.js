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
