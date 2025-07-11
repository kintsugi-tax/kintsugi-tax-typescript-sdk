# GetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGetRequest

## Example Usage

```typescript
import { GetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGetRequest = {
    customerId: "<id>",
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customerId`                                                  | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |