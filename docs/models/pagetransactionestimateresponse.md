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
      addresses: [
        {
          type: "SHIP_TO",
          state: "Maryland",
          postalCode: "63632-7577",
          country: "Azerbaijan",
        },
      ],
      transactionItems: [],
    },
  ],
  total: 497805,
  page: 59419,
  size: null,
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