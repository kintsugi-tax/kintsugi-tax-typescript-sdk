# ArchiveTransactionByIdV1TransactionsArchivePostRequest

## Example Usage

```typescript
import { ArchiveTransactionByIdV1TransactionsArchivePostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: ArchiveTransactionByIdV1TransactionsArchivePostRequest = {
  transactionId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `transactionId`                                               | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |