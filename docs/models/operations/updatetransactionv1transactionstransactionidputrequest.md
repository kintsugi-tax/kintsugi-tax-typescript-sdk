# UpdateTransactionV1TransactionsTransactionIdPutRequest

## Example Usage

```typescript
import { UpdateTransactionV1TransactionsTransactionIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateTransactionV1TransactionsTransactionIdPutRequest = {
  transactionId: "<id>",
  xOrganizationId: "org_12345",
  transactionUpdate: {
    organizationId: "<id>",
    externalId: "<id>",
    date: new Date("2025-04-30T15:53:47.696Z"),
    addresses: [],
    transactionItems: [
      {
        organizationId: "<id>",
        date: new Date("2025-05-11T06:28:04.969Z"),
        externalProductId: "<id>",
      },
    ],
    customer: {},
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `transactionId`                                               | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `transactionUpdate`                                           | [models.TransactionUpdate](../../models/transactionupdate.md) | :heavy_check_mark:                                            | N/A                                                           |                                                               |