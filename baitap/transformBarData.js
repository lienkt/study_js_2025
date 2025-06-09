const input = [
  {
    campaign_id: "ss_amn_magictiles3_jp_ios_mtg_phone",
    source: "non-organic",
    installs: 1198,
  },
  {
    campaign_id: "ss_amn_magictiles3_jp_ios_mtg_tablet",
    source: "non-organic",
    installs: 189,
  },
  {
    campaign_id: "None",
    source: "organic",
    installs: 179,
  },
];

/*
  output
  {
    categories: ["ss_amn_magictiles3_jp_ios_mtg_phone", "ss_amn_magictiles3_jp_ios_mtg_tablet", "None"],
    xAxis: [1198, 189, 179],
    series: [
      {
        color: "rgb(51, 154, 240)",
        name: "non-organic",
        data: [1198, 189, 0],
      },
      {
        color: "rgb(81, 207, 102)",
        name: "organic",
        data: [0, 0, 179],
      },
    ]
  }
  */
const output = {
  categories: [],
  xAxis: [],
  series: [
    {
      color: "rgb(51, 154, 240)",
      name: "non-organic",
      data: [],
    },
    {
      color: "rgb(81, 207, 102)",
      name: "organic",
      data: [],
    },
  ],
};
input.forEach((camp) => {
  output.categories.push(camp.campaign_id);
  output.xAxis.push(camp.installs);
  output.series.forEach((s) => {
    s.data.push(s.name === camp.source ? camp.installs : 0);
  });
});

console.log(output);
console.log(output.series[0].data);
console.log(output.series[1].data);
