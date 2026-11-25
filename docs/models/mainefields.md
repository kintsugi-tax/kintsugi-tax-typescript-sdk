# MaineFields

State-specific fields for Maine Tax Portal registration import.

## Example Usage

```typescript
import { MaineFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: MaineFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  meStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                    | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Maine tax account. |
| `registrationType`                                                                                                | *"SALES_AND_USE_TAX"*                                                                                             | :heavy_check_mark:                                                                                                | Registration type for this Maine import: sales and use tax.                                                       |
| `businessName`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | State-registered business name as shown in the Maine Tax Portal.                                                  |
| `meStateTaxId`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Maine state-issued tax identification number (ME State Tax ID): exactly 8 digits with no dashes.                  |