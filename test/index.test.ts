import kDate from "../index";
import { strict as assert } from "assert";

describe("k-date function", function () {
  it('should return today date with format "YYYY-MM-DD"', function () {
    const date = new Date();
    const toDay = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    assert.equal(kDate.today("YYYY-MM-DD"), toDay);
  });

  it('should return today date with format "MM-DD-YYYY"', function () {
    const date = new Date();
    const toDay = `${
      date.getMonth() + 1
    }-${date.getDate()}-${date.getFullYear()}`;
    assert.equal(kDate.today("MM-DD-YYYY"), toDay);
  });

  it('should return today date with format "DD-MM-YYYY"', function () {
    const date = new Date();
    const toDay = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    assert.equal(kDate.today("DD-MM-YYYY"), toDay);
  });

  it('should return today date with format "DD-MMMM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;

    // English
    const toDayEn = `${date.getDate()}-${kDate.fullMonth(
      month,
      "en"
    )}-${date.getFullYear()}`;
    assert.equal(kDate.today("DD-MMMM-YYYY"), toDayEn);

    // Indonesian
    const toDayId = `${date.getDate()}-${kDate.fullMonth(
      month,
      "id"
    )}-${date.getFullYear()}`;
    assert.equal(kDate.today("DD-MMMM-YYYY", "id"), toDayId);
  });

  it('should return today date with format "DD-MMM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;

    // English
    const fullMonthEn = kDate.fullMonth(month, "en");
    const halfMonthEn = fullMonthEn.substr(0, 3);
    const toDayEn = `${date.getDate()}-${halfMonthEn}-${date.getFullYear()}`;
    assert.equal(kDate.today("DD-MMM-YYYY"), toDayEn);

    // Indonesian
    const fullMonthId = kDate.fullMonth(month, "id");
    const halfMonthId = fullMonthId.substr(0, 3);
    const toDayId = `${date.getDate()}-${halfMonthId}-${date.getFullYear()}`;
    assert.equal(kDate.today("DD-MMM-YYYY", "id"), toDayId);
  });

  it('should return today date with format "DDDD, DD-MM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // English
    const fullDayEn = kDate.fullDay(day);
    const toDayEn = `${fullDayEn}, ${date.getDate()}-${month}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDDD, DD-MM-YYYY"), toDayEn);

    // Indonesian
    const fullDayId = kDate.fullDay(day, "id");
    const toDayId = `${fullDayId}, ${date.getDate()}-${month}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDDD, DD-MM-YYYY", "id"), toDayId);
  });

  it('should return today date with format "DDD, DD-MM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // English
    const fullDayEn = kDate.fullDay(day);
    const halfDayEn = fullDayEn.substr(0, 3);
    const toDayEn = `${halfDayEn}, ${date.getDate()}-${month}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDD, DD-MM-YYYY"), toDayEn);

    // Indonesian
    const fullDayId = kDate.fullDay(day, "id");
    const halfDayId = fullDayId.substr(0, 3);
    const toDayId = `${halfDayId}, ${date.getDate()}-${month}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDD, DD-MM-YYYY", "id"), toDayId);
  });
});
