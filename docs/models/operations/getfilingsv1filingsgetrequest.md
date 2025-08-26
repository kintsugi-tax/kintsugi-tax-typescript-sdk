# GetFilingsV1FilingsGetRequest

## Example Usage

```typescript
import { GetFilingsV1FilingsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetFilingsV1FilingsGetRequest = {
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  dateFiledGte: "2024-01-01",
  dateFiledLte: "2024-12-31",
  orderBy: "status,start_date,end_date,amount",
  stateCode: "CA",
  countryCode: [
    "US",
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusIn`                                                              | *string*                                                                | :heavy_minus_sign:                                                      | Filter filings by status                                                | FILED,FILING,UNFILED,PAUSED                                             |
| `startDate`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Filter filings with a start date greater than or equal to this date.    | 2024-01-01                                                              |
| `endDate`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Filter filings with an end date less than or equal to this date.        | 2024-12-31                                                              |
| `dateFiledGte`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Filter filings filed on or after this date.                             | 2024-01-01                                                              |
| `dateFiledLte`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | Filter filings filed on or before this date.                            | 2024-12-31                                                              |
| `orderBy`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Comma-separated list of fields to sort the results.                     | status,start_date,end_date,amount                                       |
| `stateCode`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Filter filings by state code (e.g., CA for California).                 | CA                                                                      |
| `countryCode`                                                           | [models.CountryCodeEnum](../../models/countrycodeenum.md)[]             | :heavy_minus_sign:                                                      | Filter filings by country code in ISO 3166-1 alpha-2 format (e.g., US). | US                                                                      |
| `page`                                                                  | *number*                                                                | :heavy_minus_sign:                                                      | Page number                                                             |                                                                         |
| `size`                                                                  | *number*                                                                | :heavy_minus_sign:                                                      | Page size                                                               |                                                                         |