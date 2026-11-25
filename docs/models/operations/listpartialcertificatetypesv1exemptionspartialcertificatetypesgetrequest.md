# ListPartialCertificateTypesV1ExemptionsPartialCertificateTypesGetRequest

## Example Usage

```typescript
import { ListPartialCertificateTypesV1ExemptionsPartialCertificateTypesGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  ListPartialCertificateTypesV1ExemptionsPartialCertificateTypesGetRequest = {
    jurisdiction: "CA",
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `jurisdiction`                                                    | *string*                                                          | :heavy_minus_sign:                                                | Jurisdiction code. Only forms for this jurisdiction are returned. | CA                                                                |
| `xOrganizationId`                                                 | *string*                                                          | :heavy_check_mark:                                                | The unique identifier for the organization making the request     | org_12345                                                         |