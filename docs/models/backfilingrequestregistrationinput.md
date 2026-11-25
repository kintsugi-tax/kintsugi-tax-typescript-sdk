# BackFilingRequestRegistrationInput

## Example Usage

```typescript
import { BackFilingRequestRegistrationInput } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: BackFilingRequestRegistrationInput = {
  registrationId: "<id>",
  periods: [
    {
      startDate: new RFCDate("2026-10-08"),
      endDate: new RFCDate("2026-08-13"),
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `registrationId`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `periods`                                                                          | [models.BackFilingRequestPeriodInput](../models/backfilingrequestperiodinput.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |