# GetCustomersV1Request

## Example Usage

```typescript
import { GetCustomersV1Request } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetCustomersV1Request = {
  searchQuery: "John",
  country: [
    "US",
  ],
  state: "CA",
  sourceIn: "SHOPIFY,API",
  orderBy: "created_at,street_1,street_2,city,state,postal_code,country,status",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `searchQuery`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | Search term to filter customers by name or other details           | John                                                               |
| `country`                                                          | *operations.GetCustomersV1Country*[]                               | :heavy_minus_sign:                                                 | Country code in ISO 3166-1 alpha-2 format (e.g., 'US')             | US                                                                 |
| `state`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | State or province code to filter customers                         | CA                                                                 |
| `sourceIn`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Filter customers by source (comma-separated)                       | SHOPIFY,API                                                        |
| `orderBy`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | Comma-separated list of fields to sort results by.                 | created_at,street_1,street_2,city,state,postal_code,country,status |
| `page`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | Page number                                                        |                                                                    |
| `size`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | Page size                                                          |                                                                    |
| `xOrganizationId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | The unique identifier for the organization making the request      | org_12345                                                          |