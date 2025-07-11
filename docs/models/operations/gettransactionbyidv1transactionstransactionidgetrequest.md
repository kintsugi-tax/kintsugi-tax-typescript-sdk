# GetTransactionByIdV1TransactionsTransactionIdGetRequest

## Example Usage

```typescript
import { GetTransactionByIdV1TransactionsTransactionIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetTransactionByIdV1TransactionsTransactionIdGetRequest = {
  transactionId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `transactionId`                                               | *string*                                                      | :heavy_check_mark:                                            | The unique identifier of the transaction to retrieve.         |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |