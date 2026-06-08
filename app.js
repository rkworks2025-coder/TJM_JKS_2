// ===== 座標→ハニカム変換済みステーションデータ =====
const STATIONS_YAMATO = [
  {station_name:"タイムズ高座渋谷第９",stationCd:"QO51",lat:35.4313488727813,lng:139.4662523460068,q:4,r:19},
  {station_name:"アーバン長窪",stationCd:"KD04",lat:35.47074039185167,lng:139.4643774706423,q:4,r:2},
  {station_name:"ウイングヤマシタ",stationCd:"ND31",lat:35.445418909300315,lng:139.46661731316436,q:5,r:12},
  {station_name:"上和田月極駐車場",stationCd:"JH88",lat:35.44893160223813,lng:139.46750202825376,q:5,r:11},
  {station_name:"桜ヶ丘パーキング",stationCd:"LI64",lat:35.451594015969796,lng:139.4661397112309,q:4,r:10},
  {station_name:"下和田駐車場",stationCd:"OM45",lat:35.42871841517343,lng:139.46777210858005,q:5,r:20},
  {station_name:"スクエアパーキング",stationCd:"MP83",lat:35.45147701349736,lng:139.4668073971487,q:5,r:10},
  {station_name:"セソンレオ",stationCd:"ED92",lat:35.46714334341307,lng:139.4592173432807,q:2,r:5},
  {station_name:"イオン大和ショッピングセンター第３",stationCd:"T564",lat:35.433057599420195,lng:139.46636274803552,q:4,r:18},
  {station_name:"タイムズ小田急大和第２",stationCd:"EA47",lat:35.46801658970733,lng:139.46228003183552,q:3,r:4},
  {station_name:"大和市中央１丁目",stationCd:"RN29",lat:35.466383055795,lng:139.46164166200052,q:4,r:4},
  {station_name:"タイムズ高座渋谷駅前第２",stationCd:"DP49",lat:35.432298630914836,lng:139.46597898615485,q:5,r:18},
  {station_name:"タイムズ相鉄大和第３",stationCd:"EE69",lat:35.46990071934844,lng:139.46584177516658,q:4,r:1},
  {station_name:"タイムズ大和駅前第２",stationCd:"Q847",lat:35.47016523146331,lng:139.46336979114437,q:3,r:3},
  {station_name:"タイムズ大和駅前第６",stationCd:"QV94",lat:35.470260492879405,lng:139.4637021929126,q:2,r:3},
  {station_name:"タイムズ大和駅前第５",stationCd:"EU60",lat:35.4692541305158,lng:139.46152933588692,q:2,r:4},
  {station_name:"タイムズ大和中央第４",stationCd:"BP57",lat:35.46797563275211,lng:139.45828147352535,q:1,r:5},
  {station_name:"タイムズ大和徳洲会病院",stationCd:"LW85",lat:35.469577425585406,lng:139.4590393080431,q:1,r:4},
  {station_name:"タイムズ大和東第３",stationCd:"CQ93",lat:35.47037096251012,lng:139.46596808077692,q:5,r:1},
  {station_name:"タイムズ大和深見西",stationCd:"Y302",lat:35.47513201971745,lng:139.4630810921618,q:3,r:1},
  {station_name:"タイムズ大和南第３",stationCd:"CY75",lat:35.46948925430478,lng:139.4637667520018,q:6,r:3},
  {station_name:"タイムズ大和南第５",stationCd:"JG24",lat:35.46929821625879,lng:139.46472306698848,q:4,r:3},
  {station_name:"東門駐車場",stationCd:"RD51",lat:35.45839207335834,lng:139.46284316630508,q:3,r:8},
  {station_name:"タイムズ大和柳橋",stationCd:"EU53",lat:35.45323470189422,lng:139.46448849926813,q:3,r:10},
  {station_name:"中央１号公園前",stationCd:"MK68",lat:35.46717130626873,lng:139.45978422892907,q:2,r:6},
  {station_name:"テーエス駐車場",stationCd:"NI87",lat:35.47409265514781,lng:139.46095706803175,q:2,r:2},
  {station_name:"パークセレノ",stationCd:"QB13",lat:35.43479029447219,lng:139.46544994421873,q:4,r:17},
  {station_name:"Ｂ・Ｈパーキング",stationCd:"LM62",lat:35.43456977084484,lng:139.46496276488588,q:3,r:18},
  {station_name:"深見台１丁目第２",stationCd:"MD66",lat:35.46684800150695,lng:139.46754301104426,q:5,r:3},
  {station_name:"深見西１丁目",stationCd:"KF80",lat:35.475297584987246,lng:139.46160664049125,q:2,r:1},
  {station_name:"山口第１駐車場",stationCd:"KO93",lat:35.472079500534484,lng:139.45622962409962,q:1,r:3},
  {station_name:"山口第５駐車場",stationCd:"NN55",lat:35.47264921860433,lng:139.45611782131053,q:0,r:3},
  {station_name:"大和市中央５丁目",stationCd:"KO75",lat:35.46551068175239,lng:139.45797986088672,q:1,r:6},
  {station_name:"大和市中央７丁目",stationCd:"LM47",lat:35.46552537769491,lng:139.4621299070554,q:3,r:5},
  {station_name:"大和市中央５丁目３",stationCd:"KW15",lat:35.46777382526466,lng:139.45879182644146,q:0,r:5},
  {station_name:"大和東公園",stationCd:"EI13",lat:35.47200602674974,lng:139.461281854186,q:3,r:2},
  {station_name:"大和深見台１丁目",stationCd:"KO59",lat:35.46339258591683,lng:139.46803271007187,q:5,r:5},
  {station_name:"大和南１丁目月極",stationCd:"LQ17",lat:35.46855268464282,lng:139.46732648684596,q:5,r:2},
  {station_name:"ラークヴィラ",stationCd:"OK09",lat:35.47675229320314,lng:139.46117359224556,q:3,r:0},
  {station_name:"リリーガーデン",stationCd:"OE49",lat:35.47463634527185,lng:139.46333883372486,q:4,r:0},
];

const STATIONS_EBINA = [
  {station_name:"綾瀬市大上５丁目",stationCd:"RN13",lat:35.46478422772997,lng:139.42955445323648,q:21,r:6},
  {station_name:"Ｎ－ｓｔａｇｅかしわ台",stationCd:"KF65",lat:35.46827935294714,lng:139.42065673894624,q:18,r:6},
  {station_name:"海老名駅西口（ＥＶ）",stationCd:"LL76",lat:35.456695348513115,lng:139.39081448533716,q:6,r:17},
  {station_name:"海老名駅前第３",stationCd:"LO41",lat:35.451182820638145,lng:139.39108588738708,q:6,r:19},
  {station_name:"海老名国分北２丁目",stationCd:"OE71",lat:35.45847454056957,lng:139.3966762410321,q:8,r:15},
  {station_name:"海老名市中央３丁目",stationCd:"JU23",lat:35.45096004843584,lng:139.39120169795584,q:7,r:19},
  {station_name:"タイムズ海老名中央公園地下（ＥＶ）",stationCd:"LF72",lat:35.4524839491018,lng:139.39499142178468,q:8,r:18},
  {station_name:"扇町見世ビル",stationCd:"OL13",lat:35.45620696478464,lng:139.38791039007683,q:5,r:18},
  {station_name:"小田急厚木第１駐車場（小田急）",stationCd:"KD03",lat:35.44283711415111,lng:139.37719532828444,q:0,r:26},
  {station_name:"厚木第２駐車場（小田急）",stationCd:"DN33",lat:35.44337034950935,lng:139.37979646286382,q:1,r:25},
  {station_name:"鍵渡駐車場",stationCd:"QF98",lat:35.454109512325346,lng:139.38627960696863,q:4,r:19},
  {station_name:"かしわ台駅前",stationCd:"LD06",lat:35.466088771352915,lng:139.41438094648115,q:15,r:8},
  {station_name:"クラウンハイツ海老名",stationCd:"MQ43",lat:35.44918028385621,lng:139.39512016785125,q:8,r:19},
  {station_name:"さがみ野駅南口（屋上）",stationCd:"LD05",lat:35.4710448790322,lng:139.42870142470005,q:21,r:3},
  {station_name:"シュリンプタワー（西）",stationCd:"QM94",lat:35.45390907296019,lng:139.38781608537784,q:5,r:19},
  {station_name:"シュリンプタワー（東）",stationCd:"QM93",lat:35.45403959635696,lng:139.38842537432035,q:6,r:18},
  {station_name:"セントガーデン海老名＿限定",stationCd:"IW70",lat:35.457922824634686,lng:139.39131143119027,q:6,r:16},
  {station_name:"相鉄柏ケ谷月極パーキング",stationCd:"NW62",lat:35.468624743627615,lng:139.41157063072043,q:14,r:8},
  {station_name:"イオン海老名ショッピングセンターＧ",stationCd:"CM59",lat:35.44835978997188,lng:139.39370642406848,q:7,r:20},
  {station_name:"タイムズ海老名泉",stationCd:"KO78",lat:35.45728777183729,lng:139.38982846535433,q:5,r:17},
  {station_name:"タイムズ海老名駅西口第２",stationCd:"BH96",lat:35.45795515668009,lng:139.3880228944212,q:4,r:17},
  {station_name:"タイムズ海老名駅西口第３",stationCd:"BL65",lat:35.4561507330579,lng:139.3869456210073,q:4,r:18},
  {station_name:"タイムズ海老名駅西口第４",stationCd:"HA87",lat:35.456987566218636,lng:139.38774145548084,q:5,r:16},
  {station_name:"タイムズ海老名河原口",stationCd:"Q467",lat:35.45036253104263,lng:139.3874582854696,q:5,r:20},
  {station_name:"タイムズ海老名中央第４",stationCd:"CE79",lat:35.45095969960914,lng:139.38906982204284,q:4,r:20},
  {station_name:"タイムズ海老名中央第６",stationCd:"CG62",lat:35.44754826678669,lng:139.39401617602772,q:8,r:20},
  {station_name:"タイムズ海老名中央公園地下",stationCd:"EG12",lat:35.4524839491018,lng:139.39499142178468,q:9,r:18},
  {station_name:"タイムズかしわ台第３",stationCd:"BO13",lat:35.46352883997876,lng:139.41226913329444,q:14,r:10},
  {station_name:"タイムズさがみ野相鉄ライフ第２",stationCd:"DB30",lat:35.47235201879705,lng:139.42967240990075,q:22,r:2},
  {station_name:"スターバックスコーヒー海老名中央店",stationCd:"Y376",lat:35.44849979681869,lng:139.39183263430542,q:6,r:20},
  {station_name:"タイムズ東柏ケ谷",stationCd:"BX51",lat:35.46742153818923,lng:139.42357291795614,q:19,r:6},
  {station_name:"タイムズビナフロント",stationCd:"EW66",lat:35.45186197477463,lng:139.39008640403088,q:7,r:18},
  {station_name:"東柏ケ谷５丁目６",stationCd:"OW93",lat:35.46890442128869,lng:139.43055243612955,q:22,r:4},
  {station_name:"アイリスコートさがみ野",stationCd:"RN50",lat:35.47067672475835,lng:139.43632461230655,q:24,r:2},
  {station_name:"ＰーＲＥＸさがみ野駐車場",stationCd:"LZ15",lat:35.47011542218444,lng:139.42870134660143,q:21,r:4},
  {station_name:"ファミール",stationCd:"QB12",lat:35.46256627648722,lng:139.3957412242991,q:8,r:13},
  {station_name:"マイシャトーさがみ野Ａ",stationCd:"QB11",lat:35.47402015808761,lng:139.4348918757585,q:24,r:0},
  {station_name:"マハロ壱番館",stationCd:"MP82",lat:35.45763382394336,lng:139.38489728425228,q:3,r:18},
  {station_name:"見上駐車場",stationCd:"NQ58",lat:35.46839777263622,lng:139.41492438468308,q:16,r:7},
  {station_name:"ＵＲえびな団地",stationCd:"NP43",lat:35.4441030360536,lng:139.3813137016946,q:2,r:24},
  {station_name:"ＵＲえびな団地３地区",stationCd:"RQ79",lat:35.44328942963265,lng:139.38127493981332,q:2,r:25},
  {station_name:"ロイヤルプラザ海老名駐車場",stationCd:"LQ02",lat:35.457868644140184,lng:139.39527552396248,q:9,r:15},
];

const STATIONS_NAKAHARA = [
  {station_name:"ガーラ・ヴィスタ元住吉（屋外）",stationCd:"OH00",lat:35.560453219153054,lng:139.66176544722998,q:12,r:8},
  {station_name:"ガーラ・ヴィスタ元住吉（建物下）",stationCd:"OY31",lat:35.560453219153054,lng:139.66176544722998,q:13,r:8},
  {station_name:"西加瀬月極駐車場",stationCd:"KI06",lat:35.56064661912213,lng:139.65868191778213,q:11,r:8},
  {station_name:"タイムズ西加瀬",stationCd:"Y771",lat:35.55830122847612,lng:139.6584545766777,q:11,r:9},
  {station_name:"タイムズフロール元住吉（ＥＶ）",stationCd:"JP24",lat:35.5624129188396,lng:139.65914861778217,q:10,r:8},
  {station_name:"タイムズ元住吉第９",stationCd:"CP85",lat:35.56612942733056,lng:139.6529630883344,q:9,r:7},
  {station_name:"タイムズ元住吉駅前第８",stationCd:"HT87",lat:35.564030727637714,lng:139.65435331778215,q:9,r:8},
  {station_name:"ホンダソーラービル",stationCd:"QX55",lat:35.563244727752746,lng:139.6487576999911,q:7,r:9},
  {station_name:"ウェルス元住吉",stationCd:"OO35",lat:35.56124827353539,lng:139.64949231778215,q:7,r:10},
  {station_name:"ドミール・トモ",stationCd:"RF57",lat:35.56121771001222,lng:139.64924652943884,q:6,r:10},
  {station_name:"木月天王森交差点",stationCd:"NF82",lat:35.56130660999678,lng:139.65046797054333,q:8,r:10},
  {station_name:"コンフォート住吉",stationCd:"RF65",lat:35.55985997374799,lng:139.6565022705433,q:10,r:9},
  {station_name:"タイムズ関東労災病院",stationCd:"KR66",lat:35.56781379985506,lng:139.6578242999911,q:11,r:5},
  {station_name:"ＵＲ木月住吉団地",stationCd:"CV83",lat:35.56496772750059,lng:139.66097167054332,q:12,r:6},
  {station_name:"ルシエル",stationCd:"EH12",lat:35.581791500379474,lng:139.63638854534832,q:2,r:4},
  {station_name:"タイムズ下小田中",stationCd:"R610",lat:35.58028881597967,lng:139.63743881778214,q:3,r:4},
  {station_name:"タイムズ下小田中（ＥＶ）",stationCd:"JP32",lat:35.58028881597967,lng:139.63743881778214,q:4,r:4},
  {station_name:"ラフォーレ武蔵中原",stationCd:"ED02",lat:35.579670425348446,lng:139.63659327054333,q:2,r:5},
  {station_name:"リブリ・アフィニティ",stationCd:"DW42",lat:35.57101281746388,lng:139.6362169999911,q:2,r:8},
  {station_name:"ネイバーズ武蔵中原",stationCd:"ES84",lat:35.57470082607598,lng:139.63673239999113,q:2,r:7},
  {station_name:"上小田中１丁目第３駐車場",stationCd:"JC77",lat:35.59328481389968,lng:139.62957724109555,q:0,r:0},
  {station_name:"タイムズ上小田中",stationCd:"T881",lat:35.585102824553076,lng:139.6356309999911,q:2,r:2},
  {station_name:"ラフィーネ武蔵中原",stationCd:"KZ71",lat:35.58394107005918,lng:139.6368476999911,q:2,r:3},
  {station_name:"ノーブル駐車場",stationCd:"IJ64",lat:35.58778887884996,lng:139.6315955883344,q:0,r:2},
  {station_name:"ルピナス壱番館",stationCd:"JS19",lat:35.58177443058196,lng:139.6351560592305,q:3,r:3},
  {station_name:"グランクラージュ",stationCd:"QH26",lat:35.58366131543998,lng:139.63393145888662,q:1,r:4},
  {station_name:"タイムズ又玄寺",stationCd:"RR47",lat:35.585153529310425,lng:139.63302501534992,q:1,r:3},
];


// 現在のエリア
let CURRENT_AREA = 'yamato';
let STATIONS = STATIONS_YAMATO.map(s => ({...s}));

// GASから取得したデータをstationCdをキーにして保持
let gasStationMap = new Map();

const GAS_URL = 'https://script.google.com/macros/s/AKfycbxAZpJaIANOuIS6d90E9Xt84JZauMmlRlnnBcfwoVJk2UkC9CTFQSRHtFPNSOkuTuwhOg/exec';
// AREA_KEYはCURRENT_AREAを参照
const AREA_KEY = () => CURRENT_AREA;

// ===== エリア切り替え =====
async function switchArea(areaKey) {
  if (CURRENT_AREA === areaKey) return;
  CURRENT_AREA = areaKey;

  // STATIONSを差し替え
  STATIONS.length = 0;
  const src = areaKey === 'nakahara' ? STATIONS_NAKAHARA : areaKey === 'ebina' ? STATIONS_EBINA : STATIONS_YAMATO;
  src.forEach(s => STATIONS.push({...s}));

  // bbox再計算
  recalcBbox();
  recalcGpsRef();
  recalcAxialMin();

  // ヘッダータブのactive切り替え
  document.querySelectorAll('.area-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.area === areaKey);
  });

  // グリッドと空白セルをリセット
  grid._emptyDrawn = false;
  gasStationMap = new Map();
  clearScanBadges();

  // データ再取得→描画→ミニマップ再初期化→パンズーム再初期化
  await fetchMapData();
}

const MAP_CACHE_KEY = 'jks2_map_cache';

function applyMapData(stations) {
  stations.forEach(st => gasStationMap.set(st.stationCd, st));
  STATIONS.forEach(s => {
    const gas = gasStationMap.get(s.stationCd);
    s.status    = gas ? gas.status    : 'unknown';
    s.total     = gas ? gas.total     : 0;
    s.standby   = gas ? gas.standby   : 0;
    s.checked   = gas ? gas.checked   : 0;
    s.hasUrgent = gas ? gas.hasUrgent : false;
  });
}

function renderAfterData(silent = false) {
  renderGrid();
  updateCounts();
  initMinimap();
  if (!silent) initPanZoom();
  requestAnimationFrame(() => {
    if (!window._gpsStarted) {
      window._gpsStarted = true;
      startGps();
    } else {
      try {
        const cached = localStorage.getItem(GPS_CACHE_KEY);
        if (cached) {
          const { lat, lng } = JSON.parse(cached);
          onGpsSuccess({ coords: { latitude: lat, longitude: lng } });
        }
      } catch(e) {}
    }
  });
}

async function fetchMapData(silent = false) {
  if (!silent) {
    try {
      const cacheRaw = localStorage.getItem(MAP_CACHE_KEY + '_' + AREA_KEY());
      if (cacheRaw) {
        const cache = JSON.parse(cacheRaw);
        applyMapData(cache.stations);
        renderAfterData(false);
        showLoading(false);
      } else {
        showLoading(true);
      }
    } catch(e) {
      showLoading(true);
    }
  }

  try {
    const res = await fetch(`${GAS_URL}?action=getMapData&area=${AREA_KEY()}`);
    const data = await res.json();
    if (data.result !== 'OK') throw new Error(data.error || 'GASエラー');
    try {
      localStorage.setItem(MAP_CACHE_KEY + '_' + AREA_KEY(), JSON.stringify({ stations: data.stations, ts: Date.now() }));
    } catch(e) {}
    gasStationMap = new Map();
    applyMapData(data.stations);
  } catch(err) {
    console.error('データ取得失敗:', err);
    STATIONS.forEach(s => { s.status = 'standby'; s.total = 0; });
  }

  renderAfterData(silent);
  showLoading(false);
}

function showLoading(show) {
  document.getElementById('loadingOverlay').style.display = show ? 'flex' : 'none';
}

// ===== ハニカム描画 =====
const SIZE = 40;
const W = Math.sqrt(3) * SIZE;
const H = 2 * SIZE;
const PADDING = 20;

function hexToPixel(q, r) {
  const x = W * (q + r/2);
  const y = H * (3/4) * r;
  return { x, y };
}

// グリッド全体のbbox（エリア切り替え時に再計算）
let minX, minY, maxX, maxY;
let gridW, gridH, offX, offY;

const grid = document.getElementById('hexGrid');

function recalcBbox() {
  minX = Infinity; minY = Infinity; maxX = -Infinity; maxY = -Infinity;
  STATIONS.forEach(s => {
    const {x, y} = hexToPixel(s.q, s.r);
    s.px = x; s.py = y;
    minX = Math.min(minX, x); minY = Math.min(minY, y);
    maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
  });
  gridW = maxX - minX + W + PADDING*2;
  gridH = maxY - minY + H + PADDING*2;
  offX = -minX + PADDING + W/2;
  offY = -minY + PADDING + H/2;
  grid.style.width = gridW + 'px';
  grid.style.height = gridH + 'px';
  grid.style.minWidth = '100%';
}

// 初回計算
recalcBbox();

function hexPath(cx, cy, size) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = Math.PI / 180 * (60 * i - 30);
    pts.push(`${cx + size * Math.cos(angle)},${cy + size * Math.sin(angle)}`);
  }
  return 'M' + pts.join('L') + 'Z';
}

function statusColor(status) {
  switch(status) {
    case 'standby':    return 'var(--standby)';
    case 'checked':    return 'var(--checked)';
    case '7days_rule': return 'var(--sevenday)';
    case 'stopped':    return 'var(--stopped-border)';
    default:           return 'var(--cell-empty-border)';
  }
}

function statusFill(status) {
  switch(status) {
    case 'standby':    return 'rgba(0,229,160,0.06)';
    case 'checked':    return 'rgba(255,77,141,0.06)';
    case '7days_rule': return 'rgba(61,155,255,0.06)';
    case 'stopped':    return 'rgba(68,80,96,0.1)';
    default:           return 'transparent';
  }
}

// ステーションwrapperの参照を保持
const stationWrappers = new Map();

// グリッド範囲（renderGrid・initMinimap・GPS共用）
let allQ, allR, qMin, qMax, rMin, rMax, occupiedKeys;

function updateGridRanges() {
  allQ = STATIONS.map(s => s.q);
  allR = STATIONS.map(s => s.r);
  qMin = Math.min(...allQ); qMax = Math.max(...allQ);
  rMin = Math.min(...allR); rMax = Math.max(...allR);
  occupiedKeys = new Set(STATIONS.map(s => `${s.q},${s.r}`));
}
updateGridRanges();

function renderGrid() {
  updateGridRanges();

  // 既存のステーションセルをクリア
  document.querySelectorAll('.hex-wrapper, .hex-label').forEach(el => el.remove());
  stationWrappers.clear();

  // 空白セル（初回のみ描画）
  if (!grid._emptyDrawn) {
    for (let r = rMin; r <= rMax; r++) {
      for (let q = qMin; q <= qMax; q++) {
        if (occupiedKeys.has(`${q},${r}`)) continue;
        const {x, y} = hexToPixel(q, r);
        const cx = x + offX;
        const cy = y + offY;
        if (cx < -W || cx > gridW + W || cy < -H || cy > gridH + H) continue;

        const svgEl = document.createElementNS('http://www.w3.org/2000/svg','svg');
        svgEl.setAttribute('width', W+4);
        svgEl.setAttribute('height', H+4);
        svgEl.style.cssText = `position:absolute;left:${cx-W/2-2}px;top:${cy-H/2-2}px;pointer-events:none;`;
        const path = document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d', hexPath(W/2+2, H/2+2, SIZE-1));
        path.setAttribute('fill', '#111d2a');
        path.setAttribute('stroke', '#1e3045');
        path.setAttribute('stroke-width', '0.8');
        svgEl.appendChild(path);
        grid.appendChild(svgEl);
      }
    }
    grid._emptyDrawn = true;
  }

  // ステーションセル
  STATIONS.forEach(s => {
    const cx = s.px + offX;
    const cy = s.py + offY;
    const color = statusColor(s.status);
    const fill  = statusFill(s.status);

    const wrapper = document.createElement('div');
    wrapper.className = `hex-wrapper hex-${s.status}`;
    wrapper.style.cssText = `position:absolute;left:${cx-W/2-2}px;top:${cy-H/2-2}px;width:${W+4}px;height:${H+4}px;`;

    const svgEl = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svgEl.setAttribute('width', W+4);
    svgEl.setAttribute('height', H+4);
    svgEl.classList.add('hex-svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d', hexPath(W/2+2, H/2+2, SIZE-1));
    path.setAttribute('fill', fill);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', s.status === 'standby' ? '1.5' : '1');
    svgEl.appendChild(path);
    wrapper.appendChild(svgEl);

    const label = document.createElement('div');
    label.className = 'hex-label';
    label.style.cssText = `left:${cx-W/2}px;top:${cy-H/2+2}px;width:${W}px;height:${H-4}px;`;
    label.innerHTML = `<div class="hex-name" style="color:#e8f4ff;">${shortName(s.station_name)}</div>`;
    grid.appendChild(label);

    if (s.status === 'checked' || s.status === 'unnecessary') {
      wrapper.style.cursor = 'default';
      wrapper.style.opacity = '0.6';
      wrapper.addEventListener('click', () => {});
    } else {
      wrapper.addEventListener('click', () => openDetail(s));
    }
    grid.appendChild(wrapper);
    stationWrappers.set(s.stationCd, wrapper);
  });
}

function updateCounts() {
  // standby/checked表示は削除済み
}

function shortName(name) {
  return name
    .replace('タイムズ','T ')
    .replace('駐車場','P')
    .replace('第','#');
}


let selfWrapper = null;   // 現在点滅中のセルwrapper
let selfSvgEl = null;     // 現在地専用SVG（空白セル上に乗せる用）
let watchId = null;

let LAT_REF = Math.max(...STATIONS.map(s => s.lat)) + 0.001;
let LNG_REF = Math.min(...STATIONS.map(s => s.lng)) - 0.001;
const LAT_M = 111320;
const LNG_M = 111320 * Math.cos(35.63 * Math.PI / 180);
const CELL_M = 150;

function recalcGpsRef() {
  LAT_REF = Math.max(...STATIONS.map(s => s.lat)) + 0.001;
  LNG_REF = Math.min(...STATIONS.map(s => s.lng)) - 0.001;
}

function axialRound(q, r) {
  const s = -q - r;
  let rq = Math.round(q), rr = Math.round(r), rs = Math.round(s);
  const dq = Math.abs(rq-q), dr = Math.abs(rr-r), ds = Math.abs(rs-s);
  if (dq > dr && dq > ds) rq = -rr - rs;
  else if (dr > ds) rr = -rq - rs;
  return [rq, rr];
}

function latLngToAxial(lat, lng) {
  // 緯度経度→メートル変換してからaxial座標に変換
  const xm = (lng - LNG_REF) * LNG_M;
  const ym = (LAT_REF - lat) * LAT_M;
  // pointy-top hex: size=CELL_M(メートル)
  const q = (2/3 * xm) / CELL_M;
  const r = (-1/3 * xm + Math.sqrt(3)/3 * ym) / CELL_M;
  return axialRound(q, r);
}

// STATIONSのaxial座標の最小値（オフセット基準）
let AXIAL_MIN_Q = Math.min(...STATIONS.map(s => {
  const [q] = latLngToAxial(s.lat, s.lng);
  return q;
}));
let AXIAL_MIN_R = Math.min(...STATIONS.map(s => {
  const [, r] = latLngToAxial(s.lat, s.lng);
  return r;
}));

function recalcAxialMin() {
  AXIAL_MIN_Q = Math.min(...STATIONS.map(s => {
    const [q] = latLngToAxial(s.lat, s.lng);
    return q;
  }));
  AXIAL_MIN_R = Math.min(...STATIONS.map(s => {
    const [, r] = latLngToAxial(s.lat, s.lng);
    return r;
  }));
}

function clearSelfCell() {
  if (selfWrapper) {
    selfWrapper.classList.remove('hex-self');
    selfWrapper = null;
  }
  if (selfSvgEl) {
    if (selfSvgEl._blink) clearInterval(selfSvgEl._blink);
    selfSvgEl.remove();
    selfSvgEl = null;
  }
}

function setSelfCell(q, r) {
  clearSelfCell();

  // q,rに対応するピクセル座標を計算
  const {x, y} = hexToPixel(q, r);
  const cx = x + offX;
  const cy = y + offY;

  // グリッド上に黄色の点滅SVGを直接生成（ステーション有無に関わらず）
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', W + 4);
  svg.setAttribute('height', H + 4);
  svg.style.cssText = `position:absolute;left:${cx-W/2-2}px;top:${cy-H/2-2}px;pointer-events:none;z-index:20;`;

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', hexPath(W/2+2, H/2+2, SIZE - 1));
  path.setAttribute('fill', 'rgba(255,224,77,0.15)');
  path.setAttribute('stroke', '#ffe04d');
  path.setAttribute('stroke-width', '2.5');
  svg.appendChild(path);
  grid.appendChild(svg);
  selfSvgEl = svg;

  // 点滅
  let visible = true;
  selfSvgEl._blink = setInterval(() => {
    visible = !visible;
    svg.style.opacity = visible ? '1' : '0.2';
  }, 600);

  // ミニマップ更新
  if (window._minimapRedraw) window._minimapRedraw(q, r);
}

const GPS_CACHE_KEY = 'jks2_gps_cache';

function onGpsSuccess(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  // localStorageにキャッシュ
  try { localStorage.setItem(GPS_CACHE_KEY, JSON.stringify({ lat, lng })); } catch(e) {}
  const [rawQ, rawR] = latLngToAxial(lat, lng);
  const q = rawQ - AXIAL_MIN_Q;
  const r = rawR - AXIAL_MIN_R;
  setSelfCell(q, r);
}

function onGpsError(err) {
  console.warn('GPS取得失敗:', err.message);
  // キャッシュがあれば使う
  try {
    const cached = localStorage.getItem(GPS_CACHE_KEY);
    if (cached) {
      const { lat, lng } = JSON.parse(cached);
      const [rawQ, rawR] = latLngToAxial(lat, lng);
      const q = rawQ - AXIAL_MIN_Q;
      const r = rawR - AXIAL_MIN_R;
      setSelfCell(q, r);
    }
  } catch(e) {}
}

function startGps() {
  if (!navigator.geolocation) return;
  // キャッシュがあれば即座に表示
  try {
    const cached = localStorage.getItem(GPS_CACHE_KEY);
    if (cached) {
      const { lat, lng } = JSON.parse(cached);
      onGpsSuccess({ coords: { latitude: lat, longitude: lng } });
    }
  } catch(e) {}
  // 1回だけ取得してキャッシュを更新（watchPositionは使わない）
  navigator.geolocation.getCurrentPosition(onGpsSuccess, onGpsError, {
    enableHighAccuracy: true, timeout: 10000
  });
}

// ===== 詳細パネル =====
let currentStation = null;

function openDetail(station) {
  currentStation = station;
  window._detailOpen = true;
  document.getElementById('detailStation').textContent = station.station_name;
  document.getElementById('detailCd').textContent = `ST: ${station.stationCd} ／ ${station.total || 0}台`;

  const container = document.getElementById('detailVehicles');
  container.innerHTML = '<div style="color:var(--text-dim);font-size:12px;padding:8px;text-align:center;">読み込み中...</div>';

  document.getElementById('detailPanel').classList.add('show');
  document.getElementById('overlay').classList.add('show');

  // GASからステーション詳細を取得
  fetch(`${GAS_URL}?action=getStationDetail&station=${encodeURIComponent(station.station_name)}&area=${AREA_KEY()}`)
    .then(r => r.json())
    .then(data => {
      if (data.result !== 'OK') throw new Error(data.error || 'GASエラー');
      renderVehicleCards(container, data.vehicles, station);
    })
    .catch(err => {
      container.innerHTML = `<div style="color:#ff4d4d;font-size:12px;padding:8px;">取得失敗: ${err.message}</div>`;
    });
}

function renderVehicleCards(container, vehicles, station) {
  container.innerHTML = '';

  if (!vehicles || vehicles.length === 0) {
    container.innerHTML = '<div style="color:var(--text-dim);font-size:12px;padding:8px;">車両データなし</div>';
    return;
  }

  vehicles.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vehicle-card';
    card.style.flexDirection = 'column';
    card.style.gap = '8px';

    // 上段: ステータスバー + 車両情報 + ボタン群
    const topRow = document.createElement('div');
    topRow.style.cssText = 'display:flex;align-items:center;gap:10px;width:100%;';
    topRow.innerHTML = `
      <div class="vehicle-status" style="background:${statusColor(v.status)};opacity:0.8;flex-shrink:0;"></div>
      <div class="vehicle-info" style="flex:1;min-width:0;">
        <div class="vehicle-plate">${v.plate}</div>
        <div class="vehicle-model">${v.model} ／ <span style="color:${statusColor(v.status)};font-size:12px;font-family:'Noto Sans JP',sans-serif;">${v.status}</span></div>
        ${v.lastChecked ? `<div style="font-size:11px;font-family:'Noto Sans JP',sans-serif;color:var(--text-dim);margin-top:2px;">前回: ${v.lastChecked}</div>` : ''}
      </div>
      <div class="vehicle-actions">
        <button class="btn-small btn-tire" onclick="goTireApp('${v.plate}','${station.station_name}','${v.model}')">点検</button>
      </div>
    `;
    card.appendChild(topRow);

    // 下段: 予約タイムライン
    if (v.timeline) {
      const tlRow = document.createElement('div');
      tlRow.style.cssText = 'width:100%;padding-top:6px;border-top:1px solid #1a2d40;';
      tlRow.appendChild(buildTimeline(v.timeline, v.getTime));
      card.appendChild(tlRow);
    }

    container.appendChild(card);
  });
}

function buildTimeline(timeline, getTime) {
  const timelineStr = timeline;
  if (!timelineStr) return document.createElement('div');

  // 予約表示アプリと同じロジック: getTimeを基準にそのまま表示
  let baseDate = new Date((getTime || '').replace(/-/g, '/'));
  if (isNaN(baseDate.getTime())) baseDate = new Date();

  const totalSlots = timelineStr.length; // 288 or 576
  const totalHours = totalSlots / 4;     // 72 or 144
  const timelineWidth = totalHours === 144 ? 3200 : 1600;

  // タイムラインバー（予約表示アプリと同じ）
  let slotsHtml = '';
  for (const ch of timelineStr) {
    const cls = ch === '○' ? 'tl-ok' : (ch === 's' ? 'tl-stopped' : 'tl-ng');
    slotsHtml += `<div class="tl-slot ${cls}"></div>`;
  }

  // ラベルとグリッドライン（予約表示アプリと同じ）
  let labelsHtml = '', gridsHtml = '';
  for (let h = 0; h < totalHours; h++) {
    const leftPos = (h / totalHours) * 100;
    const slotDate = new Date(baseDate.getTime() + h * 3600 * 1000);
    const currentHour = slotDate.getHours();
    if (currentHour % 2 === 0) {
      labelsHtml += `<div class="tl-label" style="left:${leftPos}%">${currentHour}</div>`;
      if (currentHour === 0) {
        const mm = slotDate.getMonth() + 1, dd = slotDate.getDate();
        labelsHtml += `<div class="tl-label tl-date" style="left:${leftPos}%;margin-left:6px;">${mm}/${dd}</div>`;
      }
    }
    gridsHtml += `<div class="tl-grid" style="left:${leftPos}%"></div>`;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'tl-scroll';
  wrapper.innerHTML = `
    <div class="tl-full" style="width:${timelineWidth}px">
      ${labelsHtml}
      <div class="tl-bar">${slotsHtml}</div>
      ${gridsHtml}
    </div>
  `;
  return wrapper;
}

const TIRE_APP_URL = 'https://rkworks2025-coder.github.io/TireCheck/';
const WORK_APP_URL = 'https://rkworks2025-coder.github.io/work/';
const JUNKAI_GAS_URL = 'https://script.google.com/macros/s/AKfycbyhvDaXPbZQWkhGDbt2XkUZhwe2-xprpC9U_6s3JuPeXoD2fxAGsVXePvZasId5I1zUyQ/exec';

// ===== 更新ボタン → yoyakuワークフローをトリガー =====
function triggerUpdate() {
  const btn = document.getElementById('updateBtn');
  btn.disabled = true;
  btn.textContent = '送信中...';

  const requestId = 'req-' + Date.now() + '-' + Math.random().toString(36).slice(-4);

  fetch(GAS_URL, {
    method: 'POST',
    body: JSON.stringify({
      action: 'update',
      area: AREA_KEY(),
      requestId
    }),
    keepalive: true
  })
  .then(r => r.json())
  .then(data => {
    if (data.result === 'OK') {
      btn.textContent = '更新中...';
      // 5分後にデータを再取得してグリッドを更新
      setTimeout(() => {
        btn.textContent = '再読込中';
        fetchMapData().then(() => {
          btn.disabled = false;
          btn.textContent = '更新';
        });
      }, 5 * 60 * 1000);
    } else {
      throw new Error(data.error || '更新失敗');
    }
  })
  .catch(err => {
    console.error('更新エラー:', err);
    btn.disabled = false;
    btn.textContent = '更新';
    alert('更新リクエストに失敗しました。再度お試しください。');
  });
}
// ===== スキャン機能 =====
let scanWrappers = [];

function clearScanBadges() {
  scanWrappers.forEach(({wrapper, blinkId}) => {
    wrapper.classList.remove('hex-scan-blink');
    const badge = wrapper.querySelector('.scan-badge');
    if (badge) badge.remove();
    if (blinkId) clearInterval(blinkId);
    const svgEl = wrapper.querySelector('svg');
    if (svgEl) svgEl.style.opacity = '1';
  });
  scanWrappers = [];
}

function applyScanBadges(items) {
  clearScanBadges();

  // 同一ステーションが複数台返ってくる場合があるのでユニーク化
  const uniqueStations = [];
  const seen = new Set();
  for (const item of items) {
    if (!seen.has(item.station)) {
      seen.add(item.station);
      uniqueStations.push(item);
    }
    if (uniqueStations.length >= 5) break;
  }

  uniqueStations.forEach((item, idx) => {
    const s = STATIONS.find(st => st.station_name === item.station);
    if (!s) return;
    const wrapper = stationWrappers.get(s.stationCd);
    if (!wrapper) return;

    // バッジ（赤丸に白数字）
    const badge = document.createElement('div');
    badge.className = 'scan-badge';
    badge.textContent = String(idx + 1);
    wrapper.appendChild(badge);

    // 枠の点滅
    const svgEl = wrapper.querySelector('svg');
    let blinkOn = true;
    const blinkId = setInterval(() => {
      blinkOn = !blinkOn;
      if (svgEl) svgEl.style.opacity = blinkOn ? '1' : '0.25';
    }, 500);

    scanWrappers.push({ wrapper, blinkId });
  });
}

async function triggerScan() {
  const btn = document.getElementById('scanBtn');
  if (!navigator.geolocation) {
    alert('GPS非対応のブラウザです');
    return;
  }

  btn.disabled = true;
  btn.classList.add('scanning');
  btn.textContent = '取得中...';

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    btn.textContent = 'スキャン中...';
    try {
      const res = await fetch(`${GAS_URL}?action=scan&lat=${lat}&lng=${lng}&area=${AREA_KEY()}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      applyScanBadges(data.items || []);
    } catch(err) {
      console.error('スキャンエラー:', err);
      alert('スキャン失敗: ' + err.message);
    } finally {
      btn.disabled = false;
      btn.classList.remove('scanning');
      btn.textContent = 'スキャン';
    }
  }, (err) => {
    console.warn('GPS取得失敗:', err.message);
    alert('現在地を取得できませんでした');
    btn.disabled = false;
    btn.classList.remove('scanning');
    btn.textContent = 'スキャン';
  }, { enableHighAccuracy: true, timeout: 10000 });
}

function showToast(msg, duration = 4000) {
  let toast = document.getElementById('jks2-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'jks2-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  if (toast._timer) clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  // タップで早期に閉じる
  toast.onclick = () => {
    clearTimeout(toast._timer);
    toast.classList.remove('show');
  };
}


function goTireApp(plate, stationName, model) {
  const JUNKAI_AREA_URL = `https://rkworks2025-coder.github.io/TJM_patrol/area.html?city=${CURRENT_AREA}`;

  // 巡回アプリ側に「この車両の点検ボタンを自動クリックして」という指示をlocalStorageで渡す
  try {
    localStorage.setItem('junkai:auto_tire_plate',   plate);
    localStorage.setItem('junkai:auto_tire_station', stationName);
    localStorage.setItem('junkai:auto_tire_model',   model);
  } catch(e) { console.error(e); }

  window.open(JUNKAI_AREA_URL, '_blank');
}

// ===== TMAボタン → 作業管理アプリへ遷移 =====
function goTmaAction(plate, stationName, model, btnEl) {
  if (btnEl) { btnEl.disabled = true; btnEl.textContent = '遷移中'; }

  const requestId = 'req-' + Date.now() + '-' + Math.random().toString(36).slice(-4);
  const params = new URLSearchParams({
    station:    stationName,
    model:      model,
    plate_full: plate,
    tma_plate:  plate,
    tma_req_id: requestId
  });

  // タイヤ点検アプリがプリロードした splash_img があれば引き継ぐ
  const preloadedImg = localStorage.getItem('junkai:preloaded_splash_url');
  if (preloadedImg) {
    params.set('splash_img', preloadedImg);
    localStorage.removeItem('junkai:preloaded_splash_url');
  }

  // GAS通信は作業管理アプリ側で行う（ここでは遷移のみ）
  location.href = `${WORK_APP_URL}?${params.toString()}`;
}

// ===== チェックボタン =====
function doCheck(plate, stationName, checked, btnEl) {
  // モーダル確認
  showCheckModal(plate, checked, () => {
    _executeCheck(plate, stationName, checked, btnEl);
  });
}

function _executeCheck(plate, stationName, checked, btnEl) {
  if (btnEl) { btnEl.disabled = true; }

  // 巡回アプリと同じsyncInspectionAll形式でPOST
  const payload = [{
    plate,
    station: stationName,
    checked,
    status: checked ? 'checked' : 'standby'
  }];

  fetch(JUNKAI_GAS_URL, {
    method: 'POST',
    body: JSON.stringify({ action: 'syncInspection', data: payload }),
    keepalive: true
  })
  .then(r => r.json())
  .then(() => {
    // UIを即座に反映
    const s = STATIONS.find(st => st.station_name === stationName);
    if (s) {
      if (checked) {
        s.standby = Math.max(0, (s.standby || 1) - 1);
        s.checked = (s.checked || 0) + 1;
        if (s.standby === 0) s.status = 'checked';
      } else {
        s.standby = (s.standby || 0) + 1;
        s.checked = Math.max(0, (s.checked || 1) - 1);
        if (s.standby > 0) s.status = 'standby';
      }
      renderGrid();
      updateCounts();
    }
    closeDetail();
  })
  .catch(() => {
    if (btnEl) { btnEl.disabled = false; }
    alert('送信失敗。再度お試しください。');
  });
}

// チェック確認モーダル
function showCheckModal(plate, checked, onOk) {
  const msg = checked ? `【${plate}】\nチェックしますか？` : `【${plate}】\nチェックを外しますか？`;
  if (confirm(msg)) onOk();
}

// ===== pageshow: 戻り時の自動アクション（巡回アプリのhandleReturnActionsと同等） =====
window.addEventListener('pageshow', (e) => {
  if (!e.persisted) return;

  // 1. 作業管理アプリからの戻り → 該当車両を自動チェック
  const compPlate = localStorage.getItem('junkai:completed_plate');
  if (compPlate) {
    localStorage.removeItem('junkai:completed_plate');
    // JKS-IIでは詳細パネルが開いたままの場合があるため、
    // 該当ステーションを再取得してチェック処理
    const station = STATIONS.find(s =>
      s.station_name === currentStation?.station_name
    );
    if (station && currentStation) {
      _executeCheck(compPlate, currentStation.station_name, true, null);
    }
  }

  // 2. タイヤ点検アプリからの戻り → TMAボタンを自動発火
  const tireCompPlate = localStorage.getItem('junkai:tire_completed_plate');
  if (!tireCompPlate) return;

  const workMode = localStorage.getItem('junkai:work_mode') || 'single';
  if (workMode === 'continuous') {
    localStorage.removeItem('junkai:tire_completed_plate');
    return;
  }

  // 詳細パネルが開いていれば該当車両のTMAボタンを自動クリック
  // 最大3秒（100ms × 30回）監視
  let retryCount = 0;
  const maxRetries = 30;
  const monitorInterval = setInterval(() => {
    // 車両カード内のTMAボタンを探す
    const tmaBtns = document.querySelectorAll('.tma-btn-real');
    let fired = false;
    tmaBtns.forEach(btn => {
      if (btn.dataset.plate === tireCompPlate && !btn.disabled) {
        clearInterval(monitorInterval);
        localStorage.removeItem('junkai:tire_completed_plate');
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => btn.click(), 400);
        fired = true;
      }
    });
    if (fired) return;

    retryCount++;
    if (retryCount >= maxRetries) {
      clearInterval(monitorInterval);
      localStorage.removeItem('junkai:tire_completed_plate');
    }
  }, 100);
});

// ===== visibilitychange: JKS-IIがフォアグラウンドに戻った時 =====
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;

  // トーストを閉じる
  const toast = document.getElementById('jks2-toast');
  if (toast) {
    if (toast._timer) clearTimeout(toast._timer);
    toast.classList.remove('show');
  }

  // GPS再取得（最新位置でキャッシュ更新・黄色グリッド移動）
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGpsSuccess, onGpsError, {
      enableHighAccuracy: true, timeout: 10000
    });
  }

  // 詳細パネルが開いていれば該当ステーションのデータを再取得
  if (window._detailOpen && currentStation) {
    const container = document.getElementById('detailVehicles');
    fetch(`${GAS_URL}?action=getStationDetail&station=${encodeURIComponent(currentStation.station_name)}&area=${AREA_KEY()}`)
      .then(r => r.json())
      .then(data => {
        if (data.result !== 'OK') return;
        if (data.vehicles.length === 0) {
          // 全台完了 → パネルを閉じてグリッドを更新
          closeDetail();
          fetchMapData(true);
        } else {
          // 残り台数あり → パネルを再描画してグリッドも更新
          renderVehicleCards(container, data.vehicles, currentStation);
          fetchMapData(true);
        }
      })
      .catch(() => {});
  } else {
    // サイレント更新（loadingなし）
    fetchMapData(true);
  }
});

function closeDetail() {
  document.getElementById('detailPanel').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  window._detailOpen = false;
}

function openNav() {
  if (!currentStation) return;
  const url = `https://www.google.com/maps/dir/?api=1&destination=${currentStation.lat},${currentStation.lng}&travelmode=driving`;
  window.open(url, '_blank');
}

// オーバーレイタッチでcloseDetail
document.getElementById('overlay').addEventListener('touchstart', (e) => {
  e.preventDefault();
  closeDetail();
}, { passive: false });

// ===== ミニマップ =====
function initMinimap() {
  const MINI_W = 120, MINI_H = 120;
  const canvas = document.getElementById('minimapCanvas');
  canvas.width = MINI_W;
  canvas.height = MINI_H;
  const ctx = canvas.getContext('2d');

  // グリッド全体 → ミニマップのスケール
  const scaleX = MINI_W / gridW;
  const scaleY = MINI_H / gridH;
  const scale = Math.min(scaleX, scaleY) * 0.95;
  const padX = (MINI_W - gridW * scale) / 2;
  const padY = (MINI_H - gridH * scale) / 2;

  function drawMinimap() {
    ctx.clearRect(0, 0, MINI_W, MINI_H);

    // 空白セル（薄いグレー点）
    for (let r = rMin; r <= rMax; r++) {
      for (let q = qMin; q <= qMax; q++) {
        if (occupiedKeys.has(`${q},${r}`)) continue;
        const {x, y} = hexToPixel(q, r);
        const mx = (x + offX) * scale + padX;
        const my = (y + offY) * scale + padY;
        ctx.beginPath();
        ctx.arc(mx, my, 1.5, 0, Math.PI*2);
        ctx.fillStyle = '#1e3045';
        ctx.fill();
      }
    }

    // ステーションセル（ステータス色の点）
    STATIONS.forEach(s => {
      const mx = (s.px + offX) * scale + padX;
      const my = (s.py + offY) * scale + padY;
      const r = Math.max(2.5, SIZE * scale * 0.6);
      ctx.beginPath();
      ctx.arc(mx, my, r, 0, Math.PI*2);
      const colors = {
        standby: '#00e5a0',
        checked: '#ff4d8d',
        '7days_rule': '#3d9bff',
        stopped: '#2a3545',
      };
      ctx.fillStyle = colors[s.status] || '#2a3545';
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  drawMinimap();

  let _selfQ = null, _selfR = null;

  window._minimapRedraw = (q, r) => {
    _selfQ = q; _selfR = r;
    drawMinimap();
    const {x, y} = hexToPixel(q, r);
    const mx = (x + offX) * scale + padX;
    const my = (y + offY) * scale + padY;
    ctx.beginPath();
    ctx.arc(mx, my, 3.5, 0, Math.PI*2);
    ctx.fillStyle = '#ffe04d';
    ctx.globalAlpha = 1;
    ctx.fill();
  };

  // ビューポート枠の更新（transformベース）
  const viewport = document.getElementById('minimapViewport');

  window._updateMinimapViewport = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 52;
    // 現在のtransform状態から表示領域を計算
    const visLeft   = (-panX / curScale) * scale + padX;
    const visTop    = (-panY / curScale) * scale + padY;
    const visW      = (vw / curScale) * scale;
    const visH      = (vh / curScale) * scale;
    viewport.style.left   = Math.max(0, visLeft) + 'px';
    viewport.style.top    = Math.max(0, visTop)  + 'px';
    viewport.style.width  = Math.min(visW, MINI_W) + 'px';
    viewport.style.height = Math.min(visH, MINI_H) + 'px';
  };

  window._updateMinimapViewport = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight - 52;
    const visLeft   = (-panX / curScale) * scale + padX;
    const visTop    = (-panY / curScale) * scale + padY;
    const visW      = (vw / curScale) * scale;
    const visH      = (vh / curScale) * scale;
    viewport.style.left   = Math.max(0, visLeft) + 'px';
    viewport.style.top    = Math.max(0, visTop)  + 'px';
    viewport.style.width  = Math.min(visW, MINI_W) + 'px';
    viewport.style.height = Math.min(visH, MINI_H) + 'px';
  };

  // resizeリスナーは一度だけ登録
  if (!window._minimapResizeAdded) {
    window.addEventListener('resize', () => { if (window._updateMinimapViewport) window._updateMinimapViewport(); });
    window._minimapResizeAdded = true;
  }

  // ミニマップのtouchstart/clickはoldListenerを除去して再登録
  const minimap = document.getElementById('minimap');
  if (minimap._clickHandler) minimap.removeEventListener('click', minimap._clickHandler);

  // ドラッグ移動（タッチ）
  if (!minimap._dragInited) {
    minimap._dragInited = true;
    let dragStartX, dragStartY, origLeft, origTop, isDragging = false;

    minimap.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      dragStartX = touch.clientX;
      dragStartY = touch.clientY;
      const rect = minimap.getBoundingClientRect();
      origLeft = rect.left;
      origTop  = rect.top;
      isDragging = false;
    }, { passive: true });

    minimap.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - dragStartX;
      const dy = touch.clientY - dragStartY;
      if (!isDragging && Math.abs(dx) + Math.abs(dy) > 6) isDragging = true;
      if (!isDragging) return;
      e.stopPropagation();
      minimap.classList.add('dragging');
      const vw = window.innerWidth, vh = window.innerHeight;
      const newLeft = Math.max(0, Math.min(vw - 120, origLeft + dx));
      const newTop  = Math.max(52, Math.min(vh - 120, origTop  + dy));
      minimap.style.right  = 'auto';
      minimap.style.bottom = 'auto';
      minimap.style.left   = newLeft + 'px';
      minimap.style.top    = newTop  + 'px';
    }, { passive: true });

    minimap.addEventListener('touchend', () => {
      minimap.classList.remove('dragging');
      // ドラッグ中だった場合はclickを発火させない
      minimap._wasDragged = isDragging;
      isDragging = false;
    }, { passive: true });
  }

  // クリックでグリッドジャンプ（ドラッグ直後は無視）
  minimap._clickHandler = (e) => {
    if (minimap._wasDragged) { minimap._wasDragged = false; return; }
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const gridX = (mx - padX) / scale;
    const gridY = (my - padY) / scale;
    panX = -(gridX * curScale) + window.innerWidth  / 2;
    panY = -(gridY * curScale) + (window.innerHeight - 52) / 2;
    applyTransform();
  };
  minimap.addEventListener('click', minimap._clickHandler);
}


// ===== ピンチズーム・パン =====
const mainArea    = document.getElementById('mainArea');
const gridTransform = document.getElementById('gridTransform');

let curScale = 1;
let panX = 0, panY = 0;
let isPinching = false;
let lastDist = 0;
let lastMidX = 0, lastMidY = 0;
let isDragging = false;
let dragStartX = 0, dragStartY = 0;
let dragPanX = 0, dragPanY = 0;

function applyTransform() {
  gridTransform.style.transform = `translate(${panX}px,${panY}px) scale(${curScale})`;
  if (window._updateMinimapViewport) window._updateMinimapViewport();
}

function clampPan() {
  const vw = window.innerWidth;
  const vh = window.innerHeight - 52;
  const scaledW = gridW * curScale;
  const scaledH = gridH * curScale;
  // グリッドが画面より小さい場合は中央揃え、大きい場合ははみ出し防止
  if (scaledW <= vw) {
    panX = (vw - scaledW) / 2;
  } else {
    panX = Math.min(0, Math.max(vw - scaledW, panX));
  }
  if (scaledH <= vh) {
    panY = (vh - scaledH) / 2;
  } else {
    panY = Math.min(0, Math.max(vh - scaledH, panY));
  }
}

function initPanZoom() {
  const vw = window.innerWidth;
  const vh = window.innerHeight - 52;
  const scaleX = vw / gridW;
  const scaleY = vh / gridH;
  curScale = Math.min(scaleX, scaleY) * 0.92;

  // 初期フォーカス: エリアに応じた中心ステーション
  const focusCd = CURRENT_AREA === 'nakahara' ? 'T881' : CURRENT_AREA === 'ebina' ? 'KO78' : 'EE69'; // 府中町第３ or 聖蹟桜ヶ丘駅前交差点
  const target = STATIONS.find(s => s.stationCd === focusCd) || STATIONS[0];
  if (target) {
    panX = vw / 2 - (target.px + offX) * curScale;
    panY = vh / 2 - (target.py + offY) * curScale;
  }
  clampPan();
  applyTransform();
}

// タッチイベント
mainArea.addEventListener('touchstart', (e) => {
  if (window._detailOpen) {
    // タッチ位置が詳細パネルの外かどうか判定
    const panel = document.getElementById('detailPanel');
    const panelRect = panel.getBoundingClientRect();
    const touch = e.touches[0];
    const isOutsidePanel = touch.clientY < panelRect.top;
    if (isOutsidePanel) {
      closeDetail();
    }
    return;
  }
  if (e.touches.length === 2) {
    isPinching = true;
    isDragging = false;
    const dx = e.touches[1].clientX - e.touches[0].clientX;
    const dy = e.touches[1].clientY - e.touches[0].clientY;
    lastDist = Math.hypot(dx, dy);
    lastMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    lastMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - 52;
  } else if (e.touches.length === 1) {
    isDragging = true;
    isPinching = false;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    dragPanX = panX;
    dragPanY = panY;
  }
}, { passive: true });

mainArea.addEventListener('touchmove', (e) => {
  if (window._detailOpen) return;
  e.preventDefault();
  if (isPinching && e.touches.length === 2) {
    const dx = e.touches[1].clientX - e.touches[0].clientX;
    const dy = e.touches[1].clientY - e.touches[0].clientY;
    const dist = Math.hypot(dx, dy);
    const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - 52;

    const zoomFactor = dist / lastDist;
    const newScale = Math.min(3, Math.max(0.3, curScale * zoomFactor));

    // ズームの中心点を維持
    panX = midX - (midX - panX) * (newScale / curScale);
    panY = midY - (midY - panY) * (newScale / curScale);
    curScale = newScale;

    // パン移動
    panX += midX - lastMidX;
    panY += midY - lastMidY;

    lastDist = dist;
    lastMidX = midX;
    lastMidY = midY;

    clampPan();
    applyTransform();
  } else if (isDragging && e.touches.length === 1) {
    panX = dragPanX + (e.touches[0].clientX - dragStartX);
    panY = dragPanY + (e.touches[0].clientY - dragStartY);
    clampPan();
    applyTransform();
  }
}, { passive: false });

mainArea.addEventListener('touchend', (e) => {
  if (e.touches.length < 2) isPinching = false;
  if (e.touches.length === 0) isDragging = false;
}, { passive: true });

// マウスイベント（PC用）
mainArea.addEventListener('mousedown', (e) => {
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragPanX = panX;
  dragPanY = panY;
  mainArea.style.cursor = 'grabbing';
});
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  panX = dragPanX + (e.clientX - dragStartX);
  panY = dragPanY + (e.clientY - dragStartY);
  clampPan();
  applyTransform();
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  mainArea.style.cursor = '';
});
mainArea.addEventListener('wheel', (e) => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.1 : 0.9;
  const newScale = Math.min(3, Math.max(0.3, curScale * factor));
  const mx = e.clientX;
  const my = e.clientY - 52;
  panX = mx - (mx - panX) * (newScale / curScale);
  panY = my - (my - panY) * (newScale / curScale);
  curScale = newScale;
  clampPan();
  applyTransform();
}, { passive: false });

// ===== 起動 =====
window.addEventListener('load', () => {
  fetchMapData();
});
