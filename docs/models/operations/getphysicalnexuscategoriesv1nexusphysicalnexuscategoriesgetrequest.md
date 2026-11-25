# GetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGetRequest

## Example Usage

```typescript
import { GetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGetRequest =
  {
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `countryCode`                                                 | [models.CountryCodeEnum](../../models/countrycodeenum.md)     | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `stateCode`                                                   | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |