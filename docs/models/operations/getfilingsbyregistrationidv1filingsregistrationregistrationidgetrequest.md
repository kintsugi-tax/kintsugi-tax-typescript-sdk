# GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest

## Example Usage

```typescript
import { GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest = {
    registrationId: "<id>",
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `registrationId`                                                            | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for the registration<br/>        associated with the filings. |                                                                             |
| `page`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Page number                                                                 |                                                                             |
| `size`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Page size                                                                   |                                                                             |
| `xOrganizationId`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | The unique identifier for the organization making the request               | org_12345                                                                   |