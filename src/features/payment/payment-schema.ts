import { StrKey } from "@stellar/stellar-sdk";
import { z } from "zod";

const amountPattern = /^\d+(?:\.\d{1,7})?$/;

export const paymentSchema = z.object({
  destination: z
    .string()
    .trim()
    .refine(
      (value) => StrKey.isValidEd25519PublicKey(value),
      "Enter a valid Stellar G-address.",
    ),
  amount: z
    .string()
    .trim()
    .regex(amountPattern, "Use a positive XLM amount with at most 7 decimals.")
    .refine((value) => Number(value) > 0, "Amount must be greater than zero."),
  reference: z
    .string()
    .trim()
    .refine(
      (value) => new TextEncoder().encode(value).length <= 28,
      "Reference must be at most 28 UTF-8 bytes for a Stellar text memo.",
    ),
});

export type PaymentInput = z.infer<typeof paymentSchema>;
