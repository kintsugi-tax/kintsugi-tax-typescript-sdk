# CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest

## Example Usage

```typescript
import { CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest = {
    customerId: "<id>",
    xOrganizationId: "org_12345",
    transactionCreate: {
      organizationId: "<id>",
      externalId: "<id>",
      date: new Date("2024-11-11T09:58:14.743Z"),
      addresses: [],
      transactionItems: [],
    },
  };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customerId`                                                  | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `transactionCreate`                                           | [models.TransactionCreate](../../models/transactioncreate.md) | :heavy_check_mark:                                            | N/A                                                           |                                                               |