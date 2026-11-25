# PUTUpdateCreditNoteByTransactionIdRequest

## Example Usage

```typescript
import { PUTUpdateCreditNoteByTransactionIdRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: PUTUpdateCreditNoteByTransactionIdRequest = {
  originalTransactionId: "<id>",
  creditNoteId: "<id>",
  xOrganizationId: "org_12345",
  creditNoteCreate: {
    externalId: "<id>",
    date: new Date("2024-10-25T18:28:15.690Z"),
    status: "PENDING",
    totalAmount: 4871.21,
    currency: "GNF",
    transactionItems: [],
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