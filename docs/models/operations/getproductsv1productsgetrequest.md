# GetProductsV1ProductsGetRequest

## Example Usage

```typescript
import { GetProductsV1ProductsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetProductsV1ProductsGetRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `query`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Search term to filter products by name or other details. |
| `statusIn`                                               | *string*                                                 | :heavy_minus_sign:                                       | Filter products by status (comma-separated)              |
| `productCategoryIn`                                      | *string*                                                 | :heavy_minus_sign:                                       | Filter products by category (comma-separated)            |
| `productSubcategoryIn`                                   | *string*                                                 | :heavy_minus_sign:                                       | Filter products by subcategory (comma-separated)         |
| `sourceIn`                                               | *string*                                                 | :heavy_minus_sign:                                       | Filter products by source (comma-separated)              |
| `orderBy`                                                | *string*                                                 | :heavy_minus_sign:                                       | Order results by specified fields (comma-separated)      |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Page number                                              |
| `size`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Page size                                                |