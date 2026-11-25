# GetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGetRequest

## Example Usage

```typescript
import { GetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGetRequest =
    {
      countryCode: "TC",
      stateCode: "<value>",
      xOrganizationId: "org_12345",
    };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `countryCode`                                                 | *string*                                                      | :heavy_check_mark:                                            | ISO 3166-1 alpha-2 country code (e.g., US).                   |                                                               |
| `stateCode`                                                   | *string*                                                      | :heavy_check_mark:                                            | State/province code (e.g., AL, LA).                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |