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
    const fullMonthEn = kDate.fullMonth(month);
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

  it("should return Error Bad date Format in spesific languange", function () {
    // english
    assert.equal(
      kDate.today("XXX, DD-MM-YYYY"),
      "Bad date Format. Ex: 'YYYY-MM-DD' or 'MM-DD-YYYY' or 'DD-MM-YYYY'"
    );

    // indonesian
    assert.equal(
      kDate.today("XXX, DD-MM-YYYY", "id"),
      "Format tanggal salah. Mis: 'YYYY-MM-DD' atau 'MM-DD-YYYY' atau 'DD-MM-YYYY'"
    );
  });

  it("should return full month name", function () {
    // English
    assert.equal(kDate.fullMonth(1), "January");
    assert.equal(kDate.fullMonth(2), "February");
    assert.equal(kDate.fullMonth(3), "March");
    assert.equal(kDate.fullMonth(4), "April");
    assert.equal(kDate.fullMonth(5), "May");
    assert.equal(kDate.fullMonth(6), "June");
    assert.equal(kDate.fullMonth(7), "July");
    assert.equal(kDate.fullMonth(8), "August");
    assert.equal(kDate.fullMonth(9), "September");
    assert.equal(kDate.fullMonth(10), "October");
    assert.equal(kDate.fullMonth(11), "November");
    assert.equal(kDate.fullMonth(12), "December");

    // Indonesian
    assert.equal(kDate.fullMonth(1, "id"), "Januari");
    assert.equal(kDate.fullMonth(2, "id"), "Februari");
    assert.equal(kDate.fullMonth(3, "id"), "Maret");
    assert.equal(kDate.fullMonth(4, "id"), "April");
    assert.equal(kDate.fullMonth(5, "id"), "Mei");
    assert.equal(kDate.fullMonth(6, "id"), "Juni");
    assert.equal(kDate.fullMonth(7, "id"), "Juli");
    assert.equal(kDate.fullMonth(8, "id"), "Agustus");
    assert.equal(kDate.fullMonth(9, "id"), "September");
    assert.equal(kDate.fullMonth(10, "id"), "Oktober");
    assert.equal(kDate.fullMonth(11, "id"), "November");
    assert.equal(kDate.fullMonth(12, "id"), "Desember");
  });

  it("should return wrong month number in spesific languange", function () {
    // english
    assert.equal(kDate.fullMonth(13), "wrong month number, it must be 1 - 12");

    // indonesian
    assert.equal(kDate.fullMonth(13, "id"), "nomor bulan salah, harus 1 - 12");
  });

  it("should return full day name", function () {
    // English
    assert.equal(kDate.fullDay(1), "Monday");
    assert.equal(kDate.fullDay(2), "Thursday");
    assert.equal(kDate.fullDay(3), "Wednesday");
    assert.equal(kDate.fullDay(4), "Tuesday");
    assert.equal(kDate.fullDay(5), "Friday");
    assert.equal(kDate.fullDay(6), "Saturday");
    assert.equal(kDate.fullDay(7), "Sunday");

    // Indonesian
    assert.equal(kDate.fullDay(1, "id"), "Senin");
    assert.equal(kDate.fullDay(2, "id"), "Selasa");
    assert.equal(kDate.fullDay(3, "id"), "Rabu");
    assert.equal(kDate.fullDay(4, "id"), "Kamis");
    assert.equal(kDate.fullDay(5, "id"), "Jumat");
    assert.equal(kDate.fullDay(6, "id"), "Sabtu");
    assert.equal(kDate.fullDay(7, "id"), "Minggu");
  });

  it("should return wrong day number in spesific languange", function () {
    // english
    assert.equal(kDate.fullDay(13), "wrong day number, it must be 1 - 7");

    // indonesian
    assert.equal(kDate.fullDay(13, "id"), "nomor hari salah, harus 1 - 7");
  });

  it('should return current date with format "DDD, DD-MMM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // English
    const fullMonthEn = kDate.fullMonth(month);
    const halfMonthEn = fullMonthEn.substr(0, 3);
    const fullDayEn = kDate.fullDay(day);
    const halfDayEn = fullDayEn.substr(0, 3);
    const toDayEn = `${halfDayEn}, ${date.getDate()}-${halfMonthEn}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDD, DD-MMM-YYYY"), toDayEn);

    // Indonesian
    const fullMonthId = kDate.fullMonth(month, "id");
    const halfMonthId = fullMonthId.substr(0, 3);
    const fullDayId = kDate.fullDay(day, "id");
    const halfDayId = fullDayId.substr(0, 3);
    const toDayId = `${halfDayId}, ${date.getDate()}-${halfMonthId}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDD, DD-MMM-YYYY", "id"), toDayId);
  });

  it('should return current date with format "DDD, DD-MMMM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // English
    const fullMonthEn = kDate.fullMonth(month);
    const fullDayEn = kDate.fullDay(day);
    const halfDayEn = fullDayEn.substr(0, 3);
    const toDayEn = `${halfDayEn}, ${date.getDate()}-${fullMonthEn}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDD, DD-MMMM-YYYY"), toDayEn);

    // Indonesian
    const fullMonthId = kDate.fullMonth(month, "id");
    const fullDayId = kDate.fullDay(day, "id");
    const halfDayId = fullDayId.substr(0, 3);
    const toDayId = `${halfDayId}, ${date.getDate()}-${fullMonthId}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDD, DD-MMMM-YYYY", "id"), toDayId);
  });

  it('should return current date with format "DDDD, DD-MMM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // English
    const fullMonthEn = kDate.fullMonth(month);
    const halfMonthEn = fullMonthEn.substr(0, 3);
    const fullDayEn = kDate.fullDay(day);
    const toDayEn = `${fullDayEn}, ${date.getDate()}-${halfMonthEn}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDDD, DD-MMM-YYYY"), toDayEn);

    // Indonesian
    const fullMonthId = kDate.fullMonth(month, "id");
    const halfMonthId = fullMonthId.substr(0, 3);
    const fullDayId = kDate.fullDay(day, "id");
    const toDayId = `${fullDayId}, ${date.getDate()}-${halfMonthId}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDDD, DD-MMM-YYYY", "id"), toDayId);
  });

  it('should return current date with format "DDDD, DD-MMMM-YYYY in spesific languange', function () {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDay();

    // English
    const fullMonthEn = kDate.fullMonth(month);
    const fullDayEn = kDate.fullDay(day);
    const toDayEn = `${fullDayEn}, ${date.getDate()}-${fullMonthEn}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDDD, DD-MMMM-YYYY"), toDayEn);

    // Indonesian
    const fullMonthId = kDate.fullMonth(month, "id");
    const fullDayId = kDate.fullDay(day, "id");
    const toDayId = `${fullDayId}, ${date.getDate()}-${fullMonthId}-${date.getFullYear()}`;
    assert.equal(kDate.today("DDDD, DD-MMMM-YYYY", "id"), toDayId);
  });
});
