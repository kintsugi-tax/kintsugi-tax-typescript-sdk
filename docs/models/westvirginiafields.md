# WestVirginiaFields

State-specific fields for West Virginia MyTaxes portal registration import.

## Example Usage

```typescript
import { WestVirginiaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: WestVirginiaFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  wvStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                                | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their West Virginia MyTaxes account. |
| `registrationType`                                                                                                            | [models.WestVirginiaRegistrationType](../models/westvirginiaregistrationtype.md)                                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `businessName`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | State-registered business name as shown in West Virginia MyTaxes.                                                             |
| `wvStateTaxId`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | West Virginia state-issued tax identification number (WV State Tax ID).                                                       |
| `thirdPartyAccessEnabled`                                                                                                     | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether third-party access has been granted to Kintsugi in MyTaxes.                                                           |