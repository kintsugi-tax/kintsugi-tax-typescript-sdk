# PageTransactionRead

## Example Usage

```typescript
import { PageTransactionRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PageTransactionRead = {
  items: [
    {
      organizationId: "<id>",
      externalId: "<id>",
      date: "2024-06-21",
      id: "<id>",
      addresses: [],
      transactionItems: [],
      type: "TAX_COLLECTION",
    },
  ],
  total: 467045,
  page: 592293,
  size: 693910,
  pages: 314435,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `items`                                                  | [models.TransactionRead](../models/transactionread.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `total`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `page`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `size`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `pages`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |