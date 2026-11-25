# GetExemptionByIdV1ExemptionsExemptionIdGetRequest

## Example Usage

```typescript
import { GetExemptionByIdV1ExemptionsExemptionIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetExemptionByIdV1ExemptionsExemptionIdGetRequest = {
  exemptionId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `exemptionId`                                                 | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the exemption being retrieved.      |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |