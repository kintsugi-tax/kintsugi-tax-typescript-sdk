# ProductUpdate

## Example Usage

```typescript
import { ProductUpdate } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductUpdate = {
  name: "<value>",
  productCategory: "PHYSICAL",
  productSubcategory: "B2B_SAAS",
  taxExempt: false,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | The unique identifier of the product to be updated.                                   |
| `externalId`                                                                          | *string*                                                                              | :heavy_minus_sign:                                                                    | External identifier provided for the product,<br/>        typically by the source system. |
| `sku`                                                                                 | *string*[]                                                                            | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Name of the product.                                                                  |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | Description of the product.                                                           |
| `status`                                                                              | [models.ProductStatusEnum](../models/productstatusenum.md)                            | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `productCategory`                                                                     | [models.ProductCategoryEnum](../models/productcategoryenum.md)                        | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `productSubcategory`                                                                  | [models.ProductSubCategoryEnum](../models/productsubcategoryenum.md)                  | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `taxExempt`                                                                           | *boolean*                                                                             | :heavy_check_mark:                                                                    | Indicates whether the product is tax-exempt.                                          |
| `classificationFailed`                                                                | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Indicates if the product classification failed.                                       |