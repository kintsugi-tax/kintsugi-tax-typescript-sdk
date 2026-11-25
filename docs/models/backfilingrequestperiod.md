# BackFilingRequestPeriod

## Example Usage

```typescript
import { BackFilingRequestPeriod } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: BackFilingRequestPeriod = {
  startDate: new RFCDate("2025-02-17"),
  endDate: new RFCDate("2026-07-22"),
  label: "<value>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `startDate`                    | [RFCDate](../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `endDate`                      | [RFCDate](../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `label`                        | *string*                       | :heavy_check_mark:             | N/A                            |