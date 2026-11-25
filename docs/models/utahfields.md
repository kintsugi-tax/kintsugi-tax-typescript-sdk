# UtahFields

State-specific fields for Utah TAP portal registration import.

## Example Usage

```typescript
import { UtahFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: UtahFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  utStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                               | [models.UtahRegistrationType](../models/utahregistrationtype.md)                                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `mfaCompleted`                                                                                                   | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Utah tax account. |
| `businessName`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | State-registered business name as shown in Utah TAP.                                                             |
| `utStateTaxId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Utah state-issued tax identification number (UT State Tax ID).                                                   |