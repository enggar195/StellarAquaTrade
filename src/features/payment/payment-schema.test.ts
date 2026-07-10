import { Keypair } from "@stellar/stellar-sdk";
import { describe, expect, it } from "vitest";

import { paymentSchema } from "./payment-schema";

describe("paymentSchema", () => {
  it("accepts a valid Testnet payment input", () => {
    const result = paymentSchema.safeParse({
      destination: Keypair.random().publicKey(),
      amount: "1.25",
      reference: "TEST-001",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid destination and zero amount", () => {
    const result = paymentSchema.safeParse({
      destination: "not-a-stellar-address",
      amount: "0",
      reference: "",
    });
    expect(result.success).toBe(false);
  });
});
