import kDate from "../index";
import {strict as assert} from 'assert'

describe('k-date function', function () {
    it('should return today date with format "YYYY-MM-DD"', function () {
        const date = new Date();
        const toDay = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        assert.equal(kDate.today("YYYY-MM-DD"), toDay);
    });

    it('should return today date with format "MM-DD-YYYY"', function () {
        const date = new Date();
        const toDay = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
        assert.equal(kDate.today("MM-DD-YYYY"), toDay);
    });

    it('should return today date with format "DD-MM-YYYY"', function () {
        const date = new Date();
        const toDay = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        assert.equal(kDate.today("DD-MM-YYYY"), toDay);
    });

    it('should return today date with format "DD-MMMM-YYYY in spesific languange', function () {
        const date = new Date();
        const month = date.getMonth() + 1;

        // English
        const toDayEn = `${date.getDate()}-${kDate.fullMonth("en", month)}-${date.getFullYear()}`;
        assert.equal(kDate.today("DD-MMMM-YYYY"), toDayEn);

        // Indonesian
        const toDayId = `${date.getDate()}-${kDate.fullMonth("id", month)}-${date.getFullYear()}`;
        assert.equal(kDate.today("DD-MMMM-YYYY", "id"), toDayId);
    });
});


