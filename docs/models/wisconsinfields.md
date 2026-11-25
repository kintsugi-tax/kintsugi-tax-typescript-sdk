# WisconsinFields

State-specific fields for Wisconsin MyTaxAccount portal registration import.

## Example Usage

```typescript
import { WisconsinFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: WisconsinFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  wiStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Wisconsin MyTaxAccount. |
| `registrationType`                                                                                                     | [models.WisconsinRegistrationType](../models/wisconsinregistrationtype.md)                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `businessName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | State-registered business name as shown in Wisconsin MyTaxAccount.                                                     |
| `wiStateTaxId`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Wisconsin state-issued tax identification number (WI State Tax ID).                                                    |
| `thirdPartyAccessEnabled`                                                                                              | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether third-party access has been granted to Kintsugi in MyTaxAccount.                                               |