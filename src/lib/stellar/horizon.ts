import { Horizon } from "@stellar/stellar-sdk";

import { stellarConfig } from "./config";

export const horizonServer = new Horizon.Server(stellarConfig.horizonUrl);

export async function fetchXlmBalance(address: string): Promise<string> {
  try {
    const account = await horizonServer.loadAccount(address);
    const nativeBalance = account.balances.find(
      (balance) => balance.asset_type === "native",
    );

    return nativeBalance?.balance ?? "0.0000000";
  } catch (error) {
    const status =
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      typeof error.response === "object" &&
      error.response !== null &&
      "status" in error.response
        ? error.response.status
        : undefined;

    if (status === 404) {
      return "0.0000000";
    }

    throw error;
  }
}

export async function fundWithFriendbot(address: string): Promise<void> {
  const response = await fetch(
    `${stellarConfig.friendbotUrl}?addr=${encodeURIComponent(address)}`,
  );

  if (!response.ok) {
    const details = await response.text();
    throw new Error(
      details || `Friendbot funding failed with status ${response.status}.`,
    );
  }
}
