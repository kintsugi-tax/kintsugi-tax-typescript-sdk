# CreateTransactionV1TransactionsPostRequest

## Example Usage

```typescript
import { CreateTransactionV1TransactionsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: CreateTransactionV1TransactionsPostRequest = {
  xOrganizationId: "org_12345",
  transactionPublicRequest: {
    organizationId: "<id>",
    externalId: "<id>",
    date: new Date("2024-04-07T07:16:56.064Z"),
    addresses: [
      {
        type: "SHIP_FROM",
      },
    ],
    transactionItems: [
      {
        organizationId: "<id>",
        date: new Date("2023-04-16T14:57:10.761Z"),
        externalProductId: "<id>",
      },
    ],
    customer: {
      organizationId: "<id>",
      isTestData: false,
    },
    type: "SALE",
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `xOrganizationId`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | The unique identifier for the organization making the request               | org_12345                                                                   |
| `transactionPublicRequest`                                                  | [models.TransactionPublicRequest](../../models/transactionpublicrequest.md) | :heavy_check_mark:                                                          | N/A                                                                         |                                                                             |