# ApproveFilingV1FilingsFilingIdApprovePutRequest

## Example Usage

```typescript
import { ApproveFilingV1FilingsFilingIdApprovePutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: ApproveFilingV1FilingsFilingIdApprovePutRequest = {
  filingId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `filingId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `xOrganizationId`                                                   | *string*                                                            | :heavy_check_mark:                                                  | The unique identifier for the organization making the request       | org_12345                                                           |
| `filingApproveRequest`                                              | [models.FilingApproveRequest](../../models/filingapproverequest.md) | :heavy_minus_sign:                                                  | N/A                                                                 |                                                                     |