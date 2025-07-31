# GetExemptionsV1ExemptionsGetRequest

## Example Usage

```typescript
import { GetExemptionsV1ExemptionsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetExemptionsV1ExemptionsGetRequest = {
  searchQuery: "John",
  countryCode: [
    "US",
  ],
  jurisdiction: "CA",
  startDate: "2024-01-01",
  endDate: "2024-01-01",
  customerId: "cust_1234",
  transactionId: "trans_1234",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `searchQuery`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | Search term to filter exemptions by exemption ID, customer name, or customer email | John                                                                               |
| `statusIn`                                                                         | *string*                                                                           | :heavy_minus_sign:                                                                 | Filter exemptions by their status                                                  |                                                                                    |
| `countryCode`                                                                      | [models.CountryCodeEnum](../../models/countrycodeenum.md)[]                        | :heavy_minus_sign:                                                                 | Country code in ISO 3166-1 alpha-2 format                                          | US                                                                                 |
| `jurisdiction`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Jurisdiction identifier                                                            | CA                                                                                 |
| `startDate`                                                                        | *string*                                                                           | :heavy_minus_sign:                                                                 | Start date for filtering exemptions                                                | 2024-01-01                                                                         |
| `endDate`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | End date for filtering exemptions                                                  | 2024-01-01                                                                         |
| `customerId`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | Customer ID to filter exemptions                                                   | cust_1234                                                                          |
| `transactionId`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | Transaction ID to filter exemptions                                                | trans_1234                                                                         |
| `orderBy`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | Fields to sort by (comma-separated)                                                |                                                                                    |
| `page`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Page number                                                                        |                                                                                    |
| `size`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | Page size                                                                          |                                                                                    |