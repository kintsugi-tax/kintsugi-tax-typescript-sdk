# NewJerseyFields

State-specific fields for New Jersey (Premier Business Services) registration import.

New Jersey requires no 2FA/MFA setup (mirroring Michigan MTO), so there is no
``mfa_completed`` field and no MFA/2FA help article in the metadata.

## Example Usage

```typescript
import { NewJerseyFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: NewJerseyFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  njStateTaxId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `registrationType`                                                               | *"SALES_AND_USE_TAX"*                                                            | :heavy_check_mark:                                                               | Registration type for this New Jersey import: sales and use tax.                 |
| `businessName`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | State-registered business name as shown in New Jersey Premier Business Services. |
| `njStateTaxId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | New Jersey state-issued taxpayer identification number (NJ State Taxpayer ID).   |
| `thirdPartyAccessEnabled`                                                        | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether third-party access has been granted to Kintsugi in New Jersey.           |