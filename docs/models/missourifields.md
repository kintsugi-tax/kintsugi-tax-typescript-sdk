# MissouriFields

State-specific fields for Missouri portal registration import (MyTax Missouri).

## Example Usage

```typescript
import { MissouriFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: MissouriFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  moStateTaxId: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `registrationType`                                                         | [models.MissouriRegistrationType](../models/missouriregistrationtype.md)   | :heavy_check_mark:                                                         | N/A                                                                        |
| `businessName`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | State-registered business name as shown in MyTax Missouri.                 |
| `moStateTaxId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Missouri state-issued tax identification number (MO State Tax ID).         |
| `thirdPartyAccessEnabled`                                                  | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether third-party access has been granted to Kintsugi in MyTax Missouri. |