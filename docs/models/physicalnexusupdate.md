# PhysicalNexusUpdate

## Example Usage

```typescript
import { PhysicalNexusUpdate } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: PhysicalNexusUpdate = {
  startDate: new RFCDate("2026-08-19"),
  category: "OWN_LEASE_A_PROPERTY",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                       | [RFCDate](../types/rfcdate.md)                                                                    | :heavy_check_mark:                                                                                | The date when the nexus became<br/>                                effective (YYYY-MM-DD).        |
| `endDate`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | The date when the<br/>                                        nexus ends, if applicable (YYYY-MM-DD). |
| `category`                                                                                        | [models.PhysicalNexusCategory](../models/physicalnexuscategory.md)                                | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `street1`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | Primary street address for the physical presence location.                                        |
| `street2`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | Additional street address details, such as suite or unit number.                                  |
| `city`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | City of the physical presence location.                                                           |
| `postalCode`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | ZIP or postal code of the physical presence location.                                             |