# UpdateCreditNoteByTransactionIdV1TransactionsOriginalTransactionIdCreditNotesCreditNoteIdPutRequest

## Example Usage

```typescript
import {
  UpdateCreditNoteByTransactionIdV1TransactionsOriginalTransactionIdCreditNotesCreditNoteIdPutRequest,
} from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  UpdateCreditNoteByTransactionIdV1TransactionsOriginalTransactionIdCreditNotesCreditNoteIdPutRequest =
    {
      originalTransactionId: "<id>",
      creditNoteId: "<id>",
      xOrganizationId: "org_12345",
      creditNoteCreate: {
        externalId: "<id>",
        date: new Date("2024-09-09T14:40:30.850Z"),
        status: "COMMITTED",
        currency: "PGK",
        transactionItems: [
          {
            externalId: "<id>",
            date: new Date("2024-05-02T16:02:44.932Z"),
            externalProductId: "<id>",
          },
        ],
      },
    };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `originalTransactionId`                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `creditNoteId`                                                | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `creditNoteCreate`                                            | [models.CreditNoteCreate](../../models/creditnotecreate.md)   | :heavy_check_mark:                                            | N/A                                                           |                                                               |