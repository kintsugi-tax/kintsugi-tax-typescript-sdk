# GetProductByIdV1ProductsProductIdGetRequest

## Example Usage

```typescript
import { GetProductByIdV1ProductsProductIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetProductByIdV1ProductsProductIdGetRequest = {
  productId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `productId`                                                   | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the product you want to retrieve.   |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |