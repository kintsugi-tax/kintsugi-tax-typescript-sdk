# GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest

## Example Usage

```typescript
import { GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest = {
  filingId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `filingId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the filing<br/>        whose transactions you wish to retrieve.<br/>         |                                                                                               |
| `xOrganizationId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the organization making the request                                 | org_12345                                                                                     |