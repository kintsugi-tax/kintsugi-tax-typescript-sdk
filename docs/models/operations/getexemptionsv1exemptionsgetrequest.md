# GetExemptionsV1ExemptionsGetRequest

## Example Usage

```typescript
import { GetExemptionsV1ExemptionsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: GetExemptionsV1ExemptionsGetRequest = {
  searchQuery: "John",
  countryCode: [
    "US",
  ],
  jurisdiction: "CA",
  startDate: new RFCDate("2024-01-01"),
  endDate: new RFCDate("2024-01-01"),
  customerId: "cust_1234",
  transactionId: "trans_1234",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `searchQuery`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | Search term to filter exemptions by exemption ID, customer name, or customer email | John                                                                               |
| `statusIn`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | Filter exemptions by their status                                                  |                                                                                    |
| `countryCode`                                                                      | *operations.CountryCode*[]                                                         | :heavy_minus_sign:                                                                 | Country code in ISO 3166-1 alpha-2 format                                          | US                                                                                 |
| `jurisdiction`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Jurisdiction identifier                                                            | CA                                                                                 |
| `startDate`                                                                        | [RFCDate](../../types/rfcdate.md)                                                  | :heavy_minus_sign:                                                                 | Start date for filtering exemptions                                                | 2024-01-01                                                                         |
| `endDate`                                                                          | [RFCDate](../../types/rfcdate.md)                                                  | :heavy_minus_sign:                                                                 | End date for filtering exemptions                                                  | 2024-01-01                                                                         |
| `customerId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | Customer ID to filter exemptions                                                   | cust_1234                                                                          |
| `transactionId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | Transaction ID to filter exemptions                                                | trans_1234                                                                         |
| `orderBy`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | Fields to sort by (comma-separated)                                                |                                                                                    |
| `page`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Page number                                                                        |                                                                                    |
| `size`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Page size                                                                          |                                                                                    |
| `xOrganizationId`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | The unique identifier for the organization making the request                      | org_12345                                                                          |