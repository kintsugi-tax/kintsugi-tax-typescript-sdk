# OklahomaFields

State-specific fields for Oklahoma OkTAP portal registration import.

## Example Usage

```typescript
import { OklahomaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: OklahomaFields = {
  registrationType: "REMOTE_SELLER",
  businessName: "<value>",
  okStateTaxId: "<id>",
  zipCode: "41530-5295",
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                                                      | *boolean*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                  | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Oklahoma OkTAP account.                              |
| `registrationType`                                                                                                                                  | [models.OklahomaFieldsRegistrationType](../models/oklahomafieldsregistrationtype.md)                                                                | :heavy_check_mark:                                                                                                                                  | Registration type for this Oklahoma import: sales tax or remote seller.                                                                             |
| `businessName`                                                                                                                                      | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | State-registered business name as shown in OkTAP.                                                                                                   |
| `okStateTaxId`                                                                                                                                      | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | Oklahoma state-issued tax identification number (OK State Tax ID).                                                                                  |
| `zipCode`                                                                                                                                           | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | ZIP or Canadian postal code for the address used when registering with the state. Accepts a 5-digit US ZIP or a Canadian postal code (e.g. L6H0C3). |