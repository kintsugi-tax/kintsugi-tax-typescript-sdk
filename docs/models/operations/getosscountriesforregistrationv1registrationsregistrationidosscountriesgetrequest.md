# GetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGetRequest

## Example Usage

```typescript
import {
  GetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGetRequest,
} from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGetRequest =
    {
      registrationId: "<id>",
      xOrganizationId: "org_12345",
    };
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `registrationId`                                              | *string*                                                      | :heavy_check_mark:                                            | The unique identifier of the registration.                    |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |