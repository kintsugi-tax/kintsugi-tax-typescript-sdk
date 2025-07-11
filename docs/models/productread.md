# ProductRead

## Example Usage

```typescript
import { ProductRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductRead = {
  id: "<id>",
  externalId: "<id>",
  sku: null,
  code: "CODE_3003",
  name: "<value>",
  description: "thongs so pharmacopoeia fork youthful commodity cheetah pants",
  status: "PENDING",
  productCategory: "SERVICE",
  productSubcategory: "<value>",
  taxExempt: true,
  source: "APIDECK",
  connectionId: "<id>",
  classificationFailed: true,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `externalId`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sku`                                                      | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `code`                                                     | *models.Code*                                              | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `description`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `status`                                                   | [models.ProductStatusEnum](../models/productstatusenum.md) | :heavy_check_mark:                                         | N/A                                                        |
| `productCategory`                                          | *models.ProductReadProductCategory*                        | :heavy_check_mark:                                         | N/A                                                        |
| `productSubcategory`                                       | *models.ProductReadProductSubcategory*                     | :heavy_check_mark:                                         | N/A                                                        |
| `taxExempt`                                                | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `source`                                                   | [models.SourceEnum](../models/sourceenum.md)               | :heavy_check_mark:                                         | N/A                                                        |
| `connectionId`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `classificationFailed`                                     | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |