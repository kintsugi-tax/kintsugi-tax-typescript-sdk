# DeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPostRequest

## Example Usage

```typescript
import { DeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value:
  DeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPostRequest = {
    registrationId: "regs_123456",
    xOrganizationId: "org_12345",
    deregisterRegistrationRequest: {
      closureDate: new RFCDate("2025-01-10"),
      reason: "CLOSING_NEXUS_IN_STATE",
      finalReturnAcknowledged: true,
    },
  };
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `registrationId`                                                                      | *string*                                                                              | :heavy_check_mark:                                                                    | The unique identifier of the registration to deregister.                              | regs_123456                                                                           |
| `xOrganizationId`                                                                     | *string*                                                                              | :heavy_check_mark:                                                                    | The unique identifier for the organization making the request                         | org_12345                                                                             |
| `deregisterRegistrationRequest`                                                       | [models.DeregisterRegistrationRequest](../../models/deregisterregistrationrequest.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |