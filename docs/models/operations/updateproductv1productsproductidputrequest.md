# UpdateProductV1ProductsProductIdPutRequest

## Example Usage

```typescript
import { UpdateProductV1ProductsProductIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: UpdateProductV1ProductsProductIdPutRequest = {
  productId: "<id>",
  productUpdate: {
    name: "<value>",
    productCategory: "<value>",
    productSubcategory: "<value>",
    taxExempt: false,
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `productId`                                           | *string*                                              | :heavy_check_mark:                                    | Unique identifier of the product to be updated.       |
| `productUpdate`                                       | [models.ProductUpdate](../../models/productupdate.md) | :heavy_check_mark:                                    | N/A                                                   |