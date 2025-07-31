# PUTUpdateCreditNoteByTransactionIdRequest

## Example Usage

```typescript
import { PUTUpdateCreditNoteByTransactionIdRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: PUTUpdateCreditNoteByTransactionIdRequest = {
  originalTransactionId: "<id>",
  creditNoteId: "<id>",
  creditNoteCreate: {
    externalId: "<id>",
    date: new Date("2023-10-26T18:28:15.690Z"),
    status: "PENDING",
    totalAmount: 0,
    currency: "GIP",
    transactionItems: [],
  },
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `originalTransactionId`                                     | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `creditNoteId`                                              | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `creditNoteCreate`                                          | [models.CreditNoteCreate](../../models/creditnotecreate.md) | :heavy_check_mark:                                          | N/A                                                         |