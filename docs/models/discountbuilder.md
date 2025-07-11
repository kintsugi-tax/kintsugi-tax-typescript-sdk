# DiscountBuilder

## Example Usage

```typescript
import { DiscountBuilder } from "@kintsugi-tax/tax-platform-sdk/models";

let value: DiscountBuilder = {
  appliedTo: "TRANSACTION_ITEM",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `externalId`                               | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `appliedTo`                                | [models.AppliedTo](../models/appliedto.md) | :heavy_check_mark:                         | N/A                                        |
| `discountAmount`                           | *models.DiscountAmount*                    | :heavy_minus_sign:                         | N/A                                        |