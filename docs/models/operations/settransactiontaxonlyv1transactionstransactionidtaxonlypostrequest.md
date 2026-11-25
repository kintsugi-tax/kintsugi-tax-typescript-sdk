# SetTransactionTaxOnlyV1TransactionsTransactionIdTaxOnlyPostRequest

## Example Usage

```typescript
import { SetTransactionTaxOnlyV1TransactionsTransactionIdTaxOnlyPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: SetTransactionTaxOnlyV1TransactionsTransactionIdTaxOnlyPostRequest =
  {
    transactionId: "<id>",
    xOrganizationId: "org_12345",
    taxOnlyUpdate: {
      taxOnly: true,
    },
  };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `transactionId`                                               | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `taxOnlyUpdate`                                               | [models.TaxOnlyUpdate](../../models/taxonlyupdate.md)         | :heavy_check_mark:                                            | N/A                                                           |                                                               |