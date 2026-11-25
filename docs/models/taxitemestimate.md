# TaxItemEstimate

## Example Usage

```typescript
import { TaxItemEstimate } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TaxItemEstimate = {
  name: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `rate`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `amount`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `exempt`                                                               | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `exemptReason`                                                         | [models.TaxItemReturnReasonEnum](../models/taxitemreturnreasonenum.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `rule`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |