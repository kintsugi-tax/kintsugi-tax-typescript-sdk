# ProductUpdateV2

## Example Usage

```typescript
import { ProductUpdateV2 } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductUpdateV2 = {
  name: "<value>",
  status: "PENDING",
  productCategory: "<value>",
  productSubcategory: "<value>",
  taxExempt: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `status`                                                   | [models.ProductStatusEnum](../models/productstatusenum.md) | :heavy_check_mark:                                         | N/A                                                        |
| `productCategory`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `productSubcategory`                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `taxExempt`                                                | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `externalId`                                               | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `sku`                                                      | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `classificationFailed`                                     | *boolean*                                                  | :heavy_minus_sign:                                         | N/A                                                        |