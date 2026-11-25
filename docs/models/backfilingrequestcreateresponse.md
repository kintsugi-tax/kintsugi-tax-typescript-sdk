# BackFilingRequestCreateResponse

## Example Usage

```typescript
import { BackFilingRequestCreateResponse } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: BackFilingRequestCreateResponse = {
  createdFilings: [
    {
      startDate: new RFCDate("2025-04-07"),
      endDate: new RFCDate("2026-08-22"),
      countryCode: "CG",
      id: "<id>",
      registrationId: "<id>",
      filingWebsiteUrl: "https://showy-ostrich.org",
    },
  ],
  totalCreated: 281775,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `createdFilings`                               | [models.FilingRead](../models/filingread.md)[] | :heavy_check_mark:                             | N/A                                            |
| `totalCreated`                                 | *number*                                       | :heavy_check_mark:                             | N/A                                            |