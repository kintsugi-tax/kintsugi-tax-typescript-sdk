# NebraskaFields

State-specific fields for a Nebraska registration import.

## Example Usage

```typescript
import { NebraskaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: NebraskaFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  neUserId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `registrationType`                                                             | [models.NebraskaRegistrationType](../models/nebraskaregistrationtype.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `mfaCompleted`                                                                 | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether the customer completed Kintsugi MFA setup on the Nebraska tax account. |
| `businessName`                                                                 | *string*                                                                       | :heavy_check_mark:                                                             | State-registered business name shown on the Nebraska tax account.              |
| `neUserId`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | Nebraska User ID shown on Form 10 from the Nebraska Department of Revenue.     |