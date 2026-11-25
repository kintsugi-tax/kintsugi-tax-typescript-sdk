# RhodeIslandFields

State-specific fields for Rhode Island Taxpayer Portal registration import.

## Example Usage

```typescript
import { RhodeIslandFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: RhodeIslandFields = {
  registrationType: "SALES_AND_USE_TAX",
  mfaCompleted: true,
  businessName: "<value>",
  riStateTaxId: "<id>",
  riSalesFilingId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `registrationType`                                                                                                                               | *"SALES_AND_USE_TAX"*                                                                                                                            | :heavy_check_mark:                                                                                                                               | Registration type for this Rhode Island import: sales and use tax, the account type administered in the Rhode Island Taxpayer Portal.            |
| `mfaCompleted`                                                                                                                                   | *boolean*                                                                                                                                        | :heavy_check_mark:                                                                                                                               | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Rhode Island tax account. Must be true to import. |
| `businessName`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | State-registered business name as shown in the Rhode Island Taxpayer Portal.                                                                     |
| `riStateTaxId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Rhode Island state-issued tax identification number (RI State Tax ID).                                                                           |
| `riSalesFilingId`                                                                                                                                | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | Sales / Filing ID: 9-digit numerical ID assigned by the state to an active sales tax account, found in the Rhode Island Taxpayer Portal.         |
| `thirdPartyAccessEnabled`                                                                                                                        | *boolean*                                                                                                                                        | :heavy_minus_sign:                                                                                                                               | Whether third-party access has been granted to Kintsugi in the customer's Rhode Island tax account.                                              |