"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var assert_1 = require("assert");
describe('k-date function', function () {
    it('should return today date with format "YYYY-MM-DD"', function () {
        var date = new Date();
        var toDay = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        assert_1.strict.equal(index_1["default"].today("YYYY-MM-DD"), toDay);
    });
    it('should return today date with format "MM-DD-YYYY"', function () {
        var date = new Date();
        var toDay = date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("MM-DD-YYYY"), toDay);
    });
    it('should return today date with format "DD-MM-YYYY"', function () {
        var date = new Date();
        var toDay = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MM-YYYY"), toDay);
    });
    it('should return today date with format "DD-MMMM-YYYY in spesific languange', function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        // English
        var toDayEn = date.getDate() + "-" + index_1["default"].fullMonth("en", month) + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MMMM-YYYY"), toDayEn);
        // Indonesian
        var toDayId = date.getDate() + "-" + index_1["default"].fullMonth("id", month) + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MMMM-YYYY", "id"), toDayId);
    });
});
