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
      date: new Date("2024-11-11T09:58:14.743Z"),
      totalAmount: 0,
      totalTaxAmountImported: 0,
      taxRateImported: 0,
      totalTaxAmountCalculated: 0,
      taxRateCalculated: 0,
      totalTaxLiabilityAmount: 0,
      taxableAmount: 0,
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