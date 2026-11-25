# KentuckyFields

State-specific fields for Kentucky KYDOR (MyTaxes) portal registration import.

## Example Usage

```typescript
import { KentuckyFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: KentuckyFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  kyStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                                   | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Kentucky KYDOR (MyTaxes) account. |
| `registrationType`                                                                                                               | [models.KentuckyRegistrationType](../models/kentuckyregistrationtype.md)                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `businessName`                                                                                                                   | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | State-registered business name as shown in Kentucky MyTaxes.                                                                     |
| `kyStateTaxId`                                                                                                                   | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Kentucky state-issued tax identification number (KY State Tax ID).                                                               |
| `registeredViaSst`                                                                                                               | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Whether the business is registered via Streamlined Sales Tax (SST).                                                              |
| `sstAccountNumber`                                                                                                               | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | SST account number; required only when registered_via_sst is True.                                                               |
| `thirdPartyAccessEnabled`                                                                                                        | *boolean*                                                                                                                        | :heavy_minus_sign:                                                                                                               | Whether third-party access has been granted to Kintsugi in KYDOR (MyTaxes).                                                      |