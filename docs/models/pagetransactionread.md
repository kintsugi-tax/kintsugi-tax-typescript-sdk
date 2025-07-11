# PageTransactionRead

## Example Usage

```typescript
import { PageTransactionRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PageTransactionRead = {
  items: [
    {
      organizationId: "<id>",
      externalId: "<id>",
      date: new Date("2024-05-29T14:28:30.145Z"),
      id: "<id>",
      addresses: [],
      transactionItems: [],
      type: "TAX_REFUND",
    },
  ],
  total: 592293,
  page: 314435,
  size: null,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [models.TransactionRead](../models/transactionread.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `total`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `size`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pages`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |