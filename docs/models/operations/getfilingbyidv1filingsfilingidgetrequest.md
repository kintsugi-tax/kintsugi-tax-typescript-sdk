# GetFilingByIdV1FilingsFilingIdGetRequest

## Example Usage

```typescript
import { GetFilingByIdV1FilingsFilingIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetFilingByIdV1FilingsFilingIdGetRequest = {
  filingId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `filingId`                                                    | *string*                                                      | :heavy_check_mark:                                            | Unique identifier for the filing to retrieve.                 |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |