# TaxExemptionEnum

This enum is used to determine if a transaction is exempt from tax.

## Example Usage

```typescript
import { TaxExemptionEnum } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TaxExemptionEnum = "IMPORTED";
```

## Values

```typescript
"PRODUCT" | "TRANSACTION" | "CUSTOMER" | "REGION" | "REVERSE_CHARGE" | "ZERO_RATE_TAX" | "HIGH_VALUE_PHYSICAL_GOODS" | "EXPORT" | "ZERO_VALUE_ITEM" | "NO_RULE_FOUND" | "IMPORTED"
```