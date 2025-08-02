# PagePhysicalNexusRead

## Example Usage

```typescript
import { PagePhysicalNexusRead } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: PagePhysicalNexusRead = {
  items: [
    {
      countryCode: "TM",
      stateCode: "<value>",
      startDate: new RFCDate("2023-07-19"),
      category: "INVENTORY",
      id: "<id>",
    },
  ],
  total: 344619,
  page: 768204,
  size: 734231,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [models.PhysicalNexusRead](../models/physicalnexusread.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `total`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `page`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `size`                                                       | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `pages`                                                      | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |