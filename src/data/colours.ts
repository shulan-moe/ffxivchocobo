enum ColorGroup {
  White,
  Red,
  Brown,
  Yellow,
  Green,
  Blue,
  Purple,
}

export interface Color {
  label: string;
  value: string;
  r: number;
  g: number;
  b: number;
  group: ColorGroup;
}

const colorArray:Array<Color> = [
  {
    label: "素雪白",
    value: "snow-white",
    r: 228,
    g: 223,
    b: 208,
    group: ColorGroup.White,
  },
  {
    label: "苍白灰",
    value: "ash-grey",
    r: 172,
    g: 168,
    b: 162,
    group: ColorGroup.White,
  },
  {
    label: "古菩灰",
    value: "goobbue-grey",
    r: 137,
    g: 135,
    b: 132,
    group: ColorGroup.White,
  },
  {
    label: "石板灰",
    value: "slate-grey",
    r: 101,
    g: 101,
    b: 101,
    group: ColorGroup.White,
  },
  {
    label: "木炭灰",
    value: "charcoal-grey",
    r: 72,
    g: 71,
    b: 66,
    group: ColorGroup.White,
  },
  {
    label: "煤烟黑",
    value: "soot-black",
    r: 43,
    g: 41,
    b: 35,
    group: ColorGroup.White,
  },

  {
    label: "玫瑰粉",
    value: "rose-pink",
    r: 230,
    g: 159,
    b: 150,
    group: ColorGroup.Red,
  },
  {
    label: "丁香紫",
    value: "lilac-purple",
    r: 131,
    g: 105,
    b: 105,
    group: ColorGroup.Red,
  },
  {
    label: "罗兰莓",
    value: "rolanberry-red",
    r: 91,
    g: 23,
    b: 41,
    group: ColorGroup.Red,
  },
  {
    label: "卫月红",
    value: "dalamud-red",
    r: 120,
    g: 26,
    b: 26,
    group: ColorGroup.Red,
  },
  {
    label: "铁锈红",
    value: "rust-red",
    r: 98,
    g: 34,
    b: 7,
    group: ColorGroup.Red,
  },
  {
    label: "果酒红",
    value: "wine-red",
    r: 69,
    g: 21,
    b: 17,
    group: ColorGroup.Red,
  },
  {
    label: "珊瑚粉",
    value: "coral-pink",
    r: 204,
    g: 108,
    b: 94,
    group: ColorGroup.Red,
  },
  {
    label: "鲜血红",
    value: "blood-red",
    r: 145,
    g: 59,
    b: 48,
    group: ColorGroup.Red,
  },
  {
    label: "鲑鱼粉",
    value: "salmon-pink",
    r: 228,
    g: 170,
    b: 138,
    group: ColorGroup.Red,
  },

  {
    label: "日落橙",
    value: "sunset-orange",
    r: 183,
    g: 92,
    b: 45,
    group: ColorGroup.Brown,
  },
  {
    label: "台地红",
    value: "mesa-red",
    r: 125,
    g: 57,
    b: 6,
    group: ColorGroup.Brown,
  },
  {
    label: "树皮棕",
    value: "bark-brown",
    r: 106,
    g: 75,
    b: 55,
    group: ColorGroup.Brown,
  },
  {
    label: "巧克力",
    value: "chocolate-brown",
    r: 110,
    g: 61,
    b: 36,
    group: ColorGroup.Brown,
  },
  {
    label: "铁锈棕",
    value: "russet-brown",
    r: 79,
    g: 45,
    b: 31,
    group: ColorGroup.Brown,
  },
  {
    label: "钴铁棕",
    value: "kobold-brown",
    r: 48,
    g: 33,
    b: 27,
    group: ColorGroup.Brown,
  },
  {
    label: "软木棕",
    value: "cork-brown",
    r: 201,
    g: 145,
    b: 86,
    group: ColorGroup.Brown,
  },
  {
    label: "卢恩棕",
    value: "qiqirn-brown",
    r: 153,
    g: 110,
    b: 63,
    group: ColorGroup.Brown,
  },
  {
    label: "奥猴棕",
    value: "Opo-opo-brown",
    r: 123,
    g: 92,
    b: 45,
    group: ColorGroup.Brown,
  },
  {
    label: "山羊棕",
    value: "aldgoat-brown",
    r: 162,
    g: 135,
    b: 92,
    group: ColorGroup.Brown,
  },
  {
    label: "南瓜橙",
    value: "pumpkin-orange",
    r: 197,
    g: 116,
    b: 36,
    group: ColorGroup.Brown,
  },
  {
    label: "橡果棕",
    value: "acorn-brown",
    r: 142,
    g: 88,
    b: 27,
    group: ColorGroup.Brown,
  },
  {
    label: "果园棕",
    value: "orchard-brown",
    r: 100,
    g: 66,
    b: 22,
    group: ColorGroup.Brown,
  },
  {
    label: "山栗棕",
    value: "chestnut-brown",
    r: 61,
    g: 41,
    b: 13,
    group: ColorGroup.Brown,
  },
  {
    label: "哥布林",
    value: "gobbiebag-brown",
    r: 185,
    g: 164,
    b: 137,
    group: ColorGroup.Brown,
  },
  {
    label: "页岩棕",
    value: "shale-brown",
    r: 146,
    g: 129,
    b: 108,
    group: ColorGroup.Brown,
  },
  {
    label: "鼹鼠棕",
    value: "mole-brown",
    r: 97,
    g: 82,
    b: 69,
    group: ColorGroup.Brown,
  },
  {
    label: "沃土棕",
    value: "loam-brown",
    r: 63,
    g: 51,
    b: 41,
    group: ColorGroup.Brown,
  },

  {
    label: "骸骨白",
    value: "bone-white",
    r: 235,
    g: 211,
    b: 160,
    group: ColorGroup.Yellow,
  },
  {
    label: "黄沙棕",
    value: "ul-brown",
    r: 183,
    g: 163,
    b: 112,
    group: ColorGroup.Yellow,
  },
  {
    label: "沙漠黄",
    value: "desert-yellow",
    r: 219,
    g: 180,
    b: 87,
    group: ColorGroup.Yellow,
  },
  {
    label: "蜂蜜黄",
    value: "honey-yellow",
    r: 250,
    g: 198,
    b: 43,
    group: ColorGroup.Yellow,
  },
  {
    label: "玉米黄",
    value: "millioncorn-yellow",
    r: 228,
    g: 158,
    b: 52,
    group: ColorGroup.Yellow,
  },
  {
    label: "猛豹黄",
    value: "coeurl-yellow",
    r: 188,
    g: 136,
    b: 4,
    group: ColorGroup.Yellow,
  },
  {
    label: "奶油黄",
    value: "cream-yellow",
    r: 242,
    g: 215,
    b: 112,
    group: ColorGroup.Yellow,
  },
  {
    label: "日影黄",
    value: "halatali-yellow",
    r: 165,
    g: 132,
    b: 48,
    group: ColorGroup.Yellow,
  },
  {
    label: "萄干棕",
    value: "raisin-brown",
    r: 64,
    g: 51,
    b: 17,
    group: ColorGroup.Yellow,
  },

  {
    label: "泥沼绿",
    value: "mud-green",
    r: 88,
    g: 82,
    b: 48,
    group: ColorGroup.Green,
  },
  {
    label: "妖精绿",
    value: "sylph-green",
    r: 187,
    g: 187,
    b: 138,
    group: ColorGroup.Green,
  },
  {
    label: "青柠绿",
    value: "lime-green",
    r: 171,
    g: 176,
    b: 84,
    group: ColorGroup.Green,
  },
  {
    label: "苔藓绿",
    value: "moss-green",
    r: 112,
    g: 115,
    b: 38,
    group: ColorGroup.Green,
  },
  {
    label: "牧草绿",
    value: "meadow-green",
    r: 139,
    g: 156,
    b: 99,
    group: ColorGroup.Green,
  },
  {
    label: "橄榄绿",
    value: "olive-green",
    r: 75,
    g: 82,
    b: 50,
    group: ColorGroup.Green,
  },
  {
    label: "沼泽绿",
    value: "marsh-green",
    r: 50,
    g: 54,
    b: 33,
    group: ColorGroup.Green,
  },
  {
    label: "苹果绿",
    value: "apple-green",
    r: 149,
    g: 174,
    b: 92,
    group: ColorGroup.Green,
  },
  {
    label: "仙人掌",
    value: "cactuar-green",
    r: 101,
    g: 130,
    b: 65,
    group: ColorGroup.Green,
  },
  {
    label: "猎人绿",
    value: "hunter-green",
    r: 40,
    g: 75,
    b: 38,
    group: ColorGroup.Green,
  },
  {
    label: "口花绿",
    value: "ochu-green",
    r: 64,
    g: 99,
    b: 57,
    group: ColorGroup.Green,
  },
  {
    label: "金龟绿",
    value: "adamantoise-green",
    r: 95,
    g: 117,
    b: 88,
    group: ColorGroup.Green,
  },
  {
    label: "地神绿",
    value: "nophica-green",
    r: 59,
    g: 77,
    b: 60,
    group: ColorGroup.Green,
  },
  {
    label: "深林绿",
    value: "deepwood-green",
    r: 30,
    g: 42,
    b: 33,
    group: ColorGroup.Green,
  },
  {
    label: "天上蓝",
    value: "celeste-green",
    r: 150,
    g: 189,
    b: 185,
    group: ColorGroup.Green,
  },
  {
    label: "绿松蓝",
    value: "turquoise-green",
    r: 67,
    g: 114,
    b: 144,
    group: ColorGroup.Green,
  },
  {
    label: "魔花绿",
    value: "morbol-green",
    r: 31,
    g: 70,
    b: 70,
    group: ColorGroup.Green,
  },

  {
    label: "寒冰蓝",
    value: "ice-blue",
    r: 178,
    g: 196,
    b: 206,
    group: ColorGroup.Blue,
  },
  {
    label: "天空蓝",
    value: "sky-blue",
    r: 131,
    g: 176,
    b: 210,
    group: ColorGroup.Blue,
  },
  {
    label: "海雾蓝",
    value: "seafog-blue",
    r: 100,
    g: 129,
    b: 160,
    group: ColorGroup.Blue,
  },
  {
    label: "孔雀蓝",
    value: "peacock-blue",
    r: 59,
    g: 104,
    b: 134,
    group: ColorGroup.Blue,
  },
  {
    label: "罗海蓝",
    value: "rhotano-blue",
    r: 28,
    g: 61,
    b: 84,
    group: ColorGroup.Blue,
  },
  {
    label: "腐尸蓝",
    value: "corpse-blue",
    r: 142,
    g: 155,
    b: 172,
    group: ColorGroup.Blue,
  },
  {
    label: "青磷蓝",
    value: "ceruleam-blue",
    r: 79,
    g: 87,
    b: 102,
    group: ColorGroup.Blue,
  },
  {
    label: "靛青蓝",
    value: "woad-blue",
    r: 47,
    g: 56,
    b: 81,
    group: ColorGroup.Blue,
  },
  {
    label: "油墨蓝",
    value: "ink-blue",
    r: 26,
    g: 31,
    b: 39,
    group: ColorGroup.Blue,
  },
  {
    label: "盗龙蓝",
    value: "raptor-blue",
    r: 91,
    g: 127,
    b: 192,
    group: ColorGroup.Blue,
  },
  {
    label: "东洲蓝",
    value: "othard-blue",
    r: 47,
    g: 88,
    b: 137,
    group: ColorGroup.Blue,
  },
  {
    label: "风暴蓝",
    value: "storm-blue",
    r: 35,
    g: 65,
    b: 114,
    group: ColorGroup.Blue,
  },
  {
    label: "虚空蓝",
    value: "void-blue",
    r: 17,
    g: 41,
    b: 68,
    group: ColorGroup.Blue,
  },
  {
    label: "皇室蓝",
    value: "royal-blue",
    r: 39,
    g: 48,
    b: 103,
    group: ColorGroup.Blue,
  },
  {
    label: "午夜蓝",
    value: "midnight-blue",
    r: 24,
    g: 25,
    b: 55,
    group: ColorGroup.Blue,
  },
  {
    label: "阴影蓝",
    value: "shadow-blue",
    r: 55,
    g: 55,
    b: 71,
    group: ColorGroup.Blue,
  },
  {
    label: "深渊蓝",
    value: "abyssal-blue",
    r: 49,
    g: 45,
    b: 87,
    group: ColorGroup.Blue,
  },
  {
    label: "薰衣草",
    value: "lavender-purple",
    r: 135,
    g: 127,
    b: 174,
    group: ColorGroup.Purple,
  },
  {
    label: "忧郁紫",
    value: "gloom-purple",
    r: 81,
    g: 69,
    b: 96,
    group: ColorGroup.Purple,
  },
  {
    label: "醋栗紫",
    value: "currant-purple",
    r: 50,
    g: 44,
    b: 59,
    group: ColorGroup.Purple,
  },
  {
    label: "虹膜紫",
    value: "iris-purple",
    r: 183,
    g: 158,
    b: 188,
    group: ColorGroup.Purple,
  },
  {
    label: "葡萄紫",
    value: "grape-purple",
    r: 59,
    g: 42,
    b: 61,
    group: ColorGroup.Purple,
  },
  {
    label: "帝王紫",
    value: "regal-purple",
    r: 102,
    g: 48,
    b: 78,
    group: ColorGroup.Purple,
  },
];

const categories:Map<ColorGroup, {cn: string; value: string}> = new Map([
  [ColorGroup.White, {
    cn: '白',
    value: 'gray-100'
  }],
  [ColorGroup.Red, {
    cn: '红',
    value: 'red-700'
  }],
  [ColorGroup.Brown, {
    cn: '棕',
    value: 'yellow-800'
  }],
  [ColorGroup.Yellow, {
    cn: '黄',
    value: 'yellow-300'
  }],
  [ColorGroup.Green, {
    cn: '绿',
    value: 'green-400'
  }],
  [ColorGroup.Blue, {
    cn: '蓝',
    value: 'blue-500'
  }],
  [ColorGroup.Purple, {
    cn: '紫',
    value: 'purple-700'
  }]
])

const colours:Map<string, Color> = new Map();

colorArray.forEach(config => {
  colours.set(config.value, config);
})

export { ColorGroup, colours, categories };