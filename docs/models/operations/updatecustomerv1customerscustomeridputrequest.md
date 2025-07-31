# UpdateCustomerV1CustomersCustomerIdPutRequest

## Example Usage

```typescript
import { UpdateCustomerV1CustomersCustomerIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateCustomerV1CustomersCustomerIdPutRequest = {
  customerId: "<id>",
  customerUpdate: {},
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `customerId`                                            | *string*                                                | :heavy_check_mark:                                      | Unique identifier of the customer to be retrieved.      |
| `customerUpdate`                                        | [models.CustomerUpdate](../../models/customerupdate.md) | :heavy_check_mark:                                      | N/A                                                     |