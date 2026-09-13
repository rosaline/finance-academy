const desks = [
  { id: "fx-foundations", code: "AB", title: "FX Foundations", titleZh: "外汇共同基础", description: "Shared language and ideas used by both FX Cash and FX Options.", descriptionZh: "先掌握外汇现货与外汇期权共同使用的语言和概念。", exampleZh: "先学会看懂“1 欧元换多少美元”，再学习立即换钱或购买未来选择权。", lessons: 1, accent: "#2f8067" },
  { id: "fx-cash", code: "FX", title: "FX Cash", titleZh: "外汇现货", description: "Spot, value dates, market structure, forwards, swaps, macro, and settlement risk.", descriptionZh: "学习即期、交割日、市场结构、远期、掉期、宏观因素与结算风险。", exampleZh: "像去机场用人民币换美元，只是银行交换的金额更大、日期与风险管理更严格。", lessons: 6, accent: "#16745a" },
  { id: "fx-options", code: "Δ", title: "FX Options", titleZh: "外汇期权", description: "Vanilla options, pricing, Greeks, volatility, exotics, TARNs, and structured products.", descriptionZh: "学习普通期权、定价、风险、波动率、奇异期权、TARN 与结构性产品。", exampleZh: "从普通的价格保护券开始，再学习带触发条件、累计目标和提前终止规则的产品。", lessons: 10, accent: "#397b9f" },
  { id: "rates", code: "%", title: "Rates", titleZh: "利率", description: "Curves, bonds, swaps, RFRs, policy, carry, valuation, and risk.", descriptionZh: "学习曲线、债券、掉期、参考利率、政策、套利、估值与风险。", exampleZh: "借同学 100 元，明年还 105 元，多出的 5 元就是利息。", lessons: 7, accent: "#7965a4" },
  { id: "credit", code: "CR", title: "Credit", titleZh: "信用产品", description: "Bonds, spreads, default risk, CDS, and capital structure.", descriptionZh: "判断借钱的人能不能按时还钱。", exampleZh: "借给可靠的朋友风险小，借给常忘记还钱的人就要更谨慎。", lessons: 5, accent: "#b17733" },
  { id: "commodities", code: "CO", title: "Commodities", titleZh: "大宗商品", description: "Physical markets, futures curves, storage, and hedging.", descriptionZh: "学习石油、黄金、小麦等真实物品怎样交易。", exampleZh: "面包店提前锁定面粉价格，就不怕下个月突然涨价。", lessons: 4, accent: "#b95a3b" },
  { id: "cross-asset", code: "XA", title: "Cross-Asset Macro", titleZh: "跨资产宏观", description: "Connect growth, inflation, policy, and global asset prices.", descriptionZh: "把经济新闻与汇率、债券、商品和股票连起来。", exampleZh: "像天气影响雨伞、冰淇淋和出行，经济变化也会同时影响许多市场。", lessons: 6, accent: "#405b84" }
];

const glossary = [
  ["Basis point", "基点", "RATES · 利率", "One hundredth of one percentage point (0.01%).", "一个百分点的百分之一，也就是 0.01%。", "例：利率从 4.00% 升到 4.25%，就是上升 25 个基点。"],
  ["Carry", "持有收益", "CROSS-ASSET · 宏观", "Return earned from holding a position when prices do not change.", "假如价格不变，继续持有一项投资自然得到的收益。", "例：把 100 元放进存钱罐，每年多 3 元，这 3 元就像持有收益。"],
  ["Credit spread", "信用利差", "CREDIT · 信用", "Extra yield over a safer bond for taking credit and liquidity risk.", "因为借款人可能还不了钱，投资者要求多收的一点利息。", "例：银行借钱给新开的小店，会比借给政府收更多利息。"],
  ["Delta", "德尔塔", "OPTIONS · 期权", "Approximate option-price change when the underlying moves by one unit.", "标的价格变化 1 单位时，期权价格大约变化多少。", "例：玩具涨 1 元，购买选择券涨 0.5 元，它的 Delta 大约是 0.5。"],
  ["Forward points", "远期点数", "FX CASH · 外汇", "Difference between an FX forward rate and spot, mainly from interest-rate differences.", "未来换汇价和今天换汇价之间的差，主要来自两国利率差。", "例：今天 1 美元换 7 元，约定三个月后换 7.02 元，多出的 0.02 就是远期点数。"],
  ["Gamma", "伽马", "OPTIONS · 期权", "How quickly an option's delta changes when the underlying moves.", "标的价格变化时，Delta 改变得有多快。", "例：自行车下坡越来越陡，速度增加得越来越快；Gamma 就像这种“加速变化”。"],
  ["Implied volatility", "隐含波动率", "OPTIONS · 期权", "The expected volatility implied by an option's market price.", "期权市场价格反映出的、大家对未来价格波动的预期。", "例：天气预报说可能有暴风雨，雨伞保险会更贵；市场越担心大波动，期权通常越贵。"],
  ["Modified duration", "修正久期", "RATES · 利率", "Approximate bond-price percentage move for a 1% yield change.", "利率变化 1% 时，债券价格大约会变化百分之几。", "例：跷跷板一端是利率、一端是债券价格；利率升，债券价格通常降。"],
  ["Risk reversal", "风险逆转", "FX OPTIONS · 外汇期权", "Combines a call and a put; its price also shows which direction markets fear more.", "把看涨和看跌期权组合起来，也能观察市场更担心哪边的大变化。", "例：同时准备“涨价保护券”和卖出“降价保护券”，用一个保护的收入支付另一个。"],
  ["Vanilla option", "普通期权", "FX OPTIONS · 产品类型", "A standard call or put with one strike and expiry and no path-dependent trigger.", "只有一个执行价和到期日、没有路径触发条件的标准看涨或看跌期权。", "例：付订金保留一个价格，到期时只看当时价格，不管中途怎样变化。"],
  ["Exotic option", "奇异期权", "FX OPTIONS · 产品类型", "An option whose payoff adds features such as barriers, averaging, multiple assets, or observation dates.", "在普通期权上加入障碍、平均价格、多项资产或多个观察日等条件的产品。", "例：优惠券不只看最后价格，还规定中途碰到某价格就失效，因此更复杂。"],
  ["Barrier option", "障碍期权", "FX OPTIONS · 奇异期权", "An option that activates or terminates when the underlying touches a specified level.", "标的触及指定价格时才生效，或立即失效的期权。", "例：游戏角色碰到绿色门才获得能力，碰到红线则能力消失。"],
  ["Digital option", "数字期权", "FX OPTIONS · 奇异期权", "An all-or-nothing option paying a fixed amount when a condition is met.", "满足条件就支付固定金额，否则支付为零的全有或全无期权。", "例：考试达到 60 分固定奖励 100 元，59 分没有，99 分也仍是 100 元。"],
  ["Asian option", "亚式期权", "FX OPTIONS · 奇异期权", "An option whose payoff uses an average underlying price over several observations.", "收益取决于多个观察日平均价格，而不是单一时点价格的期权。", "例：食堂每天买牛奶，更关心一个月平均价，而不是月底某一天的价格。"],
  ["TARN", "目标累计赎回票据", "STRUCTURED PRODUCTS · 结构性产品", "A target accrual redemption note pays or accrues periodic coupons until a cumulative target is reached, then redeems early.", "目标累计赎回票据定期支付或累计票息；累计达到目标后提前赎回，其标的可以是利率、外汇或其他资产。", "例：每期把奖励放进计分板，达到约定总分后票据提前结束；未达到时则继续到下一观察日。"],
  ["TARF", "目标赎回远期", "FX OPTIONS · 结构性产品", "A series of structured FX forwards that ends early when cumulative favorable settlements reach a target.", "一系列结构化外汇远期；有利结算累计达到目标后提前终止，但不利方向的损失可能带杠杆并反复发生。", "例：每周参加换汇活动，赚到目标奖品就结束；若行情不利，可能仍要继续并按更大数量兑换。"],
  ["Accumulator", "累计期权", "STRUCTURED PRODUCTS · 结构性产品", "A path-dependent structure that accumulates periodic purchases or sales, often with barriers and leveraged adverse exposure.", "在多个观察日累计买入或卖出，常带障碍和不利方向杠杆的路径依赖产品。", "例：约定每天按优惠价买苹果；价格有利时少买，价格不利时反而可能必须买双份。"],
  ["Autocallable", "自动赎回产品", "STRUCTURED PRODUCTS · 结构性产品", "A note that redeems early when its underlying meets conditions on scheduled observation dates.", "标的在预定观察日满足条件时自动提前赎回的票据，通常同时带有下跌保护门槛。", "例：每月检查成绩，达到目标就提前毕业；一直未达标则最终结果可能承担更大风险。"],
  ["Spot date", "即期交割日", "FX CASH · 外汇", "The normal date when an FX trade's currencies are exchanged, often T+2.", "外汇交易双方真正把钱交换到账的日子，通常是成交后两个工作日。", "例：周一约好换钱，常见情况下周三双方才真正收到钱。"],
  ["Backwardation", "现货溢价", "COMMODITIES · 商品", "Near contracts cost more than later contracts, often because supply is tight now.", "现在交货比以后交货更贵，常表示眼下东西不够用。", "例：今天突然缺草莓，所以今天一盒 30 元，下个月预计丰收只要 20 元。"],
  ["Contango", "期货溢价", "COMMODITIES · 商品", "Later contracts cost more than near contracts, often due to storage and financing.", "未来交货比现在更贵，差价常包含仓库和资金成本。", "例：今天买苹果 10 元，若请人保存三个月再交货，还要加冰箱和管理费。"]
];

const simulations = [
  { type: "CLIENT HEDGE · 客户对冲", difficulty: "CORE · 入门", title: "Protect a EUR receivable", titleZh: "保护一笔欧元收入", text: "A US company will receive €50m in three months and fears EUR may fall.", textZh: "一家美国公司三个月后会收到欧元，担心到时欧元变便宜。像提前锁定零花钱的兑换价，你会怎样保护它？", desk: "fx-cash" },
  { type: "RISK MANAGEMENT · 风险管理", difficulty: "INTERMEDIATE · 进阶", title: "Manage a short-gamma book", titleZh: "管理空 Gamma 头寸", text: "EUR/USD rallies and an options book is short gamma. Decide how to rebalance.", textZh: "市场越涨，你越需要买；市场越跌，你越需要卖，像在摇晃的船上保持平衡。你会怎样降低风险？", desk: "fx-options" },
  { type: "PRODUCT SUITABILITY · 产品适用性", difficulty: "ADVANCED · 高阶", title: "Challenge a tempting TARF quote", titleZh: "拆解一个诱人的 TARF 报价", text: "A client likes the enhanced strike but has not considered leveraged fixings after an adverse FX move.", textZh: "客户只看到更优惠的执行价，却没考虑汇率不利时可能要按双倍金额持续换汇。先拆解现金流、最坏情景和提前终止规则。", desk: "fx-options", lesson: "fx-options-tarn" },
  { type: "MARKET EVENT · 市场事件", difficulty: "INTERMEDIATE · 进阶", title: "Trade a hawkish surprise", titleZh: "应对意外加息信号", text: "Inflation beats forecasts and short-term rates rise. Connect the market moves.", textZh: "物价涨得比预期快，央行可能提高利率。想一想：借钱更贵后，汇率和债券会怎样变化？", desk: "rates" },
  { type: "RELATIVE VALUE · 相对价值", difficulty: "ADVANCED · 高阶", title: "Price a credit deterioration", titleZh: "判断信用变差的影响", text: "A company earns less while its debt rises. Assess its bonds and protection cost.", textZh: "一家公司赚得更少、欠得更多，就像零花钱减少但借款增加。它的债券和“违约保险”会怎样变化？", desk: "credit" }
];

const lessons = {
  "fx-foundations": {
    deskId: "fx-foundations",
    title: "The Language of FX",
    titleZh: "外汇共同语言",
    pages: [
      { type: "concept", title: "Every FX price is a pair", titleZh: "每个外汇价格都是货币对", body: "FX is always relative. In Base/Quote notation, the rate tells how many units of quote currency buy one unit of base currency. EUR/USD 1.0842 means EUR 1 costs USD 1.0842.", bodyZh: "外汇总是在比较两种货币。基础货币/计价货币的报价表示：买 1 单位基础货币需要多少计价货币。EUR/USD 1.0842 就是 1 欧元值 1.0842 美元。", exampleZh: "像 1 个苹果可以换 2 个橘子。苹果放在前面是“基础物品”，橘子放在后面告诉我们要付多少。", label: "BASE / QUOTE · 基础/计价货币", formula: "EUR/USD = USD needed for EUR 1", formulaZh: "欧元/美元 = 买 1 欧元需要的美元", quote: ["EUR / USD", "1.0842"] },
      { type: "concept", title: "Spot, forward, or option?", titleZh: "即期、远期还是期权？", body: "Spot exchanges currencies near term. A forward obligates both sides to exchange later at a rate fixed today. An option gives its buyer a right, not an obligation, to exchange at a strike.", bodyZh: "即期是在近期换钱；远期是双方今天约定未来必须按固定汇率换钱；期权则让买方未来有权选择是否按执行价换钱。", exampleZh: "即期像今天买玩具；远期像今天签约下月必须买；期权像付订金保留价格，下月可以决定买不买。", label: "THREE FX TOOLS · 三种外汇工具", formula: "Spot = now | Forward = obligation | Option = choice", formulaZh: "即期 = 近期｜远期 = 必须｜期权 = 选择权", quote: ["Shared foundation · 共同基础", "Currency pair + value date"] },
      { type: "concept", title: "What is a pip?", titleZh: "什么是点（PIP）？", body: "A pip is the standard FX price increment: usually 0.0001 for most pairs and 0.01 for JPY pairs. A fractional pip is often called a pipette.", bodyZh: "PIP 是外汇价格变动的常用单位。多数货币对 1 点是小数点后第 4 位的 0.0001；日元货币对通常是第 2 位的 0.01。", exampleZh: "EUR/USD 从 1.0840 到 1.0845 上涨 5 点；USD/JPY 从 150.20 到 150.25 也上涨 5 点。", label: "PIP CONVENTION · 点数惯例", formula: "Most pairs: 0.0001 | JPY pairs: 0.01", formulaZh: "多数货币对：万分之一｜日元货币对：百分之一", quote: ["EUR/USD move", "1.0840 → 1.0845 = +5 pips"] },
      { type: "quiz", title: "Read the pair", titleZh: "读懂货币对", body: "EUR/USD is 1.1000. What does this mean?", bodyZh: "EUR/USD 报价为 1.1000，代表什么？", answers: ["EUR 1 costs USD 1.10 · 1 欧元值 1.10 美元", "USD 1 costs EUR 1.10 · 1 美元值 1.10 欧元", "The pair moved 1 pip · 汇率移动 1 点", "It is an option premium · 这是期权费"], correct: 0, explanation: "EUR is the base and USD is the quote currency, so one euro costs 1.10 dollars.", explanationZh: "欧元是基础货币，美元是计价货币，因此 1 欧元需要 1.10 美元。" }
    ]
  },
  "fx-cash": {
    deskId: "fx-cash",
    title: "How an FX Spot Trade Works",
    titleZh: "外汇即期交易怎样运作",
    pages: [
      { type: "concept", title: "What is an FX spot trade?", titleZh: "什么是外汇即期交易？", body: "An FX spot trade is an agreement between two parties to exchange one currency for another at the current market rate, with settlement on the pair's standard near-term value date.", bodyZh: "外汇即期交易是双方按当前市场汇率交换两种货币，并在该货币对的标准近期交割日真正完成付款。成交日与收款日可能不同。", exampleZh: "像周一在网上按今天价格买外币，但银行需要时间核对并转账，所以钱可能周三才真正到账。", label: "SPOT TRADE · 即期交易", formula: "Trade date: agree price | Value date: exchange cash", formulaZh: "交易日：约定价格｜交割日：真正交换资金", quote: ["EUR / USD spot · 欧元/美元即期", "1.0840 / 1.0842"] },
      { type: "concept", title: "TOD, TOM, and spot dates", titleZh: "TOD、TOM 与即期交割日", body: "TOD settles today (T+0), TOM tomorrow (T+1), and standard spot commonly T+2 business days. Some pairs are exceptions: USD/CAD normally has a T+1 spot date; USD/TRY is also commonly T+1. Holidays in either currency matter.", bodyZh: "TOD 当天交割（T+0），TOM 次日交割（T+1），标准即期通常在两个工作日后（T+2）。USD/CAD 的标准即期通常是 T+1，USD/TRY 也常见 T+1；两种货币的节假日都会影响日期。", exampleZh: "像快递的当日达、次日达和两日达。周末或节假日不算工作日，所以周四成交的 T+2 不一定是周六。", label: "VALUE DATES · 交割日", formula: "TOD = T+0 | TOM = T+1 | Spot usually T+2", formulaZh: "当天｜次日｜通常两个工作日", quote: ["USD/CAD standard spot", "T+1"] },
      { type: "concept", title: "Bid, offer, and the dealer", titleZh: "买入价、卖出价和银行", body: "A dealer buys the base currency at the bid and sells it at the offer. The small gap is the bid–offer spread, paying the dealer for providing an immediate exchange.", bodyZh: "银行用较低的买入价收欧元，用较高的卖出价卖欧元。中间的小差距叫“买卖价差”，是银行随时提供换钱服务的报酬。", exampleZh: "像二手书店 8 元收一本书、10 元卖出去。你向书店买书付 10 元；书店向你买书付 8 元。外汇交易也一样。", label: "DEALER PERSPECTIVE · 银行视角", formula: "Client buys EUR → trades at 1.0842 offer", formulaZh: "客户买欧元 → 使用较高的卖出价 1.0842", quote: ["Spread · 买卖价差", "0.0002 = 2 pips · 2 点"] },
      { type: "quiz", title: "Make the market call", titleZh: "做一次市场判断", body: "A client wants to buy €10 million with USD. EUR/USD is 1.0840 / 1.0842. Which rate applies?", bodyZh: "客户想用美元买 1,000 万欧元。银行报价为 1.0840 / 1.0842。客户应该按哪个价格交易？", answers: ["1.0840 — the bid · 买入价", "1.0841 — the midpoint · 中间价", "1.0842 — the offer · 卖出价", "It depends on settlement · 取决于交割"], correct: 2, explanation: "The client buys EUR, so the dealer sells EUR at the offer: 1.0842.", explanationZh: "客户向银行买欧元，银行是在卖欧元，所以使用较高的卖出价 1.0842。记住二手书店的例子：你从店里买，就付店里的卖出价。" }
    ]
  },
  "fx-cash-market": {
    deskId: "fx-cash",
    title: "The OTC Market and Liquidity",
    titleZh: "场外市场与流动性",
    pages: [
      { type: "concept", title: "A decentralized OTC network", titleZh: "分散的场外交易网络", body: "FX is primarily over-the-counter (OTC): banks, brokers, funds, companies, and electronic venues connect directly rather than trading on one central exchange. Prices can differ slightly across venues.", bodyZh: "外汇主要是场外交易市场（OTC）：银行、经纪商、基金、企业和电子平台直接连接，不依赖单一中央交易所，因此不同平台的价格可能略有差异。", exampleZh: "像很多菜市场同时卖苹果，而不是全国只有一家商店。买家会比较不同摊位的报价。", label: "OTC MARKET · 场外市场", formula: "Many connected venues ≠ one central exchange", formulaZh: "多个互联交易场所，而非单一交易所", quote: ["Largest centres · 主要中心", "London · New York · Singapore"] },
      { type: "concept", title: "Liquidity changes through the day", titleZh: "流动性随时间变化", body: "Liquidity means the ability to trade quickly with limited price impact. It is often deepest when major centres overlap—especially London and New York—and thinner around holidays, market closes, or unexpected news.", bodyZh: "流动性是快速成交且不会明显推动价格的能力。伦敦与纽约交易时段重叠时通常最充足；节假日、收盘附近或突发消息时可能变薄。", exampleZh: "午餐高峰有很多买家和餐厅，容易找到合理价格；深夜只有一家店，选择少、价格差可能更大。", label: "LIQUIDITY · 流动性", formula: "More buyers + sellers → usually tighter spread", formulaZh: "买卖双方越多，价差通常越窄", quote: ["London–New York overlap", "High liquidity · 高流动性"] },
      { type: "concept", title: "Two-way quoting", titleZh: "双向报价", body: "Interbank market makers quote a bid and offer simultaneously, committing to buy at one price and sell at the other. Continuous two-way prices provide liquidity while the dealer manages inventory and risk.", bodyZh: "银行间做市商同时报出买入价与卖出价，愿意按一个价格买、另一个价格卖。连续双向报价提供流动性，交易员同时管理库存与风险。", exampleZh: "二手书店门口同时写着“8 元收、10 元卖”，顾客立刻知道买书和卖书各用什么价格。", label: "TWO-WAY PRICE · 双向价格", formula: "Bid / Offer = dealer buys / dealer sells", formulaZh: "买入价 / 卖出价 = 银行买 / 银行卖", quote: ["EUR/USD", "1.0840 / 1.0842"] },
      { type: "quiz", title: "Find the liquid session", titleZh: "判断流动性时段", body: "When is EUR/USD liquidity often deepest under normal conditions?", bodyZh: "在正常情况下，EUR/USD 通常什么时候流动性最充足？", answers: ["London and New York overlap · 伦敦与纽约时段重叠", "A major holiday · 重要节假日", "Just after all markets close · 所有市场收盘后", "Only at midnight · 仅午夜"], correct: 0, explanation: "The London–New York overlap brings together many active banks, funds, and corporate flows.", explanationZh: "伦敦与纽约重叠时，许多银行、基金与企业同时交易，通常更容易成交且价差更窄。" }
    ]
  },
  "fx-cash-forwards": {
    deskId: "fx-cash",
    title: "Forwards and Interest Rate Parity",
    titleZh: "远期与利率平价",
    pages: [
      { type: "concept", title: "Fix a future exchange rate today", titleZh: "今天锁定未来汇率", body: "An FX forward obligates two parties to exchange currencies on a specified future value date at a rate agreed today. Corporations use forwards to make future home-currency cash flows predictable.", bodyZh: "外汇远期要求双方在指定未来日期按今天约定的汇率交换货币。企业用它把未来本币收入或成本变得更可预测。", exampleZh: "面包店今天和农场约定三个月后必须按每袋 100 元买面粉，不论届时市场价是多少。", label: "FX FORWARD · 外汇远期", formula: "Rate fixed today | Cash exchanged later", formulaZh: "今天定价格｜未来必须交换资金", quote: ["3-month EUR/USD forward", "1.0905"] },
      { type: "concept", title: "Covered interest rate parity", titleZh: "抛补利率平价", body: "Covered interest rate parity (CIP) links spot, forward, and the two currency interest rates. Otherwise a trader could borrow one currency, invest in the other, hedge with a forward, and lock in an arbitrage profit.", bodyZh: "抛补利率平价（CIP）把即期、远期与两种货币利率连接起来。若关系严重失衡，交易员可能借入一种货币、投资另一种货币并用远期对冲，锁定套利。", exampleZh: "两个水池由管道连接。若一边水位明显过高，水会流向另一边，直到差距缩小。套利交易也会推动价格恢复平衡。", label: "CIP BASELINE · 利率平价基准", formula: "F = S × [1 + rquote×(Days/Year)] / [1 + rbase×(Days/Year)]", formulaZh: "远期 = 即期 × 计价货币利息因子 ÷ 基础货币利息因子", quote: ["No-arbitrage link · 无套利关系", "Spot + rates → forward"] },
      { type: "concept", title: "Forward points are not a forecast", titleZh: "远期点数不是汇率预测", body: "Forward points equal Forward minus Spot and are driven mainly by the interest-rate differential. They are not the market's forecast of future spot. In real markets, cross-currency basis, funding, and liquidity can also cause deviations from simple CIP.", bodyZh: "远期点数等于远期减即期，主要由两种货币的利率差推动，并不是市场对未来即期汇率的预测。现实中跨货币基差、融资与流动性也会造成偏离简单 CIP 的情况。", exampleZh: "未来送货价比今天贵，可能只是包含仓储和资金成本，并不表示大家认为商品本身一定涨价。", label: "FORWARD POINTS · 远期点数", formula: "Forward points = F − S", formulaZh: "远期点数 = 远期汇率 − 即期汇率", quote: ["Spot 1.0842 / Forward 1.0905", "+63 pips"] },
      { type: "quiz", title: "Interpret forward points", titleZh: "理解远期点数", body: "Positive EUR/USD forward points primarily reflect what?", bodyZh: "EUR/USD 远期点数为正，最主要反映什么？", answers: ["The interest-rate differential · 两种货币利率差", "A guaranteed EUR rally · 欧元保证上涨", "Yesterday's stock price · 昨日股票价格", "Option gamma · 期权 Gamma"], correct: 0, explanation: "Interest-rate parity is the baseline driver; forward points are not a directional spot forecast.", explanationZh: "利率平价是远期点数的基础驱动因素，正点数并不代表欧元未来一定上涨。" }
    ]
  },
  "fx-cash-swaps": {
    deskId: "fx-cash",
    title: "FX Swaps and Funding",
    titleZh: "外汇掉期与资金管理",
    pages: [
      { type: "concept", title: "Two linked currency exchanges", titleZh: "两笔相连的货币交换", body: "An FX swap combines one currency exchange on a near date with the opposite exchange on a later date—for example, buy EUR spot and sell the same EUR amount forward.", bodyZh: "外汇掉期把近期的一笔换汇与未来方向相反的一笔换汇组合起来，例如即期买欧元，同时远期卖出同样金额的欧元。", exampleZh: "今天借朋友一本书，下周归还同一本书：你暂时拥有它，但长期数量没有改变。", label: "FX SWAP · 外汇掉期", formula: "Near leg + opposite far leg", formulaZh: "近端交易 + 方向相反的远端交易", quote: ["Near / far · 近端/远端", "Buy EUR / Sell EUR"] },
      { type: "concept", title: "Manage liquidity without lasting FX risk", titleZh: "管理资金而不保留长期汇率风险", body: "Banks and companies use swaps to roll value dates, obtain short-term currency funding, or extend hedges. Matching opposite notionals largely removes long-term currency direction, though funding, counterparty, and settlement risks remain.", bodyZh: "银行与企业用掉期滚动交割日、获得短期外币资金或延长对冲。两端相反金额大致消除长期汇率方向风险，但融资、对手方与结算风险仍存在。", exampleZh: "你用一张红卡暂时换朋友的蓝卡，并约定下周换回来。你得到一周蓝卡使用权，却没有永久卖掉红卡。", label: "LIQUIDITY TOOL · 流动性工具", formula: "Same notional, opposite direction, two dates", formulaZh: "相同金额、相反方向、两个日期", quote: ["Common use · 常见用途", "Roll tomorrow's cash"] },
      { type: "quiz", title: "Recognise the swap", titleZh: "识别外汇掉期", body: "Which trade is an FX swap?", bodyZh: "以下哪一种交易是外汇掉期？", answers: ["Buy EUR spot and sell EUR forward · 即期买欧元并远期卖欧元", "Only buy EUR spot · 只做即期买欧元", "Buy a EUR call option · 买欧元看涨期权", "Buy a corporate bond · 买公司债"], correct: 0, explanation: "The near exchange and opposite far exchange form the two legs of an FX swap.", explanationZh: "近期换汇与未来反向换汇组成外汇掉期的两个交易端。" }
    ]
  },
  "fx-cash-macro": {
    deskId: "fx-cash",
    title: "What Moves Exchange Rates?",
    titleZh: "什么推动汇率变化？",
    pages: [
      { type: "concept", title: "Rates, inflation, and growth", titleZh: "利率、通胀与经济增长", body: "Central-bank decisions, inflation such as CPI, GDP and labour data alter expected interest rates and growth. Currencies often react to how data differs from expectations—not simply whether a number is high or low.", bodyZh: "央行决定、CPI 等通胀数据、GDP 与就业数据会改变市场对利率和增长的预期。汇率常对“数据与预期的差”作出反应，而不只是数字本身高低。", exampleZh: "考试得 90 分听起来很好，但若大家预期 100 分，结果仍可能令人失望。市场也比较实际数据与预期。", label: "MACRO SURPRISE · 宏观意外", formula: "Market move ≈ actual data − expected data", formulaZh: "市场反应常取决于实际值减预期值", quote: ["CPI actual / expected", "3.4% / 3.1%"] },
      { type: "concept", title: "Politics and risk sentiment", titleZh: "地缘政治与风险情绪", body: "Elections, conflict, trade policy, and financial stress can change capital flows rapidly. In risk-off periods, investors may seek liquid or perceived safe-haven currencies, though relationships vary by event.", bodyZh: "选举、冲突、贸易政策与金融压力会快速改变资金流向。避险时期投资者可能寻找流动性强或被认为安全的货币，但不同事件下关系并不固定。", exampleZh: "暴风雨来临时，人们会跑向不同的避雨处；金融市场紧张时，资金也会寻找被认为更安全的地方。", label: "RISK SENTIMENT · 风险情绪", formula: "News → expectations → capital flows → FX", formulaZh: "消息 → 预期 → 资金流 → 汇率", quote: ["Risk event · 风险事件", "Liquidity can change fast"] },
      { type: "quiz", title: "Trade the surprise", titleZh: "判断数据意外", body: "Inflation prints above consensus. Why can FX move immediately?", bodyZh: "通胀数据高于市场预期，为什么汇率可能立刻变化？", answers: ["Expected central-bank policy may change · 市场对央行政策的预期可能改变", "Spot settlement is cancelled · 即期交割被取消", "Every currency must rise · 所有货币必须上涨", "Pips stop existing · 点数不再存在"], correct: 0, explanation: "An inflation surprise can change expected policy rates and relative returns between currencies.", explanationZh: "通胀意外会改变预期政策利率和两种货币的相对回报，因此资金与汇率可能迅速调整。" }
    ]
  },
  "fx-cash-risks": {
    deskId: "fx-cash",
    title: "Settlement Risk and Slippage",
    titleZh: "结算风险与滑点",
    pages: [
      { type: "concept", title: "Herstatt settlement risk", titleZh: "赫斯塔特结算风险", body: "Herstatt risk arises when one party irrevocably pays its currency but the counterparty fails before delivering the other—historically worsened by time-zone differences. Payment-versus-payment systems such as CLS greatly reduce this principal risk for eligible currencies and trades.", bodyZh: "赫斯塔特风险是指一方已不可撤回地付款，但对手方在交付另一种货币前失败；时区差曾放大此风险。CLS 等支付对支付系统能大幅降低符合条件交易的本金风险。", exampleZh: "你先把卡片寄给海外朋友，但对方破产，答应寄来的卡片没有到。CLS 像可信的裁判，确认双方都准备好后才同时交换。", label: "PAYMENT VERSUS PAYMENT · 支付对支付", formula: "Release currency A only if currency B is available", formulaZh: "仅在货币 B 已准备好时才交付货币 A", quote: ["Key mitigant · 主要缓解方式", "CLS"] },
      { type: "concept", title: "Slippage in fast markets", titleZh: "快速市场中的滑点", body: "Slippage is the difference between the expected price and actual execution price. It can increase when volatility is high, liquidity is low, order size is large, or a market order consumes several price levels.", bodyZh: "滑点是预期成交价与实际成交价之间的差。高波动、低流动性、大额订单或市价单吃掉多个价格档位时，滑点通常更大。", exampleZh: "你想按 10 元买 100 个苹果，但摊主只有 20 个卖 10 元，其余要 11 元。最终平均价格高于预期，这就是滑点。", label: "EXECUTION RISK · 执行风险", formula: "Slippage = executed price − expected price", formulaZh: "滑点 = 实际成交价 − 预期成交价", quote: ["Expected / executed", "1.0842 / 1.0847"] },
      { type: "quiz", title: "Reduce principal risk", titleZh: "降低本金风险", body: "Which mechanism most directly mitigates Herstatt risk?", bodyZh: "哪种机制最直接降低赫斯塔特风险？", answers: ["CLS payment-versus-payment · CLS 支付对支付", "A wider bid-offer spread · 更宽买卖价差", "Ignoring value dates · 忽略交割日", "A market order · 市价单"], correct: 0, explanation: "CLS coordinates payment-versus-payment so one currency is not finally paid without the other.", explanationZh: "CLS 协调两种货币同时完成最终支付，避免只交出一边本金而收不到另一边。" }
    ]
  },
  "fx-options": {
    deskId: "fx-options",
    title: "Your First FX Option",
    titleZh: "认识你的第一张外汇期权",
    pages: [
      { type: "concept", title: "A right, not an obligation", titleZh: "一种权利，不是必须履行的承诺", body: "An FX option gives its buyer the right, but not the obligation, to exchange currencies at an agreed strike rate by a future date.", bodyZh: "外汇期权给买方一个选择权：未来可以按事先约好的汇率换钱，但如果市场价格更好，也可以放弃不用。", exampleZh: "你付 5 元订金，请商店把玩具的 100 元价格保留到下周。若玩具涨到 130 元，你仍可付 100 元；若降到 80 元，你就放弃订金，直接按 80 元买。", label: "OPTION BASICS · 期权基础", formula: "Option = right to exchange at the strike", formulaZh: "期权 = 按执行价换汇的权利", quote: ["Strike · 执行价", "EUR/USD 1.1000"] },
      { type: "concept", title: "Two currencies, two sides", titleZh: "一张期权，两种货币", body: "Every FX option is both a call on one currency and a put on the other. A EUR call / USD put gives the right to buy EUR and sell USD. Reversing the pair reverses the description.", bodyZh: "每张外汇期权同时是“一种货币的看涨期权”和“另一种货币的看跌期权”。欧元看涨/美元看跌代表有权买欧元、卖美元。", exampleZh: "像交换卡片：拿到“买欧元卡”的同时，你必须交出美元卡。因此一个动作总有买入和卖出两面。", label: "PAIR CONVENTION · 货币对惯例", formula: "EUR call / USD put = buy EUR, sell USD", formulaZh: "欧元看涨 / 美元看跌 = 买欧元、卖美元", quote: ["Base / terms · 基础/计价货币", "EUR / USD"] },
      { type: "concept", title: "Strike and premium", titleZh: "执行价与期权费", body: "The strike K is the exchange rate available on exercise. The buyer pays premium upfront to the seller. FX premium may be quoted as a percentage of the base-currency notional or as pips in the terms currency.", bodyZh: "执行价 K 是行权时可使用的汇率。买方先向卖方支付期权费。外汇期权费常表示为基础货币金额的百分比，或计价货币的点数。", exampleZh: "执行价像优惠券上写的固定价格，期权费像买优惠券花的钱。优惠券标价 100 元，买券先付 5 元。", label: "TRADE TERMS · 交易要素", formula: "Premium = % of base notional or terms-currency pips", formulaZh: "期权费 = 基础货币名义金额百分比，或计价货币点数", quote: ["Strike K / premium · 执行价/期权费", "1.1000 / 1.20% EUR"] },
      { type: "concept", title: "European or American exercise", titleZh: "欧式与美式行权", body: "A European option can only be exercised at expiry and is standard in the interbank FX market. An American option can be exercised at any time up to and including expiry.", bodyZh: "欧式期权只能在到期日行权，是银行间外汇市场的标准形式。美式期权则可在到期日之前任何时间行权。名称描述规则，与欧洲或美国货币无关。", exampleZh: "欧式像只能在生日当天使用的蛋糕券；美式像从今天到生日当天随时能用的蛋糕券。", label: "EXERCISE STYLE · 行权方式", formula: "European: expiry only | American: any time ≤ expiry", formulaZh: "欧式：仅到期日｜美式：到期前随时", quote: ["Interbank standard · 银行间标准", "European · 欧式"] },
      { type: "concept", title: "Protection has a price", titleZh: "获得保护需要付费", body: "The option buyer pays a premium upfront. This is the maximum loss for the buyer, while the option may become valuable if the currency moves beyond the strike.", bodyZh: "买期权时要先付“期权费”。对买方来说，最多损失这笔费用；如果汇率朝有利方向大幅变化，期权就可能变得很值钱。", exampleZh: "期权费像旅行保险费。旅途平安时保险可能用不上，但遇到行李丢失时，它会保护你免受更大的损失。", label: "PREMIUM & PAYOFF · 期权费与收益", formula: "Buyer maximum loss = premium paid", formulaZh: "买方最大损失 = 已支付的期权费", quote: ["3-month EUR call · 三个月欧元看涨期权", "Premium · 期权费: $20,000"] },
      { type: "quiz", title: "Choose the protection", titleZh: "选择正确的保护", body: "A company must buy euros in three months. It fears EUR will rise but wants to benefit if EUR falls. Why might it buy a EUR call option?", bodyZh: "一家公司三个月后必须买欧元。它担心欧元上涨，但也想在欧元下跌时享受更便宜的价格。为什么可以买欧元看涨期权？", answers: ["It guarantees a profit · 保证赚钱", "It caps the worst exchange rate but keeps the benefit of a fall · 限制最坏汇率，同时保留下跌的好处", "It removes the premium · 不需要期权费", "It forces the company to use the strike · 必须按执行价交易"], correct: 1, explanation: "A EUR call sets a maximum purchase rate. If EUR falls, the company can let the option expire and buy more cheaply in the market.", explanationZh: "欧元看涨期权像给最高购买价加了一个“天花板”。欧元上涨时使用保护；欧元下跌时可以不用期权，直接在市场上更便宜地买。代价是先支付期权费。" }
    ]
  },
  "fx-options-pricing": {
    deskId: "fx-options",
    title: "Pricing with Garman–Kohlhagen",
    titleZh: "用 Garman–Kohlhagen 模型定价",
    pages: [
      { type: "concept", title: "Black–Scholes with two interest rates", titleZh: "包含两种利率的期权模型", body: "Garman–Kohlhagen extends Black–Scholes to European FX options. It uses spot S, strike K, time T, volatility σ, domestic rate rd, and foreign rate rf. The foreign rate acts like a dividend yield on the base currency.", bodyZh: "Garman–Kohlhagen 是用于欧式外汇期权的 Black–Scholes 扩展模型。输入包括即期汇率 S、执行价 K、期限 T、波动率 σ、本币利率 rd 和外币利率 rf。", exampleZh: "两种货币像两个存钱罐，各自按不同速度长出利息。比较未来价值时，两个存钱罐的利率都必须计算。", label: "GARMAN–KOHLHAGEN INPUTS · 模型输入", formula: "S, K, T, σ, rd, rf", formulaZh: "即期、执行价、期限、波动率、本币利率、外币利率", quote: ["Domestic / foreign rates · 本币/外币利率", "rd = 5%, rf = 3%"] },
      { type: "concept", title: "European call formula", titleZh: "欧式看涨期权公式", body: "The model discounts each currency at its own risk-free rate. N(d) is the cumulative standard-normal probability. The formula produces a theoretical value, not a guaranteed trading price.", bodyZh: "模型用各自的无风险利率折现两种货币，N(d) 是标准正态分布的累计概率。公式给出理论价值，并不保证市场一定按此成交。", exampleZh: "像计算两棵生长速度不同的果树未来能结多少果实，再把未来的果实价值换算回今天。", label: "EUROPEAN FX CALL · 欧式外汇看涨", formula: "C = S·e^(−rfT)·N(d1) − K·e^(−rdT)·N(d2)", formulaZh: "d1 = [ln(S/K)+(rd−rf+σ²/2)T] / (σ√T)，d2 = d1−σ√T", quote: ["Model output · 模型价格", "Call premium C"] },
      { type: "concept", title: "What moves the price?", titleZh: "哪些因素会改变期权价格？", body: "A call generally gains when spot or volatility rises. More time usually adds value. Domestic and foreign rates affect the forward and discounting, so rate changes can raise or lower value.", bodyZh: "看涨期权通常在即期汇率或波动率上升时变贵，剩余时间更多通常也更值钱。本币和外币利率会改变远期汇率与折现，因此也会影响价格。", exampleZh: "猜硬币游戏玩 100 次比只玩 1 次有更多出现极端结果的机会；期限越长，价格大幅变化的机会通常越多。", label: "PRICING DRIVERS · 定价因素", formula: "Price = f(S, K, T, σ, rd, rf)", formulaZh: "价格由六个主要输入共同决定", quote: ["Volatility rises · 波动率上升", "Long option value usually ↑"] },
      { type: "quiz", title: "Choose the FX model", titleZh: "选择外汇期权模型", body: "Which feature distinguishes Garman–Kohlhagen from the basic equity Black–Scholes setup?", bodyZh: "Garman–Kohlhagen 与基础股票 Black–Scholes 模型相比，最重要的区别是什么？", answers: ["It ignores volatility · 忽略波动率", "It includes domestic and foreign interest rates · 同时包含本币和外币利率", "It only prices American options · 只计算美式期权", "It guarantees market prices · 保证市场价格"], correct: 1, explanation: "FX has two currencies, so the model includes both domestic rd and foreign rf rates.", explanationZh: "外汇涉及两种货币，因此必须同时考虑本币利率 rd 和外币利率 rf。" }
    ]
  },
  "fx-options-delta": {
    deskId: "fx-options",
    title: "Delta and ATM Conventions",
    titleZh: "Delta 与平值市场惯例",
    pages: [
      { type: "concept", title: "FX options are quoted by delta", titleZh: "外汇期权常按 Delta 报价", body: "The broker market commonly quotes wings by delta—such as a 25-delta call—rather than directly by strike. A pricing model converts the quoted delta and volatility into the corresponding strike.", bodyZh: "外汇期权经纪市场通常按 Delta 报价，例如“25 Delta 看涨”，而不是直接报执行价。定价模型再把 Delta 与波动率转换成对应执行价。", exampleZh: "像买鞋时先说“适合十岁孩子的尺码”，商店再查表找到具体鞋长。Delta 是市场共同使用的定位方式。", label: "DELTA QUOTE · Delta 报价", formula: "Quoted delta + volatility → model-implied strike", formulaZh: "Delta 报价 + 波动率 → 模型计算执行价", quote: ["Broker quote · 经纪报价", "25Δ call vol = 9.4%"] },
      { type: "concept", title: "Premium-adjusted delta", titleZh: "期权费调整 Delta", body: "FX premium can be paid in either currency. If premium is paid in the base currency, that upfront payment changes the net base-currency exposure. Premium-adjusted delta subtracts this premium exposure from the standard delta.", bodyZh: "外汇期权费可以用任一种货币支付。若用基础货币支付，买方一开始就减少了基础货币，因此净货币敞口会改变。期权费调整 Delta 会把这部分敞口扣除。", exampleZh: "你买到一张价值相当于 50 张卡片的选择权，但先用 2 张同类卡片付费，真正净持有的敏感度就不再是完整的 50 张。", label: "PREMIUM ADJUSTMENT · 期权费调整", formula: "Adjusted delta = standard delta − base-premium exposure", formulaZh: "调整后 Delta = 标准 Delta − 基础货币期权费敞口", quote: ["Convention must be specified · 必须说明惯例", "PA or unadjusted"] },
      { type: "concept", title: "Three meanings of ATM", titleZh: "三种平值定义", body: "ATM spot sets K equal to current spot. ATM forward sets K equal to the forward. ATM delta-neutral chooses K where call delta plus put delta is zero under the specified premium convention.", bodyZh: "ATM Spot 表示执行价等于即期；ATM Forward 表示执行价等于远期；ATM Delta Neutral 表示按指定期权费惯例，看涨与看跌 Delta 之和为零的执行价。", exampleZh: "“在中间”可以指队伍当前位置、预计终点位置，或让跷跷板两边刚好平衡的位置。三种 ATM 都合理，但答案不同。", label: "ATM DEFINITIONS · 平值定义", formula: "ATM-S: K=S | ATM-F: K=F | ATM-DN: Δcall+Δput=0", formulaZh: "即期平值｜远期平值｜Delta 中性平值", quote: ["Always ask · 务必确认", "Which ATM convention?"] },
      { type: "quiz", title: "Read a 25-delta quote", titleZh: "读懂 25 Delta 报价", body: "A broker quotes '25-delta EUR call volatility'. What must a model still calculate?", bodyZh: "经纪人报价“25 Delta 欧元看涨波动率”。模型还需要计算什么？", answers: ["The corresponding strike · 对应执行价", "Whether EUR exists · 欧元是否存在", "The trade's legal owner · 交易法律所有者", "Yesterday's P&L only · 仅昨日损益"], correct: 0, explanation: "FX wings are quoted by delta; the model maps the delta quote to a strike under the chosen convention.", explanationZh: "外汇期权两翼常按 Delta 报价，模型会根据所选 Delta 和期权费惯例反推出执行价。" }
    ]
  },
  "fx-options-risk": {
    deskId: "fx-options",
    title: "Greeks: The Risk Dashboard",
    titleZh: "希腊字母：期权风险仪表盘",
    pages: [
      { type: "concept", title: "Delta measures direction", titleZh: "Delta 衡量方向风险", body: "Delta estimates how much an option value changes when spot moves by one unit. A EUR call has positive delta because it gains value when EUR rises.", bodyZh: "Delta 估算即期汇率变化时，期权价值会变化多少。欧元看涨期权的 Delta 为正，因为欧元上涨时它通常更值钱。", exampleZh: "像一辆跟着前车移动的小车。前车前进 1 米，小车前进 0.5 米，小车的 Delta 就像 0.5。", label: "DELTA RISK · 方向风险", formula: "Delta P&L ≈ Delta × spot move", formulaZh: "Delta 损益 ≈ Delta × 汇率变动", quote: ["EUR call delta · 欧元看涨期权 Delta", "+0.50"] },
      { type: "concept", title: "Gamma and Vega change the picture", titleZh: "Gamma 与 Vega 改变风险", body: "Gamma measures how delta changes as spot moves. Vega measures sensitivity to implied volatility. Traders monitor both because an apparently hedged book can quickly become risky.", bodyZh: "Gamma 衡量汇率变化时 Delta 改变多快；Vega 衡量期权对隐含波动率的敏感度。即使现在的方向风险为零，市场变化后风险也会重新出现。", exampleZh: "Delta 像汽车速度，Gamma 像加速度；Vega 像天气不确定性。暴风雨可能性越高，雨伞保险通常越贵。", label: "CURVATURE & VOL · 曲率与波动率", formula: "Risk = Delta + Gamma + Vega + Theta", formulaZh: "期权风险 = 方向 + 曲率 + 波动率 + 时间", quote: ["Book vega · 组合 Vega", "+$12,000 per vol"] },
      { type: "concept", title: "Theta and two Rhos", titleZh: "Theta 与两种 Rho", body: "Theta measures value lost or gained as time passes. Rho measures sensitivity to interest rates. FX has domestic-rate rho and foreign-rate rho because both currencies earn interest.", bodyZh: "Theta 衡量时间流逝带来的价值变化；Rho 衡量利率变化的影响。外汇涉及两种货币，因此有本币利率 Rho 和外币利率 Rho。", exampleZh: "Theta 像冰淇淋随时间融化；Rho 像两个存钱罐的利息速度发生变化。两个罐子任何一个变化，交换选择权的价值都可能改变。", label: "TIME & RATES · 时间与利率", formula: "Greeks: Δ, Γ, ν, θ, ρd, ρf", formulaZh: "Delta、Gamma、Vega、Theta、本币 Rho、外币 Rho", quote: ["Long option theta · 买入期权 Theta", "Usually negative · 通常为负"] },
      { type: "quiz", title: "Read the risk report", titleZh: "读懂风险报告", body: "A book has positive vega. Implied volatility rises by one point while spot is unchanged. What usually happens?", bodyZh: "一个期权组合的 Vega 为正。汇率不变，但隐含波动率上升 1 个点。组合通常会怎样？", answers: ["It gains value · 价值上升", "It loses value · 价值下降", "Delta must become zero · Delta 一定变成零", "Nothing changes · 完全不变"], correct: 0, explanation: "Positive vega benefits when implied volatility rises.", explanationZh: "Vega 为正表示组合喜欢波动率上升。每单位 Vega 是波动率上升 1 个点时的估算收益。" }
    ]
  },
  "fx-options-pnl": {
    deskId: "fx-options",
    title: "Explain the Daily P&L",
    titleZh: "解释每日损益数据",
    pages: [
      { type: "concept", title: "Break P&L into drivers", titleZh: "把损益拆成不同来源", body: "An options desk explains daily P&L using spot, volatility, time decay, rates, and trading activity. This reveals whether profit came from the expected risk or from an unexplained move.", bodyZh: "期权交易台会把每日损益拆成汇率、波动率、时间损耗、利率和当天交易等来源。这样才能知道赚钱是否来自预期中的风险。", exampleZh: "你今天多了 20 元，要分清是零花钱 +10、卖旧书 +15、买饮料 −5。损益解释也是给每一元变化找到原因。", label: "DAILY P&L EXPLAIN · 每日损益解释", formula: "Total P&L ≈ Delta + Gamma + Vega + Theta + new trades", formulaZh: "总损益 ≈ 方向 + 曲率 + 波动率 + 时间 + 新交易", quote: ["Reported P&L · 当日损益", "+$86,000"] },
      { type: "concept", title: "A sample P&L report", titleZh: "一份损益报告示例", body: "Suppose delta makes +$50k, gamma +$20k, vega +$30k, and theta −$10k. Explained P&L is +$90k. If reported P&L is +$86k, the unexplained residual is −$4k.", bodyZh: "假设 Delta 赚 5 万、Gamma 赚 2 万、Vega 赚 3 万、Theta 亏 1 万，已解释损益合计赚 9 万。如果实际只赚 8.6 万，未解释差额就是亏 0.4 万。", exampleZh: "像核对存钱罐：计算应该有 90 元，实际只有 86 元，少的 4 元必须继续查找，可能是费用、报价差异或数据问题。", label: "P&L RECONCILIATION · 损益核对", formula: "$50k + $20k + $30k − $10k = $90k", formulaZh: "实际 $86k − 已解释 $90k = 未解释 −$4k", quote: ["Unexplained · 未解释损益", "−$4,000"] },
      { type: "quiz", title: "Calculate the P&L", titleZh: "计算损益", body: "Delta P&L is +$40k, vega P&L is −$15k, and theta is −$5k. Ignore other effects. What is explained P&L?", bodyZh: "Delta 损益为 +4 万美元，Vega 损益为 −1.5 万，Theta 为 −0.5 万。忽略其他影响，已解释损益是多少？", answers: ["+$60k · +6 万美元", "+$30k · +3 万美元", "+$20k · +2 万美元", "−$20k · −2 万美元"], correct: 2, explanation: "+$40k − $15k − $5k = +$20k.", explanationZh: "+4 万 − 1.5 万 − 0.5 万 = +2 万美元。每个风险来源都像存钱罐中的一笔收入或支出。" }
    ]
  },
  "fx-options-vol": {
    deskId: "fx-options",
    title: "Volatility and the Smile",
    titleZh: "波动率与波动率微笑",
    pages: [
      { type: "concept", title: "Not every strike has the same volatility", titleZh: "不同执行价的波动率并不相同", body: "Markets quote different implied volatilities for different strikes. The pattern is called the volatility smile or skew and reflects supply, demand, and fear of extreme moves.", bodyZh: "市场会给不同执行价的期权报出不同的隐含波动率。这种形状叫“波动率微笑”或“偏斜”，反映供求和大家对极端行情的担忧。", exampleZh: "普通天气的保险较便宜，极热或暴雨的保险更贵。把各种天气保险价格连起来，就像一张弯曲的微笑图。", label: "VOLATILITY SMILE · 波动率微笑", formula: "Implied vol = f(strike, expiry)", formulaZh: "隐含波动率取决于执行价和到期日", quote: ["25Δ EUR call vol · 欧元看涨波动率", "9.4%"] },
      { type: "concept", title: "Risk reversal shows direction", titleZh: "风险逆转反映方向情绪", body: "A risk reversal is the implied-volatility difference between an OTM call and an OTM put at the same absolute delta. A positive 25Δ EUR risk reversal means the EUR call volatility is higher.", bodyZh: "风险逆转 RR 是相同绝对 Delta 的价外看涨与价外看跌期权波动率之差。25 Delta 欧元 RR 为正，表示欧元看涨波动率更高。", exampleZh: "如果“涨价保险”比“降价保险”贵，说明更多人担心大涨。RR 比较两边保险价格，观察市场更怕哪个方向。", label: "RISK REVERSAL · 风险逆转", formula: "25Δ RR = σ(25Δ call) − σ(25Δ put)", formulaZh: "RR 为正：看涨一侧波动率更高", quote: ["EUR 25Δ RR", "+0.8 vol"] },
      { type: "concept", title: "Butterfly measures tail richness", titleZh: "蝶式衡量尾部风险价格", body: "A butterfly compares the average volatility of an OTM call and put with ATM volatility. It measures how expensive the wings—or extreme moves—are relative to the center.", bodyZh: "蝶式 BF 比较价外看涨与看跌的平均波动率和 ATM 波动率，衡量两侧极端行情相对中间行情有多贵。", exampleZh: "普通小雨保险是 10 元，暴雨和暴雪保险平均 14 元，多出的 4 元就是市场给极端天气加的价格。", label: "BUTTERFLY · 蝶式", formula: "25Δ BF = ½(σcall + σput) − σATM", formulaZh: "两翼平均波动率减去平值波动率", quote: ["EUR 25Δ BF", "+0.4 vol"] },
      { type: "quiz", title: "Interpret the skew", titleZh: "理解波动率偏斜", body: "EUR calls trade at higher implied volatility than comparable EUR puts. What does this suggest?", bodyZh: "欧元看涨期权的隐含波动率高于相近的欧元看跌期权。这通常说明什么？", answers: ["Stronger demand for EUR upside protection · 市场更需要欧元上涨保护", "Spot cannot fall · 汇率不可能下跌", "All strikes have equal value · 所有执行价价值相同", "Options have no time value · 期权没有时间价值"], correct: 0, explanation: "Higher call volatility often reflects stronger demand or concern about an upward EUR move.", explanationZh: "看涨期权更贵，通常表示更多人愿意为欧元大涨的保护付费；这不是说欧元一定会上涨。" }
    ]
  },
  "fx-options-hedging": {
    deskId: "fx-options",
    title: "Delta Hedging a Book",
    titleZh: "用 Delta 对冲管理头寸",
    pages: [
      { type: "concept", title: "Linear versus non-linear exposure", titleZh: "线性与非线性敞口", body: "Spot has linear exposure: a one-unit move creates roughly the same P&L change wherever spot starts. Options are non-linear: gains and losses curve as spot moves, allowing capped losses and asymmetric upside for a buyer.", bodyZh: "即期是线性敞口：汇率每变化相同幅度，损益也大致变化相同。期权是非线性的：损益随汇率弯曲变化，使买方能限制损失，同时保留不对称收益。", exampleZh: "即期像直尺，每走一步高度都增加一样；期权像滑梯，开始平缓、后来越来越陡。买方最多损失门票，但上升空间可以更大。", label: "PAYOFF SHAPE · 收益形状", formula: "Spot P&L ∝ S | Option P&L is curved", formulaZh: "即期损益是直线｜期权损益是曲线", quote: ["Long call downside · 买入看涨最大损失", "Premium · 期权费"] },
      { type: "concept", title: "Offset directional risk", titleZh: "抵消方向风险", body: "A trader can offset an option book's delta by trading spot or forwards in the opposite direction. As spot moves, gamma changes delta, so the hedge must be rebalanced.", bodyZh: "交易员可以做相反方向的即期或远期交易来抵消期权组合的 Delta。汇率变化后，Gamma 会让 Delta 改变，因此需要重新调整对冲。", exampleZh: "像跷跷板：右边多了 50 公斤，就在左边加 50 公斤保持平衡。小朋友移动位置后，又要重新调整。", label: "DELTA HEDGE · Delta 对冲", formula: "Hedge amount = − option-book delta", formulaZh: "对冲数量 = 期权组合 Delta 的相反数", quote: ["Option-book delta · 组合 Delta", "+€5 million"] },
      { type: "quiz", title: "Place the hedge", titleZh: "选择对冲交易", body: "An option book has +€5m delta. What simple trade makes it approximately delta-neutral?", bodyZh: "一个期权组合有 +500 万欧元 Delta。哪笔简单交易能让方向风险接近零？", answers: ["Buy €5m spot · 买入 500 万欧元", "Sell €5m spot · 卖出 500 万欧元", "Buy another positive-delta option · 再买正 Delta 期权", "Do nothing · 不操作"], correct: 1, explanation: "Selling €5m spot contributes −€5m delta, offsetting the option book's +€5m.", explanationZh: "卖出 500 万欧元带来 −500 万欧元 Delta，正好抵消组合的 +500 万，就像跷跷板两边重量相等。" }
    ]
  },
  "fx-options-structures": {
    deskId: "fx-options",
    title: "Product Map: Vanilla to Structured",
    titleZh: "产品谱系：从普通到结构化",
    pages: [
      { type: "concept", title: "Linear cash and derivative products", titleZh: "线性现货与衍生产品", body: "Spot, forwards, futures, and swaps are broadly linear: each small move in the underlying creates a similar P&L change. They are useful for direct exposure or locking a price, but a forward obligates both parties even when the market later moves favorably.", bodyZh: "即期、远期、期货和掉期大体属于线性产品：标的每变化一小步，损益变化也相近。它们适合直接持有敞口或锁定价格，但远期对双方都有约束，即使后来市场更有利也必须履约。", exampleZh: "像按直线计价的出租车，每多走一公里就多付相同金额；签了固定价送货合同后，市场降价也仍要按合同买。", label: "LINEAR PRODUCTS · 线性产品", formula: "Spot | Forward | Future | Swap", formulaZh: "损益通常随标的价格近似直线变化", quote: ["Forward payoff at expiry", "Notional × (market − strike)"] },
      { type: "concept", title: "Vanilla options are the building blocks", titleZh: "普通期权是基本积木", body: "A vanilla call or put has a standard strike and expiry with no barrier or averaging condition. Calls and puts can be combined into familiar strategies such as spreads, straddles, strangles, collars, and risk reversals; each leg remains vanilla even though the package has a tailored payoff.", bodyZh: "普通看涨或看跌期权只有标准执行价和到期日，没有障碍或平均价格条件。多个普通期权可组合成价差、跨式、宽跨式、领式和风险逆转；组合收益经过定制，但每一条腿仍是普通期权。", exampleZh: "红色和蓝色积木都很简单；把它们拼成房子后形状更复杂，但每块积木本身没有改变。", label: "VANILLA BUILDING BLOCKS · 普通期权积木", formula: "Call / Put → Spread, Straddle, Strangle, Collar, Risk Reversal", formulaZh: "看涨/看跌 → 多腿普通期权策略", quote: ["Vanilla EUR call", "Strike 1.1000 · 3-month expiry"] },
      { type: "concept", title: "Exotics add conditional rules", titleZh: "奇异期权加入条件规则", body: "Exotic options make payoff depend on the price path, an average, a barrier, several assets, or several dates. Structured products package derivatives with deposits, notes, or repeated forwards. Added conditions may improve a headline rate or lower premium, but create model, liquidity, gap, and suitability risks.", bodyZh: "奇异期权让收益取决于价格路径、平均值、障碍、多项资产或多个日期。结构性产品再把衍生品与存款、票据或多笔远期组合。附加条件可能改善表面汇率或降低期权费，却会增加模型、流动性、跳空和适用性风险。", exampleZh: "普通车票只写起点和终点；复杂车票还规定必须经过哪些站、何时打卡、碰到红线是否作废。优惠可能更多，规则也更重要。", label: "EXOTIC & STRUCTURED · 奇异与结构化", formula: "Headline benefit = compensation for embedded conditions and risk", formulaZh: "更优惠的表面条款通常来自客户承担额外条件与风险", quote: ["Examples · 示例", "Barrier · Asian · Digital · TARN · Autocallable"] },
      { type: "quiz", title: "Classify the product", titleZh: "判断产品类型", body: "A 3-month EUR call has one strike and expiry and no barrier, averaging, or early redemption rule. How is it best classified?", bodyZh: "一张三个月欧元看涨期权只有一个执行价和到期日，没有障碍、平均价格或提前赎回规则。它最适合归为哪一类？", answers: ["Vanilla option · 普通期权", "Barrier exotic · 障碍奇异期权", "TARN · 目标累计赎回票据", "Autocallable note · 自动赎回票据"], correct: 0, explanation: "A standard call or put without path-dependent conditions is a vanilla option.", explanationZh: "不带路径依赖条件的标准看涨或看跌期权就是普通期权，也是许多复杂结构的基本积木。" }
    ]
  },
  "fx-options-exotics": {
    deskId: "fx-options",
    title: "Exotic Option Families",
    titleZh: "常见奇异期权家族",
    pages: [
      { type: "concept", title: "Barrier options", titleZh: "障碍期权", body: "A barrier option activates (knock-in) or terminates (knock-out) if spot touches a specified level. Monitoring may be continuous or only at stated times. A cheaper knock-out is not free protection: the hedge can disappear after a sharp move and price gaps may jump across the barrier.", bodyZh: "障碍期权在汇率触及指定水平时生效（敲入）或终止（敲出），可连续观察，也可只在规定时点观察。较便宜的敲出保护并非免费：剧烈行情后保护可能消失，跳空也可能直接跨过障碍。", exampleZh: "像游戏门票碰到绿线才生效，碰到红线就作废。还要先问裁判是全天观察，还是每天收盘才检查。", label: "BARRIER FAMILY · 障碍家族", formula: "Knock-in: activates | Knock-out: terminates", formulaZh: "还需确认 up/down、in/out、观察时间与 rebate", quote: ["EUR/USD knock-out barrier", "1.1500 · continuous monitoring"] },
      { type: "concept", title: "Digital and touch options", titleZh: "数字与触碰期权", body: "A digital pays fixed cash or an asset if a condition is met. A one-touch pays when a barrier is reached; a no-touch pays only if it is never reached. Their discontinuous payoff produces concentrated delta and gamma near the trigger and makes precise fixing rules important.", bodyZh: "数字期权在条件满足时支付固定现金或资产；单触碰在到达障碍时支付；不触碰则仅在整个期间从未到达障碍时支付。收益不连续，因此触发价附近 Delta 和 Gamma 集中，定价规则必须明确。", exampleZh: "考试 60 分以上固定奖 100 元；59 与 60 分只差一分，奖励却从 0 跳到 100，所以临界点风险很大。", label: "DISCONTINUOUS PAYOFF · 不连续收益", formula: "Digital: fixed payout | One-touch: hit | No-touch: never hit", formulaZh: "固定支付与是否触碰有关，而非超过多少", quote: ["EUR/USD one-touch", "Pays $1m if 1.1500 trades"] },
      { type: "concept", title: "Asian, lookback, and basket options", titleZh: "亚式、回望与篮子期权", body: "An Asian option uses an average price, reducing dependence on one fixing. A lookback references the best or worst price over a period and is usually expensive because it grants hindsight. A basket or worst-of option depends on several assets and adds correlation risk.", bodyZh: "亚式期权使用平均价格，减少对单一时点的依赖；回望期权参考期间最好或最差价格，因为赋予“事后选择”通常较贵；篮子或最差表现期权依赖多项资产，还增加相关性风险。", exampleZh: "亚式看全月平均成绩；回望式让你挑全月最高分；最差表现篮子则按几门课里最低分决定奖励。", label: "PATH & MULTI-ASSET · 路径与多资产", formula: "Asian: average | Lookback: max/min | Basket: several underlyings", formulaZh: "关键风险：观察日、路径、相关性与流动性", quote: ["12-fixing Asian option", "Payoff uses monthly average"] },
      { type: "quiz", title: "Match the cash flow", titleZh: "匹配现金流", body: "A company receives USD every month and wants protection based on its average conversion rate. Which product best matches the exposure?", bodyZh: "一家公司每月收到美元，希望保护与平均换汇价格相匹配。哪种产品最贴合现金流？", answers: ["Average-rate Asian option · 平均汇率亚式期权", "One-touch digital · 单触碰数字期权", "Lookback option · 回望期权", "Single spot trade · 单笔即期"], correct: 0, explanation: "An average-rate Asian option can align its payoff with recurring conversions across several fixing dates.", explanationZh: "平均汇率亚式期权使用多个观察日，更接近企业分期换汇形成的真实平均价格。" }
    ]
  },
  "fx-options-tarn": {
    deskId: "fx-options",
    title: "TARNs, TARFs, and Structured Products",
    titleZh: "TARN、TARF 与结构性产品",
    pages: [
      { type: "concept", title: "TARN and TARF are related, not identical", titleZh: "TARN 与 TARF 相关但不相同", body: "TARN usually means target accrual redemption note: periodic coupons accrue toward a target, then the note redeems early. TARF means target redemption forward: a schedule of conditional FX exchanges ends when cumulative favorable settlements reach a target. Some providers use 'FX TARN' for related currency structures, so the legal form and cash flows—not the label—must control the analysis.", bodyZh: "TARN 通常指目标累计赎回票据：票息逐期累计至目标后，票据提前赎回。TARF 指目标赎回远期：一系列条件式换汇在有利结算累计达到目标后终止。有些机构把相关外汇结构称为“FX TARN”，所以分析必须以法律形式和现金流为准，不能只看名称。", exampleZh: "两种游戏都有“累计到目标就结束”的规则，但一个累计利息奖励，一个逐期换钱；名字相近，实际动作不同。", label: "TARN vs TARF · 票据与远期", formula: "TARN: coupon accrual note | TARF: repeated FX forwards", formulaZh: "共同点是目标赎回；法律形式和每期现金流不同", quote: ["First question · 第一个问题", "Is it a note or a forward structure?"] },
      { type: "concept", title: "How an FX TARF works", titleZh: "外汇 TARF 如何运作", body: "A TARF often offers an enhanced strike across scheduled fixings. Favorable settlement amounts accumulate toward a capped target; once reached, the remaining exchanges terminate. In a common leveraged version, adverse fixings may require exchange at two times the notional and losses do not reduce the target, so larger losses can repeat until maturity.", bodyZh: "TARF 常在多个定价日提供较优惠执行价。有利结算累计到目标后，剩余换汇终止。在常见杠杆版本中，不利时可能必须按双倍名义金额换汇，亏损又不抵减目标，因此较大损失可能反复发生直至到期。", exampleZh: "赢的时候每次拿 1 颗糖，累计 10 颗游戏就结束；输的时候每次交 2 颗，而且输掉的不减少目标，游戏还要继续。", label: "CAPPED GAIN, LEVERAGED LOSS · 收益封顶、损失可放大", formula: "Favorable: 1×, target-capped | Adverse: potentially 2×, repeated", formulaZh: "实际倍数、目标累计和最后一期结算均以条款书为准", quote: ["Stress question · 压力测试", "What if every fixing is adverse?"] },
      { type: "concept", title: "Read the term sheet before the label", titleZh: "先读条款，再看产品名称", body: "Check the legal form, underlying and currency direction, strike, fixing and settlement dates, target definition, leverage, barriers, knock-out timing, maximum notional, cancellation rights, collateral, and worst-case liquidity needs. Neither a TARN nor TARF is a vanilla hedge; a leveraged TARF may be unsuitable when the underlying exposure amount is uncertain.", bodyZh: "必须检查法律形式、标的与货币方向、执行价、定价与结算日、目标定义、杠杆、障碍、敲出时点、最大名义金额、取消权、抵押品和最坏流动性需求。TARN 与 TARF 都不是普通对冲；当基础敞口金额不确定时，杠杆 TARF 尤其可能不适用。", exampleZh: "买套餐不能只看“超值”两个字，要逐项看每月必须买多少、何时能停、退订费用，以及最坏时要付多少钱。", label: "SUITABILITY CHECK · 适用性检查", formula: "Map every scenario → cash amount, date, currency, and termination rule", formulaZh: "逐情景画出金额、日期、币种和终止条件", quote: ["Never rely on headline terms", "Stress every adverse observation"] },
      { type: "concept", title: "Accumulators and autocallables", titleZh: "累计期权与自动赎回产品", body: "An accumulator builds periodic purchases or sales and may include knock-outs and leveraged adverse amounts. An autocallable note redeems early if scheduled conditions are met and often exposes investors to downside below a protection barrier. These products share path dependence with TARNs and TARFs but have different cash flows.", bodyZh: "累计期权在多个日期累计买卖，可能带敲出和不利方向杠杆；自动赎回票据在观察日满足条件便提前赎回，跌破保护障碍后投资者往往承担下跌风险。它们与 TARN、TARF 一样具有路径依赖，但现金流各不相同。", exampleZh: "一个游戏累计买东西，一个达到条件提前还钱，另一个累计利息；都带自动规则，却不能当成同一种玩法。", label: "NAME ≠ PAYOFF · 名称不等于收益", formula: "Accumulator ≠ Autocallable ≠ TARF ≠ TARN", formulaZh: "始终以完整条款和情景现金流为准", quote: ["Core question · 核心问题", "What do I pay or receive in every scenario?"] },
      { type: "quiz", title: "Find the hidden risk", titleZh: "找出隐藏风险", body: "A TARF offers a better strike and 1× favorable settlements, but requires 2× notional on every adverse fixing until maturity. What is the key concern?", bodyZh: "一个 TARF 提供更优惠执行价，有利时按 1 倍金额结算，但不利时到期前每期都按 2 倍金额结算。最关键的风险是什么？", answers: ["Losses and hedge amounts can become leveraged and repeat · 损失和换汇金额可能加倍并反复发生", "The client has no FX exposure · 客户没有外汇敞口", "The target guarantees profit · 目标保证盈利", "Early termination always helps the client · 提前终止总对客户有利"], correct: 0, explanation: "The enhanced strike compensates for asymmetric terms: favorable gains are capped by early redemption while adverse exchanges can be larger and recur.", explanationZh: "优惠执行价来自不对称条件：有利收益达到目标就停止，不利换汇却可能按更大金额反复发生，必须按最坏情景评估。" }
    ]
  },
  "rates": {
    deskId: "rates",
    title: "Yield Curves and Market Structure",
    titleZh: "收益率曲线与市场结构",
    pages: [
      { type: "concept", title: "The yield curve", titleZh: "收益率曲线", body: "A yield curve plots one borrower's yields against time to maturity—commonly government debt such as US Treasuries. It lets traders compare short, medium, and long-term borrowing costs.", bodyZh: "收益率曲线把同一借款人的收益率与到期期限画在图上，常用美国国债等政府债券。它帮助交易员比较短期、中期与长期借钱成本。", exampleZh: "像一张不同租期的价目表：租 1 个月、2 年、10 年或 30 年的价格可能不同，把这些点连起来就是曲线。", label: "YIELD CURVE · 收益率曲线", formula: "x-axis: maturity | y-axis: yield", formulaZh: "横轴：期限｜纵轴：收益率", quote: ["US Treasury points · 美国国债期限", "1M · 2Y · 10Y · 30Y"] },
      { type: "concept", title: "Term structure", titleZh: "利率期限结构", body: "The term structure is the mathematical mapping of rates across maturities. The yield curve is its visual representation. Curves may slope upward, invert, or change shape as growth, inflation, and policy expectations move.", bodyZh: "利率期限结构是不同期限利率的数学映射，收益率曲线是它的图形表示。随着增长、通胀与政策预期变化，曲线可能向上、倒挂或改变形状。", exampleZh: "期限结构像每个年级的身高数据表；把数据画成线，才成为一条“身高曲线”。", label: "TERM STRUCTURE · 期限结构", formula: "r(T): maturity T → interest rate", formulaZh: "每个期限 T 对应一个利率", quote: ["2s10s slope · 2年/10年斜率", "Yield(10Y) − Yield(2Y)"] },
      { type: "concept", title: "Money markets versus capital markets", titleZh: "货币市场与资本市场", body: "Money markets fund maturities of one year or less using T-bills, commercial paper, certificates of deposit, and repos. Capital markets fund longer-term debt, mainly government and corporate bonds.", bodyZh: "货币市场处理一年以内融资，包括国库券、商业票据、存单与回购。资本市场处理一年以上长期债务，主要是政府债与公司债。", exampleZh: "货币市场像借同学一周零花钱；资本市场像贷款多年建房子。一个解决短期周转，一个支持长期计划。", label: "SHORT vs LONG FUNDING · 短期与长期融资", formula: "Money market ≤ 1 year | Capital market > 1 year", formulaZh: "货币市场不超过一年｜资本市场超过一年", quote: ["Core money-market instruments", "T-bill · CP · CD · Repo"] },
      { type: "quiz", title: "Classify the instrument", titleZh: "判断市场类别", body: "A 3-month Treasury bill belongs primarily to which market?", bodyZh: "三个月期国库券主要属于哪个市场？", answers: ["Money market · 货币市场", "Long-term capital market · 长期资本市场", "FX options market · 外汇期权市场", "Equity market · 股票市场"], correct: 0, explanation: "Its maturity is less than one year, so it is a money-market instrument.", explanationZh: "它的期限少于一年，因此属于货币市场工具。" }
    ]
  },
  "rates-bonds": {
    deskId: "rates",
    title: "Bonds and Cash Flows",
    titleZh: "债券与现金流",
    pages: [
      { type: "concept", title: "A bond is a loan in security form", titleZh: "债券是证券化的借款", body: "A bond is a fixed-income security: an investor lends to a government or company for a defined period. The issuer promises fixed or floating coupons and principal repayment, subject to credit risk.", bodyZh: "债券是一种固定收益证券：投资者把钱借给政府或公司一段时间，发行人承诺支付固定或浮动利息并归还本金，但仍存在信用风险。", exampleZh: "你借学校 100 元，学校给你一张借条，承诺每年付 4 元、五年后还 100 元。这张可交易借条就像债券。", label: "BOND CASH FLOWS · 债券现金流", formula: "Price = PV(coupons) + PV(principal)", formulaZh: "价格 = 利息现值 + 本金现值", quote: ["5-year bond · 五年债券", "4% annual coupon"] },
      { type: "concept", title: "Price and yield move oppositely", titleZh: "价格与收益率反向变化", body: "When market yields rise, existing fixed coupons become less attractive and bond prices fall. When yields fall, existing coupons look better and prices rise.", bodyZh: "市场收益率上升时，旧债券固定利息吸引力下降，价格会跌；市场收益率下降时，旧利息更有吸引力，价格会涨。", exampleZh: "旧存钱罐只给 3% 利息，新存钱罐给 5%，别人只愿意打折买旧的。", label: "PRICE–YIELD RELATIONSHIP · 价格收益率关系", formula: "Yield ↑ → Bond price ↓", formulaZh: "收益率上升，债券价格下降", quote: ["Rates +25 bp", "Bond price usually falls"] },
      { type: "quiz", title: "Move the bond price", titleZh: "判断债券价格", body: "Market yields rise sharply. What usually happens to an existing fixed-rate bond?", bodyZh: "市场收益率大幅上升，现有固定利率债券通常会怎样？", answers: ["Its price falls · 价格下跌", "Its price must rise · 价格一定上涨", "Its principal doubles · 本金翻倍", "Its maturity disappears · 到期日消失"], correct: 0, explanation: "Higher new-market yields make the old fixed coupon less attractive, reducing its price.", explanationZh: "新债券收益率更高，旧债券固定利息吸引力下降，因此价格通常下跌。" }
    ]
  },
  "rates-derivatives": {
    deskId: "rates",
    title: "Swaps, OIS, and FRAs",
    titleZh: "利率掉期、OIS 与 FRA",
    pages: [
      { type: "concept", title: "Fixed-for-floating interest rate swaps", titleZh: "固定对浮动利率掉期", body: "In an interest rate swap (IRS), two parties exchange interest cash flows on a notional principal. A common trade pays fixed 4% and receives floating SOFR; the notional usually is not exchanged.", bodyZh: "利率掉期（IRS）让双方按名义本金交换利息现金流。常见交易是一方支付固定 4%、收取浮动 SOFR；名义本金通常不真正交换。", exampleZh: "两位同学不交换存钱罐本金，只交换各自收到的利息：一个固定，另一个随市场变化。", label: "IRS · 利率掉期", formula: "Pay fixed / receive floating or vice versa", formulaZh: "付固定收浮动，或付浮动收固定", quote: ["Example · 示例", "Pay 4% / Receive SOFR"] },
      { type: "concept", title: "Overnight index swaps", titleZh: "隔夜指数掉期", body: "An OIS swaps a fixed rate against compounded overnight rates such as SOFR or €STR. Because overnight benchmarks carry limited bank-credit risk, OIS curves are widely used for discounting and reading central-bank policy expectations.", bodyZh: "OIS 用固定利率交换 SOFR 或 €STR 等复利隔夜利率。隔夜基准银行信用风险较低，因此 OIS 曲线广泛用于折现和观察央行政策预期。", exampleZh: "市场把未来每天的隔夜利率预期折叠成一个固定平均价，像先猜一学期每天温度的平均值。", label: "OIS · 隔夜指数掉期", formula: "Fixed rate ↔ compounded overnight rate", formulaZh: "固定利率交换复利隔夜利率", quote: ["Policy expectation · 政策预期", "Next meeting OIS"] },
      { type: "concept", title: "Forward rate agreements", titleZh: "远期利率协议", body: "A forward rate agreement (FRA) is an OTC contract fixing an interest rate today for a borrowing or lending period that begins in the future. It settles the rate difference rather than exchanging the loan principal.", bodyZh: "远期利率协议（FRA）是在场外市场今天锁定一段未来借贷期的利率。通常只结算利率差额，不交换贷款本金。", exampleZh: "你今天就和银行约好：三个月后开始的一笔六个月借款按固定利率计算，避免届时利率突然上涨。", label: "FRA · 远期利率协议", formula: "3×9 FRA: starts in 3m, ends in 9m", formulaZh: "3×9 FRA：三个月后开始，九个月后结束", quote: ["Future borrowing rate", "Fixed today · 今天锁定"] },
      { type: "quiz", title: "Identify the policy instrument", titleZh: "识别政策预期工具", body: "Which instrument most directly exchanges a fixed rate for compounded overnight rates?", bodyZh: "哪种工具最直接用固定利率交换复利隔夜利率？", answers: ["OIS · 隔夜指数掉期", "Corporate bond · 公司债", "FX spot · 外汇即期", "Equity option · 股票期权"], correct: 0, explanation: "An OIS floating leg is linked to compounded overnight reference rates.", explanationZh: "OIS 的浮动端与复利隔夜参考利率挂钩。" }
    ]
  },
  "rates-benchmarks": {
    deskId: "rates",
    title: "Risk-Free Reference Rates",
    titleZh: "无风险参考利率",
    pages: [
      { type: "concept", title: "Why markets use RFRs", titleZh: "市场为什么使用 RFR", body: "Risk-free rates (RFRs) are overnight benchmarks used to price and value financial contracts. They are based on broad transaction data and replaced many LIBOR settings after benchmark reform.", bodyZh: "无风险参考利率（RFR）是用于金融合约定价与估值的隔夜基准。它们基于广泛真实交易数据，并在基准改革后取代许多 LIBOR 设置。", exampleZh: "像全班用大量真实成交记录算出的统一参考价，而不是只问少数同学“你觉得价格是多少”。", label: "RFR BENCHMARKS · 无风险基准", formula: "Overnight transaction data → reference rate", formulaZh: "隔夜真实交易数据形成参考利率", quote: ["USD / EUR / GBP", "SOFR / €STR / SONIA"] },
      { type: "concept", title: "SOFR, €STR, and SONIA", titleZh: "SOFR、€STR 与 SONIA", body: "SOFR is the USD benchmark based on secured US Treasury repo transactions and replaced USD LIBOR. €STR measures euro wholesale unsecured overnight borrowing. SONIA measures sterling overnight unsecured transactions.", bodyZh: "SOFR 是基于美国国债回购真实交易的美元有担保隔夜基准，取代美元 LIBOR；€STR 衡量欧元批发无担保隔夜借款；SONIA 衡量英镑无担保隔夜交易。", exampleZh: "三种货币有三把不同尺子：美元用 SOFR，欧元用 €STR，英镑用 SONIA。尺子的取材方式也不完全相同。", label: "MAJOR RFRs · 主要无风险利率", formula: "USD: SOFR | EUR: €STR | GBP: SONIA", formulaZh: "美元｜欧元｜英镑基准", quote: ["Secured benchmark · 有担保基准", "SOFR"] },
      { type: "quiz", title: "Match the benchmark", titleZh: "匹配参考利率", body: "Which RFR is based on US Treasury repo transactions?", bodyZh: "哪一个无风险参考利率基于美国国债回购交易？", answers: ["SOFR", "€STR", "SONIA", "CPI"], correct: 0, explanation: "SOFR is calculated from transactions in the US Treasury repo market.", explanationZh: "SOFR 根据美国国债回购市场的真实交易计算。" }
    ]
  },
  "rates-policy": {
    deskId: "rates",
    title: "Central Banks and FX Differentials",
    titleZh: "央行与外汇利差",
    pages: [
      { type: "concept", title: "Policy ripples through the curve", titleZh: "政策如何传导到收益率曲线", body: "Central banks such as the Federal Reserve and ECB set or guide short-term policy rates. Changes directly affect the front end; longer yields also reflect expected future policy, inflation, growth, and term premium.", bodyZh: "美联储、欧洲央行等设定或引导短期政策利率。政策直接影响曲线前端；长期收益率还反映未来政策、通胀、增长与期限溢价。", exampleZh: "央行像调节河流源头的水闸，近处水位反应最快，远处还受天气、河道和大家对未来的预期影响。", label: "POLICY TRANSMISSION · 政策传导", formula: "Policy rate → money markets → yield curve", formulaZh: "政策利率传导至货币市场与收益率曲线", quote: ["Fed policy benchmark", "Federal funds target range"] },
      { type: "concept", title: "Interest-rate differentials and FX", titleZh: "利差与外汇", body: "The interest-rate differential compares returns in two currencies and is a major FX driver. All else equal, higher expected returns may attract capital and support a currency—but inflation, risk, hedging costs, and expectations can overturn this tendency.", bodyZh: "利差比较两种货币的回报，是重要汇率驱动因素。在其他条件相同下，较高预期回报可能吸引资金并支持货币；但通胀、风险、对冲成本与预期都可能推翻这一倾向。", exampleZh: "两个存钱罐一个给 5%、一个给 2%，大家可能更想用前者；但如果 5% 的罐子不安全，资金未必会去。", label: "RATE DIFFERENTIAL · 利率差", formula: "Differential = rate A − rate B", formulaZh: "利差 = A 国利率 − B 国利率", quote: ["USD rate − JPY rate", "+4.5%"] },
      { type: "quiz", title: "Read the long end", titleZh: "理解长端利率", body: "Why might a 10-year yield rise even if today's policy rate is unchanged?", bodyZh: "即使今天政策利率不变，为什么十年期收益率仍可能上升？", answers: ["Inflation or future policy expectations changed · 通胀或未来政策预期改变", "Ten-year bonds have no price · 十年债没有价格", "SOFR stopped existing · SOFR 消失", "All curves must be flat · 所有曲线必须平坦"], correct: 0, explanation: "Long yields incorporate expectations for future rates, inflation, growth, and term premium.", explanationZh: "长期收益率包含未来利率、通胀、增长和期限溢价预期。" }
    ]
  },
  "rates-carry": {
    deskId: "rates",
    title: "Carry and Real Yields",
    titleZh: "套利交易与实际收益率",
    pages: [
      { type: "concept", title: "The currency carry trade", titleZh: "货币套利交易", body: "A carry trade borrows a low-yield funding currency—historically often JPY—and invests in a higher-yield target currency. It earns the differential if exchange rates are stable, but an adverse FX move can erase years of carry.", bodyZh: "套利交易借入低利率融资货币（历史上常见日元），投资高利率目标货币。汇率稳定时赚取利差，但不利汇率变化可能抹去多年收益。", exampleZh: "你用 1% 成本借钱并赚 5% 利息，看似多 4%；但投资货币若下跌 10%，最后仍会亏损。", label: "CARRY TRADE · 套利交易", formula: "Approx. carry = target yield − funding cost", formulaZh: "近似持有收益 = 目标收益率 − 融资成本", quote: ["Funding / target · 融资/目标货币", "JPY / higher-yield currency"] },
      { type: "concept", title: "Nominal versus real rates", titleZh: "名义利率与实际利率", body: "The nominal rate is the stated rate. The real rate adjusts for inflation: approximately nominal rate minus expected inflation. Long-term FX valuation often responds to changes in real-yield differentials.", bodyZh: "名义利率是看到的利率；实际利率扣除通胀影响，近似等于名义利率减预期通胀。长期汇率常对实际收益率差的变化敏感。", exampleZh: "存款利率 5%，但物价上涨 3%，购买力真正增加约 2%。5% 是名义利率，约 2% 是实际利率。", label: "REAL RATE · 实际利率", formula: "Real rate ≈ nominal rate − expected inflation", formulaZh: "实际利率 ≈ 名义利率 − 预期通胀", quote: ["Nominal 5% / inflation 3%", "Real ≈ 2%"] },
      { type: "quiz", title: "Calculate the real rate", titleZh: "计算实际利率", body: "Nominal yield is 4% and expected inflation is 2.5%. Approximate real yield?", bodyZh: "名义收益率为 4%，预期通胀为 2.5%，近似实际收益率是多少？", answers: ["1.5%", "6.5%", "4.0%", "−6.5%"], correct: 0, explanation: "Approximate real yield is 4% − 2.5% = 1.5%.", explanationZh: "近似实际收益率 = 4% − 2.5% = 1.5%。" }
    ]
  },
  "rates-risk": {
    deskId: "rates",
    title: "Duration, Convexity, DV01 and PV01",
    titleZh: "久期、凸性、DV01 与 PV01",
    pages: [
      { type: "concept", title: "Duration measures rate sensitivity", titleZh: "久期衡量利率敏感度", body: "Modified duration estimates the percentage price change for a 1 percentage-point yield move. Higher duration means larger price swings. The estimate is linear and most accurate for small moves.", bodyZh: "修正久期估算收益率变化 1 个百分点时债券价格变化百分比。久期越高，价格波动越大；这是线性近似，对小幅变化最准确。", exampleZh: "久期像跷跷板臂长：坐得离中心越远，同样的力量造成的上下移动越大。", label: "DURATION · 久期", formula: "ΔPrice/Price ≈ −Duration × Δyield", formulaZh: "价格百分比变化 ≈ −久期 × 收益率变化", quote: ["Duration 5, yields +1%", "Price ≈ −5%"] },
      { type: "concept", title: "Convexity captures curvature", titleZh: "凸性衡量弯曲程度", body: "Convexity measures how duration changes as yields move and corrects the straight-line duration estimate. For a standard positive-convexity bond, price gains from a rate fall exceed losses from an equal rate rise.", bodyZh: "凸性衡量利率变化时久期如何改变，并修正久期的直线估算。标准正凸性债券在利率下降时的上涨通常大于同幅利率上升时的下跌。", exampleZh: "地球表面是弯的，短距离可用直线估算，走得越远越需要加入曲率修正。", label: "CONVEXITY · 凸性", formula: "Price change ≈ duration effect + ½×convexity×(Δy)²", formulaZh: "价格变化 ≈ 久期影响 + 凸性修正", quote: ["Large yield move", "Convexity matters more"] },
      { type: "concept", title: "DV01 and PV01", titleZh: "DV01 与 PV01", body: "DV01 is the dollar value change for a 1 bp parallel yield move, commonly used for bonds and portfolios. PV01 is the present-value impact of a 1 bp curve shift, commonly used for swaps. Desks sometimes use the terms similarly, so methodology and sign must be stated.", bodyZh: "DV01 是收益率平行移动 1 个基点时债券或组合的美元价值变化；PV01 是掉期曲线移动 1 个基点时的现值影响。交易台有时近似使用两词，因此必须说明算法与正负号。", exampleZh: "温度计告诉你升高 1°C 会怎样；DV01/PV01 告诉你利率变化 0.01% 时，组合会变化多少钱。", label: "ONE-BASIS-POINT RISK · 单基点风险", formula: "1 bp = 0.01% = 0.0001", formulaZh: "DV01/PV01：曲线变动 1 基点的价值影响", quote: ["Portfolio DV01", "$25,000 per bp"] },
      { type: "quiz", title: "Compare duration risk", titleZh: "比较久期风险", body: "Bond A has duration 2 and Bond B duration 8. For the same small yield move and similar value, which is more rate-sensitive?", bodyZh: "债券 A 久期为 2，债券 B 久期为 8。价值相近且收益率小幅同向变化时，哪个对利率更敏感？", answers: ["Bond B · 债券 B", "Bond A · 债券 A", "They must be identical · 一定相同", "Duration cannot measure sensitivity · 久期不能衡量敏感度"], correct: 0, explanation: "Higher duration implies a larger approximate price change for the same yield move.", explanationZh: "久期越高，同样收益率变化造成的近似价格变化越大。" }
    ]
  }
};

const fxFoundationLessonIds = ["fx-foundations"];
const fxCashLessonIds = ["fx-cash", "fx-cash-market", "fx-cash-forwards", "fx-cash-swaps", "fx-cash-macro", "fx-cash-risks"];
const fxOptionLessonIds = ["fx-options", "fx-options-pricing", "fx-options-delta", "fx-options-risk", "fx-options-vol", "fx-options-pnl", "fx-options-hedging", "fx-options-structures", "fx-options-exotics", "fx-options-tarn"];
const ratesLessonIds = ["rates", "rates-bonds", "rates-derivatives", "rates-benchmarks", "rates-policy", "rates-carry", "rates-risk"];
const deskLessonIds = { "fx-foundations": fxFoundationLessonIds, "fx-cash": fxCashLessonIds, "fx-options": fxOptionLessonIds, rates: ratesLessonIds };
const defaultState = { xp: 0, completed: [], completedLessons: [], cfaCompleted: [], quizAttempts: 0, quizCorrect: 0, daily: 0 };
let state = loadState();
let currentPage = 0;
let activeLessonId = "fx-cash";
let answerSelected = false;
let activeCfaLevel = "1";
let activeCfaModule = null;

function loadState() {
  try {
    const loaded = { ...defaultState, ...JSON.parse(localStorage.getItem("marketcraft-progress")) };
    loaded.completed = [...loaded.completed];
    loaded.completedLessons = [...(loaded.completedLessons || [])];
    loaded.cfaCompleted = [...(loaded.cfaCompleted || [])];
    const hasPriorFxProgress = loaded.completed.some(id => id === "fx-cash" || id === "fx-options") || loaded.completedLessons.some(id => id.startsWith("fx-cash") || id.startsWith("fx-options"));
    if (hasPriorFxProgress && !loaded.completedLessons.includes("fx-foundations")) loaded.completedLessons.push("fx-foundations");
    if (hasPriorFxProgress && !loaded.completed.includes("fx-foundations")) loaded.completed.push("fx-foundations");
    for (const deskId of ["fx-cash", "fx-options"]) {
      if (!loaded.completed.includes(deskId)) continue;
      if (!loaded.completedLessons.includes(deskId)) loaded.completedLessons.push(deskId);
      if (!deskLessonIds[deskId].every(id => loaded.completedLessons.includes(id))) loaded.completed = loaded.completed.filter(id => id !== deskId);
    }
    return loaded;
  }
  catch { return { ...defaultState, completed: [], completedLessons: [], cfaCompleted: [] }; }
}

function lessonComplete(lessonId) {
  return state.completedLessons.includes(lessonId);
}

function nextLessonForDesk(deskId) {
  const lessonIds = deskLessonIds[deskId];
  if (!lessonIds) return deskId;
  return lessonIds.find(id => !lessonComplete(id)) || lessonIds.at(-1);
}

function saveState() {
  localStorage.setItem("marketcraft-progress", JSON.stringify(state));
  renderAll();
}

function renderAll() {
  renderDesks();
  renderStats();
  renderProgress();
}

function renderDesks() {
  const grid = document.querySelector("#desk-grid");
  grid.innerHTML = desks.map((desk, index) => {
    const done = state.completed.includes(desk.id);
    const lessonIds = deskLessonIds[desk.id];
    const lessonsDone = lessonIds ? lessonIds.filter(lessonComplete).length : Number(done);
    const locked = desk.id === "fx-cash" || desk.id === "fx-options" ? !state.completed.includes("fx-foundations") : index > 0 && !state.completed.includes(desks[index - 1].id);
    const status = done ? "✓ COMPLETE · 完成" : locked ? "LOCKED · 锁定" : lessonsDone ? "IN PROGRESS · 学习中" : "READY · 可学习";
    return `<article class="desk-card ${desk.id === "fx-foundations" ? "foundation-card" : ""} ${locked ? "locked" : ""}" style="--accent:${desk.accent}" data-desk="${desk.id}" data-locked="${locked}">
      <div class="desk-icon">${desk.code}</div><span class="desk-status">${status}</span>
      <h3>${desk.title}<small>${desk.titleZh}</small></h3><p>${desk.description}<span class="zh-line">${desk.descriptionZh}</span></p>
      <div class="kid-example">💡 ${desk.exampleZh}</div>
      <div class="desk-footer"><span>${desk.lessons} LESSONS · 课程</span><strong>${done ? "100%" : locked ? "—" : lessonsDone ? `${lessonsDone}/${desk.lessons} · CONTINUE →` : "START · 开始 →"}</strong></div>
    </article>`;
  }).join("");
}

function renderStats() {
  const nextDeskId = ["fx-foundations", "fx-cash", "fx-options", "rates"].find(id => !state.completed.includes(id)) || "rates";
  const nextLessonId = nextLessonForDesk(nextDeskId);
  const nextLesson = lessons[nextLessonId];
  const nextDesk = desks.find(desk => desk.id === nextLesson.deskId);
  const isComplete = lessonComplete(nextLessonId);
  const lessonNumber = deskLessonIds[nextDesk.id].indexOf(nextLessonId) + 1;
  document.querySelector("#xp-count").textContent = state.xp;
  document.querySelector("#streak-count").textContent = state.xp ? Math.max(1, Math.ceil(state.daily / 3)) : 1;
  document.querySelector("#profile-level").textContent = Math.floor(state.xp / 250) + 1;
  document.querySelector("#goal-count").textContent = `${Math.min(state.daily, 3)}/3`;
  document.querySelector("#goal-ring").style.background = `conic-gradient(var(--lime) ${Math.min(state.daily / 3, 1) * 360}deg, #385046 0deg)`;
  document.querySelector(".lesson-symbol").textContent = nextDesk.code;
  document.querySelector(".module-tag").textContent = `MACRO · ${nextDesk.title.toUpperCase()} · ${nextDesk.titleZh}`;
  document.querySelector("#continue-title").innerHTML = `${nextLesson.title}<small>${nextLesson.titleZh}</small>`;
  document.querySelector("#continue-meta").textContent = `Lesson ${lessonNumber} of ${nextDesk.lessons} · 第 ${lessonNumber}/${nextDesk.lessons} 课 · 8 min`;
  document.querySelector("#continue-progress").style.width = isComplete ? "100%" : "25%";
  document.querySelector("#continue-button").innerHTML = isComplete ? "Review · 复习 <span>→</span>" : "Start · 开始 <span>→</span>";
  document.querySelector("#continue-button").dataset.lesson = nextLessonId;
}

function renderProgress() {
  document.querySelector("#metric-xp").textContent = state.xp;
  document.querySelector("#metric-lessons").textContent = state.completedLessons.length;
  document.querySelector("#metric-score").textContent = state.quizAttempts ? `${Math.round(state.quizCorrect / state.quizAttempts * 100)}%` : "—";
  document.querySelector("#desk-progress").innerHTML = desks.map((desk, index) => {
    const lessonIds = deskLessonIds[desk.id];
    const percent = lessonIds ? lessonIds.filter(lessonComplete).length / lessonIds.length * 100 : state.completed.includes(desk.id) ? 100 : 0;
    return `<div class="desk-progress-row"><strong>${desk.title}<small>${desk.titleZh}</small></strong><div class="progress-track"><span style="width:${percent}%;background:${desk.accent}"></span></div><span>${percent}%</span></div>`;
  }).join("");
}

function showView(name) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === `${name}-view`));
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === name));
  document.querySelector("#sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLesson(lessonId = "fx-cash") {
  if (!lessons[lessonId]) return;
  activeLessonId = lessonId;
  currentPage = 0;
  renderLessonPage();
  document.querySelector("#lesson-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function renderLessonPage() {
  const lesson = lessons[activeLessonId];
  const page = lesson.pages[currentPage];
  answerSelected = false;
  document.querySelector("#modal-step").textContent = page.type === "quiz" ? "KNOWLEDGE CHECK · 知识挑战" : `CONCEPT ${currentPage + 1} OF ${lesson.pages.length - 1} · 概念 ${currentPage + 1}/${lesson.pages.length - 1}`;
  const content = document.querySelector("#lesson-content");
  if (page.type === "concept") {
    content.innerHTML = `<h2 id="lesson-title">${page.title}<small>${page.titleZh}</small></h2><p class="lead">${page.body}</p>
      <p class="lead zh-explanation" lang="zh-CN">${page.bodyZh}</p>
      <div class="kid-example lesson-example"><strong>🌱 小朋友也能懂</strong>${page.exampleZh}</div>
      <div class="concept-box"><strong>${page.label}</strong><p>${page.formula}</p>${page.formulaZh ? `<p class="zh-formula">${page.formulaZh}</p>` : ""}</div>
      <div class="market-quote"><span>${page.quote[0]}</span><strong>${page.quote[1]}</strong></div>
      <div class="modal-actions"><button class="primary-button" id="next-page">Continue · 继续 <span>→</span></button></div>`;
  } else {
    content.innerHTML = `<h2 id="lesson-title">${page.title}<small>${page.titleZh}</small></h2><p class="lead">${page.body}</p><p class="lead zh-explanation" lang="zh-CN">${page.bodyZh}</p>
      <div class="answer-list">${page.answers.map((answer, i) => `<button class="answer-button" data-answer="${i}">${answer}</button>`).join("")}</div>
      <p class="feedback" id="feedback">Select the best answer. · 请选择最合适的答案。</p>
      <div class="modal-actions"><button class="primary-button" id="finish-lesson" disabled>Complete · 完成本课 <span>→</span></button></div>`;
  }
}

function closeModal() {
  document.querySelector("#lesson-modal").hidden = true;
  document.body.style.overflow = "";
}

function answerQuiz(button) {
  if (answerSelected) return;
  const lesson = lessons[activeLessonId];
  answerSelected = true;
  const selected = Number(button.dataset.answer);
  const correct = selected === lesson.pages[currentPage].correct;
  button.classList.add(correct ? "correct" : "wrong");
  document.querySelectorAll(".answer-button")[lesson.pages[currentPage].correct].classList.add("correct");
  const feedback = document.querySelector("#feedback");
  const result = correct ? "✓ Correct · 回答正确" : "✗ Incorrect · 回答不正确";
  feedback.innerHTML = `<strong class="feedback-result">${result}</strong>${lesson.pages[currentPage].explanation}<span class="zh-line">${lesson.pages[currentPage].explanationZh}</span>`;
  feedback.className = `feedback ${correct ? "success" : "error"}`;
  document.querySelector("#finish-lesson").disabled = false;
  state.quizAttempts += 1;
  if (correct) state.quizCorrect += 1;
}

function finishLesson() {
  const activeLesson = lessons[activeLessonId];
  const firstCompletion = !lessonComplete(activeLessonId);
  if (firstCompletion) {
    state.completedLessons.push(activeLessonId);
    const deskFinished = deskLessonIds[activeLesson.deskId].every(lessonComplete);
    if (deskFinished && !state.completed.includes(activeLesson.deskId)) state.completed.push(activeLesson.deskId);
    state.xp += 100;
    state.daily += 1;
  }
  saveState();
  closeModal();
  showToast(firstCompletion ? `+100 XP · ${activeLesson.title} complete · 本课完成` : "Lesson reviewed · 已完成复习");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function renderGlossary(query = "") {
  const normalized = query.trim().toLowerCase();
  const results = glossary.filter(term => term.join(" ").toLowerCase().includes(normalized));
  document.querySelector("#glossary-grid").innerHTML = results.length ? results.map(term => `<article class="term-card"><strong>${term[0]} <small>${term[1]}</small></strong><span>${term[2]}</span><p>${term[3]}</p><p class="zh-definition" lang="zh-CN">${term[4]}</p><div class="kid-example">🌱 ${term[5]}</div></article>`).join("") : "<p>No matching terms found. · 没有找到相关词汇。</p>";
}

function renderSimulations() {
  document.querySelector("#simulation-grid").innerHTML = simulations.map(sim => `<article class="simulation-card"><div class="sim-top"><span class="sim-type">${sim.type}</span><span class="difficulty">${sim.difficulty}</span></div><h2>${sim.title}<small>${sim.titleZh}</small></h2><p>${sim.text}<span class="zh-line">${sim.textZh}</span></p><button class="primary-button sim-button" data-sim="${sim.desk}"${sim.lesson ? ` data-lesson="${sim.lesson}"` : ""}>Enter · 进入场景 <span>→</span></button></article>`).join("");
}

function renderCfaReview(query = "") {
  const level = window.cfaReviewLevels.find(item => item.id === activeCfaLevel);
  const normalized = query.trim().toLowerCase();
  const topics = level.topics.map((topic, index) => ({ ...topic, index })).filter(topic => Object.values(topic).join(" ").toLowerCase().includes(normalized));
  const moduleSummary = level.id === "3" ? "22 CORE + 22 ACROSS 3 PATHWAYS · 22 个共同核心 + 3 个方向共 22 个模块（择一）" : `${level.moduleCount} OFFICIAL LEARNING MODULES · ${level.moduleCount} 个必修模块`;
  document.querySelector("#cfa-level-tabs").innerHTML = window.cfaReviewLevels.map(item => `<button class="cfa-level-tab ${item.id === activeCfaLevel ? "active" : ""}" role="tab" aria-selected="${item.id === activeCfaLevel}" data-cfa-level="${item.id}">${item.label}<span class="zh-line">${item.labelZh}</span></button>`).join("");
  document.querySelector("#cfa-level-summary").innerHTML = `<div><strong>${level.label} · ${level.labelZh}</strong><span>${level.focus}</span></div><small>${moduleSummary}</small>`;
  document.querySelector("#cfa-topic-grid").innerHTML = topics.length ? topics.map(topic => `<article class="cfa-topic-card">
    <header><div class="cfa-topic-meta"><span>${topic.officialCategory}<br>${topic.categoryZh}</span><span>${topic.weight}</span></div><h2>${topic.modules.length} Learning Modules<small>${topic.modules.filter((module, moduleIndex) => state.cfaCompleted.includes(cfaModuleId(level.id, topic.index, moduleIndex))).length}/${topic.modules.length} 已完成 · 点击模块进入完整课程</small></h2></header>
    <div class="cfa-topic-body"><h3>${topic.title}<small>${topic.titleZh}</small></h3><p>${topic.explanation}</p><p class="zh-explanation" lang="zh-CN">${topic.explanationZh}</p><div class="cfa-formula">${topic.formula}</div><div class="kid-example">💡 ${topic.exampleZh}</div><h3 class="cfa-checklist-title">Module learning center · 模块学习中心</h3><ol class="cfa-module-list">${topic.modules.map((module, moduleIndex) => { const complete = state.cfaCompleted.includes(cfaModuleId(level.id, topic.index, moduleIndex)); return `<li><button class="cfa-module-button ${complete ? "complete" : ""}" data-cfa-topic="${topic.index}" data-cfa-module="${moduleIndex}"><span>${module}</span><small>${complete ? "✓ 已完成" : "开始学习 →"}</small></button></li>`; }).join("")}</ol></div>
  </article>`).join("") : `<p class="cfa-empty">No matching review points. · 没有找到相关复习点。</p>`;
}

function cfaModuleId(levelId, topicIndex, moduleIndex) {
  return `cfa-${levelId}-${topicIndex}-${moduleIndex}`;
}

function cfaModuleFocus(module, topic) {
  const title = module.toLowerCase();
  const lenses = [
    [/ethic|conduct|standards|trust|gips/, ["Separate professional duties, required conduct, and the facts that change the ethical decision.", "区分专业责任、应采取的行为，以及会改变道德判断的关键事实。"]],
    [/regression|statistic|probability|hypothesis|simulation|time-series|machine learning|big data/, ["Identify the model inputs, interpret the output, and test whether the conclusion is statistically and economically meaningful.", "识别模型输入、解释输出，并判断结论在统计与经济意义上是否成立。"]],
    [/valuation|value|discount|cash flow|dividend|residual income/, ["Map the expected cash flows, choose a consistent discount rate, and explain which assumption drives value most.", "列出预期现金流、选择一致的折现率，并说明哪个假设最影响估值。"]],
    [/bond|yield|duration|convexity|term structure|interest rate|fixed-income/, ["Connect promised cash flows, the yield curve, and interest-rate sensitivity to the instrument's price and risk.", "把约定现金流、收益率曲线和利率敏感度连接到工具的价格与风险。"]],
    [/credit|default|debt/, ["Separate default probability, loss severity, spread compensation, and liquidity when assessing credit risk.", "评估信用风险时，区分违约概率、损失程度、利差补偿与流动性。"]],
    [/derivative|option|forward|future|swap|arbitrage|contingent/, ["Draw the payoff first, identify each party's obligation or right, then apply no-arbitrage pricing and risk measures.", "先画收益结构，识别双方的义务或权利，再使用无套利定价和风险指标。"]],
    [/portfolio|allocation|manager selection|active management|multifactor/, ["Translate the investor objective into constraints, exposures, portfolio weights, and a measurable evaluation rule.", "把投资者目标转化为约束、风险敞口、组合权重和可衡量的评价标准。"]],
    [/performance|return|benchmark|attribution/, ["Measure return consistently, compare it with an appropriate benchmark, and separate skill from risk exposure.", "用一致方法衡量收益，与合适基准比较，并区分能力与风险暴露。"]],
    [/income statement|balance sheet|cash flow statement|inventor|tax|reporting|financial statement|employee compensation|multinational/, ["Trace the transaction through recognition, measurement, presentation, and its effect on cash flow and ratios.", "沿着确认、计量和列报追踪交易，并判断其对现金流与比率的影响。"]],
    [/equity|company|industry|market efficiency|security market/, ["Link industry structure and company fundamentals to expected cash flows, risk, and the market price.", "把行业结构和公司基本面连接到预期现金流、风险与市场价格。"]],
    [/econom|currency|exchange rate|trade|geopolit|monetary|fiscal|growth/, ["Build the cause-and-effect chain from policy or economic change to expectations, flows, prices, and currencies.", "建立从政策或经济变化到预期、资金流、价格和汇率的因果链。"]],
    [/private|real estate|infrastructure|commodity|hedge fund|alternative|natural resource|digital asset/, ["Identify the return source, cash-flow structure, liquidity limits, valuation method, and risks hidden by infrequent pricing.", "识别收益来源、现金流结构、流动性限制、估值方法，以及低频定价掩盖的风险。"]]
  ];
  return (lenses.find(([pattern]) => pattern.test(title)) || [null, [`Organize ${module} into definitions, relationships, application steps, and limitations.`, `把“${module}”整理为定义、关系、应用步骤与局限。`]])[1];
}

function openCfaModule(topicIndex, moduleIndex) {
  const level = window.cfaReviewLevels.find(item => item.id === activeCfaLevel);
  const topic = level.topics[topicIndex];
  if (!topic) return;
  const module = topic.modules[moduleIndex];
  if (!module) return;
  activeCfaModule = { level, topic, topicIndex, moduleIndex, module, id: cfaModuleId(level.id, topicIndex, moduleIndex) };
  renderCfaModule();
  document.querySelector("#cfa-study-content").scrollTop = 0;
  document.querySelector("#cfa-study-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function renderCfaModule() {
  const { level, topic, module, moduleIndex, id } = activeCfaModule;
  const complete = state.cfaCompleted.includes(id);
  const focus = cfaModuleFocus(module, topic);
  const verbs = level.id === "1" ? ["Identify · 识别", "Calculate · 计算", "Interpret · 解释"] : level.id === "2" ? ["Analyze · 分析", "Value · 估值", "Compare · 比较"] : ["Integrate · 综合", "Recommend · 建议", "Justify · 论证"];
  document.querySelector("#cfa-study-meta").innerHTML = `<p class="eyebrow">${level.label} · ${topic.categoryZh}</p><strong>${moduleIndex + 1}. ${module}</strong><small>${topic.officialCategory} · ${topic.weight}</small><div class="cfa-study-progress"><span style="width:${complete ? 100 : 25}%"></span></div>`;
  document.querySelector("#cfa-study-content").innerHTML = `<header><p class="eyebrow">FULL LEARNING MODULE · 完整学习模块</p><h1 id="cfa-study-title">${module}</h1><p class="cfa-study-lead">This learning path turns the syllabus title into a repeatable exam framework: understand the idea, apply it to a simple case, and check your judgment.<span class="zh-line">这里不是预览清单：请依次完成学习目标、核心框架、简单实例和知识检查。</span></p></header>
    <section class="cfa-study-section" id="cfa-study-overview"><h2>01 · Learning objectives <small>学习目标</small></h2><ul class="cfa-objectives"><li>${focus[0]}<span class="zh-line">${focus[1]}</span></li><li>Connect this module to the broader ${topic.officialCategory} framework.<span class="zh-line">把本模块与 ${topic.categoryZh} 的整体知识框架连接起来。</span></li><li>Apply the idea to a short exam-style fact pattern and explain the result.<span class="zh-line">把概念应用到简短案例，并能说明结论与限制。</span></li></ul></section>
    <section class="cfa-study-section" id="cfa-study-framework"><h2>02 · Core framework <small>核心框架</small></h2><p class="cfa-study-lead">${topic.explanation}</p><p class="cfa-study-lead zh-explanation">${topic.explanationZh}</p><div class="cfa-formula">${topic.formula}</div><div class="cfa-framework-grid">${verbs.map((verb, index) => `<div class="cfa-framework-step"><span>STEP 0${index + 1}</span><strong>${verb}</strong><p>${index === 0 ? "Find the facts, definitions, and relevant inputs. · 找出事实、定义和输入。" : index === 1 ? "Apply the relationship or decision rule. · 使用公式、关系或决策规则。" : "State the result, assumption, and limitation. · 写出结论、假设与局限。"}</p></div>`).join("")}</div></section>
    <section class="cfa-study-section" id="cfa-study-example"><h2>03 · Worked example <small>简单实例</small></h2><div class="cfa-worked-example"><strong>🌱 用简单故事理解 ${module}</strong><p>${topic.exampleZh}</p><p><b>解题方法：</b>先识别这道题属于“${topic.titleZh}”，再使用 <b>${topic.formula}</b>，最后解释答案为什么合理，而不只是写一个数字。</p></div></section>
    <section class="cfa-study-section" id="cfa-study-check"><h2>04 · Knowledge check <small>知识检查</small></h2><div class="cfa-check-card"><p>When answering an exam question about “${module}”, which process is strongest?<span class="zh-line">回答“${module}”相关考题时，哪种方法最可靠？</span></p><div class="answer-list"><button class="answer-button cfa-check-answer" data-correct="true">Identify facts, apply the relevant framework, then interpret assumptions · 识别事实、应用框架，再解释假设</button><button class="answer-button cfa-check-answer">Memorize one number and ignore the case facts · 只背一个数字，忽略案例事实</button><button class="answer-button cfa-check-answer">Always choose the answer with the highest return · 永远选择回报最高的答案</button></div><p class="feedback" id="cfa-check-feedback">Select the best answer. · 请选择最合适的答案。</p></div><div class="cfa-study-finish"><p>${complete ? "This module is complete. You can review it at any time. · 本模块已完成，可随时复习。" : "Finish the four sections, then record this module as complete. · 完成四个部分后记录学习进度。"}</p><button class="primary-button" id="complete-cfa-module">${complete ? "Review complete · 复习完成" : "Mark complete · 标记完成"} <span>→</span></button></div></section>`;
}

function closeCfaStudy() {
  document.querySelector("#cfa-study-modal").hidden = true;
  document.body.style.overflow = "";
  activeCfaModule = null;
}

function completeCfaModule() {
  if (!activeCfaModule) return;
  const firstCompletion = !state.cfaCompleted.includes(activeCfaModule.id);
  if (firstCompletion) {
    state.cfaCompleted.push(activeCfaModule.id);
    state.xp += 50;
    state.daily += 1;
  }
  saveState();
  renderCfaReview(document.querySelector("#cfa-search").value);
  closeCfaStudy();
  showToast(firstCompletion ? "+50 XP · CFA module complete · 模块完成" : "Module reviewed · 模块复习完成");
}

document.addEventListener("click", event => {
  const nav = event.target.closest(".nav-item");
  if (nav) showView(nav.dataset.view);
  if (event.target.closest("#menu-button")) document.querySelector("#sidebar").classList.toggle("open");
  const continueButton = event.target.closest("#continue-button");
  if (continueButton) openLesson(continueButton.dataset.lesson);
  if (event.target.closest("[data-close-modal]") || event.target.id === "lesson-modal") closeModal();
  if (event.target.closest("#next-page")) { currentPage += 1; renderLessonPage(); }
  const answer = event.target.closest(".answer-button");
  if (answer && answer.closest("#lesson-modal")) answerQuiz(answer);
  if (event.target.closest("#finish-lesson")) finishLesson();
  const cfaModule = event.target.closest(".cfa-module-button");
  if (cfaModule) openCfaModule(Number(cfaModule.dataset.cfaTopic), Number(cfaModule.dataset.cfaModule));
  if (event.target.closest("[data-close-cfa-study]") || event.target.id === "cfa-study-modal") closeCfaStudy();
  const cfaSection = event.target.closest("[data-cfa-section]");
  if (cfaSection) document.querySelector(`#${cfaSection.dataset.cfaSection}`).scrollIntoView({ behavior: "smooth", block: "start" });
  const cfaAnswer = event.target.closest(".cfa-check-answer");
  if (cfaAnswer) {
    document.querySelectorAll(".cfa-check-answer").forEach(button => { button.disabled = true; if (button.dataset.correct) button.classList.add("correct"); });
    if (!cfaAnswer.dataset.correct) cfaAnswer.classList.add("wrong");
    const feedback = document.querySelector("#cfa-check-feedback");
    feedback.className = `feedback ${cfaAnswer.dataset.correct ? "success" : "error"}`;
    feedback.textContent = cfaAnswer.dataset.correct ? "✓ Correct · 正确：CFA 考题要求把框架应用到具体事实。" : "✗ 再想一想：先识别事实，再应用框架并解释结论。";
  }
  if (event.target.closest("#complete-cfa-module")) completeCfaModule();
  const desk = event.target.closest(".desk-card");
  if (desk && desk.dataset.locked === "false") lessons[desk.dataset.desk] ? openLesson(nextLessonForDesk(desk.dataset.desk)) : showToast(`${desks.find(d => d.id === desk.dataset.desk).title} module preview unlocked soon`);
  const simulationButton = event.target.closest(".sim-button");
  if (simulationButton) lessons[simulationButton.dataset.sim] ? openLesson(simulationButton.dataset.lesson || nextLessonForDesk(simulationButton.dataset.sim)) : showToast("This scenario is coming soon · 此场景即将开放");
  const cfaLevel = event.target.closest(".cfa-level-tab");
  if (cfaLevel) { activeCfaLevel = cfaLevel.dataset.cfaLevel; renderCfaReview(document.querySelector("#cfa-search").value); }
  if (event.target.closest("#briefing-button")) showToast("Weekly briefing added to your learning queue");
  if (event.target.closest("#reset-button") && confirm("Reset all learning progress?")) { state = { ...defaultState, completed: [], completedLessons: [] }; saveState(); showToast("Progress reset"); }
});

document.addEventListener("keydown", event => { if (event.key === "Escape") { closeModal(); closeCfaStudy(); } });
document.querySelector("#glossary-search").addEventListener("input", event => renderGlossary(event.target.value));
document.querySelector("#cfa-search").addEventListener("input", event => renderCfaReview(event.target.value));

renderGlossary();
renderSimulations();
renderCfaReview();
renderAll();
