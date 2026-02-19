# GetRegistrationByIdV1RegistrationsRegistrationIdGetRequest

## Example Usage

```typescript
import { GetRegistrationByIdV1RegistrationsRegistrationIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetRegistrationByIdV1RegistrationsRegistrationIdGetRequest = {
  registrationId: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `registrationId`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the<br/>                                registration to retrieve. |
| `reveal`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of field to reveal                                                                |