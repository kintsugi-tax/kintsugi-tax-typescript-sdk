# UpdateRegistrationV1RegistrationsRegistrationIdPutRequest

## Example Usage

```typescript
import { UpdateRegistrationV1RegistrationsRegistrationIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateRegistrationV1RegistrationsRegistrationIdPutRequest = {
  registrationId: "<id>",
  registrationUpdateAPI: {},
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `registrationId`                                                      | *string*                                                              | :heavy_check_mark:                                                    | The unique identifier of the registration to be updated.              |
| `registrationUpdateAPI`                                               | [models.RegistrationUpdateAPI](../../models/registrationupdateapi.md) | :heavy_check_mark:                                                    | N/A                                                                   |