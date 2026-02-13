# TransactionExemptStatusEnum

Based on transaction item exempt status.
NOT EXEMPT: None of the items are NOT EXEMPT
PARTIALLY EXEMPT: At least some of the items are NOT EXEMPT
FULLY_EXEMPT: All items sold in the transaction are EXEMPT
ZERO_RATE_NOT_EXEMPT: All items sold in the transaction are zero-rated

## Example Usage

```typescript
import { TransactionExemptStatusEnum } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TransactionExemptStatusEnum = "PARTIALLY_EXEMPT";
```

## Values

```typescript
"NOT_EXEMPT" | "PARTIALLY_EXEMPT" | "FULLY_EXEMPT" | "ZERO_RATE_NOT_EXEMPT"
```