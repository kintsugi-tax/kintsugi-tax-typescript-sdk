# GetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGetRequest

## Example Usage

```typescript
import { GetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGetRequest = {
    exemptionId: "<id>",
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `exemptionId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier for the exemption<br/>        whose attachments are being retrieved. |                                                                                        |
| `xOrganizationId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier for the organization making the request                          | org_12345                                                                              |