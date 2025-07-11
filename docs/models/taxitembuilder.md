# TaxItemBuilder

## Example Usage

```typescript
import { TaxItemBuilder } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TaxItemBuilder = {
  rate: "<value>",
  amount: 1055.23,
  name: "<value>",
  organizationId: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ruleId`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The rule ID of the tax item                              |
| `rate`                                                   | *models.Rate*                                            | :heavy_check_mark:                                       | N/A                                                      |
| `amount`                                                 | *models.TaxItemBuilderAmount*                            | :heavy_check_mark:                                       | N/A                                                      |
| `convertedAmount`                                        | *models.TaxItemBuilderConvertedAmount*                   | :heavy_minus_sign:                                       | N/A                                                      |
| `currency`                                               | [models.CurrencyEnum](../models/currencyenum.md)         | :heavy_minus_sign:                                       | N/A                                                      |
| `destinationCurrency`                                    | [models.CurrencyEnum](../models/currencyenum.md)         | :heavy_minus_sign:                                       | N/A                                                      |
| `externalId`                                             | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | Deprecated: use `jurisdiction_type` instead              |
| `type`                                                   | [models.TaxItemTypeEnum](../models/taxitemtypeenum.md)   | :heavy_minus_sign:                                       | N/A                                                      |
| `jurisdictionType`                                       | [models.JurisdictionType](../models/jurisdictiontype.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `jurisdictionName`                                       | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `organizationId`                                         | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |