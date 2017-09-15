"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var Component = (function () {
    function Component() {
        var _this = this;
        console.log('test');
        if (this.templateURL !== undefined) {
            $.get('js/components/' + this.templateURL, function (data) {
                _this.template = data;
                ComponentManager.components.push(_this);
            });
        }
        else
            ComponentManager.components.push(this);
        if (this.styleURL !== undefined)
            $('head').append('<link rel="stylesheet" href="js/components/' + this.styleURL + '">');
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
//# sourceMappingURL=Component.js.map