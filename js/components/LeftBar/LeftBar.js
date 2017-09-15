"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("../Component");
var LeftBar = (function (_super) {
    __extends(LeftBar, _super);
    function LeftBar() {
        var _this = _super.call(this, 'LeftBar/LeftBar.html', 'LeftBar/LeftBar.css') || this;
        _this.selector = 'LeftBar';
        return _this;
    }
    return LeftBar;
}(Component_1.Component));
new LeftBar();
