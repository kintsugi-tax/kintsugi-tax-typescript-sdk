# MarylandFields

State-specific fields for Maryland Tax Connect registration import.

## Example Usage

```typescript
import { MarylandFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: MarylandFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  mdStateTaxId: "<id>",
  marketplaceFacilitator: true,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                       | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Maryland tax account. |
| `registrationType`                                                                                                   | *"SALES_AND_USE_TAX"*                                                                                                | :heavy_check_mark:                                                                                                   | Registration type for this Maryland import: sales and use tax.                                                       |
| `businessName`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | State-registered business name as shown in Maryland Tax Connect.                                                     |
| `mdStateTaxId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Maryland state-issued tax identification number (MD State Tax ID).                                                   |
| `marketplaceFacilitator`                                                                                             | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | Whether the business is a marketplace facilitator.                                                                   |