# IowaFields

State-specific fields for Iowa Department of Revenue registration import.

## Example Usage

```typescript
import { IowaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: IowaFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  iaAccountType: "RETAIL_USE_TAX_LICENSE",
  iaStateTaxPermitNumber: "<value>",
  idrNumber: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                         | [models.IowaRegistrationType](../models/iowaregistrationtype.md)                                                           | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `mfaCompleted`                                                                                                             | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether the customer has completed MFA setup in their Iowa tax account.                                                    |
| `businessName`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Business name as registered with the Iowa Department of Revenue.                                                           |
| `iaAccountType`                                                                                                            | [models.IowaAccountType](../models/iowaaccounttype.md)                                                                     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `iaStateTaxPermitNumber`                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Iowa State Tax Permit Number.                                                                                              |
| `idrNumber`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Iowa Department of Revenue (IDR) Number. A 10-digit identifier issued to newer accounts by the Iowa Department of Revenue. |