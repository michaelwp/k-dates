/**
 * Date Format Module
 * Created by Michael Putong
 * Created : 22 July 2020
 * Last Update : 22 July 2020
 */

export default class kDate {

    // get today date function
    static today(format: string, lang: string = "en"): string {

        // get day, month and year
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        // read and return date by the format request
        switch (format) {
            case "YYYY-MM-DD":
                return `${year}-${month}-${day}`;
            case "DD-MMMM-YYYY":
                return `${day}-${this.fullMonth(lang, month)}-${year}`;
            case "MM-DD-YYYY":
                return `${month}-${day}-${year}`;
            case "DD-MM-YYYY":
                return `${day}-${month}-${year}`;
            default:
                return "Bad date Format. \n " +
                    "Ex: 'YYYY-MM-DD' or 'MM-DD-YYYY' or 'DD-MM-YYYY'";
        }
    }

    // get the full month
    static fullMonth(lang: string, monthNumber: number): string {

        // set the languange using localizify module
        const {default: localizify} = require("localizify");
        const en = require('./languange/en.json');
        const id = require('./languange/id.json');

        localizify
            .add('en', en)
            .add('id', id)
            .setLocale(lang);

        const {t} = require('localizify');

        // return the full month by the languange and month number request
        switch (true) {
            case monthNumber === 1:
                return t('january');
            case monthNumber === 2:
                return t('february');
            case monthNumber === 3:
                return t('march');
            case monthNumber === 4:
                return t('april');
            case monthNumber === 5:
                return t('may');
            case monthNumber === 6:
                return t('june');
            case monthNumber === 7:
                return t('july');
            case monthNumber === 8:
                return t('august');
            case monthNumber === 9:
                return t('september');
            case monthNumber === 10:
                return t('october');
            case monthNumber === 11:
                return t('november');
            default:
                return t('december');
        }
    }
}