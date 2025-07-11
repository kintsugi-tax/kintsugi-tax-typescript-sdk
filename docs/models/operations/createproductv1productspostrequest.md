# CreateProductV1ProductsPostRequest

## Example Usage

```typescript
import { CreateProductV1ProductsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: CreateProductV1ProductsPostRequest = {
  xOrganizationId: "org_12345",
  productCreateManual: {
    externalId: "<id>",
    name: "<value>",
    productCategory: "MISCELLANEOUS",
    productSubcategory: "<value>",
    taxExempt: false,
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `xOrganizationId`                                                 | *string*                                                          | :heavy_check_mark:                                                | The unique identifier for the organization making the request     | org_12345                                                         |
| `productCreateManual`                                             | [models.ProductCreateManual](../../models/productcreatemanual.md) | :heavy_check_mark:                                                | N/A                                                               |                                                                   |