# MassachusettsFields

State-specific fields for Massachusetts registration import (MassTaxConnect).

## Example Usage

```typescript
import { MassachusettsFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: MassachusettsFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  maStateAccountId: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `registrationType`                                                                  | [models.MassachusettsRegistrationType](../models/massachusettsregistrationtype.md)  | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `businessName`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | Business name as registered with the Commonwealth of Massachusetts.                 |
| `maStateAccountId`                                                                  | *string*                                                                            | :heavy_check_mark:                                                                  | Massachusetts state tax account ID from MassTaxConnect.                             |
| `mfaCompleted`                                                                      | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the customer has completed MFA setup in their Massachusetts tax account.    |
| `thirdPartyAccessEnabled`                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the customer has granted third-party access for Kintsugi in MassTaxConnect. |