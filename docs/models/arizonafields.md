# ArizonaFields

State-specific fields for Arizona TPT registration import.

## Example Usage

```typescript
import { ArizonaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ArizonaFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  salesTaxId: "<id>",
  locationId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `registrationType`                                                                 | [models.ArizonaRegistrationType](../models/arizonaregistrationtype.md)             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `mfaCompleted`                                                                     | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the customer has completed MFA setup in their Arizona AZTaxes.gov account. |
| `businessName`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | Business name as registered with the state of Arizona.                             |
| `salesTaxId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | Arizona state-issued sales tax number (AZ State Tax ID).                           |
| `locationId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | Business location ID as shown in AZTaxes.gov.                                      |