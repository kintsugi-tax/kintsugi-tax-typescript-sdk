# ProductSubCategory

## Example Usage

```typescript
import { ProductSubCategory } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProductSubCategory = {
  name: "<value>",
  description: "tenement out haze a",
  example: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Name of the product subcategory<br/>            (e.g., ORAL_HYGIENE, MEDICAL_DEVICES, etc.)                |
| `description`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Description of the subcategory in the context of sales tax                                                 |
| `example`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Example products or services within the subcategory                                                        |
| `isFrequent`                                                                                               | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Indicates if the subcategory is a frequent subcategory used by the organization. This field is deprecated. |