# GetCustomerByIdV1CustomersCustomerIdGetRequest

## Example Usage

```typescript
import { GetCustomerByIdV1CustomersCustomerIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetCustomerByIdV1CustomersCustomerIdGetRequest = {
  customerId: "cust_abc123",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `customerId`                                                  | *string*                                                      | :heavy_check_mark:                                            | Unique identifier of the customer                             | cust_abc123                                                   |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |