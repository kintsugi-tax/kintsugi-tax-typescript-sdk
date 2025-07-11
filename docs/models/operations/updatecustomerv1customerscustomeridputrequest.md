# UpdateCustomerV1CustomersCustomerIdPutRequest

## Example Usage

```typescript
import { UpdateCustomerV1CustomersCustomerIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateCustomerV1CustomersCustomerIdPutRequest = {
  customerId: "<id>",
  xOrganizationId: "org_12345",
  customerUpdate: {},
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customerId`                                                  | *string*                                                      | :heavy_check_mark:                                            | Unique identifier of the customer to be retrieved.            |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `customerUpdate`                                              | [models.CustomerUpdate](../../models/customerupdate.md)       | :heavy_check_mark:                                            | N/A                                                           |                                                               |