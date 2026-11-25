# UpdateRegistrationV1RegistrationsRegistrationIdPutRequest

## Example Usage

```typescript
import { UpdateRegistrationV1RegistrationsRegistrationIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateRegistrationV1RegistrationsRegistrationIdPutRequest = {
  registrationId: "<id>",
  xOrganizationId: "org_12345",
  registrationUpdateAPI: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `registrationId`                                                      | *string*                                                              | :heavy_check_mark:                                                    | The unique identifier of the registration to be updated.              |                                                                       |
| `xOrganizationId`                                                     | *string*                                                              | :heavy_check_mark:                                                    | The unique identifier for the organization making the request         | org_12345                                                             |
| `registrationUpdateAPI`                                               | [models.RegistrationUpdateAPI](../../models/registrationupdateapi.md) | :heavy_check_mark:                                                    | N/A                                                                   |                                                                       |