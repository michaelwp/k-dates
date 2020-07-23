/**
 * k-date
 * Created by Michael Putong
 * Created : 22 July 2020
 * Last Update : 23 July 2020
 * Version History : 1.0.0
 */

// set the languange file using localizify module
const { default: localizify } = require("localizify");
const en = require("./languange/en.json");
const id = require("./languange/id.json");
const localLang = localizify.add("en", en).add("id", id);
const { t } = require("localizify");

export default class kDate {
  // get today date function
  static today(format: string = "YYYY-MM-DD", lang: string = "en"): string {
    // set local languange
    localLang.setLocale(lang);

    // get day, month and year
    const date = new Date();

    // date and day number and name
    const dateNumber = date.getDate();
    const dayNumber = date.getDay();
    const fullDayName = this.fullDay(dayNumber, lang);
    const halfDayName = fullDayName.substr(0, 3);

    // month number and name
    const monthNumber = date.getMonth() + 1;
    const fullMonthName = this.fullMonth(monthNumber, lang);
    const halfMonthName = fullMonthName.substr(0, 3);

    // get full year
    const year = date.getFullYear();

    // read and return date by the format request
    switch (format) {
      case "YYYY-MM-DD":
        return `${year}-${monthNumber}-${dateNumber}`;
      case "DD-MMMM-YYYY":
        return `${dateNumber}-${fullMonthName}-${year}`;
      case "DD-MMM-YYYY":
        return `${dateNumber}-${halfMonthName}-${year}`;
      case "MM-DD-YYYY":
        return `${monthNumber}-${dateNumber}-${year}`;
      case "DD-MM-YYYY":
        return `${dateNumber}-${monthNumber}-${year}`;
      case "DDDD, DD-MM-YYYY":
        return `${fullDayName}, ${dateNumber}-${monthNumber}-${year}`;
      case "DDD, DD-MM-YYYY":
        return `${halfDayName}, ${dateNumber}-${monthNumber}-${year}`;
      default:
        return t("bad date format");
    }
  }

  // get the full month
  static fullMonth(monthNumber: number, lang: string = "en"): string {
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
  }

  // get the full day
  static fullDay(dayNumber: number, lang: string = "en"): string {
    // set local languange
    localLang.setLocale(lang);

    const { t } = require("localizify");

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
  }
}
