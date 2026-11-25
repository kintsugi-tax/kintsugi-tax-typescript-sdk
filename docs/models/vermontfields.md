# VermontFields

State-specific fields for Vermont myVTax portal registration import.

## Example Usage

```typescript
import { VermontFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: VermontFields = {
  registrationType: "USE_TAX",
  businessName: "<value>",
  vtStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Vermont myVTax account.                                  |
| `registrationType`                                                                                                                                      | [models.VermontRegistrationType](../models/vermontregistrationtype.md)                                                                                  | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `businessName`                                                                                                                                          | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | State-registered business name as shown in myVTax.                                                                                                      |
| `vtStateTaxId`                                                                                                                                          | *string*                                                                                                                                                | :heavy_check_mark:                                                                                                                                      | Vermont state-issued tax identification number (VT State Tax ID): prefix SUT- followed by the 8-digit number assigned by the state (e.g. SUT-12345678). |
| `thirdPartyAccessEnabled`                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Whether third-party access has been granted to Kintsugi in myVTax.                                                                                      |