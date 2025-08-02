# PhysicalNexusRead

## Example Usage

```typescript
import { PhysicalNexusRead } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: PhysicalNexusRead = {
  countryCode: "KZ",
  stateCode: "<value>",
  startDate: new RFCDate("2025-04-29"),
  category: "MANUFACTURE_OR_PRODUCTION_IN_CANADA",
  id: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `countryCode`                                                                           | [models.CountryCodeEnum](../models/countrycodeenum.md)                                  | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `stateCode`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | The state or province code in<br/>                            ISO 3166-2 format (e.g., CA). |
| `startDate`                                                                             | [RFCDate](../types/rfcdate.md)                                                          | :heavy_check_mark:                                                                      | The date when the nexus became<br/>                            effective (YYYY-MM-DD).  |
| `endDate`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | The date when the<br/>                                        nexus ended, if applicable. |
| `category`                                                                              | [models.PhysicalNexusCategory](../models/physicalnexuscategory.md)                      | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `externalId`                                                                            | *string*                                                                                | :heavy_minus_sign:                                                                      | Optional<br/>                                        external identifier for the nexus. |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | The unique identifier for the physical nexus.                                           |