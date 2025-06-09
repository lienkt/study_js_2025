const input = [
  {
    app_id: "id1443249551",
    clicks: 283,
    date: "2022-10-22",
    impressions: 1058,
  },
  {
    app_id: "id1443249551",
    clicks: 276,
    date: "2022-10-23",
    impressions: 1175,
  },
  {
    app_id: "id1443249551",
    clicks: 191,
    date: "2022-10-21",
    impressions: 720,
  },
  {
    app_id: "id1443249551",
    clicks: 191,
    date: "2022-10-24",
  },
];

/*
output
{
  categories: ["2022-10-21", "2022-10-22", "2022-10-23"],
  series: [
    {
      name: "clicks",
      data: [191, 283, 276],
    },
    {
      name: "impressions",
      data: [720, 1058, 1175],
    },
  ]
}
*/

const output = {
  categories: [],
  series: [
    {
      name: "clicks",
      data: [],
    },
    {
      name: "impressions",
      data: [],
    },
  ],
};

input.forEach((item) => {
  output.categories.push(item.date);
  output.series.forEach((serie) => {
    if (
      serie.name === "clicks" &&
      item.clicks &&
      !serie.data.includes(item.clicks)
    ) {
      serie.data.push(item.clicks);
    } else if (item.impressions && !serie.data.includes(item.impressions)) {
      serie.data.push(item.impressions);
    }
  });
});

console.log(output);
console.log(output.series[0].data);
console.log(output.series[1].data);
