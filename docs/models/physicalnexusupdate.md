# PhysicalNexusUpdate

## Example Usage

```typescript
import { PhysicalNexusUpdate } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: PhysicalNexusUpdate = {
  startDate: new RFCDate("2025-08-19"),
  category: "EMPLOYEES_AGENTS_CONTRACTORS",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                       | [RFCDate](../types/rfcdate.md)                                                                    | :heavy_check_mark:                                                                                | The date when the nexus became<br/>                                effective (YYYY-MM-DD).        |
| `endDate`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | The date when the<br/>                                        nexus ends, if applicable (YYYY-MM-DD). |
| `category`                                                                                        | [models.PhysicalNexusCategory](../models/physicalnexuscategory.md)                                | :heavy_check_mark:                                                                                | N/A                                                                                               |