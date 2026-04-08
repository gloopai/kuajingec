import type { Article } from '../types/content'

export const articles: Article[] = [
  {
    slug: 'amazon-listing-checklist-12',
    title: '亚马逊 Listing 优化的 12 个检查点（可打印）',
    description:
      '从标题、要点、图片到 A+ 与搜索词：用一份 checklist 把 Listing 质量做成可复盘的工程问题，而不是凭感觉改文案。',
    categorySlug: 'platform-ops',
    publishedAt: '2025-09-12',
    updatedAt: '2026-03-18',
    readMinutes: 11,
    tags: ['亚马逊', 'Listing', '转化率'],
    heroExcerpt:
      'Listing 的本质是「信息完备 + 信任证据 + 可检索性」。本文把常见遗漏点拆成 12 项，适合每周固定复盘。',
    sections: [
      {
        heading: '为什么 checklist 比「灵感式改文案」更管用',
        paragraphs: [
          '多数团队改 Listing 的触发点是销量波动或竞品变化，但缺少基线记录，导致无法判断改动是否真的有效。把页面元素拆成可勾选项，可以让运营、设计与供应链在同一套标准下协作。',
          '建议为每个主力 SKU 维护一页「变更日志」：日期、改动点、前后两周的曝光/点击/转化与退货原因摘要。没有数据也要记录假设，否则复盘只能停留在主观感受。',
        ],
      },
      {
        heading: '标题与品牌字段：别浪费高权重字符',
        paragraphs: [
          '标题应优先承载「品类词 + 关键属性 + 兼容信息」，品牌名与系列名按平台规则放置。避免堆砌同义词，既影响可读性，也可能触发平台政策风险。',
          '若你同时做多个站点，注意本地化不是翻译：度量单位、适用场景与合规声明要随站点调整，而不是一套英文直译。',
        ],
      },
      {
        heading: '五点描述：把「卖点」写成「买家任务」',
        paragraphs: [
          '优秀的要点不是形容词堆叠，而是帮助买家完成购买决策：解决什么场景、与常见替代品差异、安装/使用门槛、售后承诺边界。',
          '把最容易引发差评的点主动写清楚（尺寸、兼容性、适用人群），短期可能降低一点转化，但通常能显著降低退货与差评概率。',
        ],
      },
      {
        heading: '图片与视频：证据链比「好看」更重要',
        paragraphs: [
          '首图承担点击与识别任务；副图应覆盖尺寸、细节、场景、对比与包装清单。视频适合演示复杂安装或动态效果。',
          '对功能型品类，增加「失败场景提示」（例如不适用的情况）往往比再多一张美图更能降低退货。',
        ],
      },
      {
        heading: '搜索词与后端字段：少即是多',
        paragraphs: [
          '把搜索词当作「检索补全」而不是关键词堆砌：重复、无关品牌与禁词都会带来风险。更稳妥的做法是定期从搜索词报告回收真实用户语言，再迭代到标题与要点。',
        ],
      },
    ],
    outboundLinks: [
      {
        label: '亚马逊卖家中心（官方）',
        url: 'https://sellercentral.amazon.com/',
      },
    ],
  },
  {
    slug: 'acos-search-term-report-three-steps',
    title: 'ACoS 降不下来？先从搜索词报告做三件事',
    description:
      '广告报表里最先该看的不是「平均 ACoS」，而是搜索词层面的浪费与机会。本文给出一套最小可行的诊断顺序。',
    categorySlug: 'platform-ops',
    publishedAt: '2025-10-03',
    updatedAt: '2026-02-02',
    readMinutes: 9,
    tags: ['广告', 'PPC', '搜索词'],
    heroExcerpt:
      '多数广告问题本质是「词不对」或「词对但页面承接不住」。先把搜索词分层，再决定是加否、降出价还是改 Listing。',
    sections: [
      {
        heading: '先把词分成三类：赚钱、试错、浪费',
        paragraphs: [
          '赚钱词：转化与 ROAS 稳定，适合作为扩量与防御的基本盘。试错词：有点击但转化不稳定，需要更多样本或页面证据。浪费词：曝光高但长期无转化，或与产品定位明显不符。',
          '分类时务必用统一时间窗（至少 7–14 天），并结合库存与季节因素，否则容易误判。',
        ],
      },
      {
        heading: '第一件事：给浪费词做「否定」而不是先加词',
        paragraphs: [
          '新账户最常见的错误是不断加关键词，却迟迟不做否定。否定要分层：精确否定用于明确不相关的意图；词组否定用于一类意图；慎用广泛否定以免误伤。',
          '否定前确认：该词是否可能在未来活动/季节变得相关？若可能，用更低出价或单独广告组测试，而不是一棍子打死。',
        ],
      },
      {
        heading: '第二件事：对赚钱词检查页面承接',
        paragraphs: [
          '当某些词点击高但转化低，先对比详情页首屏是否出现该意图（尺寸、兼容性、使用场景）。很多时候问题不在出价，而在信息缺失。',
        ],
      },
      {
        heading: '第三件事：把「试错词」纳入内容迭代闭环',
        paragraphs: [
          '搜索词报告也是内容洞察来源：买家用什么语言描述问题，就把这些语言反哺到标题、图片与 QA。这样广告与 Listing 会形成正向循环。',
        ],
      },
    ],
  },
  {
    slug: 'shopee-cold-start-traffic',
    title: 'Shopee 新店冷启动：流量层级与上架节奏',
    description:
      '东南亚平台节奏快、活动多。本文用「上架—优惠券—广告—店铺装修」的最小闭环，帮助新店建立可观测的数据。',
    categorySlug: 'platform-ops',
    publishedAt: '2025-08-21',
    updatedAt: '2026-01-10',
    readMinutes: 10,
    tags: ['Shopee', '东南亚', '新店'],
    heroExcerpt:
      '冷启动的关键不是立刻冲量，而是尽快跑通履约、客服与评价机制，再逐步放大。',
    sections: [
      {
        heading: '上架节奏：先求「可履约的 SKU 宽度」',
        paragraphs: [
          '新店常犯的错误是一次上太多 SKU，导致库存与客服压力暴涨。更稳妥的是先选择少量 SKU 跑通发货时效与包裹标准，再扩展类目宽度。',
        ],
      },
      {
        heading: '活动与优惠券：把「让利」设计成数据实验',
        paragraphs: [
          '优惠券与闪购适合用来测试价格弹性与人群响应，但要设定止损线（毛利底线、库存红线）。避免为了排名牺牲长期利润结构。',
        ],
      },
      {
        heading: '广告：从店铺预算到单品预算的迁移',
        paragraphs: [
          '早期可用店铺级广告获得基础曝光，但当出现明确出单单品时，应尽快切换到单品策略，才能把学习数据沉淀到可复制的路径上。',
        ],
      },
    ],
  },
  {
    slug: 'ebay-account-health-basics',
    title: 'eBay 账号健康与纠纷处理入门（卖家视角）',
    description:
      '从政策指标到纠纷证据：用结构化方式理解 eBay 的「服务分」逻辑，减少被动处罚与资金冻结风险。',
    categorySlug: 'platform-ops',
    publishedAt: '2025-07-30',
    updatedAt: '2026-03-01',
    readMinutes: 8,
    tags: ['eBay', '账号健康', '纠纷'],
    heroExcerpt:
      'eBay 更看重可追溯的服务记录。把沟通留在站内、证据齐全，通常比事后补救更有效。',
    sections: [
      {
        heading: '账号健康：先理解「买家体验」指标',
        paragraphs: [
          '不同指标对应不同风险：物流时效、纠纷率、物品与描述不符等。建议每周导出一次报表，按 SKU 与线路定位问题来源。',
        ],
      },
      {
        heading: '纠纷发生时的优先级：先止损再争对错',
        paragraphs: [
          '第一时间提供解决方案（补发、部分退款、退货路径），再解释原因。多数情况下，平台更关注你是否快速响应并提供可选方案。',
        ],
      },
    ],
  },
  {
    slug: 'shopify-funnel-baseline',
    title: 'Shopify 独立站转化漏斗怎么做基线',
    description:
      '从会话到加购、结账与支付成功：独立站增长的前提是「口径统一」。本文给出一套基线与异常定位方法。',
    categorySlug: 'dtc-brand',
    publishedAt: '2025-11-02',
    updatedAt: '2026-03-10',
    readMinutes: 10,
    tags: ['Shopify', '漏斗', '数据'],
    heroExcerpt:
      '没有基线的优化是玄学。先把漏斗与流量来源口径对齐，再谈 A/B 测试与创意迭代。',
    sections: [
      {
        heading: '定义漏斗：页面级还是事件级？',
        paragraphs: [
          '至少要区分「商品页 → 加购 → 结账开始 → 支付成功」四步，并把弃购分成「运费/税费意外」「支付失败」「信任问题」三类假设。',
        ],
      },
      {
        heading: '与广告平台归因对齐：避免双计与漏计',
        paragraphs: [
          '不同平台默认归因窗口不同。建议选定一套「内部报表口径」（例如以结账成功为准），再与广告平台数据对照，而不是混用。',
        ],
      },
    ],
    outboundLinks: [
      { label: 'Shopify 商家帮助中心', url: 'https://help.shopify.com/zh-CN' },
    ],
  },
  {
    slug: 'landing-page-above-the-fold',
    title: '独立站落地页首屏：信息层级模板（可直接套用）',
    description:
      '首屏要在 5 秒内回答：这是什么、适合谁、为什么可信、下一步做什么。给出一套可复制的模块顺序与文案提示。',
    categorySlug: 'dtc-brand',
    publishedAt: '2025-10-18',
    updatedAt: '2026-02-20',
    readMinutes: 7,
    tags: ['落地页', '转化', '品牌'],
    heroExcerpt:
      '首屏不是「更炫的横幅」，而是更高信噪比的信息交付。',
    sections: [
      {
        heading: '模块顺序：主标题 → 证据 → 主行动',
        paragraphs: [
          '主标题应用「品类 + 关键结果 + 关键差异」。证据可以是评价摘要、媒体报道、认证、可视化数据。主行动按钮只保留一个主目标（购买/留资）。',
        ],
      },
      {
        heading: '移动端：先解决「我读得完」',
        paragraphs: [
          '移动端首屏字太多会稀释焦点。可以把细节放到二级折叠区，用「可扫描」列表呈现卖点。',
        ],
      },
    ],
  },
  {
    slug: 'email-automation-abandoned-cart',
    title: 'Email 自动化：弃购挽回与售后分拆怎么设计',
    description:
      '邮件不是发越多越好，而是分层：弃购挽回、首单教育、复购触发需要不同的节奏与约束。',
    categorySlug: 'dtc-brand',
    publishedAt: '2025-09-05',
    updatedAt: '2026-01-28',
    readMinutes: 9,
    tags: ['邮件营销', '自动化', '复购'],
    heroExcerpt:
      '好的自动化像客服：有边界、有节奏、有可追踪的结果。',
    sections: [
      {
        heading: '弃购邮件：三段式就够',
        paragraphs: [
          '第一封：提醒购物车与主利益点；第二封：解决常见阻力（运费/尺码/兼容性）；第三封：明确截止与库存提示。每封都要有清晰单一目标。',
        ],
      },
      {
        heading: '售后邮件：把「问题」变成「下一次购买的理由」',
        paragraphs: [
          '发货后教程、使用提示与配件推荐，本质是降低差评与退货，同时提高生命周期价值。注意频率与退订入口合规。',
        ],
      },
    ],
  },
  {
    slug: 'overseas-warehouse-safety-stock',
    title: '海外仓备货公式：安全库存怎么定更靠谱',
    description:
      '别只按「月销量/2」拍脑袋。把补货提前期、需求波动与促销计划纳入同一套计算框架。',
    categorySlug: 'logistics',
    publishedAt: '2025-12-01',
    updatedAt: '2026-03-22',
    readMinutes: 12,
    tags: ['海外仓', '库存', '补货'],
    heroExcerpt:
      '安全库存不是数字，是对不确定性的保险。保险太贵会拖死现金流，太便宜会断货。',
    sections: [
      {
        heading: '先量化：补货提前期与需求波动',
        paragraphs: [
          '提前期包括生产/采购、入库、上架与可能的查验时间。需求波动用标准差或分位数比用「平均值」更可靠。',
        ],
      },
      {
        heading: '促销与季节性：把事件从「常态需求」里拆出来',
        paragraphs: [
          '大促备货要单独做预算与风险敞口评估，否则会把安全库存模型污染掉，导致日常补货失真。',
        ],
      },
    ],
  },
  {
    slug: 'peak-season-shipping-bottlenecks',
    title: '旺季发货的常见瓶颈与预案清单',
    description:
      '从仓库产能到尾程揽收：旺季问题往往是系统性拥堵。本文提供排查顺序与沟通模板。',
    categorySlug: 'logistics',
    publishedAt: '2025-11-20',
    updatedAt: '2026-02-08',
    readMinutes: 8,
    tags: ['旺季', '履约', '尾程'],
    heroExcerpt:
      '旺季拼的不是「更快」，而是更可预期的时效与更可执行的预案。',
    sections: [
      {
        heading: '瓶颈排查：仓库内还是仓库外？',
        paragraphs: [
          '若截单后仍大量积压，问题在仓内作业；若出库后追踪停滞，问题在揽收与干线。先定位再谈换渠道，否则只会反复踩坑。',
        ],
      },
      {
        heading: '客户沟通：用「区间」而不是「承诺」',
        paragraphs: [
          '旺季用明确时效区间与可能延误原因，比空泛道歉更降低差评。自动化通知要覆盖揽收、转运与派送关键节点。',
        ],
      },
    ],
  },
  {
    slug: '3ds-payment-success-metrics',
    title: '3DS 与支付成功率：独立站要关注哪些指标',
    description:
      '强验证会影响转化率，但可能降低欺诈与拒付。关键是分国家、分卡种看分层数据，而不是只看总成功率。',
    categorySlug: 'payments-risk',
    publishedAt: '2025-10-10',
    updatedAt: '2026-03-05',
    readMinutes: 9,
    tags: ['支付', '3DS', '成功率'],
    heroExcerpt:
      '支付是「体验 + 风险」的折中，必须用分层指标管理，而不是单一 KPI。',
    sections: [
      {
        heading: '成功率拆分：授权、验证与捕获',
        paragraphs: [
          '用户看到失败可能是银行拒绝、验证失败或风控拦截。需要在支付面板里拆分原因，否则只能盲目改 UI。',
        ],
      },
      {
        heading: '与拒付联动：别用「放大销量」掩盖风险',
        paragraphs: [
          '若成功率提升伴随拒付上升，说明风控边界被放宽。对高客单品类尤其要监控争议率与欺诈信号。',
        ],
      },
    ],
  },
  {
    slug: 'chargeback-evidence-checklist',
    title: '拒付举证材料怎么准备更有效（卖家清单）',
    description:
      '拒付争议常见败因是证据链不完整。按「订单—履约—沟通」整理材料，可显著提高胜率。',
    categorySlug: 'payments-risk',
    publishedAt: '2025-09-18',
    updatedAt: '2026-01-15',
    readMinutes: 7,
    tags: ['拒付', '风控', '客服'],
    heroExcerpt:
      '平台与发卡行看重可验证、可追溯的记录，而不是情绪化说明。',
    sections: [
      {
        heading: '必备材料：跟踪号、签收证明与对话记录',
        paragraphs: [
          '物流证据要显示收件信息与时间节点；客服对话尽量在邮件/站内留痕；对数字商品要提供访问/下载/使用记录（在合规前提下）。',
        ],
      },
    ],
  },
  {
    slug: 'eu-ioss-small-parcel-intro',
    title: '欧盟 IOSS 入门：小包发货卖家怎么理解（概念导航）',
    description:
      'IOSS 与平台代扣、DDP 等模式并存。本文帮助建立概念地图，具体义务请咨询税务顾问。',
    categorySlug: 'compliance-tax',
    publishedAt: '2025-08-08',
    updatedAt: '2026-03-28',
    readMinutes: 8,
    tags: ['欧盟', 'VAT', 'IOSS'],
    heroExcerpt:
      '税务规则会随业务模式变化。先搞清楚「谁在哪个环节代扣/申报」，再落到具体站点与货代条款。',
    sections: [
      {
        heading: '先回答三个问题：谁销售、谁发货、谁对买家报价',
        paragraphs: [
          '不同组合会触发不同的 VAT 处理方式。平台仓与自发货、欧盟内库存与非欧盟发货，路径都可能不同。',
        ],
      },
      {
        heading: '常见误区：把「包税渠道」当成税务合规本身',
        paragraphs: [
          '货代提供的包税服务并不自动等于你在所有场景下的申报义务已解决。需要把合同、发票与进口记录对齐理解。',
        ],
      },
    ],
  },
  {
    slug: 'us-tariff-product-classification-sellers',
    title: '美国关税与商品归类：卖家要了解什么（非法律意见）',
    description:
      '关税政策会变动。卖家侧更重要的是：如何与供应商确认材质与用途，如何保存归类依据以备查验。',
    categorySlug: 'compliance-tax',
    publishedAt: '2025-12-18',
    updatedAt: '2026-03-12',
    readMinutes: 9,
    tags: ['美国', '关税', '合规'],
    heroExcerpt:
      '归类争议往往来自信息不一致：销售页面写 A，发票写 B，实物又是 C。',
    sections: [
      {
        heading: '从 SKU 卡片开始建立「合规字段」',
        paragraphs: [
          '为每个 SKU 记录材质、用途、电压/认证等关键属性，并确保报关资料与页面描述不存在明显冲突。',
        ],
      },
    ],
  },
  {
    slug: 'sea-consumer-electronics-market',
    title: '东南亚消费电子：需求与竞争格局速览',
    description:
      '从渠道偏好到价格带：给准备进入东南亚的 3C 卖家一份「地图」，不是预测，而是调研清单。',
    categorySlug: 'market-insight',
    publishedAt: '2025-10-28',
    updatedAt: '2026-04-01',
    readMinutes: 11,
    tags: ['东南亚', '3C', '市场'],
    heroExcerpt:
      '消费电子在东南亚的机会常与「履约与售后」绑定，而不是单纯看人口红利。',
    sections: [
      {
        heading: '先分清：平台电商 vs 线下分销 vs 独立站',
        paragraphs: [
          '不同国家差异很大。与其看宏观增速，不如先锁定一个国家的一条渠道，把服务与退货跑通。',
        ],
      },
      {
        heading: '竞争格局：同质化品类的出路在差异化服务',
        paragraphs: [
          '当价格带被头部卖家占据，新进入者更需要内容、保修与本地化客服来建立信任。',
        ],
      },
    ],
  },
  {
    slug: 'cross-border-team-org-2026',
    title: '2026 跨境出海团队的常见组织形态',
    description:
      '从「老板全能」到「中台化」：用岗位与协作界面描述团队演化，帮助你对照自身阶段做规划。',
    categorySlug: 'market-insight',
    publishedAt: '2026-01-08',
    updatedAt: '2026-04-01',
    readMinutes: 10,
    tags: ['组织', '管理', '出海'],
    heroExcerpt:
      '团队问题的本质是信息流与决策流是否跟得上业务复杂度。',
    sections: [
      {
        heading: '早期：一人多岗但要明确「责任边界」',
        paragraphs: [
          '最容易炸的是：运营同时拍脑袋改价、改库存、改广告，却没有库存与财务约束。再小的团队也需要周报级别的经营仪表盘。',
        ],
      },
      {
        heading: '中期：把「投放—内容—供应链」做成闭环',
        paragraphs: [
          '增长不是投放部门的独角戏。内容反馈选品，供应链决定促销空间，三者必须共享同一套数据口径。',
        ],
      },
    ],
  },
  {
    slug: 'multi-marketplace-listing-replication',
    title: '多站点扩张：什么时候该复制 Listing，什么时候该重做',
    description:
      '复制能节省时间，但语言、合规与关键词体系不同。给出一套决策树，避免「一键翻译」式翻车。',
    categorySlug: 'platform-ops',
    publishedAt: '2025-11-11',
    updatedAt: '2026-02-14',
    readMinutes: 8,
    tags: ['多站点', '本地化', '运营'],
    heroExcerpt:
      '扩张的本质是复制「可验证的履约与转化」，而不是复制页面字符串。',
    sections: [
      {
        heading: '先验证：供应链与客服能否承接新站点',
        paragraphs: [
          '若退货、时效与合规在新站点无法达到基准线，先把 Listing 做得再漂亮也会被动救火。',
        ],
      },
      {
        heading: '页面层：翻译、改写与重写三选一',
        paragraphs: [
          '标品参数类可以翻译；需要文化适配的卖点要改写；涉及法规与适用场景的必须重写并审阅。',
        ],
      },
    ],
  },
  {
    slug: 'ugc-influencer-contract-metrics',
    title: 'UGC 与红人合作：可执行的合同要点与复盘指标',
    description:
      '从交付物、授权期限到数据回传：把合作拆成可验收的模块，减少扯皮与版权风险。',
    categorySlug: 'dtc-brand',
    publishedAt: '2025-12-06',
    updatedAt: '2026-03-02',
    readMinutes: 10,
    tags: ['红人', 'UGC', '品牌'],
    heroExcerpt:
      '好的合作是「可验收的创作 + 可追踪的投放」，而不是只看粉丝数。',
    sections: [
      {
        heading: '合同里最重要的不是价格，是交付与授权',
        paragraphs: [
          '明确素材数量、修改次数、发布平台、授权范围（广告使用多久、是否可剪辑）。口头承诺尽量落到附件。',
        ],
      },
      {
        heading: '复盘：内容质量、互动与转化三层指标',
        paragraphs: [
          '不同目标对应不同权重。拉新看转化与新增会话；品牌向看互动与搜索增量。别用单一 ROAS 评价所有合作。',
        ],
      },
    ],
  },
  {
    slug: 'customs-delay-customer-comms',
    title: '清关延误时如何与客户沟通：模板与原则',
    description:
      '清关不可控，但沟通可控。用透明、分段更新与可选方案降低差评与拒付风险。',
    categorySlug: 'logistics',
    publishedAt: '2025-09-30',
    updatedAt: '2026-02-25',
    readMinutes: 6,
    tags: ['清关', '客服', '物流'],
    heroExcerpt:
      '客户最怕的不是慢，而是「不知道发生什么」与「没人负责」。',
    sections: [
      {
        heading: '三段式沟通：说明现状—给出区间—提供选择',
        paragraphs: [
          '第一段说明卡在哪个环节（在合规前提下）；第二段给出可能解决时间区间；第三段提供可选方案（等待/补发/退款路径）。',
        ],
      },
    ],
  },
]
