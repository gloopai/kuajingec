import type { ArticleExtras } from '../types/content'

export const articleExtrasBySlug: Record<string, ArticleExtras> = {
  'amazon-listing-checklist-12': {
    suitableFor: [
      '已在亚马逊售卖标品/功能品、希望把页面质量工程化的团队',
      '需要跨部门对齐 Listing 标准的中小卖家',
    ],
    notIdealFor: [
      '完全零基础、尚未完成品牌备案与类目准入的账号',
      '希望通过「黑科技」绕过平台政策的操作',
    ],
    compareHint:
      '若你的核心问题是流量不足，优先检查广告与关键词承接；若流量尚可但转化差，再回到 Listing 证据链与信任模块。',
    checklistItems: [
      '标题是否覆盖核心搜索词且避免违规堆砌',
      '五点是否覆盖场景、差异、边界与售后',
      '图片是否包含尺寸/兼容性/包装清单证据',
      '是否为每次改动记录了假设与数据窗口',
    ],
    supplementQAs: [
      {
        heading: '亚马逊 Listing 优化从哪里开始最有效？',
        body: '通常从「高曝光低转化」的 SKU 入手：先定位缺失信息或差评集中点，再用图片与要点补齐证据链，比盲目改标题更有效。',
      },
      {
        heading: 'Listing 多久改一次比较合适？',
        body: '建议以周为复盘单位，避免同一天多处大改导致无法归因。大促前至少预留两周观察窗口。',
      },
    ],
  },
  'acos-search-term-report-three-steps': {
    suitableFor: ['已有一定点击数据、希望降低浪费流量的卖家', '愿意花时间做否定与分层的运营'],
    notIdealFor: ['样本极少的新品阶段（需要更长观察窗）', '只想通过提高出价解决一切问题的团队'],
    compareHint: '若自然排名已很强，广告的边际价值会下降；此时应更关注防御性投放与利润保护。',
    checklistItems: [
      '搜索词是否完成三层分类',
      '否定是否记录原因与回溯条件',
      '高点击低转化词是否回到页面承接检查',
    ],
    supplementQAs: [
      {
        heading: '搜索词报告应该多久看一次？',
        body: '高频投放建议每周；稳定账户可双周。旺季应缩短周期，并结合库存与促销事件调整。',
      },
    ],
  },
  'shopify-funnel-baseline': {
    suitableFor: ['刚开始搭建数据体系的独立站团队', '需要与投放同学对齐口径的品牌方'],
    notIdealFor: ['没有任何事件追踪、页面改动频繁的站点（先修数据基建）'],
    compareHint: '若弃购集中在结账页，优先检查运费/税费展示与支付选项；若集中在商品页，更像信任与定价问题。',
    checklistItems: [
      '漏斗四步是否能在同一面板查看',
      '广告归因窗口是否与内部报表一致',
      '弃购是否分层记录原因',
    ],
    supplementQAs: [
      {
        heading: '独立站转化率多少算正常？',
        body: '没有行业统一值，取决于品类、客单与流量来源。更可靠的做法是先建立自己站点 28 天基线，再按渠道分层对比。',
      },
    ],
  },
  'overseas-warehouse-safety-stock': {
    suitableFor: ['使用海外仓且 SKU 数量较多的卖家', '需要把促销与日常补货分开管理的团队'],
    notIdealFor: ['单品爆款极度不稳定、无法建模的需求曲线'],
    compareHint: '若频繁断货，优先检查预测是否把促销需求混进日常；若长期积压，检查定价与渠道匹配。',
    checklistItems: ['提前期是否包含入库与查验', '波动是否用分位数或标准差刻画', '大促是否单独备货'],
    supplementQAs: [
      {
        heading: '安全库存是不是越大越好？',
        body: '不是。安全库存是对不确定性的保险，过大会占用资金并增加滞销风险；需要与周转目标联动。',
      },
    ],
  },
  'eu-ioss-small-parcel-intro': {
    suitableFor: ['刚开始接触欧盟小包业务的卖家', '需要建立概念地图以便与顾问/货代沟通的团队'],
    notIdealFor: ['需要具体申报与税号申请的一站式答案（应咨询持牌税务顾问）'],
    compareHint: '若你在多个平台与多仓发货并存，优先按「订单来源 + 发货路径」画流程图，再落到税号与发票规则。',
    checklistItems: ['确认销售主体与发货主体', '确认报价是否含税', '确认平台是否代扣'],
    supplementQAs: [
      {
        heading: 'IOSS 和 VAT 注册冲突吗？',
        body: '取决于你的商业模式与发货路径。不同组合可能适用不同机制，需要个案分析。',
      },
    ],
  },
  'sea-consumer-electronics-market': {
    suitableFor: ['准备评估东南亚 3C 机会的产品与运营负责人'],
    notIdealFor: ['寻找「保证爆单」结论的读者'],
    compareHint: '东南亚不是单一市场：建议先国别、先渠道验证，再谈扩张。',
    checklistItems: ['目标国渠道结构', '价格带与售后预期', '本地竞品与服务标准'],
    supplementQAs: [
      {
        heading: '东南亚做消费电子最大的坑是什么？',
        body: '往往是售后与假货/翻新认知带来的差评。需要在页面与客服策略上前置管理预期。',
      },
    ],
  },
}

function defaultExtra(_slug: string): ArticleExtras {
  return {
    suitableFor: ['关注跨境电商实务的卖家、品牌与项目负责人'],
    notIdealFor: ['寻求规避平台规则或监管要求的操作方式'],
    compareHint:
      '请结合你的品类、站点与履约条件取舍；涉及税务与法律事项请咨询持牌顾问。',
    checklistItems: [
      '对照正文梳理当前业务基线',
      '明确一个近期要验证的假设',
      '设定固定复盘节奏',
    ],
    supplementQAs: [
      {
        heading: '如何把文中的建议落到自己的业务？',
        body: '建议先按正文清单逐条自检，再映射到你的 SKU、目标市场与团队能力；重大决策以平台规则与专业意见为准。',
      },
    ],
  }
}

export function getArticleExtras(slug: string): ArticleExtras {
  return articleExtrasBySlug[slug] ?? defaultExtra(slug)
}
