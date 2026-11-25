# VirginiaFields

State-specific fields for Virginia tax portal registration import.

## Example Usage

```typescript
import { VirginiaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: VirginiaFields = {
  registrationType: "USE_TAX",
  businessName: "<value>",
  vaStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                   | [models.VirginiaRegistrationType](../models/virginiaregistrationtype.md)                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `mfaCompleted`                                                                                                       | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Virginia tax account. |
| `businessName`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | State-registered business name as shown in Virginia Tax Online Services.                                             |
| `vaStateTaxId`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Virginia state-issued tax identification number (VA State Tax ID).                                                   |
| `thirdPartyAccessEnabled`                                                                                            | *boolean*                                                                                                            | :heavy_minus_sign:                                                                                                   | Whether third-party access has been granted to Kintsugi in Virginia Tax Online Services.                             |