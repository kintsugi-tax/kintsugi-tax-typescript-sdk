# PageTransactionEstimateResponse

## Example Usage

```typescript
import { PageTransactionEstimateResponse } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PageTransactionEstimateResponse = {
  items: [
    {
      date: new Date("2023-01-22T23:22:06.771Z"),
      externalId: "<id>",
      currency: "GYD",
      transactionItems: [
        {
          date: new Date("2024-05-31T06:57:32.911Z"),
          amount: "391.48",
        },
      ],
      addresses: [
        {
          type: "BILL_TO",
          state: "Maryland",
          postalCode: "32757-7004",
          country: "Latvia",
        },
      ],
    },
  ],
  total: 161936,
  page: 59419,
  size: 8843,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [models.TransactionEstimateResponse](../models/transactionestimateresponse.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `total`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `page`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `size`                                                                           | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `pages`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |