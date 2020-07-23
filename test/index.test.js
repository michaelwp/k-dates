"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var assert_1 = require("assert");
describe("k-date function", function () {
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
        var toDayEn = date.getDate() + "-" + index_1["default"].fullMonth(month, "en") + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MMMM-YYYY"), toDayEn);
        // Indonesian
        var toDayId = date.getDate() + "-" + index_1["default"].fullMonth(month, "id") + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MMMM-YYYY", "id"), toDayId);
    });
    it('should return today date with format "DD-MMM-YYYY in spesific languange', function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        // English
        var fullMonthEn = index_1["default"].fullMonth(month, "en");
        var halfMonthEn = fullMonthEn.substr(0, 3);
        var toDayEn = date.getDate() + "-" + halfMonthEn + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MMM-YYYY"), toDayEn);
        // Indonesian
        var fullMonthId = index_1["default"].fullMonth(month, "id");
        var halfMonthId = fullMonthId.substr(0, 3);
        var toDayId = date.getDate() + "-" + halfMonthId + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DD-MMM-YYYY", "id"), toDayId);
    });
    it('should return today date with format "DDDD, DD-MM-YYYY in spesific languange', function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDay();
        // English
        var fullDayEn = index_1["default"].fullDay(day);
        var toDayEn = fullDayEn + ", " + date.getDate() + "-" + month + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DDDD, DD-MM-YYYY"), toDayEn);
        // Indonesian
        var fullDayId = index_1["default"].fullDay(day, "id");
        var toDayId = fullDayId + ", " + date.getDate() + "-" + month + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DDDD, DD-MM-YYYY", "id"), toDayId);
    });
    it('should return today date with format "DDD, DD-MM-YYYY in spesific languange', function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDay();
        // English
        var fullDayEn = index_1["default"].fullDay(day);
        var halfDayEn = fullDayEn.substr(0, 3);
        var toDayEn = halfDayEn + ", " + date.getDate() + "-" + month + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DDD, DD-MM-YYYY"), toDayEn);
        // Indonesian
        var fullDayId = index_1["default"].fullDay(day, "id");
        var halfDayId = fullDayId.substr(0, 3);
        var toDayId = halfDayId + ", " + date.getDate() + "-" + month + "-" + date.getFullYear();
        assert_1.strict.equal(index_1["default"].today("DDD, DD-MM-YYYY", "id"), toDayId);
    });
});
