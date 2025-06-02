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