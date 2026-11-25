# FeeTypeEnum

Label for ``Filing.amount_fees`` — penalty vs interest vs other.

Nullable on the row: existing fees predate the label and stay blank until
Tax Ops classifies them. Does not change arithmetic.

## Example Usage

```typescript
import { FeeTypeEnum } from "@kintsugi-tax/tax-platform-sdk/models";

let value: FeeTypeEnum = "PENALTY";
```

## Values

```typescript
"PENALTY" | "INTEREST" | "OTHER"
```