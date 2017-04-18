/**
 * requirejs 参考文档：
 * http://requirejs.org/docs/api.html#jsfiles
 *
 * Created by chenjinlong on 18/04/2017.
 */
require.config({
    baseUrl: '../javascript/lib',
    paths: {
        jquery: 'jquery/dist/jquery',
        PEBase: '../PEBase',
        // PEArray: '../javascript/PEArray',
        PENumeric: '../PENumeric',
        // PEObject: '../javascript/PEObject',
        // PEString: '../javascript/PEString',
    }
});
require(['jquery', 'PEBase', 'PENumeric'], function($, PEBase, PENumeric) {
    // alert($().jquery);
    // alert(PENumeric);
    var obj = new PENumeric();
    console.debug(obj.toPercentageFormat(0.9765));
});
