# ProductRead

## Example Usage

```typescript
import { ProductRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductRead = {
  id: "<id>",
  externalId: "<id>",
  sku: [],
  code: "CODE_2005",
  name: "<value>",
  description: "keenly needily skateboard sonar minty meh",
  status: "APPROVED",
  productCategory: "PHYSICAL",
  productSubcategory: "MEDICINES",
  taxExempt: true,
  source: "EBAY",
  connectionId: "<id>",
  classificationFailed: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `externalId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `sku`                                                                | *string*[]                                                           | :heavy_check_mark:                                                   | N/A                                                                  |
| `code`                                                               | [models.ProductCodeEnum](../models/productcodeenum.md)               | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [models.ProductStatusEnum](../models/productstatusenum.md)           | :heavy_check_mark:                                                   | N/A                                                                  |
| `productCategory`                                                    | [models.ProductCategoryEnum](../models/productcategoryenum.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `productSubcategory`                                                 | [models.ProductSubCategoryEnum](../models/productsubcategoryenum.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `taxExempt`                                                          | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `source`                                                             | [models.SourceEnum](../models/sourceenum.md)                         | :heavy_check_mark:                                                   | N/A                                                                  |
| `connectionId`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `classificationFailed`                                               | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |