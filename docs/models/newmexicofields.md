# NewMexicoFields

State-specific fields for New Mexico TAP portal registration import.

Third-party access is communicated via Indiana-style footer copy on import
(no ``third_party_access_enabled`` checkbox field).

## Example Usage

```typescript
import { NewMexicoFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: NewMexicoFields = {
  registrationType: "GROSS_RECEIPTS_TAX",
  businessName: "<value>",
  nmStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their New Mexico TAP account. |
| `registrationType`                                                                                                     | *"GROSS_RECEIPTS_TAX"*                                                                                                 | :heavy_check_mark:                                                                                                     | Registration type for this New Mexico import: gross receipts tax.                                                      |
| `businessName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | State-registered business name as shown in New Mexico TAP.                                                             |
| `nmStateTaxId`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | New Mexico State Taxpayer ID associated with the Gross Receipts Tax account.                                           |