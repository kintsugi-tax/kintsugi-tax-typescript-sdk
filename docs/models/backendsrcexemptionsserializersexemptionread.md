# BackendSrcExemptionsSerializersExemptionRead

## Example Usage

```typescript
import { BackendSrcExemptionsSerializersExemptionRead } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: BackendSrcExemptionsSerializersExemptionRead = {
  startDate: new RFCDate("2024-08-29"),
  id: "<id>",
  exemptionType: "transaction",
  status: "DEACTIVATED",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `countryCode`                                                    | [models.CountryCodeEnum](../models/countrycodeenum.md)           | :heavy_minus_sign:                                               | Country code in ISO 3166-1 alpha-2 format (e.g., 'US')           |
| `jurisdiction`                                                   | *string*                                                         | :heavy_minus_sign:                                               | The jurisdiction identifier for the exemption                    |
| `startDate`                                                      | [RFCDate](../types/rfcdate.md)                                   | :heavy_check_mark:                                               | Start date for the exemption validity period (YYYY-MM-DD format) |
| `endDate`                                                        | [RFCDate](../types/rfcdate.md)                                   | :heavy_minus_sign:                                               | End date for the exemption validity period (YYYY-MM-DD format)   |
| `transactionId`                                                  | *string*                                                         | :heavy_minus_sign:                                               | Unique identifier for the transaction, if applicable             |
| `reseller`                                                       | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether the exemption is for a reseller                |
| `fein`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Federal Employer Identification Number                           |
| `salesTaxId`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Sales tax ID for the exemption                                   |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for the exemption                              |
| `customer`                                                       | [models.CustomerRead](../models/customerread.md)                 | :heavy_minus_sign:                                               | Details of the customer associated with the exemption            |
| `attachment`                                                     | [models.AttachmentRead](../models/attachmentread.md)[]           | :heavy_minus_sign:                                               | List of attachments related to the exemption                     |
| `exemptionType`                                                  | [models.ExemptionType](../models/exemptiontype.md)               | :heavy_check_mark:                                               | N/A                                                              |
| `status`                                                         | [models.ExemptionStatus](../models/exemptionstatus.md)           | :heavy_check_mark:                                               | N/A                                                              |