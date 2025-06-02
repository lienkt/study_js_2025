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
