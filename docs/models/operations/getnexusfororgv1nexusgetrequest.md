# GetNexusForOrgV1NexusGetRequest

## Example Usage

```typescript
import { GetNexusForOrgV1NexusGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetNexusForOrgV1NexusGetRequest = {
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `withoutPagination`                                           | *boolean*                                                     | :heavy_minus_sign:                                            | Return all results without pagination                         |                                                               |
| `disregardView`                                               | *string*                                                      | :heavy_minus_sign:                                            | Filter nexuses by disregard view: 'exposed' or 'disregarded'  |                                                               |
| `searchQuery`                                                 | *string*                                                      | :heavy_minus_sign:                                            | Search nexuses by state code or state name                    |                                                               |
| `statusIn`                                                    | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `stateCode`                                                   | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `stateCodeIn`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `countryCodeIn`                                               | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `taxTypeIn`                                                   | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `orderBy`                                                     | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `collectedTaxNexusMet`                                        | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `page`                                                        | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `size`                                                        | *number*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |