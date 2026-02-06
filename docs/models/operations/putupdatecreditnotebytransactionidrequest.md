# PUTUpdateCreditNoteByTransactionIdRequest

## Example Usage

```typescript
import { PUTUpdateCreditNoteByTransactionIdRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: PUTUpdateCreditNoteByTransactionIdRequest = {
  originalTransactionId: "<id>",
  creditNoteId: "<id>",
  creditNoteCreate: {
    externalId: "<id>",
    date: new Date("2024-10-25T18:28:15.690Z"),
    status: "PENDING",
    totalAmount: 3103.69,
    currency: "KYD",
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