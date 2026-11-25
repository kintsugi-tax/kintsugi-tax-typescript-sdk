# ArkansasFields

State-specific fields for Arkansas registration import (ATAP).

Plaintext in API request/response; persisted as JSON on the registration.

## Example Usage

```typescript
import { ArkansasFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ArkansasFields = {
  registrationType: "REMOTE_SELLER",
  businessName: "<value>",
  arAccountId: "<id>",
  zipCode: "22290-5160",
  lastPaymentToState: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                     | [models.ArkansasRegistrationType](../models/arkansasregistrationtype.md)                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `businessName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Business name as registered with the state of Arkansas.                                                                |
| `arAccountId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Arkansas Taxpayer Access Point (ATAP) account ID.                                                                      |
| `zipCode`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ZIP code associated with the Arkansas registration.                                                                    |
| `lastPaymentToState`                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Last payment made to the state as a plain decimal (e.g. 0.00 if no payment has been made; do not include $ or commas). |
| `mfaCompleted`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the customer has completed MFA setup in their Arkansas tax account.                                            |