# CreateCustomerV1CustomersPostRequest

## Example Usage

```typescript
import { CreateCustomerV1CustomersPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: CreateCustomerV1CustomersPostRequest = {
  xOrganizationId: "org_12345",
  customerCreate: {},
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `customerCreate`                                              | [models.CustomerCreate](../../models/customercreate.md)       | :heavy_check_mark:                                            | N/A                                                           |                                                               |