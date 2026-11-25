# OhioFields

State-specific fields for Ohio OH|TAX eServices registration import.

## Example Usage

```typescript
import { OhioFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: OhioFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  ohStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `registrationType`                                                                                                                               | *"SALES_AND_USE_TAX"*                                                                                                                            | :heavy_check_mark:                                                                                                                               | Registration type for this Ohio import: sales and use tax, the account type administered by the Ohio Department of Taxation in OH\|TAX eServices. |
| `mfaCompleted`                                                                                                                                   | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Ohio tax account.                                 |
| `businessName`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | State-registered business name as shown in OH\|TAX eServices.                                                                                    |
| `ohStateTaxId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Ohio state-issued tax identification number (OH State Tax ID).                                                                                   |
| `thirdPartyAccessEnabled`                                                                                                                        | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Whether third-party access has been granted to Kintsugi in the customer's OH\|TAX eServices account.                                             |