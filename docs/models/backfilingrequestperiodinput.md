# BackFilingRequestPeriodInput

## Example Usage

```typescript
import { BackFilingRequestPeriodInput } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: BackFilingRequestPeriodInput = {
  startDate: new RFCDate("2025-07-16"),
  endDate: new RFCDate("2024-12-18"),
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `startDate`                    | [RFCDate](../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |
| `endDate`                      | [RFCDate](../types/rfcdate.md) | :heavy_check_mark:             | N/A                            |