import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "https://horaswap.com",
  },
  {
    label: "Over view",
    icon: "OverviewIcon",
    href: "/",
    // status: status.LIVE,
  },
  {
    label: "Token",
    icon: "TokenIcon",
    href: "/tokens",
  },
  {
    label: "Pairs",
    icon: "PairsIcon",
    href: "/pools",
  },
  {
    label: "Accounts",
    icon: "AccountIcon",
    href: "#",
  }
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/pancakeswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/PancakeSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/PancakeSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/pancakeswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/pancakeswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/pancakeswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/PancakeSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/PancakeswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/pancakeswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/pancakeswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancakeSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/PancakeSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/pancakeswap",
  },
];

export const MENU_HEIGHT = 0;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
