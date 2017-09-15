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
        return Component.Parse(this.template);
    };
    ;
    Component.Parse = function (html) {
        for (var i = 0; i < ComponentManager.components.length; i++) {
            var component = ComponentManager.components[i];
            console.log(component.selector);
            html = html.replace(RegExp('<' + component.selector.toLowerCase() + '>(.*?)<\/' + component.selector.toLowerCase() + '>'), component.ToHTML());
        }
        html = html.replace(/{{(.*?)}}/g, function (str, result) {
            return eval(result);
        });
        console.log(html);
        return html;
    };
    return Component;
}());
