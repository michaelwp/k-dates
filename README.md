# k-date
npm package for formatting date and time, support multi languange (indonesian & english)

## Supported languange
1. English ("en")
2. Indonesian ("id")

## How To Use
Import the function
```javascript
const kDate = require('k-date');
```
return current date with format "YYYY-MM-DD"
```javascript
console.log(kDate.today("YYYY-MM-DD"));
```
return current full month name with format "DD-MMMM-YYYY in spesific languange'
```javascript
// <english (default)>
console.log(kDate.today("DD-MMMM-YYYY"));

// <indonesian>
console.log(kDate.today("DD-MMMM-YYYY","id"));
```
return current full day name with format "DDDD, DD-MM-YYYY in spesific languange'
```javascript
// <english (default)>
console.log(kDate.today("DDDD, DD-MM-YYYY"));

// <indonesian>
console.log(kDate.today("DDDD, DD-MM-YYYY","id"));
```

return full month name only
```javascript
// <english (default)>
console.log(kDate.fullMonth(1)); // Will return 'January'

// <indonesia>
console.log(kDate.fullMonth(1)); // Will return 'Januari'

```

## Supported date format
1. YYYY-MM-DD (2020-12-25).
2. DD-MM-YYYY (25-12-2020).
3. DD-MMM-YYYY (25-Dec-2020).
4. DD-MMMM-YYYY (25-December-2020).
5. MM-DD-YYYY (12-25-2020).
6. DDD, DD-MM-YYYY (Fri, 25-12-2020).
7. DDDD, DD-MM-YYYY (Friday, 25-12-2020).
8. DDD, DD-MMM-YYYY (Fri, 25-Dec-2020).
9. DDD, DD-MMMM-YYYY (Fri, 25-December-2020).
10. DDDD, DD-MMM-YYYY (Fri, 25-Dec-2020).
11. DDDD, DD-MMMM-YYYY (Friday, 25-December-2020).