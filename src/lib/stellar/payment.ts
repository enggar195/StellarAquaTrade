import {
  Asset,
  BASE_FEE,
  Memo,
  Networks,
  Operation,
  TransactionBuilder,
} from "@stellar/stellar-sdk";

import type { PaymentInput } from "@/features/payment/payment-schema";

import { signWithFreighter } from "./freighter";
import { horizonServer } from "./horizon";

export async function sendTestnetXlmPayment(
  senderAddress: string,
  input: PaymentInput,
): Promise<string> {
  const sourceAccount = await horizonServer.loadAccount(senderAddress);
  const builder = new TransactionBuilder(sourceAccount, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  }).addOperation(
    Operation.payment({
      destination: input.destination,
      asset: Asset.native(),
      amount: input.amount,
    }),
  );

  if (input.reference) {
    builder.addMemo(Memo.text(input.reference));
  }

  const transaction = builder.setTimeout(30).build();
  const signedXdr = await signWithFreighter(
    transaction.toXDR(),
    senderAddress,
  );
  const signedTransaction = TransactionBuilder.fromXDR(
    signedXdr,
    Networks.TESTNET,
  );
  const result = await horizonServer.submitTransaction(signedTransaction);

  return result.hash;
}
