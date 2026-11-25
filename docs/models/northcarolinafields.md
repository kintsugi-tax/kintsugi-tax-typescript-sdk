# NorthCarolinaFields

State-specific fields for North Carolina (NCDOR) registration import.

North Carolina requires no 2FA/MFA setup, so there is no ``mfa_completed``
field, and it grants no customer-facing third-party access step, so there is no
``third_party_access_enabled`` field either — unlike most other portal states.

## Example Usage

```typescript
import { NorthCarolinaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: NorthCarolinaFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  ncStateTaxId: "<id>",
  contactName: "<value>",
  contactEmail: "<value>",
  contactPhone: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `registrationType`                                                         | *"SALES_AND_USE_TAX"*                                                      | :heavy_check_mark:                                                         | Registration type for this North Carolina import: sales and use tax.       |
| `businessName`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | State-registered business name as shown on the North Carolina tax account. |
| `ncStateTaxId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | North Carolina state-issued tax identification number (NC State Tax ID).   |
| `contactName`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Primary contact name on the North Carolina tax account.                    |
| `contactEmail`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Primary contact email address on the North Carolina tax account.           |
| `contactPhone`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Primary contact phone number on the North Carolina tax account.            |