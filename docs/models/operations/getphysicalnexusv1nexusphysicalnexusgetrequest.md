# GetPhysicalNexusV1NexusPhysicalNexusGetRequest

## Example Usage

```typescript
import { GetPhysicalNexusV1NexusPhysicalNexusGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetPhysicalNexusV1NexusPhysicalNexusGetRequest = {
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `page`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Page number                                                   |                                                               |
| `size`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Page size                                                     |                                                               |
| `countryCode`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `stateCode`                                                   | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `orderBy`                                                     | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |