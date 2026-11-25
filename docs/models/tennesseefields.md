# TennesseeFields

State-specific fields for Tennessee TNTAP portal registration import.

## Example Usage

```typescript
import { TennesseeFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TennesseeFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  tnStateTaxId: "<id>",
  zipCode: "14705-7671",
  letterId: "<id>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                                  | [models.TennesseeRegistrationType](../models/tennesseeregistrationtype.md)                                                          | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `mfaCompleted`                                                                                                                      | *boolean*                                                                                                                           | :heavy_minus_sign:                                                                                                                  | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Tennessee DOR TNTAP account.         |
| `businessName`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | State-registered business name as shown in TNTAP.                                                                                   |
| `tnStateTaxId`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Tennessee state-issued tax identification number (TN State Tax ID).                                                                 |
| `zipCode`                                                                                                                           | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Account ZIP code on file with the Tennessee Department of Revenue.                                                                  |
| `letterId`                                                                                                                          | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Tennessee Letter ID printed on correspondence from the TN Department of Revenue: prefix L followed by 10 digits (e.g. L1234567890). |