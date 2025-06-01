/*
  - change all title short hand = full name
  - show length of title
  - in ra output2 with title length > 10
    const output = [
      { id: 1, title: 'Viet Nam', titleLengh: 8 },
      { id: 2, title: 'United States', titleLengh: 13 },
      { id: 3, title: 'United Kingdom', titleLengh: 14 },
      { id: 4, title: 'Japanese', titleLengh: 8 },
      { id: 5, title: 'China', titleLengh: 5 },
    ]
    const output2 = [
      { id: 2, title: 'United States', titleLengh: 13 },
      { id: 3, title: 'United Kingdom', titleLengh: 14 }
    ]
*/
const countries = [
  { id: 1, code: "US" },
  { id: 2, code: "BE" },
  { id: 3, code: "GB" },
  { id: 4, code: "DE" },
  { id: 5, code: "JP" },
  { id: 6, code: "VN" },
  { id: 7, code: "CN" },
];
const codes = countries.map((item) => item.code).join(",");
const countryWithNames = await fetch(
  `https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name,cca2`
)
  .then((response) => response.json())
  .then((data) => {
    const countryNames = {};
    for (const country of data) {
      countryNames[country.cca2] = country.name.common;
    }
    const result = countries.map((item) => {
      return {
        ...item,
        title: countryNames[item.code],
        titleLength: countryNames[item.code].length,
      };
    });
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.error("Fetch error:", err.message);
  });

const countryWithLongNames = countryWithNames.filter(
  (country) => country.titleLength > 10
);
console.log(countryWithLongNames);
