import type { Dictionary } from "../get-dictionary";

export const zhCN: Dictionary = {
  navigation: {
    testXlm: "XLM 测试",
  },
  languageSwitcher: {
    label: "语言",
    ariaChange: "切换语言",
  },
  common: {
    explain: "说明{title}",
  },
  auth: {
    eyebrow: "安全访问",
    heading: "登录您的贸易工作区",
    subtitle:
      "访问您的 AquaTrade 账户，查看交易活动，并继续您的 Stellar Testnet 白带之旅。",
    brand: {
      name: "AquaTrade Pay",
      subtitle: "Stellar Testnet · 白带 L1",
    },
    showcase: {
      tagline:
        "值得信赖的跨境观赏鱼贸易，由透明工作流程与 Stellar Testnet 学习提供支持。",
      description:
        "AquaTrade 帮助出口商和国际买家在一个平静、可追溯的工作区内协调观赏鱼批次、单据、运输以及支付学习流程。",
      chips: [
        "鱼批护照",
        "询价与报价",
        "运输追踪",
        "到货检验",
        "DOA 索赔",
        "Testnet 支付",
      ],
    },
    form: {
      title: "登录",
      emailLabel: "工作邮箱",
      emailPlaceholder: "name@company.com",
      passwordLabel: "密码",
      passwordPlaceholder: "请输入密码",
      showPassword: "显示密码",
      hidePassword: "隐藏密码",
      rememberMe: "记住我",
      forgotPassword: "忘记密码？",
      signIn: "登录",
      signingIn: "正在登录…",
      noAccount: "第一次使用 AquaTrade？",
      createAccount: "创建账户",
      prototypeMessage: "身份验证服务将在未来的业务 MVP 阶段接入。",
    },
    testnet: {
      title: "Testnet 信息",
      networkLabel: "网络",
      networkValue: "Stellar Testnet",
      stageLabel: "项目阶段",
      stageValue: "白带 L1",
      scopeLabel: "支付范围",
      scopeValue: "直接 Testnet XLM",
      futureLabel: "未来范围",
      futureValue: "智能合约托管",
    },
    trust: {
      title: "信任说明",
      items: [
        "无需助记词",
        "钱包连接在 XLM 测试页面进行",
        "仅限 Testnet — 无真实资产价值",
      ],
    },
    testXlmLink: "打开公开的 XLM 测试页面",
    tooltips: {
      loginForm:
        "此表单是 AquaTrade 账户身份验证界面，与 Stellar 钱包签名相互独立。在当前前端切分阶段，尚未接入真实的身份验证。",
      testnetInfo:
        "当前白带网络为 Stellar Testnet。Testnet XLM 没有货币价值，当前支付范围为直接 Testnet 转账，而非托管。",
      trustNote:
        "AquaTrade 绝不会索取助记词或私钥。Freighter 钱包连接在公开的 XLM 测试页面进行。",
    },
  },
  validation: {
    emailRequired: "请输入您的工作邮箱。",
    emailInvalid: "请输入有效的邮箱地址。",
    passwordRequired: "请输入您的密码。",
  },
};
