# UpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPostRequest

## Example Usage

```typescript
import { UpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  UpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPostRequest =
    {
      customerId: "<id>",
      xOrganizationId: "org_12345",
      customerTaxRegistrationCreateUpdate: {
        taxId: "<id>",
      },
    };
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `customerId`                                                                                      | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |
| `xOrganizationId`                                                                                 | *string*                                                                                          | :heavy_check_mark:                                                                                | The unique identifier for the organization making the request                                     | org_12345                                                                                         |
| `customerTaxRegistrationCreateUpdate`                                                             | [models.CustomerTaxRegistrationCreateUpdate](../../models/customertaxregistrationcreateupdate.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |                                                                                                   |