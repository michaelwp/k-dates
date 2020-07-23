"use strict";
/**
 * k-date
 * Created by Michael Putong
 * Created : 22 July 2020
 * Last Update : 23 July 2020
 * Version History : 1.0.0
 */
exports.__esModule = true;
// set the languange file using localizify module
var localizify = require("localizify")["default"];
var en = require("./languange/en.json");
var id = require("./languange/id.json");
var localLang = localizify.add("en", en).add("id", id);
var t = require("localizify").t;
var kDate = /** @class */ (function () {
    function kDate() {
    }
    // get today date function
    kDate.today = function (format, lang) {
        if (format === void 0) { format = "YYYY-MM-DD"; }
        if (lang === void 0) { lang = "en"; }
        // set local languange
        localLang.setLocale(lang);
        // get day, month and year
        var date = new Date();
        // date and day number and name
        var dateNumber = date.getDate();
        var dayNumber = date.getDay();
        var fullDayName = this.fullDay(dayNumber, lang);
        var halfDayName = fullDayName.substr(0, 3);
        // month number and name
        var monthNumber = date.getMonth() + 1;
        var fullMonthName = this.fullMonth(monthNumber, lang);
        var halfMonthName = fullMonthName.substr(0, 3);
        // get full year
        var year = date.getFullYear();
        // read and return date by the format request
        switch (format) {
            case "YYYY-MM-DD":
                return year + "-" + monthNumber + "-" + dateNumber;
            case "DD-MMMM-YYYY":
                return dateNumber + "-" + fullMonthName + "-" + year;
            case "DD-MMM-YYYY":
                return dateNumber + "-" + halfMonthName + "-" + year;
            case "MM-DD-YYYY":
                return monthNumber + "-" + dateNumber + "-" + year;
            case "DD-MM-YYYY":
                return dateNumber + "-" + monthNumber + "-" + year;
            case "DDDD, DD-MM-YYYY":
                return fullDayName + ", " + dateNumber + "-" + monthNumber + "-" + year;
            case "DDD, DD-MM-YYYY":
                return halfDayName + ", " + dateNumber + "-" + monthNumber + "-" + year;
            default:
                return t("bad date format");
        }
    };
    // get the full month
    kDate.fullMonth = function (monthNumber, lang) {
        if (lang === void 0) { lang = "en"; }
        // set local languange
        localLang.setLocale(lang);
        // return the full month by the languange and month number request
        switch (true) {
            case monthNumber === 1:
                return t("january");
            case monthNumber === 2:
                return t("february");
            case monthNumber === 3:
                return t("march");
            case monthNumber === 4:
                return t("april");
            case monthNumber === 5:
                return t("may");
            case monthNumber === 6:
                return t("june");
            case monthNumber === 7:
                return t("july");
            case monthNumber === 8:
                return t("august");
            case monthNumber === 9:
                return t("september");
            case monthNumber === 10:
                return t("october");
            case monthNumber === 11:
                return t("november");
            case monthNumber === 12:
                return t("december");
            default:
                return t("wrong month number");
        }
    };
    // get the full day
    kDate.fullDay = function (dayNumber, lang) {
        if (lang === void 0) { lang = "en"; }
        // set local languange
        localLang.setLocale(lang);
        var t = require("localizify").t;
        // return the full day by the languange and day number request
        switch (true) {
            case dayNumber === 1:
                return t("monday");
            case dayNumber === 2:
                return t("thursday");
            case dayNumber === 3:
                return t("wednesday");
            case dayNumber === 4:
                return t("tuesday");
            case dayNumber === 5:
                return t("friday");
            case dayNumber === 6:
                return t("saturday");
            case dayNumber === 7:
                return t("sunday");
            default:
                return t("wrong day number");
        }
    };
    return kDate;
}());
exports["default"] = kDate;
