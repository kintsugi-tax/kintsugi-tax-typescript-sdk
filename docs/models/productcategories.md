# ProductCategories

## Example Usage

```typescript
import { ProductCategories } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductCategories = {
  name: "<value>",
  subcategories: [
    {
      name: "<value>",
      description:
        "excepting instead ugh gifted characterization corporation ick hydrocarbon apologise yippee",
      example: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Name of the product category<br/>            (e.g., PHYSICAL, SERVICE, DIGITAL, MISCELLANEOUS) |
| `subcategories`                                                                            | [models.ProductSubCategory](../models/productsubcategory.md)[]                             | :heavy_check_mark:                                                                         | List of subcategories associated with the product category                                 |