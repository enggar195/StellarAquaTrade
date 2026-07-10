import { Networks } from "@stellar/stellar-sdk";

export const stellarConfig = {
  network: "testnet",
  networkPassphrase: Networks.TESTNET,
  horizonUrl:
    process.env.NEXT_PUBLIC_STELLAR_HORIZON_URL ??
    "https://horizon-testnet.stellar.org",
  friendbotUrl:
    process.env.NEXT_PUBLIC_STELLAR_FRIENDBOT_URL ??
    "https://friendbot.stellar.org",
  explorerUrl:
    process.env.NEXT_PUBLIC_STELLAR_EXPLORER_URL ??
    "https://stellar.expert/explorer/testnet",
} as const;
