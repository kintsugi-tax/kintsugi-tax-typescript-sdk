# CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest

## Example Usage

```typescript
import { CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest = {
    customerId: "<id>",
    transactionCreate: {
      organizationId: "<id>",
      externalId: "<id>",
      date: new Date("2025-11-11T09:58:14.743Z"),
      addresses: [
        {
          type: "SHIP_TO",
        },
      ],
      transactionItems: [],
    },
  };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customerId`                                                  | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `transactionCreate`                                           | [models.TransactionCreate](../../models/transactioncreate.md) | :heavy_check_mark:                                            | N/A                                                           |