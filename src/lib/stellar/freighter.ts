import {
  getAddress,
  getNetwork,
  isConnected,
  requestAccess,
  signTransaction,
} from "@stellar/freighter-api";
import { Networks } from "@stellar/stellar-sdk";

interface ConnectedResult {
  isConnected?: boolean;
  error?: string;
}

interface AddressResult {
  address?: string;
  error?: string;
}

interface NetworkResult {
  network?: string;
  networkPassphrase?: string;
  error?: string;
}

interface SignedTransactionResult {
  signedTxXdr?: string;
  error?: string;
}

export interface WalletSession {
  address: string;
  isTestnet: boolean;
  networkName: string;
}

function assertNoError(result: { error?: string }, fallback: string): void {
  if (result.error) {
    throw new Error(result.error || fallback);
  }
}

async function readWalletSession(address: string): Promise<WalletSession> {
  const networkResult = (await getNetwork()) as NetworkResult;
  assertNoError(networkResult, "Unable to read the Freighter network.");

  const isTestnet =
    networkResult.network === "TESTNET" ||
    networkResult.networkPassphrase === Networks.TESTNET;

  return {
    address,
    isTestnet,
    networkName: networkResult.network ?? "Unknown network",
  };
}

export async function connectFreighter(): Promise<WalletSession> {
  const connection = (await isConnected()) as ConnectedResult;
  assertNoError(connection, "Unable to detect Freighter.");

  if (!connection.isConnected) {
    throw new Error(
      "Freighter is not installed or is unavailable. Install and unlock the browser extension first.",
    );
  }

  const access = (await requestAccess()) as AddressResult;
  assertNoError(access, "Freighter access was not granted.");

  if (!access.address) {
    throw new Error("Freighter did not return a wallet address.");
  }

  return readWalletSession(access.address);
}

export async function restoreFreighterSession(): Promise<WalletSession | null> {
  const connection = (await isConnected()) as ConnectedResult;
  if (connection.error || !connection.isConnected) {
    return null;
  }

  const addressResult = (await getAddress()) as AddressResult;
  if (addressResult.error || !addressResult.address) {
    return null;
  }

  return readWalletSession(addressResult.address);
}

export async function signWithFreighter(
  transactionXdr: string,
  address: string,
): Promise<string> {
  const result = (await signTransaction(transactionXdr, {
    address,
    networkPassphrase: Networks.TESTNET,
  })) as SignedTransactionResult;

  assertNoError(result, "The transaction was not signed.");

  if (!result.signedTxXdr) {
    throw new Error("Freighter did not return a signed transaction.");
  }

  return result.signedTxXdr;
}
