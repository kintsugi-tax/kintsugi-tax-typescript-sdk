# ProductCategoryRead

## Example Usage

```typescript
import { ProductCategoryRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductCategoryRead = {
  name: "Digital",
  subcategories: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | Tax category display label (e.g. 'Physical', 'Services', 'Digital', 'Misc'). | Digital                                                                      |
| `subcategories`                                                              | [models.ProductSubCategory](../models/productsubcategory.md)[]               | :heavy_check_mark:                                                           | List of subcategories associated with the product category                   |                                                                              |