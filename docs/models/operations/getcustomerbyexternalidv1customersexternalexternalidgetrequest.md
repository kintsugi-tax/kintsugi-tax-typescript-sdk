# GetCustomerByExternalIdV1CustomersExternalExternalIdGetRequest

## Example Usage

```typescript
import { GetCustomerByExternalIdV1CustomersExternalExternalIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetCustomerByExternalIdV1CustomersExternalExternalIdGetRequest = {
  externalId: "external_12345",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `externalId`                                                  | *string*                                                      | :heavy_check_mark:                                            | The external identifier of the customer to retrieve.          | external_12345                                                |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |