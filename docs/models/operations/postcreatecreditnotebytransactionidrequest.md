# POSTCreateCreditNoteByTransactionIdRequest

## Example Usage

```typescript
import { POSTCreateCreditNoteByTransactionIdRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: POSTCreateCreditNoteByTransactionIdRequest = {
  originalTransactionId: "<id>",
  xOrganizationId: "org_12345",
  creditNoteCreate: {
    externalId: "<id>",
    date: new Date("2023-10-26T18:28:15.690Z"),
    status: "PENDING",
    currency: "GIP",
    transactionItems: [],
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `originalTransactionId`                                       | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `creditNoteCreate`                                            | [models.CreditNoteCreate](../../models/creditnotecreate.md)   | :heavy_check_mark:                                            | N/A                                                           |                                                               |