var provinceOp=null;
var cityOp=null;
var schoolOp=null;

var PROVNUM=41;
//定义省数组provinceOp
provinceOp = new Array(PROVNUM);
provinceOp[0]=new Option("北京","100");
provinceOp[1]=new Option("天津","200");
provinceOp[2]=new Option("上海","300");
provinceOp[3]=new Option("重庆","400");
provinceOp[4]=new Option("中国台湾","500");
provinceOp[5]=new Option("香港","600");
provinceOp[6]=new Option("澳门","700");
provinceOp[7]=new Option("河北","800");
provinceOp[8]=new Option("山西","900");
provinceOp[9]=new Option("内蒙古","1000");
provinceOp[10]=new Option("广东","1100");
provinceOp[11]=new Option("海南","1200");
provinceOp[12]=new Option("江苏","1300");
provinceOp[13]=new Option("浙江","1400");
provinceOp[14]=new Option("安徽","1500");
provinceOp[15]=new Option("山东","1600");
provinceOp[16]=new Option("江西","1700");
provinceOp[17]=new Option("福建","1800");
provinceOp[18]=new Option("湖南","1900");
provinceOp[19]=new Option("湖北","2000");
provinceOp[20]=new Option("河南","2100");
provinceOp[21]=new Option("辽宁","2200");
provinceOp[22]=new Option("吉林","2300");
provinceOp[23]=new Option("黑龙江","2400");
provinceOp[24]=new Option("宁夏","2500");
provinceOp[25]=new Option("陕西","2600");
provinceOp[26]=new Option("青海","2700");
provinceOp[27]=new Option("甘肃","2800");
provinceOp[28]=new Option("新疆","2900");
provinceOp[29]=new Option("四川","3000");
provinceOp[30]=new Option("云南","3100");
provinceOp[31]=new Option("西藏","3200");
provinceOp[32]=new Option("贵州","3300");
provinceOp[33]=new Option("广西","3400");




//定义城市二维数组，第一维分34个省，第二维是各省的城市
cityOp = new Array(PROVNUM);
cityOp[0] = new Array(1);
cityOp[0][0]=new Option("北京","101");


cityOp[1] = new Array(1);
cityOp[1][0]=new Option("天津","201");

cityOp[2] = new Array(1);
cityOp[2][0]=new Option("上海","301");



cityOp[3] = new Array(1);
cityOp[3][0]=new Option("重庆","401");

cityOp[4] = new Array(1);
cityOp[4][0]=new Option("中国台湾","501");


cityOp[5] = new Array(1);
cityOp[5][0]=new Option("香港","601");


cityOp[6] = new Array(1);
cityOp[6][0]=new Option("澳门","701");


cityOp[7] = new Array(12);
cityOp[7][0]=new Option("石家庄","801");
cityOp[7][1]=new Option("唐山","802");
cityOp[7][2]=new Option("秦皇岛","803");
cityOp[7][3]=new Option("邯郸","804");
cityOp[7][4]=new Option("邢台","805");
cityOp[7][5]=new Option("保定","806");
cityOp[7][6]=new Option("张家口","807");
cityOp[7][7]=new Option("承德","808");
cityOp[7][8]=new Option("沧州","809");
cityOp[7][9]=new Option("廊坊","810");
cityOp[7][10]=new Option("衡水","811");
cityOp[7][11]=new Option("其它地区","812");

cityOp[8] = new Array(12);
cityOp[8][0]=new Option("太原","901");
cityOp[8][1]=new Option("大同","902");
cityOp[8][2]=new Option("阳泉","903");
cityOp[8][3]=new Option("长治","904");
cityOp[8][4]=new Option("忻州","905");
cityOp[8][5]=new Option("吕梁","906");
cityOp[8][6]=new Option("晋中","907");
cityOp[8][7]=new Option("临汾","908");
cityOp[8][8]=new Option("运城","909");
cityOp[8][9]=new Option("晋城","910");
cityOp[8][10]=new Option("朔州","911");
cityOp[8][11]=new Option("其它地区","912");

cityOp[9] = new Array(14);
cityOp[9][0]=new Option("呼和浩特","1001");
cityOp[9][1]=new Option("包头","1002");
cityOp[9][2]=new Option("赤峰","1003");
cityOp[9][3]=new Option("通辽","1004");
cityOp[9][4]=new Option("呼伦贝尔","1005");
cityOp[9][5]=new Option("乌海","1006");
cityOp[9][6]=new Option("兴安","1007");
cityOp[9][7]=new Option("哲里木","1008");
cityOp[9][8]=new Option("锡林郭勒","1009");
cityOp[9][9]=new Option("乌兰察布","1010");
cityOp[9][10]=new Option("伊克昭","1011");
cityOp[9][11]=new Option("巴彦淖尔","1012");
cityOp[9][12]=new Option("阿拉善","1013");
cityOp[9][13]=new Option("其它地区","1014");

cityOp[10] = new Array(22);
cityOp[10][0]=new Option("广州","1101");
cityOp[10][1]=new Option("韶关","1102");
cityOp[10][2]=new Option("深圳","1103");
cityOp[10][3]=new Option("珠海","1104");
cityOp[10][4]=new Option("汕头","1105");
cityOp[10][5]=new Option("佛山","1106");
cityOp[10][6]=new Option("江门","1107");
cityOp[10][7]=new Option("湛江","1108");
cityOp[10][8]=new Option("茂名","1109");
cityOp[10][9]=new Option("肇庆","1110");
cityOp[10][10]=new Option("惠州","1111");
cityOp[10][11]=new Option("梅州","1112");
cityOp[10][12]=new Option("汕尾","1113");
cityOp[10][13]=new Option("河源","1114");
cityOp[10][14]=new Option("阳江","1115");
cityOp[10][15]=new Option("清远","1116");
cityOp[10][16]=new Option("东莞","1117");
cityOp[10][17]=new Option("中山","1118");
cityOp[10][18]=new Option("潮州","1119");
cityOp[10][19]=new Option("揭阳","1120");
cityOp[10][20]=new Option("云浮","1121");
cityOp[10][21]=new Option("其它地区","1122");


cityOp[11] = new Array(20);
cityOp[11][0]=new Option("海口","1201");
cityOp[11][1]=new Option("三亚","1202");
cityOp[11][2]=new Option("儋州","1203");
cityOp[11][3]=new Option("琼山","1204");
cityOp[11][4]=new Option("文昌","1205");
cityOp[11][5]=new Option("琼海","1206");
cityOp[11][6]=new Option("万宁","1207");
cityOp[11][7]=new Option("通什","1208");
cityOp[11][8]=new Option("东方","1209");
cityOp[11][9]=new Option("临高","1120");
cityOp[11][10]=new Option("澄迈","1211");
cityOp[11][11]=new Option("定安","1212");
cityOp[11][12]=new Option("屯昌","1213");
cityOp[11][13]=new Option("昌江","1214");
cityOp[11][14]=new Option("白沙","1215");
cityOp[11][15]=new Option("琼中","1216");
cityOp[11][16]=new Option("陵水","1217");
cityOp[11][17]=new Option("保亭","1218");
cityOp[11][18]=new Option("西沙中沙","1219");
cityOp[11][19]=new Option("其它地区","1220");


cityOp[12] = new Array(14);
cityOp[12][0]=new Option("南京","1301");
cityOp[12][1]=new Option("无锡","1302");
cityOp[12][2]=new Option("徐州","1303");
cityOp[12][3]=new Option("常州","1304");
cityOp[12][4]=new Option("苏州","1305");
cityOp[12][5]=new Option("南通","1306");
cityOp[12][6]=new Option("连云港","1307");
cityOp[12][7]=new Option("淮阴","1308");
cityOp[12][8]=new Option("盐城","1309");
cityOp[12][9]=new Option("扬州","1310");
cityOp[12][10]=new Option("镇江","1311");
cityOp[12][11]=new Option("宿迁","1312");
cityOp[12][12]=new Option("泰州","1313");
cityOp[12][13]=new Option("其它地区","1314");


cityOp[13] = new Array(12);
cityOp[13][0]=new Option("杭州","1401");
cityOp[13][1]=new Option("宁波","1402");
cityOp[13][2]=new Option("温州","1403");
cityOp[13][3]=new Option("嘉兴","1404");
cityOp[13][4]=new Option("湖州","1405");
cityOp[13][5]=new Option("绍兴","1406");
cityOp[13][6]=new Option("金华","1407");
cityOp[13][7]=new Option("衢州","1408");
cityOp[13][8]=new Option("舟山","1409");
cityOp[13][9]=new Option("台州","1410");
cityOp[13][10]=new Option("丽水","1411");
cityOp[13][11]=new Option("其它地区","1412");


cityOp[14] = new Array(17);
cityOp[14][0]=new Option("合肥","1501");
cityOp[14][1]=new Option("芜湖","1502");
cityOp[14][2]=new Option("蚌埠","1503");
cityOp[14][3]=new Option("淮南","1504");
cityOp[14][4]=new Option("马鞍山","1505");
cityOp[14][5]=new Option("淮北","1506");
cityOp[14][6]=new Option("铜陵","1507");
cityOp[14][7]=new Option("安庆","1508");
cityOp[14][8]=new Option("黄山","1509");
cityOp[14][9]=new Option("滁州","1510");
cityOp[14][10]=new Option("阜阳","1511");
cityOp[14][11]=new Option("宿县","1512");
cityOp[14][12]=new Option("六安","1513");
cityOp[14][13]=new Option("宣城","1514");
cityOp[14][14]=new Option("巢湖","1515");
cityOp[14][15]=new Option("池州","1516");
cityOp[14][16]=new Option("其它地区","1517");


cityOp[15] = new Array(18);
cityOp[15][0]=new Option("济南","1601");
cityOp[15][1]=new Option("青岛","1602");
cityOp[15][2]=new Option("淄博","1603");
cityOp[15][3]=new Option("枣庄","1604");
cityOp[15][4]=new Option("东营","1605");
cityOp[15][5]=new Option("烟台","1606");
cityOp[15][6]=new Option("潍坊","1607");
cityOp[15][7]=new Option("济宁","1608");
cityOp[15][8]=new Option("泰安","1609");
cityOp[15][9]=new Option("威海","1610");
cityOp[15][10]=new Option("日照","1611");
cityOp[15][11]=new Option("莱芜","1612");
cityOp[15][12]=new Option("临沂","1613");
cityOp[15][13]=new Option("德州","1614");
cityOp[15][14]=new Option("滨州","1615");
cityOp[15][15]=new Option("聊城","1616");
cityOp[15][16]=new Option("菏泽","1617");
cityOp[15][17]=new Option("其它地区","1618");


cityOp[16] = new Array(12);
cityOp[16][0]=new Option("南昌","1701");
cityOp[16][1]=new Option("景德镇","1702");
cityOp[16][2]=new Option("萍乡","1703");
cityOp[16][3]=new Option("九江","1704");
cityOp[16][4]=new Option("新余","1705");
cityOp[16][5]=new Option("鹰潭","1706");
cityOp[16][6]=new Option("赣州地区","1707");
cityOp[16][7]=new Option("宜春地区","1708");
cityOp[16][8]=new Option("上饶","1709");
cityOp[16][9]=new Option("吉安","1710");
cityOp[16][10]=new Option("抚州","1711");
cityOp[16][11]=new Option("其它地区","1712");


cityOp[17] = new Array(10);
cityOp[17][0]=new Option("福州","1801");
cityOp[17][1]=new Option("厦门","1802");
cityOp[17][2]=new Option("莆田","1803");
cityOp[17][3]=new Option("三明","1804");
cityOp[17][4]=new Option("泉州","1805");
cityOp[17][5]=new Option("漳州","1806");
cityOp[17][6]=new Option("南平","1807");
cityOp[17][7]=new Option("宁德","1808");
cityOp[17][8]=new Option("龙岩","1809");
cityOp[17][9]=new Option("其它地区","1810");

cityOp[18] = new Array(15);
cityOp[18][0]=new Option("长沙","1901");
cityOp[18][1]=new Option("株洲","1902");
cityOp[18][2]=new Option("湘潭","1903");
cityOp[18][3]=new Option("衡阳","1904");
cityOp[18][4]=new Option("邵阳","1905");
cityOp[18][5]=new Option("岳阳","1906");
cityOp[18][6]=new Option("常德","1907");
cityOp[18][7]=new Option("张家界","1908");
cityOp[18][8]=new Option("益阳","1909");
cityOp[18][9]=new Option("郴州","1910");
cityOp[18][10]=new Option("永州","1911");
cityOp[18][11]=new Option("娄底","1912");
cityOp[18][12]=new Option("怀化","1913");
cityOp[18][13]=new Option("湘西","1914");
cityOp[18][14]=new Option("其它地区","1915");


cityOp[19] = new Array(18);
cityOp[19][0]=new Option("武汉","2001");
cityOp[19][1]=new Option("黄石","2002");
cityOp[19][2]=new Option("十堰","2003");
cityOp[19][3]=new Option("宜昌","2004");
cityOp[19][4]=new Option("襄樊","2005");
cityOp[19][5]=new Option("鄂州","2006");
cityOp[19][6]=new Option("荆门","2007");
cityOp[19][7]=new Option("孝感","2008");
cityOp[19][8]=new Option("荆州","2009");
cityOp[19][9]=new Option("天门","2010");
cityOp[19][10]=new Option("仙桃","2011");
cityOp[19][11]=new Option("潜江","2012");
cityOp[19][12]=new Option("随州","2013");
cityOp[19][13]=new Option("黄冈","2014");
cityOp[19][14]=new Option("咸宁","2015");
cityOp[19][15]=new Option("恩施","2016");
cityOp[19][16]=new Option("神农架","2017");
cityOp[19][17]=new Option("其它地区","2018");



cityOp[20] = new Array(19);
cityOp[20][0]=new Option("郑州","2101");
cityOp[20][1]=new Option("开封","2102");
cityOp[20][2]=new Option("洛阳","2103");
cityOp[20][3]=new Option("平顶山","2104");
cityOp[20][4]=new Option("安阳","2105");
cityOp[20][5]=new Option("鹤壁","2106");
cityOp[20][6]=new Option("新乡","2107");
cityOp[20][7]=new Option("焦作","2108");
cityOp[20][8]=new Option("濮阳","2109");
cityOp[20][9]=new Option("许昌","2110");
cityOp[20][10]=new Option("漯河","2111");
cityOp[20][11]=new Option("三门峡","2112");
cityOp[20][12]=new Option("济源","2113");
cityOp[20][13]=new Option("南阳","2114");
cityOp[20][14]=new Option("商丘地区","2115");
cityOp[20][15]=new Option("周口","2116");
cityOp[20][16]=new Option("驻马店","2117");
cityOp[20][17]=new Option("信阳","2118");
cityOp[20][18]=new Option("其它地区","2119");


cityOp[21] = new Array(15);
cityOp[21][0]=new Option("沈阳","2201");
cityOp[21][1]=new Option("大连","2202");
cityOp[21][2]=new Option("鞍山","2203");
cityOp[21][3]=new Option("抚顺","2204");
cityOp[21][4]=new Option("本溪","2205");
cityOp[21][5]=new Option("丹东","2206");
cityOp[21][6]=new Option("锦州","2207");
cityOp[21][7]=new Option("营口","2208");
cityOp[21][8]=new Option("阜新","2209");
cityOp[21][9]=new Option("辽阳","2210");
cityOp[21][10]=new Option("盘锦","2211");
cityOp[21][11]=new Option("铁岭","2212");
cityOp[21][12]=new Option("朝阳","2213");
cityOp[21][13]=new Option("葫芦岛","2214");
cityOp[21][14]=new Option("其它地区","2215");


cityOp[22] = new Array(10);
cityOp[22][0]=new Option("长春","2301");
cityOp[22][1]=new Option("吉林","2302");
cityOp[22][2]=new Option("四平","2303");
cityOp[22][3]=new Option("辽源","2304");
cityOp[22][4]=new Option("通化","2305");
cityOp[22][5]=new Option("白山","2306");
cityOp[22][6]=new Option("松原","2307");
cityOp[22][7]=new Option("白城","2308");
cityOp[22][8]=new Option("延边","2309");
cityOp[22][9]=new Option("其它地区","2310");


cityOp[23] = new Array(15);
cityOp[23][0]=new Option("哈尔滨","2401");
cityOp[23][1]=new Option("齐齐哈尔","2402");
cityOp[23][2]=new Option("鸡西","2403");
cityOp[23][3]=new Option("鹤岗","2404");
cityOp[23][4]=new Option("双鸭山","2405");
cityOp[23][5]=new Option("大庆","2406");
cityOp[23][6]=new Option("伊春","2407");
cityOp[23][7]=new Option("佳木斯","2408");
cityOp[23][8]=new Option("七台河","2409");
cityOp[23][9]=new Option("牡丹江","2410");
cityOp[23][10]=new Option("黑河","2411");
cityOp[23][11]=new Option("松花江","2412");
cityOp[23][12]=new Option("绥化","2413");
cityOp[23][13]=new Option("大兴安岭","2414");
cityOp[23][14]=new Option("其它地区","2415");


cityOp[24] = new Array(5);
cityOp[24][0]=new Option("石嘴山","2501");
cityOp[24][1]=new Option("银南","2502");
cityOp[24][2]=new Option("固原","2503");
cityOp[24][3]=new Option("银川","2504");
cityOp[24][4]=new Option("其它地区","2505");

cityOp[25] = new Array(11);
cityOp[25][0]=new Option("西安","2601");
cityOp[25][1]=new Option("铜川","2602");
cityOp[25][2]=new Option("宝鸡","2603");
cityOp[25][3]=new Option("咸阳","2604");
cityOp[25][4]=new Option("渭南","2605");
cityOp[25][5]=new Option("汉中","2606");
cityOp[25][6]=new Option("安康","2607");
cityOp[25][7]=new Option("商洛","2608");
cityOp[25][8]=new Option("延安","2609");
cityOp[25][9]=new Option("榆林","2610");
cityOp[25][10]=new Option("其它地区","2611");


cityOp[26] = new Array(9);
cityOp[26][0]=new Option("西宁","2701");
cityOp[26][1]=new Option("海东","2702");
cityOp[26][2]=new Option("海北","2703");
cityOp[26][3]=new Option("黄南","2704");
cityOp[26][4]=new Option("海南","2705");
cityOp[26][5]=new Option("果洛","2706");
cityOp[26][6]=new Option("玉树","2707");
cityOp[26][7]=new Option("海西","2708");
cityOp[26][8]=new Option("其它地区","2709");


cityOp[27] = new Array(15);
cityOp[27][0]=new Option("兰州","2801");
cityOp[27][1]=new Option("嘉峪关","2802");
cityOp[27][2]=new Option("金昌","2803");
cityOp[27][3]=new Option("白银","2804");
cityOp[27][4]=new Option("天水","2805");
cityOp[27][5]=new Option("酒泉","2806");
cityOp[27][6]=new Option("张掖","2807");
cityOp[27][7]=new Option("武威","2808");
cityOp[27][8]=new Option("定西","2809");
cityOp[27][9]=new Option("陇南","2810");
cityOp[27][10]=new Option("平凉","2811");
cityOp[27][11]=new Option("庆阳","2812");
cityOp[27][12]=new Option("临夏","2813");
cityOp[27][13]=new Option("甘南","2814");
cityOp[27][14]=new Option("其它地区","2815");

cityOp[28] = new Array(17);
cityOp[28][0]=new Option("乌鲁木齐","2901");
cityOp[28][1]=new Option("克拉玛依","2902");
cityOp[28][2]=new Option("石河子","2903");
cityOp[28][3]=new Option("奎屯","2904");
cityOp[28][4]=new Option("吐鲁番","2905");
cityOp[28][5]=new Option("哈密","2906");
cityOp[28][6]=new Option("昌吉","2907");
cityOp[28][7]=new Option("博尔塔拉","2908");
cityOp[28][8]=new Option("巴音郭楞","2909");
cityOp[28][9]=new Option("阿克苏","2910");
cityOp[28][10]=new Option("克孜勒苏","2911");
cityOp[28][11]=new Option("喀什","2912");
cityOp[28][12]=new Option("和田","2913");
cityOp[28][13]=new Option("伊犁","2914");
cityOp[28][14]=new Option("塔城","2915");
cityOp[28][15]=new Option("阿勒泰","2916");
cityOp[28][16]=new Option("其它地区","2917");



cityOp[29] = new Array(23);
cityOp[29][0]=new Option("成都","3001");
cityOp[29][1]=new Option("自贡","3002");
cityOp[29][2]=new Option("攀枝花","3003");
cityOp[29][3]=new Option("泸州","3004");
cityOp[29][4]=new Option("德阳","3005");
cityOp[29][5]=new Option("绵阳","3006");
cityOp[29][6]=new Option("广元","3007");
cityOp[29][7]=new Option("遂宁","3008");
cityOp[29][8]=new Option("内江","3009");
cityOp[29][9]=new Option("乐山","3010");
cityOp[29][10]=new Option("南充","3011");
cityOp[29][11]=new Option("涪陵","3012");
cityOp[29][12]=new Option("宜宾","3013");
cityOp[29][13]=new Option("达川","3014");
cityOp[29][14]=new Option("雅安","3015");
cityOp[29][15]=new Option("阿坝","3016");
cityOp[29][16]=new Option("甘孜","3017");
cityOp[29][17]=new Option("凉山","3018");
cityOp[29][18]=new Option("黔江","3019");
cityOp[29][19]=new Option("广安","3020");
cityOp[29][20]=new Option("眉山","3021");
cityOp[29][21]=new Option("巴中","3022");
cityOp[29][22]=new Option("其它地区","3023");

cityOp[30] = new Array(18);
cityOp[30][0]=new Option("昆明","3101");
cityOp[30][1]=new Option("东川","3102");
cityOp[30][2]=new Option("昭通","3103");
cityOp[30][3]=new Option("曲靖","3104");
cityOp[30][4]=new Option("楚雄","3105");
cityOp[30][5]=new Option("玉溪","3106");
cityOp[30][6]=new Option("红河","3107");
cityOp[30][7]=new Option("文山","3108");
cityOp[30][8]=new Option("思茅","3109");
cityOp[30][9]=new Option("西双版纳","3110");
cityOp[30][10]=new Option("大理","3111");
cityOp[30][11]=new Option("保山","3112");
cityOp[30][12]=new Option("德宏","3113");
cityOp[30][13]=new Option("丽江","3114");
cityOp[30][14]=new Option("怒江","3115");
cityOp[30][15]=new Option("迪庆","3116");
cityOp[30][16]=new Option("临沧","3117");
cityOp[30][17]=new Option("其它地区","3118");

cityOp[31] = new Array(8);
cityOp[31][0]=new Option("拉萨","3201");
cityOp[31][1]=new Option("昌都","3202");
cityOp[31][2]=new Option("山南","3203");
cityOp[31][3]=new Option("日喀则","3204");
cityOp[31][4]=new Option("那曲","3205");
cityOp[31][5]=new Option("阿里","3206");
cityOp[31][6]=new Option("林芝","3207");
cityOp[31][7]=new Option("其它地区","3208");


cityOp[32] = new Array(10);
cityOp[32][0]=new Option("贵阳","3301");
cityOp[32][1]=new Option("六盘水","3302");
cityOp[32][2]=new Option("遵义","3303");
cityOp[32][3]=new Option("铜仁","3304");
cityOp[32][4]=new Option("黔西","3305");
cityOp[32][5]=new Option("毕节","3306");
cityOp[32][6]=new Option("安顺","3307");
cityOp[32][7]=new Option("黔东","3308");
cityOp[32][8]=new Option("黔南","3309");
cityOp[32][9]=new Option("其它地区","3310");

cityOp[33] = new Array(13);
cityOp[33][0]=new Option("南宁","3401");
cityOp[33][1]=new Option("柳州","3402");
cityOp[33][2]=new Option("桂林","3403");
cityOp[33][3]=new Option("梧州","3404");
cityOp[33][4]=new Option("北海","3405");
cityOp[33][5]=new Option("防城港","3406");
cityOp[33][6]=new Option("钦州","3407");
cityOp[33][7]=new Option("贵港","3408");
cityOp[33][8]=new Option("柳州","3409");
cityOp[33][9]=new Option("玉林","3410");
cityOp[33][10]=new Option("百色","3411");
cityOp[33][11]=new Option("河池","3412");
cityOp[33][12]=new Option("其它地区","3413");


//载入页面时，在form1表单的province下拉框加入省份信息，在city下拉框加入城市信息  
function window_onload(prov,city,area){
	addProvince(prov,area);//调用子函数加省份
	addCity(prov,city,area);//调用子函数加城市
	
}

//子函数加省份
function addProvince(prov,area){
	if(area=="1")
	{
		for(i=0;i<34;i++){
			prov.add(provinceOp[i]);
		}
     	var len = document.frmSearchSchool.lvid.length;
	    for(i=0;i<len;i++){
			document.frmSearchSchool.lvid.remove(0);
		}
		document.frmSearchSchool.lvid.add(new Option("大学/大专","1"));	
		document.frmSearchSchool.lvid.add(new Option("中专/技校","2"));
		document.frmSearchSchool.lvid.add(new Option("中学","3"));
		document.frmSearchSchool.lvid.add(new Option("小学","4"));
    document.frmSearchSchool.lvid.add(new Option("其它","5"));

	}
	else
	{
		prov.add(new Option("所有","1"));
	    var len = document.frmSearchSchool.schoollevel.length;
	    for(i=0;i<len;i++){
			document.frmSearchSchool.lvid.remove(0);
		}
		document.frmSearchSchool.lvid.add(new Option("所有","0"));		
	
	}
}

//子函数加城市
function addCity(prov,city,area){
	var i = prov.selectedIndex;

	if(area!="1"){
		city.add(new Option("所有","1"));
		
	}else{
		for(j=0;j<cityOp[i].length;j++){
			city.add(cityOp[i][j]);
		}
	}
}




//子函数删省份
function delProvince(province){
	var len = province.length;
	for(i=0;i<len;i++){
		province.remove(0);
	}
}

//子函数删城市
function delCity(city){
	var len = city.length;
	for(i=0;i<len;i++){
		city.remove(0);
	}
}


function area_onchange(obj){
	delProvince(obj.province);
	delCity(obj.city);
	window_onload(obj.province,obj.city,obj.area.value);
	if(obj==document.form2)
	province_onchange2(document.form2.province,document.form2.city,document.form2.area.value);
}

//子函数：控制可选城市随所选省份改变
function province_onchange(prov,city,area){
	delCity(city);
	addCity(prov,city,area);
}

//子函数删学校类型
function delschoollevel(schoollevel){
	var len = schoollevel.length;
	for(i=0;i<len;i++){
		schoollevel.remove(0);
	}
}

//定义学校类型数组
schoollevelOp = new Array(5);
schoollevelOp[0]=new Option("大学/大专","1");
schoollevelOp[1]=new Option("中学","2");
schoollevelOp[2]=new Option("中专/技校","3")
schoollevelOp[3]=new Option("小学","4");
schoollevelOp[4]=new Option("其它","5");


//子函数加学校类型
/*function addschoollevel(schoollevel,schoolnum){
	if(schoolnum==10){
		for(i=0;i<10;i++){
			schoollevel.add(schoollevelOp[i]);
		}
	}else{
		for(i=2;i<10;i++){
			schoollevel.add(schoollevelOp[i]);
		}
	}
}
*/




//-------
function setValue(prov,city,area){//设置省份和城市的初始化函数
	addProvince1(prov,area);//调用子函数加省份
	addCity1(prov,city,area);//调用子函数加城市
	
}
function addProvince1(prov,area){//加省份函数
	for(i=0;i<34;i++){
		prov.add(provinceOp[i]);
	}
}
function addCity1(prov,city,area){//加城市函数
	var i = prov.selectedIndex;
	for(j=0;j<cityOp[i].length;j++){
		city.add(cityOp[i][j]);
	}
}
//--------


function setBValue(bobject,begin,end,option){//向bobject对象中加入从begin开始end结束的数字列表项,option参数(true/false)是设定是否反向添加
	if(option){
		for(i=begin;i<=end;i++)
			bobject.add(new Option(i,i));
	}
	else{
		for(i=end;i>=begin;i--)
			bobject.add(new Option(i,i));
	}
}
///////////////////////////////////////////
///////////////////////////////////////////
function position(name,value){
  this.name=name;
  this.value=value;
}
function city(name,value){
  this.name=name;
  this.value=value;
}

var _ptype = new Array(
  "AS/400",
  "Data Warehousing",
  "Database Systems",
  "E-Commerce",
  "ERP",
  "Executive Level",
  "HARDWARE",
  "Help Desk",
  "Legacy Systems",
  "CAD/CAM",
  "Miscellaneous",
  "Networking",
  "New Media",
  "Project Management",
  "Quality Assurance",
  "Technical Recruiting",
  "Tech Sales/Marketing",
  "Technical Writer",
  "Unix",
  "Windows develop"
  );
//*
var _positions = new Array(
  new Array(
    new position("CL","101"),
    new position("COBOL","102"),
    new position("ILE","103"),
    new position("RPG","104"),
    new position("RPG400","105"),
    new position("RPGIII/IV","106"),
    new position("Synon","107")
    ),
  new Array(
    new position("CASE","201"),
    new position("Data Analyst","202"),
    new position("Data Architect","203"),
    new position("Data Marts","204"),
    new position("Data Mining","205"),
    new position("Data Modeling","206"),
    new position("ERwin","207"),
    new position("SAS","208")
    ),
  new Array(
    new position("Access","301"),
    new position("Capacity Planning","302"),
    new position("Database Administrator","303"),
    new position("DB2","304"),
    new position("FoxPro","305"),
    new position("Informix","306"),
    new position("Oracle","307"),
    new position("Progress","308"),
    new position("SQL","309"),
    new position("SQL Server","310"),
    new position("Sybase","311"),
    new position("Jasmine","312"),
    new position("CMMS","313")
    ),
  new Array(
    new position("ActiveX","401"),
    new position("ASP","402"),
    new position("CGI","403"),
    new position("Cold Fusion","404"),
    new position("PHP","405"),
    new position("CSS","406"),
    new position("DHTML","407"),
    new position("E-Commerce","408"),
    new position("E-Commerce Platforms","409"),
    new position("EDI","410"),
    new position("Electronic Payment","411"),
    new position("HTML","412"),
    new position("IIS","413"),
    new position("Java","414"),
    new position("JavaScript","415"),
    new position("PERL","416"),
    new position("Security","417"),
    new position("VBScript","418"),
    new position("Visual J++","419"),
    new position("VRML","420"),
    new position("Web Servers","421"),
    new position("Webmaster","422"),
    new position("XML","423"),
    new position("Broad Vision","424"),
    new position("MOM","425"),
    new position("Visual Basic","426")
  ),
  new Array(
    new position("BAAN","501"),
    new position("JD Edwards","502"),
    new position("Lawson","503"),
    new position("Oracle","504"),
    new position("PeopleSoft","505"),
    new position("SAP","506")
  ),
  new Array(
    new position("Business Development","601"),
    new position("Financial Services","602"),
    new position("Marketing/Sales","603"),
    new position("Senior Executive","604"),
    new position("Technology","605")
  ),
  new Array(
   new position("Cable Modem","701"),
   new position("Chipware","702"),
   new position("Drivers","703"),
   new position("Embedded Systems","704"),
   new position("Firmware","705"),
   new position("Hardware","706"),
   new position("IEEE","707"),
   new position("Operating System Designers","708")
  ),
  new Array(
   new position("AS/400","801"),
   new position("CICS","802"),
   new position("Unix","803"),
   new position("Windows 95","804"),
   new position("Windows 98","805"),
   new position("Windows NT/2000","806"),
   new position("Hardware","807"),
   new position("Lotus Notes","808"),
   new position("Mac","809"),
   new position("MS Office","810"),
   new position("Network","811"),
   new position("Novell","812"),
   new position("PC/Desktop","813")
  ),
  new Array(
   new position("ADABAS","901"),
   new position("Assembler","902"),
   new position("CA-","903"),
   new position("CICS","904"),
   new position("COBOL","905"),
   new position("DB2","906"),
   new position("DEC/VAX","907"),
   new position("FOCUS","908"),
   new position("GEAC","909"),
   new position("IDMS","910"),
   new position("IMS","911"),
   new position("MicroFocus","912"),
   new position("MQSeries","913"),
   new position("MVS","914"),
   new position("Natural","915"),
   new position("OS/2","916"),
   new position("OS/390","917"),
   new position("PL/1","918"),
   new position("REXX","919"),
   new position("SAS","920"),
   new position("Tape Operator","921"),
   new position("Teradata","922"),
   new position("VM","923"),
   new position("VSAM","924"),
   new position("TSO","925")
  ),
  new Array(
   new position("CADAM","1001"),
   new position("AUTOCAD","1002"),
   new position("CATIA","1003")
  ),
  new Array(
   new position("Accounting","1101"),
   new position("Administrative Support","1102"),
   new position("Analyst","1103"),
   new position("Business Developer","1104"),
   new position("Customer Service","1105"),
   new position("Human Resources","1106"),
   new position("Traditional Engineer","1107")
  ),
  new Array(
   new position("ADSL","1201"),
   new position("ATM","1202"),
   new position("Banyan","1203"),
   new position("Bay","1204"),
   new position("cc:Mail","1205"),
   new position("Cisco","1206"),
   new position("CNE","1207"),
   new position("Engineer","1208"),
   new position("Firewall","1209"),
   new position("Frame Relay","1210"),
   new position("Hubs/ Routers","1211"),
   new position("ISDN","1212"),
   new position("LAN/ WAN","1213"),
   new position("Lotus","1214"),
   new position("Mail","1215"),
   new position("MCP","1216"),
   new position("MCSE","1217"),
   new position("Motorola","1218"),
   new position("NetWare","1219"),
   new position("PBX","1220"),
   new position("RF","1221"),
   new position("Security","1222"),
   new position("SMS","1223"),
   new position("SNA","1224"),
   new position("Sniffer","1225"),
   new position("Sonet","1226"),
   new position("Telecom","1227"),
   new position("Windows NT/2000","1228"),
   new position("TCP/IP","1229"),
   new position("VPN","1230"),
   new position("X.25","1231")
  ),
  new Array(
   new position("Adobe Photoshop","1301"),
   new position("Corel Draw","1302"),
   new position("Director","1303"),
   new position("Flash","1304"),
   new position("Games","1305"),
   new position("Graphics","1306"),
   new position("Illustrator","1307"),
   new position("Image/Imaging","1308"),
   new position("Mac","1309"),
   new position("Multimedia","1310"),
   new position("PageMaker","1311"),
   new position("PowerPoint","1312"),
   new position("Quark","1313"),
   new position("Shockwave","1314"),
   new position("Vizact 2000","1315"),
   new position("Dreamweaver","1316"),
   new position("Fireworks/Frontpage","1317")
  ),
  new Array(
   new position("Capacity Planning","1401"),
   new position("Change Management","1402"),
   new position("Configuration Management","1403"),
   new position("Contingency Planning","1404"),
   new position("Defect Management","1405"),
   new position("Disaster Recovery","1406"),
   new position("ISO","1407"),
   new position("Methodology","1408"),
   new position("Metrics","1409"),
   new position("Microsoft Project","1410"),
   new position("PMI","1411"),
   new position("Procurement","1412"),
   new position("Risk Management","1413"),
   new position("Scope Management","1414"),
   new position("SDLC","1415"),
   new position("SEI/CMM","1416")
  ),
  new Array(
   new position("Change Management","1501"),
   new position("Configuration Management","1502"),
   new position("Defect Management","1503"),
   new position("Metrics","1504"),
   new position("PVCS","1505"),
   new position("QA/Tester","1506"),
   new position("Quality Control","1507"),
   new position("SEI/CMM","1508"),
   new position("Source Safe/Visual Source Safe","1509"),
   new position("SQA","1510"),
   new position("Test Scripts","1511"),
   new position("Version Control","1512"),
   new position("WinRunner","1513")
  ),
  new Array(
   new position("Account Executive","1601"),
   new position("Manager","1602"),
   new position("Recruiter","1603"),
   new position("Business-to-Business Marketing","1604"),
   new position("Consultants","1605"),
   new position("Contigency Search","1606"),
   new position("Direct Sourcing","1607"),
   new position("Outsourcing","1608"),
   new position("Retained Search","1609")
  ),
  new Array(
   new position("Account Executive","1701"),
   new position("Marketing Representative","1702"),
   new position("Sales Representative","1703"),
   new position("Strategist","1704"),
   new position("Business Demographics","1705"),
   new position("Call Point","1706"),
   new position("Cloning customers","1707"),
   new position("Coding","1708"),
   new position("Database Marketing","1709"),
   new position("Lifetime value (LTV)","1710"),
   new position("Sales Cycle","1711"),
   new position("SFA Tools","1712"),
   new position("SIC Code","1713")
  ),
  new Array(
   new position("Corel Draw","1801"),
   new position("HTML","1802"),
   new position("PowerPoint","1803"),
   new position("Publisher","1804"),
   new position("RoboHelp","1805"),
   new position("Visio","1806"),
   new position("Word","1807"),
   new position("WordPerfect","1808"),
   new position("XML","1809"),
   new position("Acrobat","1810"),
   new position("ForeHelp","1811"),
   new position("Premier 2000","1812"),
   new position("FrameMaker","1813"),
   new position("Online Help","1814"),
   new position("Paint Shop Pro","1815")
  ),
  new Array(
   new position("AIX","1901"),
   new position("C/C++","1902"),
   new position("CORBA","1903"),
   new position("Embedded","1904"),
   new position("HP-UX","1905"),
   new position("Java","1906"),
   new position("Linux","1907"),
   new position("OpenView","1908"),
   new position("Perl","1909"),
   new position("Scripts","1910"),
   new position("Sun Solaris","1911"),
   new position("TCL/TK","1912"),
   new position("Tivoli","1913"),
   new position("Tuxedo","1914")
  ),
  new Array(
   new position("Access","2001"),
   new position("ActiveX","2002"),
   new position("C/C++","2003"),
   new position("COM/DCOM","2004"),
   new position("COOL:Gen","2005"),
   new position("CORBA","2006"),
   new position("Crystal Reports","2007"),
   new position("Delphi","2008"),
   new position("Developer/Designer 2000","2009"),
   new position("DNA","2010"),
   new position("Forte","2011"),
   new position("Fox Pro","2012"),
   new position("GUI","2013"),
   new position("Java","2014"),
   new position("MCSD","2015"),
   new position("MFC/ATL","2016"),
   new position("OLAP","2017"),
   new position("OO","2018"),
   new position("PowerBuilder","2019"),
   new position("Pro*C","2020"),
   new position("Smalltalk","2021"),
   new position("Visual Basic","2022"),
   new position("Visual C++","2023"),
   new position("Win32","2024"),
   new position("Visual FoxPro","2025")
  )
  );
var _province_cn =
 new Array(
  "北京",
  "天津",
  "上海",
  "重庆",
  "广东省",
  "江苏省",
  "浙江省",
  "福建省",
  "湖南省",
  "湖北省",
  "山东省",
  "辽宁省",
  "吉林省",
  "云南省",
  "四川省",
  "安徽省",
  "江西省",
  "黑龙江省",
  "河北省",
  "陕西省",
  "海南省",
  "河南省",
  "山西省",
  "内蒙古自治区",
  "广西壮族自治区",
  "贵州省",
  "宁夏回族自治区",
  "青海省",
  "新疆维吾尔自治区",
  "西藏自治区",
  "甘肃省",
  "其他学校"
  );
var _city_cn = new Array(
    new Array(
new city('北京大学','北京大学'),
new city('中国人民大学','中国人民大学'),
new city('北京交通大学','北京交通大学'),
new city('清华大学','清华大学'),
new city('北京科技大学','北京科技大学'),
new city('石油大学','石油大学'),
new city('北京邮电大学','北京邮电大学'),
new city('北京化工大学','北京化工大学'),
new city('中国农业大学','北京交通大学'),
new city('北京林业大学','北京林业大学'),
new city('北京中医药大学','北京中医药大学'),
new city('北京外国语大学','北京外国语大学'),
new city('北京师范大学','北京师范大学'),
new city('北京语言大学','北京语言大学'),
new city('对外经济贸易大学','对外经济贸易大学'),
new city('中央财经大学','中央财经大学'),
new city('中国政法大学','中国政法大学'),
new city('中央民族大学','中央民族大学'),
new city('中国人民公安大学','中国人民公安大学'),
new city('中国协和医科大学','中国协和医科大学'),
new city('北京体育大学','北京体育大学'),
new city('北京理工大学','北京理工大学'),
new city('北京航空航天大学','北京航空航天大学'),
new city('北京工商大学','北京工商大学'),
new city('北京联合大学','北京联合大学'),
new city('北京工业大学','北京工业大学'),
new city('北方工业大学','北方工业大学'),
new city('首都医科大学','首都医科大学'),
new city('首都师范大学','首都师范大学'),
new city('首都经济贸易大学','首都经济贸易大学'),
new city('北京广播学院','北京广播学院'),
new city('国际关系学院','国际关系学院'),
new city('中央美术学院','中央美术学院'),
new city('中央戏剧学院','中央戏剧学院'),
new city('中央音乐学院','中央音乐学院'),
new city('北京电子科技学院','北京电子科技学院'),
new city('外交学院','外交学院'),
new city('中国劳动关系学院','中国劳动关系学院'),
new city('中国青年政治学院','中国青年政治学院'),
new city('中华女子学院','中华女子学院'),
new city('北京服装学院','北京服装学院'),
new city('北京建筑工程学院','北京建筑工程学院'),
new city('北京机械工业学院','北京机械工业学院'),
new city('北京印刷学院','北京印刷学院'),
new city('北京信息工程学院','北京信息工程学院'),
new city('北京石油化工学院','北京石油化工学院'),
new city('首钢工学院','首钢工学院'),
new city('北京农学院','北京农学院'),
new city('首都体育学院','首都体育学院'),
new city('北京第二外国语学院','北京第二外国语学院'),
new city('北京物资学院','北京物资学院'),
new city('中国音乐学院','中国音乐学院'),
new city('北京电影学院','北京电影学院'),
new city('北京舞蹈学院','北京舞蹈学院'),
new city('中国戏曲学院','中国戏曲学院'),
new city('北京城市学院','北京城市学院'),
new city('北京青年政治学院','北京青年政治学院'),
new city('北京科技经营管理学院','北京科技经营管理学院'),
new city('北京轻工职业技术学院','北京轻工职业技术学院'),
new city('北京信息职业技术学院','北京信息职业技术学院'),
new city('北京工业职业技术学院','北京工业职业技术学院'),
new city('北京农业职业学院','北京农业职业学院'),
new city('北京吉利大学','北京吉利大学'),
new city('北京经贸职业学院','北京经贸职业学院'),
new city('北京京北职业技术学院','北京京北职业技术学院'),
new city('北京财贸职业学院','北京财贸职业学院'),
new city('北京汇佳职业学院','北京汇佳职业学院'),
new city('北京北大方正软件职业技术学院','北京北大方正软件职业技术学院'),
new city('北京戏曲艺术职业学院','北京戏曲艺术职业学院'),
new city('北京艺术设计职业学院','北京艺术设计职业学院'),
new city('北京经济技术职业学院','北京经济技术职业学院')
    ),
    new Array(
new city('南开大学','南开大学'),
new city('天津大学','天津大学'),
new city('天津工业大学','天津工业大学'),
new city('天津科技大学','天津科技大学'),
new city('天津医科大学','天津医科大学'),
new city('天津师范大学','天津师范大学'),
new city('中国民用航空学院','中国民用航空学院'),
new city('天津理工学院','天津理工学院'),
new city('天津城市建设学院','天津城市建设学院'),
new city('天津农学院','天津农学院'),
new city('天津中医学院','天津中医学院'),
new city('天津职业技术师范学院','天津职业技术师范学院'),
new city('天津外国语学院','天津外国语学院'),
new city('天津财经学院','天津财经学院'),
new city('天津商学院','天津商学院'),
new city('天津体育学院','天津体育学院'),
new city('天津美术学院','天津美术学院'),
new city('天津音乐学院','天津音乐学院'),
new city('天津医学高等专科学校','天津医学高等专科学校'),
new city('民办天狮职业技术学院','民办天狮职业技术学院'),
new city('天津机电职业技术学院','天津机电职业技术学院'),
new city('天津工业职业技术学院','天津工业职业技术学院'),
new city('天津工程职业技术学院','天津工程职业技术学院'),
new city('天津现代职业技术学院','天津现代职业技术学院'),
new city('天津公安警官职业学院','天津公安警官职业学院'),
new city('天津轻工职业技术学院','天津轻工职业技术学院'),
new city('天津渤海职业技术学院','天津渤海职业技术学院'),
new city('天津滨海职业学院','天津滨海职业学院'),
new city('天津电子信息职业技术学院','天津电子信息职业技术学院'),
new city('天津职业大学','天津职业大学'),
new city('天津文化艺术职业学院','天津文化艺术职业学院'),
new city('天津中德职业技术学院','天津中德职业技术学院'),
new city('天津青年职业学院','天津青年职业学院'),
new city('天津对外经济贸易职业学院','天津对外经济贸易职业学院'),
new city('天津工商职业技术学院','天津工商职业技术学院'),
new city('天津交通职业学院','天津交通职业学院'),
new city('天津开发区职业技术学院','天津开发区职业技术学院')
    ),
    new Array(
new city('复旦大学','复旦大学'),
new city('上海交通大学','上海交通大学'),
new city('同济大学','同济大学'),
new city('华东理工大学','华东理工大学'),
new city('东华大学','东华大学'),
new city('华东师范大学','华东师范大学'),
new city('上海外国语大学','上海外国语大学'),
new city('上海财经大学','上海财经大学'),
new city('上海大学','上海大学'),
new city('上海理工大学','上海理工大学'),
new city('上海工程技术大学','上海工程技术大学'),
new city('上海水产大学','上海水产大学'),
new city('上海第二医科大学','上海第二医科大学'),
new city('上海中医药大学','上海中医药大学'),
new city('上海师范大学','上海师范大学'),
new city('上海海运学院','上海海运学院'),
new city('上海电力学院','上海电力学院'),
new city('上海应用技术学院','上海应用技术学院'),
new city('上海对外贸易学院','上海对外贸易学院'),
new city('华东政法学院','华东政法学院'),
new city('上海体育学院','上海体育学院'),
new city('上海音乐学院','上海音乐学院'),
new city('上海戏剧学院','上海戏剧学院'),
new city('上海杉达学院','上海杉达学院'),
new city('上海海关高等专科学校','上海海关高等专科学校'),
new city('上海电机技术高等专科学校','上海电机技术高等专科学校'),
new city('上海出版印刷高等专科学校','上海出版印刷高等专科学校'),
new city('上海医疗器械高等专科学校','上海医疗器械高等专科学校'),
new city('立信会计高等专科学校','立信会计高等专科学校'),
new city('上海旅游高等专科学校','上海旅游高等专科学校'),
new city('上海金融高等专科学校','上海金融高等专科学校'),
new city('上海公安高等专科学校','上海公安高等专科学校'),
new city('上海商业职业技术学院','上海商业职业技术学院'),
new city('上海东海职业技术学院','上海东海职业技术学院'),
new city('上海新侨职业技术学院','上海新侨职业技术学院'),
new city('上海第二工业大学','上海第二工业大学'),
new city('上海托普信息技术职业学院','上海托普信息技术职业学院'),
new city('上海中侨职业技术学院','上海中侨职业技术学院'),
new city('上海建峰职业技术学院','上海建峰职业技术学院'),
new city('上海农林职业技术学院','上海农林职业技术学院'),
new city('上海行健职业学院','上海行健职业学院'),
new city('上海工商外国语职业学院','上海工商外国语职业学院'),
new city('上海邦德职业技术学院','上海邦德职业技术学院'),
new city('上海济光职业技术学院','上海济光职业技术学院'),
new city('上海交通职业技术学院','上海交通职业技术学院'),
new city('民办上海思博职业技术学院','民办上海思博职业技术学院'),
new city('民办上海欧华职业技术学院','民办上海欧华职业技术学院'),
new city('民办上海民远职业技术学院','民办上海民远职业技术学院'),
new city('上海建桥职业技术学院','上海建桥职业技术学院'),
new city('上海城市管理职业技术学院','上海城市管理职业技术学院'),
new city('上海科学技术职业学院','上海科学技术职业学院'),
new city('上海海事职业技术学院','上海海事职业技术学院'),
new city('上海电子信息职业技术学院','上海电子信息职业技术学院'),
new city('民办上海立达职业技术学院','民办上海立达职业技术学院'),
new city('民办上海东方文化职业学院','民办上海东方文化职业学院'),
new city('上海工艺美术职业学院','上海工艺美术职业学院')
    ),
    new Array(
new city('重庆大学','重庆大学'),
new city('西南师范大学','西南师范大学'),
new city('渝州大学','渝州大学'),
new city('西南农业大学','西南农业大学'),
new city('重庆医科大学','重庆医科大学'),
new city('重庆师范大学','重庆师范大学'),
new city('西南政法大学','西南政法大学'),
new city('渝西学院','渝西学院'),
new city('重庆三峡学院','重庆三峡学院'),
new city('重庆交通学院','重庆交通学院'),
new city('重庆邮电学院','重庆邮电学院'),
new city('重庆工学院','重庆工学院'),
new city('涪陵师范学院','涪陵师范学院'),
new city('四川外语学院','四川外语学院'),
new city('重庆商学院','重庆商学院'),
new city('四川美术学院','四川美术学院'),
new city('重庆石油高等专科学校','重庆石油高等专科学校'),
new city('重庆工业高等专科学校','重庆工业高等专科学校'),
new city('重庆电力高等专科学校','重庆电力高等专科学校'),
new city('重庆机电职业技术学院','重庆机电职业技术学院'),
new city('重庆正大软件职业技术学院','重庆正大软件职业技术学院'),
new city('重庆电子科技职业学院','重庆电子科技职业学院'),
new city('重庆工业职业技术学院','重庆工业职业技术学院'),
new city('重庆电子职业技术学院','重庆电子职业技术学院'),
new city('涪陵职业技术学院','涪陵职业技术学院'),
new city('重庆三峡职业学院','重庆三峡职业学院'),
new city('重庆警官职业学院','重庆警官职业学院'),
new city('重庆社会工作职业学院','重庆社会工作职业学院'),
new city('重庆职业技术学院','重庆职业技术学院'),
new city('重庆巴渝职业技术学院','重庆巴渝职业技术学院'),
new city('重庆信息技术职业学院','重庆信息技术职业学院'),
new city('重庆工程职业技术学院','重庆工程职业技术学院'),
new city('重庆光彩职业技术学院','重庆光彩职业技术学院'),
new city('重庆海联职业技术学院','重庆海联职业技术学院')
    ),
    new Array(
new city('中山大学','中山大学'),
new city('华南理工大学','华南理工大学'),
new city('暨南大学','暨南大学'),
new city('汕头大学','汕头大学'),
new city('深圳大学','深圳大学'),
new city('五邑大学','五邑大学'),
new city('广东工业大学','广东工业大学'),
new city('华南农业大学','华南农业大学'),
new city('湛江海洋大学','湛江海洋大学'),
new city('广州中医药大学','广州中医药大学'),
new city('华南师范大学','华南师范大学'),
new city('广东外语外贸大学','广东外语外贸大学'),
new city('广州大学','广州大学'),
new city('佛山科学技术学院','佛山科学技术学院'),
new city('东莞理工学院','东莞理工学院'),
new city('茂名学院','茂名学院'),
new city('肇庆学院','肇庆学院'),
new city('仲恺农业技术学院','仲恺农业技术学院'),
new city('广东医学院','广东医学院'),
new city('广州医学院','广州医学院'),
new city('广东药学院','广东药学院'),
new city('韶关学院','韶关学院'),
new city('韩山师范学院','韩山师范学院'),
new city('湛江师范学院','湛江师范学院'),
new city('惠州学院','惠州学院'),
new city('嘉应学院','嘉应学院'),
new city('广东商学院','广东商学院'),
new city('广州体育学院','广州体育学院'),
new city('广州美术学院','广州美术学院'),
new city('星海音乐学院','星海音乐学院'),
new city('广东技术师范学院','广东技术师范学院'),
new city('广州航海高等专科学校','广州航海高等专科学校'),
new city('广州金融高等专科学校','广州金融高等专科学校'),
new city('广东公安高等专科学校','广东公安高等专科学校'),
new city('私立华联学院','私立华联学院'),
new city('民办培正商学院','民办培正商学院'),
new city('民办南华工商学院','民办南华工商学院'),
new city('广州民航职业技术学院','广州民航职业技术学院'),
new city('广东化工制药职业技术学院','广东化工制药职业技术学院'),
new city('佛山职业技术学院','佛山职业技术学院'),
new city('广东新安职业技术学院','广东新安职业技术学院'),
new city('广东白云职业技术学院','广东白云职业技术学院'),
new city('番禺职业技术学院','番禺职业技术学院'),
new city('广东水利电力职业技术学院','广东水利电力职业技术学院'),
new city('广东交通职业技术学院','广东交通职业技术学院'),
new city('顺德职业技术学院','顺德职业技术学院'),
new city('潮汕职业技术学院','潮汕职业技术学院'),
new city('广东松山职业技术学院','广东松山职业技术学院'),
new city('深圳职业技术学院','深圳职业技术学院'),
new city('广东农工商职业技术学院','广东农工商职业技术学院'),
new city('广东轻工职业技术学院','广东轻工职业技术学院'),
new city('深圳信息职业技术学院','深圳信息职业技术学院'),
new city('广东体育职业技术学院','广东体育职业技术学院'),
new city('广东科学技术职业学院','广东科学技术职业学院'),
new city('广东机电职业技术学院','广东机电职业技术学院'),
new city('广东建设职业技术学院','广东建设职业技术学院'),
new city('广东女子职业技术学院','广东女子职业技术学院'),
new city('揭阳职业技术学院','揭阳职业技术学院'),
new city('广东邮电职业技术学院','广东邮电职业技术学院'),
new city('汕头职业技术学院','汕头职业技术学院'),
new city('广东岭南职业技术学院','广东岭南职业技术学院'),
new city('广东行政职业学院','广东行政职业学院'),
new city('广东亚视演艺职业学院','广东亚视演艺职业学院'),
new city('广东财经职业学院','广东财经职业学院'),
new city('广东司法警官职业学院','广东司法警官职业学院'),
new city('汕尾职业技术学院','汕尾职业技术学院'),
new city('广东建华职业学院','广东建华职业学院'),
new city('广东工贸职业技术学院','广东工贸职业技术学院'),
new city('河源职业技术学院','河源职业技术学院'),
new city('阳江职业技术学院','阳江职业技术学院'),
new city('罗定职业技术学院','罗定职业技术学院'),
new city('广东纺织职业技术学院','广东纺织职业技术学院'),
new city('广东省外语艺术职业学院','广东省外语艺术职业学院'),
new city('清远职业技术学院','清远职业技术学院'),
new city('广州康大职业技术学院','广州康大职业技术学院'),
new city('南海东软信息技术职业学院','南海东软信息技术职业学院'),
new city('珠海艺术职业学院','珠海艺术职业学院')
    ),
    new Array(
new city('南京大学','南京大学'),
new city('东南大学','东南大学'),
new city('中国矿业大学','中国矿业大学'),
new city('河海大学','河海大学'),
new city('江南大学','江南大学'),
new city('南京农业大学','南京农业大学'),
new city('中国药科大学','中国药科大学'),
new city('南京理工大学','南京理工大学'),
new city('南京航空航天大学','南京航空航天大学'),
new city('苏州大学','苏州大学'),
new city('扬州大学','扬州大学'),
new city('江苏大学','江苏大学'),
new city('南京工业大学','南京工业大学'),
new city('南京林业大学','南京林业大学'),
new city('南京医科大学','南京医科大学'),
new city('南京中医药大学','南京中医药大学'),
new city('南京师范大学','南京师范大学'),
new city('徐州师范大学','徐州师范大学'),
new city('南京财经大学','南京财经大学'),
new city('南京邮电学院','南京邮电学院'),
new city('华东船舶工业学院','华东船舶工业学院'),
new city('南京气象学院','南京气象学院'),
new city('南通工学院','南通工学院'),
new city('淮阴工学院','淮阴工学院'),
new city('常州工学院','常州工学院'),
new city('南京工程学院','南京工程学院'),
new city('淮海工学院','淮海工学院'),
new city('江苏工业学院','江苏工业学院'),
new city('盐城工学院','盐城工学院'),
new city('徐州医学院','徐州医学院'),
new city('南通医学院','南通医学院'),
new city('南京晓庄学院','南京晓庄学院'),
new city('淮阴师范学院','淮阴师范学院'),
new city('南通师范学院','南通师范学院'),
new city('苏州科技学院','苏州科技学院'),
new city('江苏技术师范学院','江苏技术师范学院'),
new city('盐城师范学院','盐城师范学院'),
new city('南京审计学院','南京审计学院'),
new city('江苏警官学院','江苏警官学院'),
new city('南京体育学院','南京体育学院'),
new city('南京艺术学院','南京艺术学院'),
new city('三江学院','三江学院'),
new city('南京森林公安高等专科学校','南京森林公安高等专科学校'),
new city('常熟高等专科学校','常熟高等专科学校'),
new city('镇江市高等专科学校','镇江市高等专科学校'),
new city('南京动力高等专科学校','南京动力高等专科学校'),
new city('连云港师范高等专科学校','连云港师范高等专科学校'),
new city('泰州师范高等专科学校','泰州师范高等专科学校'),
new city('沙洲职业工学院','沙洲职业工学院'),
new city('民办明达职业技术学院','民办明达职业技术学院'),
new city('泰州职业技术学院','泰州职业技术学院'),
new city('徐州建筑职业技术学院','徐州建筑职业技术学院'),
new city('连云港职业技术学院','连云港职业技术学院'),
new city('无锡商业职业技术学院','无锡商业职业技术学院'),
new city('无锡职业技术学院','无锡职业技术学院'),
new city('金陵职业大学','金陵职业大学'),
new city('南通职业大学','南通职业大学'),
new city('南京市农业专科学校','南京市农业专科学校'),
new city('彭城职业大学','彭城职业大学'),
new city('苏州工艺美术职业技术学院','苏州工艺美术职业技术学院'),
new city('扬州市职业大学','扬州市职业大学'),
new city('南通航运职业技术学院','南通航运职业技术学院'),
new city('苏州职业大学','苏州职业大学'),
new city('南京工业职业技术学院','南京工业职业技术学院'),
new city('南通纺织职业技术学院','南通纺织职业技术学院'),
new city('徐州工业职业技术学院','徐州工业职业技术学院'),
new city('南京信息职业技术学院','南京信息职业技术学院'),
new city('江阴职业技术学院','江阴职业技术学院'),
new city('金肯职业技术学院','金肯职业技术学院'),
new city('常州轻工职业技术学院','常州轻工职业技术学院'),
new city('紫琅职业技术学院','紫琅职业技术学院'),
new city('常州工程职业技术学院','常州工程职业技术学院'),
new city('炎黄职业技术学院','炎黄职业技术学院'),
new city('江苏食品职业技术学院','江苏食品职业技术学院'),
new city('江苏农林职业技术学院','江苏农林职业技术学院'),
new city('江苏信息职业技术学院','江苏信息职业技术学院'),
new city('南京特殊教育职业技术学院','南京特殊教育职业技术学院'),
new city('江苏经贸职业技术学院','江苏经贸职业技术学院'),
new city('常州机电职业技术学院','常州机电职业技术学院'),
new city('硅湖职业技术学院','硅湖职业技术学院'),
new city('九州职业技术学院','九州职业技术学院'),
new city('苏州工业园区职业技术学院','苏州工业园区职业技术学院'),
new city('培尔职业技术学院','培尔职业技术学院'),
new city('淮安信息职业技术学院','淮安信息职业技术学院'),
new city('无锡南洋职业技术学院','无锡南洋职业技术学院'),
new city('宿迁职业技术学院','宿迁职业技术学院'),
new city('南京交通职业技术学院','南京交通职业技术学院'),
new city('苏州农业职业技术学院','苏州农业职业技术学院'),
new city('江苏畜牧兽医职业技术学院','江苏畜牧兽医职业技术学院'),
new city('常州信息职业技术学院','常州信息职业技术学院'),
new city('常州纺织服装职业技术学院','常州纺织服装职业技术学院'),
new city('正德职业技术学院','正德职业技术学院'),
new city('南京化工职业技术学院','南京化工职业技术学院'),
new city('钟山职业技术学院','钟山职业技术学院')
    ),
    new Array(
new city('浙江大学','浙江大学'),
new city('宁波大学','宁波大学'),
new city('浙江工业大学','浙江工业大学'),
new city('浙江师范大学','浙江师范大学'),
new city('杭州电子工业学院','杭州电子工业学院'),
new city('浙江工程学院','浙江工程学院'),
new city('浙江科技学院','浙江科技学院'),
new city('嘉兴学院','嘉兴学院'),
new city('中国计量学院','中国计量学院'),
new city('浙江海洋学院','浙江海洋学院'),
new city('浙江林学院','浙江林学院'),
new city('浙江中医学院','浙江中医学院'),
new city('温州医学院','温州医学院'),
new city('杭州师范学院','杭州师范学院'),
new city('湖州师范学院','湖州师范学院'),
new city('温州师范学院','温州师范学院'),
new city('台州学院','台州学院'),
new city('绍兴文理学院','绍兴文理学院'),
new city('杭州商学院','杭州商学院'),
new city('浙江财经学院','浙江财经学院'),
new city('中国美术学院','中国美术学院'),
new city('浙江树人学院','浙江树人学院'),
new city('浙江万里学院','浙江万里学院'),
new city('公安海警高等专科学校','公安海警高等专科学校'),
new city('浙江水利水电专科学校','浙江水利水电专科学校'),
new city('浙江医药高等专科学校','浙江医药高等专科学校'),
new city('丽水师范专科学校','丽水师范专科学校'),
new city('浙江广播电视高等专科学校','浙江广播电视高等专科学校'),
new city('浙江公安高等专科学校','浙江公安高等专科学校'),
new city('浙江广厦建设职业技术学院','浙江广厦建设职业技术学院'),
new city('金华职业技术学院','金华职业技术学院'),
new city('浙江交通职业技术学院','浙江交通职业技术学院'),
new city('温州大学','温州大学'),
new city('宁波高等专科学校','宁波高等专科学校'),
new city('宁波职业技术学院','宁波职业技术学院'),
new city('温州职业技术学院','温州职业技术学院'),
new city('浙江警官职业学院','浙江警官职业学院'),
new city('台州职业技术学院','台州职业技术学院'),
new city('浙江经济职业技术学院','浙江经济职业技术学院'),
new city('浙江金融职业学院','浙江金融职业学院'),
new city('浙江旅游职业学院','浙江旅游职业学院'),
new city('浙江工业职业技术学院','浙江工业职业技术学院'),
new city('绍兴越秀外国语职业学院','绍兴越秀外国语职业学院'),
new city('浙江东方职业技术学院','浙江东方职业技术学院'),
new city('宁波城市职业技术学院','宁波城市职业技术学院'),
new city('浙江艺术职业学院','浙江艺术职业学院'),
new city('杭州万向职业技术学院','杭州万向职业技术学院'),
new city('浙江轻纺职业技术学院','浙江轻纺职业技术学院'),
new city('浙江商业职业技术学院','浙江商业职业技术学院'),
new city('浙江机电职业技术学院','浙江机电职业技术学院'),
new city('义乌工商职业技术学院','义乌工商职业技术学院'),
new city('宁波大红鹰职业技术学院','宁波大红鹰职业技术学院'),
new city('浙江工贸职业技术学院','浙江工贸职业技术学院'),
new city('绍兴托普信息职业技术学院','绍兴托普信息职业技术学院'),
new city('宁波服装职业技术学院','宁波服装职业技术学院'),
new city('嘉兴职业技术学院','嘉兴职业技术学院'),
new city('湖州职业技术学院','湖州职业技术学院'),
new city('衢州职业技术学院','衢州职业技术学院'),
new city('丽水职业技术学院','丽水职业技术学院'),
new city('杭州职业技术学院','杭州职业技术学院'),
new city('浙江工商职业技术学院','浙江工商职业技术学院'),
new city('浙江育英职业技术学院','浙江育英职业技术学院'),
new city('浙江经贸职业技术学院','浙江经贸职业技术学院'),
new city('浙江建设职业技术学院','浙江建设职业技术学院')
    ),
    new Array(
new city('厦门大学','厦门大学'),
new city('华侨大学','华侨大学'),
new city('福建农林大学','福建农林大学'),
new city('集美大学','集美大学'),
new city('福州大学','福州大学'),
new city('仰恩大学','仰恩大学'),
new city('福建医科大学','福建医科大学'),
new city('福建师范大学','福建师范大学'),
new city('福建工程学院','福建工程学院'),
new city('福建中医学院','福建中医学院'),
new city('泉州师范学院','泉州师范学院'),
new city('漳州师范学院','漳州师范学院'),
new city('莆田学院','莆田学院'),
new city('闽江学院','闽江学院'),
new city('三明高等专科学校','三明高等专科学校'),
new city('龙岩师范高等专科学校','龙岩师范高等专科学校'),
new city('南平师范高等专科学校','南平师范高等专科学校'),
new city('宁德师范高等专科学校','宁德师范高等专科学校'),
new city('福建商业高等专科学校','福建商业高等专科学校'),
new city('福建公安高等专科学校','福建公安高等专科学校'),
new city('黎明职业大学','黎明职业大学'),
new city('福州英华职业学院','福州英华职业学院'),
new city('厦门华夏职业学院','厦门华夏职业学院'),
new city('福建交通职业技术学院','福建交通职业技术学院'),
new city('泉州育青职业技术学院','泉州育青职业技术学院'),
new city('福建华南女子职业学院','福建华南女子职业学院'),
new city('漳州职业技术学院','漳州职业技术学院'),
new city('泉州光电信息职业学院','泉州光电信息职业学院'),
new city('闽西职业大学','闽西职业大学'),
new city('鹭江职业大学','鹭江职业大学'),
new city('泉州华光摄影艺术职业学院','泉州华光摄影艺术职业学院'),
new city('泉州中营职业学院','泉州中营职业学院'),
new city('福州职业技术学院','福州职业技术学院'),
new city('福建信息职业技术学院','福建信息职业技术学院'),
new city('厦门海洋职业技术学院','厦门海洋职业技术学院'),
new city('福建林业职业技术学院','福建林业职业技术学院'),
new city('福建电力职业技术学院','福建电力职业技术学院'),
new city('福建水利电力职业技术学院','福建水利电力职业技术学院'),
new city('福建农业职业技术学院','福建农业职业技术学院')
    ),
    new Array(
new city('中南大学','中南大学'),
new city('湖南大学','湖南大学'),
new city('湘潭大学','湘潭大学'),
new city('湖南科技大学','湖南科技大学'),
new city('吉首大学','吉首大学'),
new city('长沙理工大学','长沙理工大学'),
new city('南华大学','南华大学'),
new city('湖南农业大学','湖南农业大学'),
new city('湖南师范大学','湖南师范大学'),
new city('湖南工程学院','湖南工程学院'),
new city('湖南城市学院','湖南城市学院'),
new city('株洲工学院','株洲工学院'),
new city('湖南理工学院','湖南理工学院'),
new city('中南林学院','中南林学院'),
new city('湖南中医学院','湖南中医学院'),
new city('湘南学院','湘南学院'),
new city('衡阳师范学院','衡阳师范学院'),
new city('湖南商学院','湖南商学院'),
new city('湖南文理学院','湖南文理学院'),
new city('怀化学院','怀化学院'),
new city('邵阳学院','邵阳学院'),
new city('零陵学院','零陵学院'),
new city('湖南建材高等专科学校','湖南建材高等专科学校'),
new city('怀化医学高等专科学校','怀化医学高等专科学校'),
new city('株洲师范高等专科学校','株洲师范高等专科学校'),
new city('娄底师范高等专科学校','娄底师范高等专科学校'),
new city('湖南省第一师范学校','湖南省第一师范学校'),
new city('湖南税务高等专科学校','湖南税务高等专科学校'),
new city('湖南财经高等专科学校','湖南财经高等专科学校'),
new city('湖南公安高等专科学校','湖南公安高等专科学校'),
new city('湘南医学高等专科学校','湘南医学高等专科学校'),
new city('长沙航空职业技术学院','长沙航空职业技术学院'),
new city('长沙大学','长沙大学'),
new city('永州职业技术学院','永州职业技术学院'),
new city('湖南女子职业大学','湖南女子职业大学'),
new city('湖南铁道职业技术学院','湖南铁道职业技术学院'),
new city('湖南环境生物职业技术学院','湖南环境生物职业技术学院'),
new city('湖南冶金职业技术学院','湖南冶金职业技术学院'),
new city('湖南信息职业技术学院','湖南信息职业技术学院'),
new city('湖南大众传媒职业技术学院','湖南大众传媒职业技术学院'),
new city('湖南工业职业技术学院','湖南工业职业技术学院'),
new city('湖南涉外经济职业学院','湖南涉外经济职业学院'),
new city('长沙民政职业技术学院','长沙民政职业技术学院'),
new city('长沙南方职业学院','长沙南方职业学院'),
new city('湖南石油化工职业技术学院','湖南石油化工职业技术学院'),
new city('湖南城建职业技术学院','湖南城建职业技术学院'),
new city('湖南化工职业技术学院','湖南化工职业技术学院'),
new city('娄底潇湘职业学院','娄底潇湘职业学院'),
new city('怀化职业技术学院','怀化职业技术学院'),
new city('常德职业技术学院','常德职业技术学院'),
new city('岳阳职业技术学院','岳阳职业技术学院'),
new city('湖南科技职业学院','湖南科技职业学院'),
new city('娄底职业技术学院','娄底职业技术学院'),
new city('湖南交通职业技术学院','湖南交通职业技术学院'),
new city('湖南生物与机电工程职业技术学院','湖南生物与机电工程职业技术学院'),
new city('张家界航空工业职业技术学院','张家界航空工业职业技术学院'),
new city('湘潭职业技术学院','湘潭职业技术学院'),
new city('保险职业学院','保险职业学院'),
new city('长沙通信职业技术学院','长沙通信职业技术学院'),
new city('郴州职业技术学院','郴州职业技术学院'),
new city('湖南体育职业学院','湖南体育职业学院'),
new city('湖南工程职业技术学院','湖南工程职业技术学院'),
new city('长沙环境保护职业技术学院','长沙环境保护职业技术学院'),
new city('湖南艺术职业学院','湖南艺术职业学院'),
new city('湖南机电职业技术学院','湖南机电职业技术学院'),
new city('长沙社会安全职业技术学院','长沙社会安全职业技术学院'),
new city('长沙特殊教育职业学院','长沙特殊教育职业学院'),
new city('湖南商务职业技术学院','湖南商务职业技术学院')
    ),
    new Array(
new city('武汉大学','武汉大学'),
new city('中南财经政法大学','中南财经政法大学'),
new city('华中科技大学','华中科技大学'),
new city('武汉理工大学','武汉理工大学'),
new city('中国地质大学','中国地质大学'),
new city('华中农业大学','华中农业大学'),
new city('华中师范大学','华中师范大学'),
new city('中南民族大学','中南民族大学'),
new city('湖北大学','湖北大学'),
new city('长江大学','长江大学'),
new city('江汉大学','江汉大学'),
new city('三峡大学','三峡大学'),
new city('武汉科技大学','武汉科技大学'),
new city('襄樊学院','襄樊学院'),
new city('湖北工学院','湖北工学院'),
new city('武汉化工学院','武汉化工学院'),
new city('武汉科技学院','武汉科技学院'),
new city('湖北汽车工业学院','湖北汽车工业学院'),
new city('武汉工业学院','武汉工业学院'),
new city('湖北中医学院','湖北中医学院'),
new city('郧阳医学院','郧阳医学院'),
new city('湖北师范学院','湖北师范学院'),
new city('黄冈师范学院','黄冈师范学院'),
new city('孝感学院','孝感学院'),
new city('湖北经济学院','湖北经济学院'),
new city('湖北警官学院','湖北警官学院'),
new city('武汉体育学院','武汉体育学院'),
new city('湖北美术学院','湖北美术学院'),
new city('武汉音乐学院','武汉音乐学院'),
new city('湖北民族学院','湖北民族学院'),
new city('咸宁学院','咸宁学院'),
new city('黄石高等专科学校','黄石高等专科学校'),
new city('湖北中医药高等专科学校','湖北中医药高等专科学校'),
new city('郧阳师范高等专科学校','郧阳师范高等专科学校'),
new city('沙洋师范高等专科学校','沙洋师范高等专科学校'),
new city('湖北财经高等专科学校','湖北财经高等专科学校'),
new city('湖北艺术职业学院','湖北艺术职业学院'),
new city('咸宁职业技术学院','咸宁职业技术学院'),
new city('武汉交通职业学院','武汉交通职业学院'),
new city('荆门职业技术学院','荆门职业技术学院'),
new city('武汉职业技术学院','武汉职业技术学院'),
new city('武汉船舶职业技术学院','武汉船舶职业技术学院'),
new city('武汉时代职业学院','武汉时代职业学院'),
new city('长江职业学院','长江职业学院'),
new city('沙市职业大学','沙市职业大学'),
new city('黄冈职业技术学院','黄冈职业技术学院'),
new city('武汉商业服务学院','武汉商业服务学院'),
new city('十堰职业技术学院','十堰职业技术学院'),
new city('鄂州职业大学','鄂州职业大学'),
new city('武汉生物工程职业技术学院','武汉生物工程职业技术学院'),
new city('襄樊职业技术学院','襄樊职业技术学院'),
new city('恩施职业技术学院','恩施职业技术学院'),
new city('湖北职业技术学院','湖北职业技术学院'),
new city('武汉科技职业学院','武汉科技职业学院'),
new city('武汉警官职业学院','武汉警官职业学院'),
new city('湖北开放职业学院','湖北开放职业学院'),
new city('武汉信息传播职业技术学院','武汉信息传播职业技术学院'),
new city('湖北生物生态职业技术学院','湖北生物生态职业技术学院'),
new city('武汉航海职业技术学院','武汉航海职业技术学院'),
new city('武汉光华信息技术职业学院','武汉光华信息技术职业学院'),
new city('武汉商贸职业学院','武汉商贸职业学院'),
new city('武汉外语外事职业学院','武汉外语外事职业学院'),
new city('湖北水利水电职业技术学院','湖北水利水电职业技术学院'),
new city('湖北城市建设职业技术学院','湖北城市建设职业技术学院'),
new city('武汉电力职业技术学院','武汉电力职业技术学院'),
new city('长江工程职业技术学院','长江工程职业技术学院'),
new city('随州职业技术学院','随州职业技术学院'),
new city('武汉工交职业学院','武汉工交职业学院'),
new city('湖北交通职业技术学院','湖北交通职业技术学院'),
new city('湖北轻工职业技术学院','湖北轻工职业技术学院'),
new city('汉口职业技术学院','汉口职业技术学院'),
new city('荆州职业技术学院','荆州职业技术学院'),
new city('武汉工程职业技术学院','武汉工程职业技术学院'),
new city('仙桃职业学院','仙桃职业学院'),
new city('宜昌职业技术学院','宜昌职业技术学院')
    ),
    new Array(
new city('山东大学','山东大学'),
new city('中国海洋大学','中国海洋大学'),
new city('青岛大学','青岛大学'),
new city('山东科技大学','山东科技大学'),
new city('山东理工大学','山东理工大学'),
new city('聊城大学','聊城大学'),
new city('烟台大学','烟台大学'),
new city('青岛科技大学','青岛科技大学'),
new city('济南大学','济南大学'),
new city('山东农业大学','山东农业大学'),
new city('山东中医药大学','山东中医药大学'),
new city('山东师范大学','山东师范大学'),
new city('曲阜师范大学','曲阜师范大学'),
new city('青岛建筑工程学院','青岛建筑工程学院'),
new city('山东建筑工程学院','山东建筑工程学院'),
new city('山东轻工业学院','山东轻工业学院'),
new city('潍坊学院','潍坊学院'),
new city('山东交通学院','山东交通学院'),
new city('莱阳农学院','莱阳农学院'),
new city('潍坊医学院','潍坊医学院'),
new city('泰山医学院','泰山医学院'),
new city('滨州医学院','滨州医学院'),
new city('济宁医学院','济宁医学院'),
new city('烟台师范学院','烟台师范学院'),
new city('德州学院','德州学院'),
new city('临沂师范学院','临沂师范学院'),
new city('山东经济学院','山东经济学院'),
new city('山东财政学院','山东财政学院'),
new city('山东工商学院','山东工商学院'),
new city('山东体育学院','山东体育学院'),
new city('山东艺术学院','山东艺术学院'),
new city('山东工艺美术学院','山东工艺美术学院'),
new city('泰山学院','泰山学院'),
new city('山东电力高等专科学校','山东电力高等专科学校'),
new city('山东水利专科学校','山东水利专科学校'),
new city('临沂医学专科学校','临沂医学专科学校'),
new city('菏泽医学专科学校','菏泽医学专科学校'),
new city('滨州师范专科学校','滨州师范专科学校'),
new city('菏泽师范专科学校','菏泽师范专科学校'),
new city('枣庄师范专科学校','枣庄师范专科学校'),
new city('济宁师范专科学校','济宁师范专科学校'),
new city('山东公安专科学校','山东公安专科学校'),
new city('民办山东万杰医学高等专科学校','民办山东万杰医学高等专科学校'),
new city('曲阜远东职业技术学院','曲阜远东职业技术学院'),
new city('山东军星职业技术学院','山东军星职业技术学院'),
new city('山东商业职业技术学院','山东商业职业技术学院'),
new city('日照职业技术学院','日照职业技术学院'),
new city('威海职业学院','威海职业学院'),
new city('民办青岛滨海职业学院','民办青岛滨海职业学院'),
new city('聊城职业技术学院','聊城职业技术学院'),
new city('山东南山职业技术学院','山东南山职业技术学院'),
new city('山东劳动职业技术学院','山东劳动职业技术学院'),
new city('莱芜职业技术学院','莱芜职业技术学院'),
new city('青岛职业技术学院','青岛职业技术学院'),
new city('济宁职业技术学院','济宁职业技术学院'),
new city('青岛黄海职业学院','青岛黄海职业学院'),
new city('淄博职业学院','淄博职业学院'),
new city('山东现代职业学院','山东现代职业学院'),
new city('山东信息职业技术学院','山东信息职业技术学院'),
new city('山东交通职业学院','山东交通职业学院'),
new city('山东化工职业学院','山东化工职业学院'),
new city('山东胜利职业学院','山东胜利职业学院'),
new city('山东工业职业学院','山东工业职业学院'),
new city('青岛酒店管理职业技术学院','青岛酒店管理职业技术学院'),
new city('淄博科技职业学院','淄博科技职业学院'),
new city('山东纺织职业学院','山东纺织职业学院'),
new city('青岛飞洋职业技术学院','青岛飞洋职业技术学院'),
new city('山东大王职业学院','山东大王职业学院'),
new city('青岛港湾职业技术学院','青岛港湾职业技术学院'),
new city('烟台职业学院','烟台职业学院'),
new city('青岛恒星职业技术学院','青岛恒星职业技术学院'),
new city('青岛求实职业技术学院','青岛求实职业技术学院'),
new city('山东服装职业学院','山东服装职业学院'),
new city('山东力明科技职业学院','山东力明科技职业学院'),
new city('潍坊科技职业学院','潍坊科技职业学院'),
new city('德州科技职业学院','德州科技职业学院'),
new city('山东圣翰财贸职业学院','山东圣翰财贸职业学院'),
new city('潍坊职业学院','潍坊职业学院'),
new city('济源职业技术学院','济源职业技术学院'),
new city('滨州职业学院','滨州职业学院'),
new city('山东水利职业学院','山东水利职业学院'),
new city('山东畜牧兽医职业学院','山东畜牧兽医职业学院'),
new city('山东英才职业技术学院','山东英才职业技术学院'),
new city('山东外贸职业学院','山东外贸职业学院'),
new city('东营职业学院','东营职业学院')
    ),
    new Array(
new city('大连理工大学','大连理工大学'),
new city('东北大学','东北大学'),
new city('大连海事大学','大连海事大学'),
new city('辽宁大学','辽宁大学'),
new city('沈阳大学','沈阳大学'),
new city('大连大学','大连大学'),
new city('辽宁工程技术大学','辽宁工程技术大学'),
new city('沈阳工业大学','沈阳工业大学'),
new city('辽宁石油化工大学','辽宁石油化工大学'),
new city('鞍山科技大学','鞍山科技大学'),
new city('沈阳农业大学','沈阳农业大学'),
new city('中国医科大学','中国医科大学'),
new city('大连医科大学','大连医科大学'),
new city('沈阳药科大学','沈阳药科大学'),
new city('辽宁师范大学','辽宁师范大学'),
new city('沈阳师范大学','沈阳师范大学'),
new city('渤海大学','渤海大学'),
new city('东北财经大学','东北财经大学'),
new city('大连民族学院','大连民族学院'),
new city('中国刑事警察学院','中国刑事警察学院'),
new city('沈阳建筑工程学院','沈阳建筑工程学院'),
new city('大连铁道学院','大连铁道学院'),
new city('沈阳工业学院','沈阳工业学院'),
new city('沈阳化工学院','沈阳化工学院'),
new city('大连轻工业学院','大连轻工业学院'),
new city('辽宁工学院','辽宁工学院'),
new city('沈阳航空工业学院','沈阳航空工业学院'),
new city('沈阳工程学院','沈阳工程学院'),
new city('大连水产学院','大连水产学院'),
new city('辽宁中医学院','辽宁中医学院'),
new city('锦州医学院','锦州医学院'),
new city('沈阳医学院','沈阳医学院'),
new city('鞍山师范学院','鞍山师范学院'),
new city('大连外国语学院','大连外国语学院'),
new city('沈阳体育学院','沈阳体育学院'),
new city('鲁迅美术学院','鲁迅美术学院'),
new city('沈阳音乐学院','沈阳音乐学院'),
new city('辽东学院','辽东学院'),
new city('阜新高等专科学校','阜新高等专科学校'),
new city('辽宁交通高等专科学校','辽宁交通高等专科学校'),
new city('本溪冶金高等专科学校','本溪冶金高等专科学校'),
new city('锦州师范高等专科学校','锦州师范高等专科学校'),
new city('铁岭师范高等专科学校','铁岭师范高等专科学校'),
new city('朝阳师范高等专科学校','朝阳师范高等专科学校'),
new city('抚顺师范高等专科学校','抚顺师范高等专科学校'),
new city('辽宁税务高等专科学校','辽宁税务高等专科学校'),
new city('辽宁警官高等专科学校','辽宁警官高等专科学校'),
new city('辽宁体育运动职业技术学院','辽宁体育运动职业技术学院'),
new city('铁岭农业职业技术学院','铁岭农业职业技术学院'),
new city('辽宁林业职业技术学院','辽宁林业职业技术学院'),
new city('沈阳航空职业技术学院','沈阳航空职业技术学院'),
new city('沈阳职业技术学院','沈阳职业技术学院'),
new city('辽宁农业职业技术学院','辽宁农业职业技术学院'),
new city('营口职业技术学院','营口职业技术学院'),
new city('鞍山市高等职业专科学校','鞍山市高等职业专科学校'),
new city('抚顺职业技术学院','抚顺职业技术学院'),
new city('辽宁对外经贸职业学院','辽宁对外经贸职业学院'),
new city('渤海船舶职业学院','渤海船舶职业学院'),
new city('盘锦职业技术学院','盘锦职业技术学院'),
new city('大连商务职业学院','大连商务职业学院'),
new city('大连职业技术学院','大连职业技术学院'),
new city('辽阳职业技术学院','辽阳职业技术学院'),
new city('辽宁石化职业技术学院','辽宁石化职业技术学院'),
new city('辽宁经济职业技术学院','辽宁经济职业技术学院'),
new city('辽宁机电职业技术学院','辽宁机电职业技术学院'),
new city('辽宁广告职业学院','辽宁广告职业学院'),
new city('辽宁信息职业技术学院','辽宁信息职业技术学院'),
new city('大连东软信息技术职业学院','大连东软信息技术职业学院'),
new city('大连艺术职业学院','大连艺术职业学院'),
new city('辽宁金融职业学院','辽宁金融职业学院')
    ),
    new Array(
new city('吉林大学','吉林大学'),
new city('东北师范大学','东北师范大学'),
new city('延边大学','延边大学'),
new city('北华大学','北华大学'),
new city('长春大学','长春大学'),
new city('长春理工大学','长春理工大学'),
new city('长春工业大学','长春工业大学'),
new city('吉林农业大学','吉林农业大学'),
new city('吉林师范大学','吉林师范大学'),
new city('东北电力学院','东北电力学院'),
new city('长春工程学院','长春工程学院'),
new city('吉林化工学院','吉林化工学院'),
new city('吉林建筑工程学院','吉林建筑工程学院'),
new city('长春中医学院','长春中医学院'),
new city('吉林工程技术师范学院','吉林工程技术师范学院'),
new city('通化师范学院','通化师范学院'),
new city('白城师范学院','白城师范学院'),
new city('长春师范学院','长春师范学院'),
new city('吉林华桥外国语学院','吉林华桥外国语学院'),
new city('长春税务学院','长春税务学院'),
new city('吉林体育学院','吉林体育学院'),
new city('吉林艺术学院','吉林艺术学院'),
new city('吉林粮食高等专科学校','吉林粮食高等专科学校'),
new city('长春汽车工业高等专科学校','长春汽车工业高等专科学校'),
new city('吉林特产高等专科学校','吉林特产高等专科学校'),
new city('长春医学高等专科学校','长春医学高等专科学校'),
new city('吉林财税高等专科学校','吉林财税高等专科学校'),
new city('吉林商业高等专科学校','吉林商业高等专科学校'),
new city('长春金融高等专科学校','长春金融高等专科学校'),
new city('吉林公安高等专科学校','吉林公安高等专科学校'),
new city('四平职业大学','四平职业大学'),
new city('吉林交通职业技术学院','吉林交通职业技术学院'),
new city('长春东方职业学院','长春东方职业学院'),
new city('辽源职业技术学院','辽源职业技术学院'),
new city('吉林对外经贸职业学院','吉林对外经贸职业学院'),
new city('吉林农业工程职业技术学院','吉林农业工程职业技术学院'),
new city('吉林司法警官职业学院','吉林司法警官职业学院'),
new city('长春职业技术学院','长春职业技术学院'),
new city('吉林工业职业技术学院','吉林工业职业技术学院'),
new city('吉林电子信息职业技术学院','吉林电子信息职业技术学院')
    ),
    new Array(
new city('云南大学','云南大学'),
new city('昆明理工大学','昆明理工大学'),
new city('云南农业大学','云南农业大学'),
new city('云南师范大学','云南师范大学'),
new city('云南民族大学','云南民族大学'),
new city('西南林学院','西南林学院'),
new city('昆明医学院','昆明医学院'),
new city('云南中医学院','云南中医学院'),
new city('大理学院','大理学院'),
new city('曲靖师范学院','曲靖师范学院'),
new city('玉溪师范学院','玉溪师范学院'),
new city('楚雄师范学院','楚雄师范学院'),
new city('红河学院','红河学院'),
new city('云南财贸学院','云南财贸学院'),
new city('云南警官学院','云南警官学院'),
new city('云南艺术学院','云南艺术学院'),
new city('昆明冶金高等专科学校','昆明冶金高等专科学校'),
new city('云南医学高等专科学校','云南医学高等专科学校'),
new city('思茅师范高等专科学校','思茅师范高等专科学校'),
new city('文山师范高等专科学校','文山师范高等专科学校'),
new city('昆明师范高等专科学校','昆明师范高等专科学校'),
new city('昭通师范高等专科学校','昭通师范高等专科学校'),
new city('保山师范高等专科学校','保山师范高等专科学校'),
new city('昆明大学','昆明大学'),
new city('昆明艺术职业学院','昆明艺术职业学院'),
new city('西双版纳职业技术学院','西双版纳职业技术学院'),
new city('云南国土资源职业学院','云南国土资源职业学院'),
new city('云南科技信息职业技术学院','云南科技信息职业技术学院'),
new city('云南交通职业技术学院','云南交通职业技术学院'),
new city('玉溪农业职业技术学院','玉溪农业职业技术学院'),
new city('云南司法警官职业学院','云南司法警官职业学院'),
new city('云南农业职业技术学院','云南农业职业技术学院'),
new city('昆明工业职业技术学院','昆明工业职业技术学院'),
new city('云南能源职业技术学院','云南能源职业技术学院')
    ),
    new Array(
new city('四川大学','四川大学'),
new city('西南交通大学','西南交通大学'),
new city('电子科技大学','电子科技大学'),
new city('西南财经大学','西南财经大学'),
new city('西南民族大学','西南民族大学'),
new city('成都理工大学','成都理工大学'),
new city('西华大学','西华大学'),
new city('西南科技大学','西南科技大学'),
new city('四川农业大学','四川农业大学'),
new city('成都中医药大学','成都中医药大学'),
new city('四川师范大学','四川师范大学'),
new city('西华师范大学','西华师范大学'),
new city('中国民用航空飞行学院','中国民用航空飞行学院'),
new city('西昌学院','西昌学院'),
new city('攀枝花学院','攀枝花学院'),
new city('成都学院','成都学院'),
new city('宜宾学院','宜宾学院'),
new city('西南石油学院','西南石油学院'),
new city('成都信息工程学院','成都信息工程学院'),
new city('四川理工学院','四川理工学院'),
new city('泸州医学院','泸州医学院'),
new city('川北医学院','川北医学院'),
new city('内江师范学院','内江师范学院'),
new city('乐山师范学院','乐山师范学院'),
new city('成都体育学院','成都体育学院'),
new city('四川音乐学院','四川音乐学院'),
new city('绵阳师范学院','绵阳师范学院'),
new city('四川烹饪高等专科学校','四川烹饪高等专科学校'),
new city('成都电子机械高等专科学校','成都电子机械高等专科学校'),
new city('成都纺织高等专科学校','成都纺织高等专科学校'),
new city('达县师范高等专科学校','达县师范高等专科学校'),
new city('康定民族师范高等专科学校','康定民族师范高等专科学校'),
new city('阿坝师范高等专科学校','阿坝师范高等专科学校'),
new city('四川警官高等专科学校','四川警官高等专科学校'),
new city('民办四川天一学院','民办四川天一学院'),
new city('成都航空职业技术学院','成都航空职业技术学院'),
new city('雅安职业技术学院','雅安职业技术学院'),
new city('四川工程职业技术学院','四川工程职业技术学院'),
new city('四川工商职业技术学院','四川工商职业技术学院'),
new city('泸州职业技术学院','泸州职业技术学院'),
new city('眉山职业技术学院','眉山职业技术学院'),
new city('四川职业技术学院','四川职业技术学院'),
new city('绵阳职业技术学院','绵阳职业技术学院'),
new city('四川建筑职业技术学院','四川建筑职业技术学院'),
new city('乐山职业技术学院','乐山职业技术学院'),
new city('四川交通职业技术学院','四川交通职业技术学院'),
new city('四川机电职业技术学院','四川机电职业技术学院'),
new city('成都东软信息技术职业学院','成都东软信息技术职业学院'),
new city('四川托普信息技术职业学院','四川托普信息技术职业学院'),
new city('南充职业技术学院','南充职业技术学院'),
new city('四川国际标榜职业学院','四川国际标榜职业学院'),
new city('内江职业技术学院','内江职业技术学院'),
new city('达州职业技术学院','达州职业技术学院'),
new city('成都职业技术学院','成都职业技术学院'),
new city('四川电力职业技术学院','四川电力职业技术学院'),
new city('四川水利职业技术学院','四川水利职业技术学院'),
new city('四川化工职业技术学院','四川化工职业技术学院'),
new city('成都农业科技职业学院','成都农业科技职业学院'),
new city('宜宾职业技术学院','宜宾职业技术学院'),
new city('成都艺术职业学院','成都艺术职业学院'),
new city('四川航天职业技术学院','四川航天职业技术学院'),
new city('四川邮电职业技术学院','四川邮电职业技术学院')
    ),
    new Array(
new city('合肥工业大学','合肥工业大学'),
new city('中国科学技术大学','中国科学技术大学'),
new city('安徽大学','安徽大学'),
new city('安徽理工大学','安徽理工大学'),
new city('安徽工业大学','安徽工业大学'),
new city('安徽农业大学','安徽农业大学'),
new city('安徽医科大学','安徽医科大学'),
new city('安徽师范大学','安徽师范大学'),
new city('安徽建筑工业学院','安徽建筑工业学院'),
new city('安徽工程科技学院','安徽工程科技学院'),
new city('安徽中医学院','安徽中医学院'),
new city('皖南医学院','皖南医学院'),
new city('蚌埠医学院','蚌埠医学院'),
new city('淮南师范学院','淮南师范学院'),
new city('安徽技术师范学院','安徽技术师范学院'),
new city('安庆师范学院','安庆师范学院'),
new city('淮北煤炭师范学院','淮北煤炭师范学院'),
new city('阜阳师范学院','阜阳师范学院'),
new city('安徽财贸学院','安徽财贸学院'),
new city('黄山学院','黄山学院'),
new city('巢湖学院','巢湖学院'),
new city('铜陵学院','铜陵学院'),
new city('合肥学院','合肥学院'),
new city('皖西学院','皖西学院'),
new city('蚌埠高等专科学校','蚌埠高等专科学校'),
new city('安徽中医药高等专科学校','安徽中医药高等专科学校'),
new city('安徽医学高等专科学校','安徽医学高等专科学校'),
new city('滁州师范专科学校','滁州师范专科学校'),
new city('池州师范专科学校','池州师范专科学校'),
new city('宿州师范专科学校','宿州师范专科学校'),
new city('芜湖师范专科学校','芜湖师范专科学校'),
new city('亳州师范高等专科学校','亳州师范高等专科学校'),
new city('安徽警官职业学院','安徽警官职业学院'),
new city('淮北职业技术学院','淮北职业技术学院'),
new city('安徽水利水电职业技术学院','安徽水利水电职业技术学院'),
new city('芜湖职业技术学院','芜湖职业技术学院'),
new city('民办三联职业技术学院','民办三联职业技术学院'),
new city('铜陵职业技术学院','铜陵职业技术学院'),
new city('安徽商贸职业技术学院','安徽商贸职业技术学院'),
new city('淮南职业技术学院','淮南职业技术学院'),
new city('民办万博科技职业学院','民办万博科技职业学院'),
new city('淮南联合大学','淮南联合大学'),
new city('民办安徽新华职业学院','民办安徽新华职业学院'),
new city('安徽职业技术学院','安徽职业技术学院'),
new city('合肥通用职业技术学院','合肥通用职业技术学院'),
new city('安徽工贸职业技术学院','安徽工贸职业技术学院'),
new city('安徽工业经济职业技术学院','安徽工业经济职业技术学院'),
new city('安徽交通职业技术学院','安徽交通职业技术学院'),
new city('安徽电子信息职业技术学院','安徽电子信息职业技术学院'),
new city('民办合肥经济技术职业学院','民办合肥经济技术职业学院'),
new city('安徽体育运动职业技术学院','安徽体育运动职业技术学院'),
new city('宿州职业技术学院','宿州职业技术学院'),
new city('六安职业技术学院','六安职业技术学院'),
new city('巢湖职业技术学院','巢湖职业技术学院'),
new city('滁州职业技术学院','滁州职业技术学院'),
new city('池州职业技术学院','池州职业技术学院'),
new city('民办安徽明星科技职业学院','民办安徽明星科技职业学院'),
new city('宣城职业技术学院','宣城职业技术学院'),
new city('安徽广播影视职业技术学院','安徽广播影视职业技术学院'),
new city('民办安徽外国语职业技术学院','民办安徽外国语职业技术学院'),
new city('阜阳职业技术学院','阜阳职业技术学院'),
new city('民办安徽文达信息技术职业学院','民办安徽文达信息技术职业学院')
    ),
    new Array(
new city('南昌大学','南昌大学'),
new city('华东交通大学','华东交通大学'),
new city('江西农业大学','江西农业大学'),
new city('江西师范大学','江西师范大学'),
new city('江西财经大学','江西财经大学'),
new city('南方冶金学院','南方冶金学院'),
new city('东华理工学院','东华理工学院'),
new city('景德镇陶瓷学院','景德镇陶瓷学院'),
new city('南昌航空工业学院','南昌航空工业学院'),
new city('江西中医学院','江西中医学院'),
new city('赣南医学院','赣南医学院'),
new city('井冈山师范学院','井冈山师范学院'),
new city('江西科技师范学院','江西科技师范学院'),
new city('赣南师范学院','赣南师范学院'),
new city('上饶师范学院','上饶师范学院'),
new city('宜春学院','宜春学院'),
new city('九江学院','九江学院'),
new city('新余高等专科学校','新余高等专科学校'),
new city('萍乡高等专科学校','萍乡高等专科学校'),
new city('景德镇高等专科学校','景德镇高等专科学校'),
new city('南昌高等专科学校','南昌高等专科学校'),
new city('南昌水利水电高等专科学校','南昌水利水电高等专科学校'),
new city('井冈山医学高等专科学校','井冈山医学高等专科学校'),
new city('江西公安专科学校','江西公安专科学校'),
new city('蓝天职业技术学院','蓝天职业技术学院'),
new city('江西工业职业技术学院','江西工业职业技术学院'),
new city('九江职业技术学院','九江职业技术学院'),
new city('九江职业大学','九江职业大学'),
new city('江西赣江职业技术学院','江西赣江职业技术学院'),
new city('江西航天科技职业学院','江西航天科技职业学院'),
new city('江西渝州科技职业学院','江西渝州科技职业学院'),
new city('江西新亚职业技术学院','江西新亚职业技术学院'),
new city('江西大宇职业技术学院','江西大宇职业技术学院'),
new city('江西科技职业技术学院','江西科技职业技术学院'),
new city('江西艺术职业学院','江西艺术职业学院'),
new city('江西旅游商贸职业学院','江西旅游商贸职业学院'),
new city('江西电力职业技术学院','江西电力职业技术学院'),
new city('江西司法警官职业学院','江西司法警官职业学院'),
new city('江西环境工程职业学院','江西环境工程职业学院'),
new city('江西信息应用职业技术学院','江西信息应用职业技术学院'),
new city('江西机电职业技术学院','江西机电职业技术学院'),
new city('江西交通职业技术学院','江西交通职业技术学院'),
new city('江西陶瓷工艺美术职业技术学院','江西陶瓷工艺美术职业技术学院'),
new city('江西财经职业学院','江西财经职业学院'),
new city('江西应用技术职业学院','江西应用技术职业学院'),
new city('井冈山职业技术学院','井冈山职业技术学院'),
new city('鹰潭职业技术学院','鹰潭职业技术学院'),
new city('江西服装职业技术学院','江西服装职业技术学院'),
new city('江西现代职业技术学院','江西现代职业技术学院'),
new city('江西工业工程职业技术学院','江西工业工程职业技术学院')
    ),
    new Array(
new city('东北林业大学','东北林业大学'),
new city('哈尔滨工业大学','哈尔滨工业大学'),
new city('哈尔滨工程大学','哈尔滨工程大学'),
new city('黑龙江大学','黑龙江大学'),
new city('佳木斯大学','佳木斯大学'),
new city('齐齐哈尔大学','齐齐哈尔大学'),
new city('哈尔滨理工大学','哈尔滨理工大学'),
new city('东北农业大学','东北农业大学'),
new city('黑龙江八一农垦大学','黑龙江八一农垦大学'),
new city('哈尔滨医科大学','哈尔滨医科大学'),
new city('黑龙江中医药大学','黑龙江中医药大学'),
new city('哈尔滨师范大学','哈尔滨师范大学'),
new city('哈尔滨商业大学','哈尔滨商业大学'),
new city('大庆石油学院','大庆石油学院'),
new city('黑龙江科技学院','黑龙江科技学院'),
new city('黑龙江工程学院','黑龙江工程学院'),
new city('哈尔滨学院','哈尔滨学院'),
new city('牡丹江医学院','牡丹江医学院'),
new city('齐齐哈尔医学院','齐齐哈尔医学院'),
new city('牡丹江师范学院','牡丹江师范学院'),
new city('哈尔滨体育学院','哈尔滨体育学院'),
new city('黑龙江东方学院','黑龙江东方学院'),
new city('大庆高等专科学校','大庆高等专科学校'),
new city('黑龙江水利专科学校','黑龙江水利专科学校'),
new city('绥化师范专科学校','绥化师范专科学校'),
new city('齐齐哈尔高等师范专科学校','齐齐哈尔高等师范专科学校'),
new city('鹤岗师范高等专科学校','鹤岗师范高等专科学校'),
new city('哈尔滨金融高等专科学校','哈尔滨金融高等专科学校'),
new city('黑龙江农业职业技术学院','黑龙江农业职业技术学院'),
new city('黑龙江林业职业技术学院','黑龙江林业职业技术学院'),
new city('黑龙江农业工程职业学院','黑龙江农业工程职业学院'),
new city('大庆职业学院','大庆职业学院'),
new city('伊春职业学院','伊春职业学院'),
new city('黑龙江建筑职业技术学院','黑龙江建筑职业技术学院'),
new city('黑龙江农垦职业学院','黑龙江农垦职业学院'),
new city('齐齐哈尔职业学院','齐齐哈尔职业学院'),
new city('鸡西大学','鸡西大学'),
new city('黑龙江司法警官职业学院','黑龙江司法警官职业学院'),
new city('牡丹江大学','牡丹江大学'),
new city('哈尔滨电力职业技术学院','哈尔滨电力职业技术学院'),
new city('黑龙江农牧水产职业学院','黑龙江农牧水产职业学院'),
new city('黑龙江公安警官职业学院','黑龙江公安警官职业学院'),
new city('黑龙江农垦林业职业技术学院','黑龙江农垦林业职业技术学院'),
new city('黑龙江商业职业学院','黑龙江商业职业学院'),
new city('黑龙江农垦农业职业技术学院','黑龙江农垦农业职业技术学院'),
new city('哈尔滨职业技术学院','哈尔滨职业技术学院'),
new city('黑龙江艺术职业学院','黑龙江艺术职业学院'),
new city('大兴安岭职业学院','大兴安岭职业学院'),
new city('黑龙江农业经济职业学院','黑龙江农业经济职业学院'),
new city('黑龙江畜牧兽医职业学院','黑龙江畜牧兽医职业学院'),
new city('哈尔滨华夏计算机职业技术学院','哈尔滨华夏计算机职业技术学院'),
new city('哈尔滨铁道职业技术学院','哈尔滨铁道职业技术学院'),
new city('黑龙江工商职业技术学院','黑龙江工商职业技术学院')
    ),
    new Array(
new city('华北电力大学','华北电力大学'),
new city('河北大学','河北大学'),
new city('河北工业大学','河北工业大学'),
new city('燕山大学','燕山大学'),
new city('河北科技大学','河北科技大学'),
new city('河北农业大学','河北农业大学'),
new city('河北医科大学','河北医科大学'),
new city('河北师范大学','河北师范大学'),
new city('河北经贸大学','河北经贸大学'),
new city('中国人民武装警察部队学院','中国人民武装警察部队学院'),
new city('中央司法警官学院','中央司法警官学院'),
new city('华北科技学院','华北科技学院'),
new city('河北北方学院','河北北方学院'),
new city('河北理工学院','河北理工学院'),
new city('石家庄铁道学院','石家庄铁道学院'),
new city('河北工程学院','河北工程学院'),
new city('河北建筑工程学院','河北建筑工程学院'),
new city('石家庄经济学院','石家庄经济学院'),
new city('华北煤炭医学院','华北煤炭医学院'),
new city('承德医学院','承德医学院'),
new city('邢台学院','邢台学院'),
new city('唐山师范学院','唐山师范学院'),
new city('河北科技师范学院','河北科技师范学院'),
new city('廊坊师范学院','廊坊师范学院'),
new city('河北体育学院','河北体育学院'),
new city('唐山学院','唐山学院'),
new city('防灾技术高等专科学校','防灾技术高等专科学校'),
new city('承德石油高等专科学校','承德石油高等专科学校'),
new city('河北工程技术高等专科学校','河北工程技术高等专科学校'),
new city('华北航天工业学院','华北航天工业学院'),
new city('邢台医学高等专科学校','邢台医学高等专科学校'),
new city('邯郸师范专科学校','邯郸师范专科学校'),
new city('沧州师范专科学校','沧州师范专科学校'),
new city('衡水师范专科学校','衡水师范专科学校'),
new city('承德民族师范高等专科学校','承德民族师范高等专科学校'),
new city('石家庄师范专科学校','石家庄师范专科学校'),
new city('保定师范专科学校','保定师范专科学校'),
new city('保定金融高等专科学校','保定金融高等专科学校'),
new city('沧州职业技术学院','沧州职业技术学院'),
new city('河北能源职业技术学院','河北能源职业技术学院'),
new city('河北职业技术学院','河北职业技术学院'),
new city('河北工业职业技术学院','河北工业职业技术学院'),
new city('邯郸职业技术学院','邯郸职业技术学院'),
new city('邢台职业技术学院','邢台职业技术学院'),
new city('石家庄铁路工程职业技术学院','石家庄铁路工程职业技术学院'),
new city('保定职业技术学院','保定职业技术学院'),
new city('承德民族职业技术学院','承德民族职业技术学院'),
new city('石家庄职业技术学院','石家庄职业技术学院'),
new city('张家口职业技术学院','张家口职业技术学院'),
new city('唐山科技职业技术学院','唐山科技职业技术学院'),
new city('廊坊职业技术学院','廊坊职业技术学院'),
new city('河北远东职业技术学院','河北远东职业技术学院'),
new city('保定电力职业技术学院','保定电力职业技术学院'),
new city('河北机电职业技术学院','河北机电职业技术学院'),
new city('承德旅游职业学院','承德旅游职业学院'),
new city('河北省艺术职业学院','河北省艺术职业学院'),
new city('石家庄联合技术职业学院','石家庄联合技术职业学院'),
new city('河北公安警察职业学院','河北公安警察职业学院'),
new city('华油职业技术学院','华油职业技术学院'),
new city('石家庄工商职业学院','石家庄工商职业学院'),
new city('石家庄华安职业学院','石家庄华安职业学院'),
new city('保定虎振职业技术学院','保定虎振职业技术学院'),
new city('石家庄邮电职业技术学院','石家庄邮电职业技术学院'),
new city('石家庄外语翻译职业学院','石家庄外语翻译职业学院'),
new city('石家庄影视艺术职业学院','石家庄影视艺术职业学院'),
new city('石家庄法商职业学院','石家庄法商职业学院'),
new city('唐山职业技术学院','唐山职业技术学院'),
new city('邯郸中原外国语职业学院','邯郸中原外国语职业学院'),
new city('秦皇岛职业技术学院','秦皇岛职业技术学院'),
new city('衡水职业技术学院','衡水职业技术学院'),
new city('唐山工业职业技术学院','唐山工业职业技术学院'),
new city('河北石油职业技术学院','河北石油职业技术学院'),
new city('河北政法职业学院','河北政法职业学院'),
new city('河北建材职业技术学院','河北建材职业技术学院'),
new city('秦皇岛外国语职业学院','秦皇岛外国语职业学院'),
new city('河北交通职业技术学院','河北交通职业技术学院'),
new city('河北软件职业技术学院','河北软件职业技术学院'),
new city('河北化工医药职业技术学院','河北化工医药职业技术学院'),
new city('石家庄计算机职业学院','石家庄计算机职业学院'),
new city('石家庄信息工程职业学院','石家庄信息工程职业学院'),
new city('石家庄外经贸职业学院','石家庄外经贸职业学院'),
new city('石家庄东方美术职业学院','石家庄东方美术职业学院'),
new city('河北京都高尔夫职业学院','河北京都高尔夫职业学院')
    ),
    new Array(
new city('西安交通大学','西安交通大学'),
new city('长安大学','长安大学'),
new city('西安电子科技大学','西安电子科技大学'),
new city('西北农林科技大学','西北农林科技大学'),
new city('陕西师范大学','陕西师范大学'),
new city('西北工业大学','西北工业大学'),
new city('西北大学','西北大学'),
new city('延安大学','延安大学'),
new city('西安理工大学','西安理工大学'),
new city('西安建筑科技大学','西安建筑科技大学'),
new city('西安科技大学','西安科技大学'),
new city('西安石油大学','西安石油大学'),
new city('陕西科技大学','陕西科技大学'),
new city('西安工程科技学院','西安工程科技学院'),
new city('西安工业学院','西安工业学院'),
new city('西安邮电学院','西安邮电学院'),
new city('陕西中医学院','陕西中医学院'),
new city('榆林学院','榆林学院'),
new city('咸阳师范学院','咸阳师范学院'),
new city('渭南师范学院','渭南师范学院'),
new city('陕西理工学院','陕西理工学院'),
new city('宝鸡文理学院','宝鸡文理学院'),
new city('西安外国语学院','西安外国语学院'),
new city('西安财经学院','西安财经学院'),
new city('西北政法学院','西北政法学院'),
new city('西安体育学院','西安体育学院'),
new city('西安美术学院','西安美术学院'),
new city('西安音乐学院','西安音乐学院'),
new city('西安培华学院','西安培华学院'),
new city('西安文理学院','西安文理学院'),
new city('西安电力高等专科学校','西安电力高等专科学校'),
new city('西安航空技术高等专科学校','西安航空技术高等专科学校'),
new city('陕西医学高等专科学校','陕西医学高等专科学校'),
new city('安康师范专科学校','安康师范专科学校'),
new city('商洛师范专科学校','商洛师范专科学校'),
new city('西安科技商贸职业学院','西安科技商贸职业学院'),
new city('陕西铁路工程职业技术学院','陕西铁路工程职业技术学院'),
new city('宝鸡职业技术学院','宝鸡职业技术学院'),
new city('陕西航空职业技术学院','陕西航空职业技术学院'),
new city('陕西电子信息职业技术学院','陕西电子信息职业技术学院'),
new city('杨凌职业技术学院','杨凌职业技术学院'),
new city('陕西工业职业技术学院','陕西工业职业技术学院'),
new city('西安外事职业学院','西安外事职业学院'),
new city('西安欧亚职业学院','西安欧亚职业学院'),
new city('西京职业学院','西京职业学院'),
new city('西安翻译职业学院','西安翻译职业学院'),
new city('陕西财经职业技术学院','陕西财经职业技术学院'),
new city('西安三资职业学院','西安三资职业学院'),
new city('陕西国际商贸职业学院','陕西国际商贸职业学院'),
new city('陕西服装艺术职业学院','陕西服装艺术职业学院'),
new city('西安思源职业学院','西安思源职业学院'),
new city('西安高新科技职业学院','西安高新科技职业学院'),
new city('西安航空职业技术学院','西安航空职业技术学院'),
new city('陕西职业技术学院','陕西职业技术学院'),
new city('陕西交通职业技术学院','陕西交通职业技术学院'),
new city('陕西国防工业职业技术学院','陕西国防工业职业技术学院'),
new city('陕西能源职业技术学院','陕西能源职业技术学院')
    ),
    new Array(
new city('海南大学','海南大学'),
new city('华南热带农业大学','华南热带农业大学'),
new city('海南医学院','海南医学院'),
new city('海南师范学院','海南师范学院'),
new city('琼州大学','琼州大学'),
new city('海口经济职业技术学院','海口经济职业技术学院'),
new city('三亚卓达旅游职业学院','三亚卓达旅游职业学院'),
new city('海南职业技术学院','海南职业技术学院'),
new city('海南软件职业技术学院','海南软件职业技术学院')
    ),
    new Array(
new city('哈尔滨信息工程学院','哈尔滨信息工程学院'),
new city('河南大学','河南大学'),
new city('河南科技大学','河南科技大学'),
new city('河南农业大学','河南农业大学'),
new city('河南师范大学','河南师范大学'),
new city('焦作工学院','焦作工学院'),
new city('郑州工程学院','郑州工程学院'),
new city('华北水利水电学院','华北水利水电学院'),
new city('郑州轻工业学院','郑州轻工业学院'),
new city('平顶山工学院','平顶山工学院'),
new city('黄河科技学院','黄河科技学院'),
new city('郑州航空工业管理学院','郑州航空工业管理学院'),
new city('中原工学院','中原工学院'),
new city('河南中医学院','河南中医学院'),
new city('新乡医学院','新乡医学院'),
new city('信阳师范学院','信阳师范学院'),
new city('周口师范学院','周口师范学院'),
new city('河南职业技术师范学院','河南职业技术师范学院'),
new city('商丘师范学院','商丘师范学院'),
new city('南阳师范学院','南阳师范学院'),
new city('安阳师范学院','安阳师范学院'),
new city('洛阳师范学院','洛阳师范学院'),
new city('河南财经学院','河南财经学院'),
new city('许昌学院','许昌学院'),
new city('铁道警官高等专科学校','铁道警官高等专科学校'),
new city('河南纺织高等专科学校','河南纺织高等专科学校'),
new city('河南机电高等专科学校','河南机电高等专科学校'),
new city('郑州工业高等专科学校','郑州工业高等专科学校'),
new city('郑州电力高等专科学校','郑州电力高等专科学校'),
new city('洛阳工业高等专科学校','洛阳工业高等专科学校'),
new city('郑州牧业工程高等专科学校','郑州牧业工程高等专科学校'),
new city('信阳农业高等专科学校','信阳农业高等专科学校'),
new city('郑州澍青医学高等专科学校','郑州澍青医学高等专科学校'),
new city('平顶山师范高等专科学校','平顶山师范高等专科学校'),
new city('驻马店师范高等专科学校','驻马店师范高等专科学校'),
new city('新乡师范高等专科学校','新乡师范高等专科学校'),
new city('郑州师范高等专科学校','郑州师范高等专科学校'),
new city('焦作师范高等专科学校','焦作师范高等专科学校'),
new city('河南商业高等专科学校','河南商业高等专科学校'),
new city('河南财政税务高等专科学校','河南财政税务高等专科学校'),
new city('河南公安高等专科学校','河南公安高等专科学校'),
new city('民办中原职业技术学院','民办中原职业技术学院'),
new city('黄河水利职业技术学院','黄河水利职业技术学院'),
new city('河南职业技术学院','河南职业技术学院'),
new city('开封大学','开封大学'),
new city('漯河职业技术学院','漯河职业技术学院'),
new city('三门峡职业技术学院','三门峡职业技术学院'),
new city('焦作大学','焦作大学'),
new city('中州大学','中州大学'),
new city('南阳理工学院','南阳理工学院'),
new city('平原大学','平原大学'),
new city('安阳大学','安阳大学'),
new city('郑州铁路职业技术学院','郑州铁路职业技术学院'),
new city('洛阳大学','洛阳大学'),
new city('河南司法警官职业学院','河南司法警官职业学院'),
new city('郑州信息科技职业学院','郑州信息科技职业学院'),
new city('河南工业职业技术学院','河南工业职业技术学院'),
new city('郑州华信职业技术学院','郑州华信职业技术学院'),
new city('周口职业技术学院','周口职业技术学院'),
new city('濮阳职业技术学院','濮阳职业技术学院'),
new city('鹤壁职业技术学院','鹤壁职业技术学院'),
new city('平顶山工业职业技术学院','平顶山工业职业技术学院'),
new city('商丘职业技术学院','商丘职业技术学院'),
new city('郑州科技职业学院','郑州科技职业学院'),
new city('郑州经贸职业学院','郑州经贸职业学院'),
new city('郑州交通职业学院','郑州交通职业学院'),
new city('商丘科技职业学院','商丘科技职业学院'),
new city('河南检察职业学院','河南检察职业学院'),
new city('许昌职业技术学院','许昌职业技术学院')
    ),
    new Array(
new city('山西大学','山西大学'),
new city('太原理工大学','太原理工大学'),
new city('山西农业大学','山西农业大学'),
new city('山西医科大学','山西医科大学'),
new city('山西师范大学','山西师范大学'),
new city('山西财经大学','山西财经大学'),
new city('华北工学院','华北工学院'),
new city('太原重型机械学院','太原重型机械学院'),
new city('山西中医学院','山西中医学院'),
new city('长治医学院','长治医学院'),
new city('太原师范学院','太原师范学院'),
new city('忻州师范学院','忻州师范学院'),
new city('运城学院','运城学院'),
new city('雁北师范学院','雁北师范学院'),
new city('太原电力高等专科学校','太原电力高等专科学校'),
new city('大同医学专科学校','大同医学专科学校'),
new city('晋东南师范专科学校','晋东南师范专科学校'),
new city('吕梁高等专科学校','吕梁高等专科学校'),
new city('晋中师范高等专科学校','晋中师范高等专科学校'),
new city('山西财政税务专科学校','山西财政税务专科学校'),
new city('山西警官高等专科学校','山西警官高等专科学校'),
new city('太原大学','太原大学'),
new city('山西工业职业技术学院','山西工业职业技术学院'),
new city('大同职业技术学院','大同职业技术学院'),
new city('山西艺术职业学院','山西艺术职业学院'),
new city('山西生物应用职业技术学院','山西生物应用职业技术学院'),
new city('北岳职业技术学院','北岳职业技术学院'),
new city('山西兴华职业学院','山西兴华职业学院'),
new city('晋城职业技术学院','晋城职业技术学院'),
new city('山西工程职业技术学院','山西工程职业技术学院'),
new city('山西建筑职业技术学院','山西建筑职业技术学院'),
new city('阳泉职业技术学院','阳泉职业技术学院'),
new city('长治职业技术学院','长治职业技术学院'),
new city('山西水利职业技术学院','山西水利职业技术学院'),
new city('山西交通职业技术学院','山西交通职业技术学院'),
new city('山西戏剧职业学院','山西戏剧职业学院'),
new city('山西综合职业技术学院','山西综合职业技术学院'),
new city('山西金融职业技术学院','山西金融职业技术学院'),
new city('太原城市职业技术学院','太原城市职业技术学院'),
new city('山西煤炭职业技术学院','山西煤炭职业技术学院'),
new city('山西机电职业技术学院','山西机电职业技术学院'),
new city('山西财贸职业技术学院','山西财贸职业技术学院'),
new city('临汾职业技术学院','临汾职业技术学院'),
new city('山西林业职业技术学院','山西林业职业技术学院')
    ),
    new Array(
new city('内蒙古大学','内蒙古大学'),
new city('内蒙古科技大学','内蒙古科技大学'),
new city('内蒙古民族大学','内蒙古民族大学'),
new city('内蒙古工业大学','内蒙古工业大学'),
new city('内蒙古农业大学','内蒙古农业大学'),
new city('内蒙古师范大学','内蒙古师范大学'),
new city('内蒙古医学院','内蒙古医学院'),
new city('赤峰学院','赤峰学院'),
new city('呼伦贝尔学院','呼伦贝尔学院'),
new city('内蒙古财经学院','内蒙古财经学院'),
new city('集宁师范高等专科学校','集宁师范高等专科学校'),
new city('内蒙古民族高等专科学校','内蒙古民族高等专科学校'),
new city('民办内蒙古丰州学院','民办内蒙古丰州学院'),
new city('内蒙古建筑职业技术学院','内蒙古建筑职业技术学院'),
new city('河套大学','河套大学'),
new city('包头职业技术学院','包头职业技术学院'),
new city('内蒙古电子信息职业技术学院','内蒙古电子信息职业技术学院'),
new city('内蒙古商贸职业学院','内蒙古商贸职业学院'),
new city('兴安职业技术学院','兴安职业技术学院'),
new city('内蒙古财税职业学院','内蒙古财税职业学院'),
new city('呼和浩特职业学院','呼和浩特职业学院'),
new city('包头轻工职业技术学院','包头轻工职业技术学院'),
new city('锡林郭勒职业学院','锡林郭勒职业学院'),
new city('内蒙古化工职业学院','内蒙古化工职业学院'),
new city('内蒙古机电职业技术学院','内蒙古机电职业技术学院'),
new city('内蒙古体育职业学院','内蒙古体育职业学院'),
new city('内蒙古警察职业学院','内蒙古警察职业学院')
    ),
    new Array(
new city('广西大学','广西大学'),
new city('广西医科大学','广西医科大学'),
new city('广西师范大学','广西师范大学'),
new city('桂林电子工业学院','桂林电子工业学院'),
new city('桂林工学院','桂林工学院'),
new city('广西工学院','广西工学院'),
new city('广西中医学院','广西中医学院'),
new city('右江民族医学院','右江民族医学院'),
new city('桂林医学院','桂林医学院'),
new city('广西师范学院','广西师范学院'),
new city('玉林师范学院','玉林师范学院'),
new city('河池学院','河池学院'),
new city('广西艺术学院','广西艺术学院'),
new city('广西民族学院','广西民族学院'),
new city('桂林航天工业高等专科学校','桂林航天工业高等专科学校'),
new city('柳州医学高等专科学校','柳州医学高等专科学校'),
new city('右江民族师范高等专科学校','右江民族师范高等专科学校'),
new city('桂林师范高等专科学校','桂林师范高等专科学校'),
new city('钦州师范高等专科学校','钦州师范高等专科学校'),
new city('梧州师范高等专科学校','梧州师范高等专科学校'),
new city('柳州师范高等专科学校','柳州师范高等专科学校'),
new city('南宁师范高等专科学校','南宁师范高等专科学校'),
new city('广西商业高等专科学校','广西商业高等专科学校'),
new city('广西财政高等专科学校','广西财政高等专科学校'),
new city('桂林旅游高等专科学校','桂林旅游高等专科学校'),
new city('广西警官高等专科学校','广西警官高等专科学校'),
new city('广西体育高等专科学校','广西体育高等专科学校'),
new city('邕江大学','邕江大学'),
new city('南宁职业技术学院','南宁职业技术学院'),
new city('广西机电职业技术学院','广西机电职业技术学院'),
new city('广西职业技术学院','广西职业技术学院'),
new city('柳州职业技术学院','柳州职业技术学院'),
new city('广西农业职业技术学院','广西农业职业技术学院'),
new city('广西国际商务职业技术学院','广西国际商务职业技术学院'),
new city('广西交通职业技术学院','广西交通职业技术学院'),
new city('广西生态工程职业技术学院','广西生态工程职业技术学院'),
new city('广西建设职业技术学院','广西建设职业技术学院'),
new city('广西水利电力职业技术学院','广西水利电力职业技术学院')
    ),
    new Array(
new city('贵州大学','贵州大学'),
new city('贵州工业大学','贵州工业大学'),
new city('贵州师范大学','贵州师范大学'),
new city('贵阳医学院','贵阳医学院'),
new city('遵义医学院','遵义医学院'),
new city('贵阳中医学院','贵阳中医学院'),
new city('遵义师范学院','遵义师范学院'),
new city('黔南民族师范学院','黔南民族师范学院'),
new city('贵州财经学院','贵州财经学院'),
new city('贵州民族学院','贵州民族学院'),
new city('黔南民族医学高等专科学校','黔南民族医学高等专科学校'),
new city('铜仁师范高等专科学校','铜仁师范高等专科学校'),
new city('毕节师范高等专科学校','毕节师范高等专科学校'),
new city('六盘水师范高等专科学校','六盘水师范高等专科学校'),
new city('黔西南民族师范高等专科学校','黔西南民族师范高等专科学校'),
new city('黔东南民族师范高等专科学校','黔东南民族师范高等专科学校'),
new city('贵阳师范高等专科学校','贵阳师范高等专科学校'),
new city('安顺师范高等专科学校','安顺师范高等专科学校'),
new city('贵州商业高等专科学校','贵州商业高等专科学校'),
new city('贵州交通职业技术学院','贵州交通职业技术学院'),
new city('贵州理工职业技术学院','贵州理工职业技术学院'),
new city('贵州电子信息职业技术学院','贵州电子信息职业技术学院'),
new city('贵阳金筑大学','贵阳金筑大学'),
new city('贵州警官职业学院','贵州警官职业学院'),
new city('贵州航天职业技术学院','贵州航天职业技术学院'),
new city('铜仁职业技术学院','铜仁职业技术学院'),
new city('黔东南民族职业技术学院','黔东南民族职业技术学院'),
new city('安顺职业技术学院','安顺职业技术学院'),
new city('遵义职业技术学院','遵义职业技术学院'),
new city('贵州鸿源管理工程职业学院','贵州鸿源管理工程职业学院'),
new city('贵州科技工程职业学院','贵州科技工程职业学院'),
new city('贵州电力职业技术学院','贵州电力职业技术学院'),
new city('六盘水职业技术学院','六盘水职业技术学院'),
new city('黔南民族职业技术学院','黔南民族职业技术学院')
    ),
    new Array(
new city('宁夏大学','宁夏大学'),
new city('西北第二民族学院','西北第二民族学院'),
new city('宁夏医学院','宁夏医学院'),
new city('固原师范高等专科学校','固原师范高等专科学校'),
new city('宁夏石嘴山职业技术学院','宁夏石嘴山职业技术学院'),
new city('吴忠职业技术学院','吴忠职业技术学院'),
new city('宁夏建设职业技术学院','宁夏建设职业技术学院'),
new city('宁夏司法警官职业学院','宁夏司法警官职业学院'),
new city('宁夏财经职业技术学院','宁夏财经职业技术学院'),
new city('宁夏经贸职业技术学院','宁夏经贸职业技术学院'),
new city('宁夏职业技术学院','宁夏职业技术学院'),
new city('宁夏工业职业学院','宁夏工业职业学院')
    ),
    new Array(
new city('青海大学','青海大学'),
new city('青海师范大学','青海师范大学'),
new city('青海医学院','青海医学院'),
new city('青海民族学院','青海民族学院'),
new city('青海师范高等专科学校','青海师范高等专科学校'),
new city('青海民族师范高等专科学校','青海民族师范高等专科学校'),
new city('青海卫生职业技术学院','青海卫生职业技术学院'),
new city('青海财经职业学院','青海财经职业学院'),
new city('青海建筑职业技术学院','青海建筑职业技术学院'),
new city('青海交通职业技术学院','青海交通职业技术学院'),
new city('青海畜牧兽医职业技术学院','青海畜牧兽医职业技术学院'),
new city('青海警官职业学院','青海警官职业学院')
    ),
    new Array(
new city('新疆大学','新疆大学'),
new city('石河子大学','石河子大学'),
new city('新疆农业大学','新疆农业大学'),
new city('塔里木农垦大学','塔里木农垦大学'),
new city('新疆医科大学','新疆医科大学'),
new city('新疆师范大学','新疆师范大学'),
new city('昌吉学院','昌吉学院'),
new city('伊犁师范学院','伊犁师范学院'),
new city('喀什师范学院','喀什师范学院'),
new city('新疆财经学院','新疆财经学院'),
new city('新疆艺术学院','新疆艺术学院'),
new city('新疆工业高等专科学校','新疆工业高等专科学校'),
new city('新疆维吾尔医学专科学校','新疆维吾尔医学专科学校'),
new city('和田师范专科学校','和田师范专科学校'),
new city('新疆警官高等专科学校','新疆警官高等专科学校'),
new city('新疆兵团警官高等专科学校','新疆兵团警官高等专科学校'),
new city('克拉玛依职业技术学院','克拉玛依职业技术学院'),
new city('乌鲁木齐职业大学','乌鲁木齐职业大学'),
new city('新疆轻工职业技术学院','新疆轻工职业技术学院'),
new city('新疆农业职业技术学院','新疆农业职业技术学院'),
new city('新疆机电职业技术学院','新疆机电职业技术学院'),
new city('昌吉职业技术学院','昌吉职业技术学院'),
new city('伊犁职业技术学院','伊犁职业技术学院'),
new city('新疆建设职业技术学院','新疆建设职业技术学院'),
new city('巴音郭楞职业技术学院','巴音郭楞职业技术学院'),
new city('阿克苏职业技术学院','阿克苏职业技术学院')
    ),
    new Array(
new city('西藏大学','西藏大学'),
new city('西藏藏医学院','西藏藏医学院'),
new city('西藏民族学院','西藏民族学院'),
new city('西藏警官高等专科学校','西藏警官高等专科学校')
    ),
    new Array(
new city('兰州大学','兰州大学'),
new city('西北民族大学','西北民族大学'),
new city('兰州工业大学','兰州工业大学'),
new city('兰州交通大学','兰州交通大学'),
new city('甘肃农业大学','甘肃农业大学'),
new city('西北师范大学','西北师范大学'),
new city('河西学院','河西学院'),
new city('兰州医学院','兰州医学院'),
new city('甘肃中医学院','甘肃中医学院'),
new city('天水师范学院','天水师范学院'),
new city('陇东学院','陇东学院'),
new city('兰州商学院','兰州商学院'),
new city('甘肃政法学院','甘肃政法学院'),
new city('兰州工业高等专科学校','兰州工业高等专科学校'),
new city('张掖医学高等专科学校','张掖医学高等专科学校'),
new city('平凉医学高等专科学校','平凉医学高等专科学校'),
new city('陇南师范高等专科学校','陇南师范高等专科学校'),
new city('合作民族师范高等专科学校','合作民族师范高等专科学校'),
new city('兰州师范高等专科学校','兰州师范高等专科学校'),
new city('定西师范高等专科学校','定西师范高等专科学校'),
new city('甘肃联合大学','甘肃联合大学'),
new city('兰州石化职业技术学院','兰州石化职业技术学院'),
new city('甘肃建筑职业技术学院','甘肃建筑职业技术学院'),
new city('甘肃警察职业学院','甘肃警察职业学院'),
new city('甘肃交通职业技术学院','甘肃交通职业技术学院'),
new city('酒泉职业技术学院','酒泉职业技术学院'),
new city('兰州外语职业学院','兰州外语职业学院'),
new city('武威职业学院','武威职业学院'),
new city('兰州职业技术学院','兰州职业技术学院'),
new city('甘肃工业职业技术学院','甘肃工业职业技术学院'),
new city('甘肃林业职业技术学院','甘肃林业职业技术学院')
    ),
    new Array(
      new city('其他学校','other_school')
    )

  );
//*/
//*
function getPTypeOptions(selected){
  options = "";
  if(!selected) selected=0;
  for(i=0;i<_ptype.length;i++){
    options+="<option value="+i+(selected==i?" selected":"")+">"+_ptype[i]+"</option>";
  }
  return options;
}
function getPositionOptions(type,selected){
  if(!type) type=0;
  options = "";
  position = _positions[type];
  if(!position) return;
  for(i=0;i<position.length;i++){
    options+="<option value="+position[i].value+(selected==position[i].value?" selected":"")+">"+position[i].name+"</option>";
  }
  return options;
}
function handlePTypeChangeEvent(src,des,selected){
  if(!src.value) return;
  position = _positions[src.value];
  if(!position || !des) return;
  oOs = des.options;
  while(oOs.length>0){
    oOs.remove(0);
  }
  for(i=0;i<position.length;i++){
    var oOption = document.createElement("OPTION");
    oOption.text=position[i].name;
    oOption.value=position[i].value;
    if(selected) if(position[i].value==selected) oOption.selected=true;
    oOs.add(oOption);
  }
}
function getProvinceOptions(selected){
  options = "";
  if(!selected) selected=0;
  for(i=0;i<_province_cn.length;i++){
    options+="<option value="+i+(selected==i?" selected":"")+">"+_province_cn[i]+"</option>";
  }
  return options;
}
function getCityOptions(province,selected){
  if(!province) province=0;
  options = "";
  city = _city_cn[province];
  if(!city) return;
  for(i=0;i<city.length;i++){
    options+="<option value="+city[i].value+(selected==city[i].value?" selected":"")+">"+city[i].name+"</option>";
  }
  return options;
}
function handleProvinceChangeEvent(src,des,selected){
  if(!src.value) return;
  city = _city_cn[src.value];
  if(!city || !des) return;
  oOs = des.options;
  while(oOs.length>0){
    oOs.remove(0);
  }
  for(i=0;i<city.length;i++){
    var oOption = document.createElement("OPTION");
    oOption.text=city[i].name;
    oOption.value=city[i].value;
    if(selected) if(city[i].value==selected) oOption.selected=true;
    oOs.add(oOption);
  }
}