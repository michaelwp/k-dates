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
    it("should return Error Bad date Format in spesific languange", function () {
        // english
        assert_1.strict.equal(index_1["default"].today("XXX, DD-MM-YYYY"), "Bad date Format. Ex: 'YYYY-MM-DD' or 'MM-DD-YYYY' or 'DD-MM-YYYY'");
        // indonesian
        assert_1.strict.equal(index_1["default"].today("XXX, DD-MM-YYYY", "id"), "Format tanggal salah. Mis: 'YYYY-MM-DD' atau 'MM-DD-YYYY' atau 'DD-MM-YYYY'");
    });
    it("should return full month name", function () {
        // English
        assert_1.strict.equal(index_1["default"].fullMonth(1), "January");
        assert_1.strict.equal(index_1["default"].fullMonth(2), "February");
        assert_1.strict.equal(index_1["default"].fullMonth(3), "March");
        assert_1.strict.equal(index_1["default"].fullMonth(4), "April");
        assert_1.strict.equal(index_1["default"].fullMonth(5), "May");
        assert_1.strict.equal(index_1["default"].fullMonth(6), "June");
        assert_1.strict.equal(index_1["default"].fullMonth(7), "July");
        assert_1.strict.equal(index_1["default"].fullMonth(8), "August");
        assert_1.strict.equal(index_1["default"].fullMonth(9), "September");
        assert_1.strict.equal(index_1["default"].fullMonth(10), "October");
        assert_1.strict.equal(index_1["default"].fullMonth(11), "November");
        assert_1.strict.equal(index_1["default"].fullMonth(12), "December");
        // Indonesian
        assert_1.strict.equal(index_1["default"].fullMonth(1, "id"), "Januari");
        assert_1.strict.equal(index_1["default"].fullMonth(2, "id"), "Februari");
        assert_1.strict.equal(index_1["default"].fullMonth(3, "id"), "Maret");
        assert_1.strict.equal(index_1["default"].fullMonth(4, "id"), "April");
        assert_1.strict.equal(index_1["default"].fullMonth(5, "id"), "Mei");
        assert_1.strict.equal(index_1["default"].fullMonth(6, "id"), "Juni");
        assert_1.strict.equal(index_1["default"].fullMonth(7, "id"), "Juli");
        assert_1.strict.equal(index_1["default"].fullMonth(8, "id"), "Agustus");
        assert_1.strict.equal(index_1["default"].fullMonth(9, "id"), "September");
        assert_1.strict.equal(index_1["default"].fullMonth(10, "id"), "Oktober");
        assert_1.strict.equal(index_1["default"].fullMonth(11, "id"), "November");
        assert_1.strict.equal(index_1["default"].fullMonth(12, "id"), "Desember");
    });
    it("should return wrong month number in spesific languange", function () {
        // english
        assert_1.strict.equal(index_1["default"].fullMonth(13), "wrong month number, it must be 1 - 12");
        // indonesian
        assert_1.strict.equal(index_1["default"].fullMonth(13, "id"), "nomor bulan salah, harus 1 - 12");
    });
    it("should return full day name", function () {
        // English
        assert_1.strict.equal(index_1["default"].fullDay(1), "Monday");
        assert_1.strict.equal(index_1["default"].fullDay(2), "Thursday");
        assert_1.strict.equal(index_1["default"].fullDay(3), "Wednesday");
        assert_1.strict.equal(index_1["default"].fullDay(4), "Tuesday");
        assert_1.strict.equal(index_1["default"].fullDay(5), "Friday");
        assert_1.strict.equal(index_1["default"].fullDay(6), "Saturday");
        assert_1.strict.equal(index_1["default"].fullDay(7), "Sunday");
        // Indonesian
        assert_1.strict.equal(index_1["default"].fullDay(1, "id"), "Senin");
        assert_1.strict.equal(index_1["default"].fullDay(2, "id"), "Selasa");
        assert_1.strict.equal(index_1["default"].fullDay(3, "id"), "Rabu");
        assert_1.strict.equal(index_1["default"].fullDay(4, "id"), "Kamis");
        assert_1.strict.equal(index_1["default"].fullDay(5, "id"), "Jumat");
        assert_1.strict.equal(index_1["default"].fullDay(6, "id"), "Sabtu");
        assert_1.strict.equal(index_1["default"].fullDay(7, "id"), "Minggu");
    });
    it("should return wrong day number in spesific languange", function () {
        // english
        assert_1.strict.equal(index_1["default"].fullDay(13), "wrong day number, it must be 1 - 7");
        // indonesian
        assert_1.strict.equal(index_1["default"].fullDay(13, "id"), "nomor hari salah, harus 1 - 7");
    });
});
