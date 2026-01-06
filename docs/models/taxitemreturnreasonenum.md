# TaxItemReturnReasonEnum

We use this to understand the response from get_tax_items

## Example Usage

```typescript
import { TaxItemReturnReasonEnum } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TaxItemReturnReasonEnum = "NO_RULE_FOUND";
```

## Values

```typescript
"NO_RULE_FOUND" | "RULE_FOUND_TAXABLE" | "RULE_FOUND_NOT_TAXABLE" | "RULE_FOUND_TAXABLE_ZERO_RATE" | "PRODUCT_EXEMPT" | "FROM_IMPORT" | "RULE_EXCLUDED_IN_CALCULATION"
```