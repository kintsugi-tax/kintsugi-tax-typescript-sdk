# ProductCreateManual

## Example Usage

```typescript
import { ProductCreateManual } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductCreateManual = {
  externalId: "<id>",
  name: "<value>",
  productCategory: "<value>",
  productSubcategory: "<value>",
  taxExempt: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `externalId`                                               | *string*                                                   | :heavy_check_mark:                                         | A unique external identifier for the product.              |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | The name of the product.                                   |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | A description of the product.                              |
| `status`                                                   | [models.ProductStatusEnum](../models/productstatusenum.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `productCategory`                                          | *models.ProductCreateManualProductCategory*                | :heavy_check_mark:                                         | The high-level category of the product.                    |
| `productSubcategory`                                       | *models.ProductCreateManualProductSubcategory*             | :heavy_check_mark:                                         | The subcategory of the product.                            |
| `taxExempt`                                                | *boolean*                                                  | :heavy_check_mark:                                         | Specifies whether the product is tax-exempt.               |
| `source`                                                   | [models.SourceEnum](../models/sourceenum.md)               | :heavy_minus_sign:                                         | N/A                                                        |