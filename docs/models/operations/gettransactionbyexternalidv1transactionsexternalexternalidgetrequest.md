# GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest

## Example Usage

```typescript
import { GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest = {
    externalId: "<id>",
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `externalId`                                                  | *string*                                                      | :heavy_check_mark:                                            | The unique external identifier of the transaction.            |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |