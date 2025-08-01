# ExemptionCreate

## Example Usage

```typescript
import { ExemptionCreate } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: ExemptionCreate = {
  exemptionType: "wholesale",
  startDate: new RFCDate("2024-04-05"),
  customerId: "<id>",
  fein: "<value>",
  salesTaxId: "<id>",
  status: "INACTIVE",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `exemptionType`                                                  | [models.ExemptionType](../models/exemptiontype.md)               | :heavy_check_mark:                                               | N/A                                                              |
| `jurisdiction`                                                   | *string*                                                         | :heavy_minus_sign:                                               | The jurisdiction identifier for the exemption                    |
| `countryCode`                                                    | [models.CountryCodeEnum](../models/countrycodeenum.md)           | :heavy_minus_sign:                                               | N/A                                                              |
| `startDate`                                                      | [RFCDate](../types/rfcdate.md)                                   | :heavy_check_mark:                                               | Start date for the exemption validity period (YYYY-MM-DD format) |
| `endDate`                                                        | *string*                                                         | :heavy_minus_sign:                                               | End date for the exemption validity period (YYYY-MM-DD format)   |
| `customerId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the customer associated with the exemption |
| `transactionId`                                                  | *string*                                                         | :heavy_minus_sign:                                               | Unique identifier for the transaction, if applicable             |
| `reseller`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether the exemption is for a reseller                |
| `fein`                                                           | *string*                                                         | :heavy_check_mark:                                               | Federal Employer Identification Number                           |
| `salesTaxId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Sales tax ID for the exemption                                   |
| `status`                                                         | [models.ExemptionStatus](../models/exemptionstatus.md)           | :heavy_check_mark:                                               | N/A                                                              |