# UpdateTransactionV1TransactionsTransactionIdPutRequest

## Example Usage

```typescript
import { UpdateTransactionV1TransactionsTransactionIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateTransactionV1TransactionsTransactionIdPutRequest = {
  transactionId: "<id>",
  transactionUpdate: {
    organizationId: "<id>",
    externalId: "<id>",
    date: new Date("2026-04-30T15:53:47.696Z"),
    addresses: [],
    transactionItems: [],
    customer: {},
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `transactionId`                                               | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `transactionUpdate`                                           | [models.TransactionUpdate](../../models/transactionupdate.md) | :heavy_check_mark:                                            | N/A                                                           |