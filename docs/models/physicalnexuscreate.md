# PhysicalNexusCreate

## Example Usage

```typescript
import { PhysicalNexusCreate } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: PhysicalNexusCreate = {
  countryCode: "BZ",
  stateCode: "<value>",
  startDate: new RFCDate("2024-09-17"),
  category: "SERVERS_DATA_CENTERS",
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
| `source`                                                                                | [models.PhysicalNexusSource](../models/physicalnexussource.md)                          | :heavy_minus_sign:                                                                      | N/A                                                                                     |