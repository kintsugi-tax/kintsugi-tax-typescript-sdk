# UpdateProductV1ProductsProductIdPutRequest

## Example Usage

```typescript
import { UpdateProductV1ProductsProductIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateProductV1ProductsProductIdPutRequest = {
  productId: "<id>",
  xOrganizationId: "org_12345",
  requestBody: {
    name: "<value>",
    status: "APPROVED",
    productCategory: "<value>",
    productSubcategory: "<value>",
    taxExempt: false,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `productId`                                                   | *string*                                                      | :heavy_check_mark:                                            | Unique identifier of the product to be updated.               |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `requestBody`                                                 | *operations.Product*                                          | :heavy_check_mark:                                            | N/A                                                           |                                                               |