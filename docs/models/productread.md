# ProductRead

## Example Usage

```typescript
import { ProductRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductRead = {
  id: "<id>",
  externalId: "<id>",
  sku: [],
  code: "<value>",
  name: "<value>",
  description: "entwine certainly glass certify",
  status: "PENDING",
  productCategory: "<value>",
  productSubcategory: "<value>",
  taxExempt: true,
  source: "NETSUITE",
  connectionId: "<id>",
  classificationFailed: false,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `externalId`                                               | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sku`                                                      | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |
| `code`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `description`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `status`                                                   | [models.ProductStatusEnum](../models/productstatusenum.md) | :heavy_check_mark:                                         | N/A                                                        |
| `productCategory`                                          | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `productSubcategory`                                       | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `taxExempt`                                                | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `source`                                                   | [models.SourceEnum](../models/sourceenum.md)               | :heavy_check_mark:                                         | N/A                                                        |
| `connectionId`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `classificationFailed`                                     | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |