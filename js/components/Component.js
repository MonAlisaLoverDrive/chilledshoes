"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Component = (function () {
    function Component(templateURL, styleURL) {
        if (templateURL === void 0) { templateURL = undefined; }
        if (styleURL === void 0) { styleURL = undefined; }
        var _this = this;
        console.log('test');
        if (templateURL !== undefined) {
            $.get('js/components/' + templateURL, function (data) {
                _this.template = data;
                ComponentManager.components.push(_this);
            });
        }
        else
            ComponentManager.components.push(this);
        if (styleURL !== undefined)
            $('head').append('<link rel="stylesheet" href="js/components/' + styleURL + '">');
        else
            $('head').append(this.style);
    }
    Component.prototype.ToHTML = function () {
        var html = this.template;
        html = html.replace(/{{(.*?)}}/g, function (str, result) {
            return eval(result);
        });
        return html;
    };
    ;
    return Component;
}());
exports.Component = Component;
