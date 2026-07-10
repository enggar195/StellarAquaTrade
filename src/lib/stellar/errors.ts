type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null;
}

export function toFriendlyError(error: unknown): string {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (isRecord(error)) {
    const response = error.response;
    if (isRecord(response)) {
      const data = response.data;
      if (isRecord(data)) {
        const extras = data.extras;
        if (isRecord(extras)) {
          const resultCodes = extras.result_codes;
          if (isRecord(resultCodes)) {
            const transaction = resultCodes.transaction;
            if (typeof transaction === "string") {
              return `Stellar rejected the transaction: ${transaction}`;
            }
          }
        }
      }
    }
  }

  return "An unexpected error occurred. Please retry and check Freighter.";
}
