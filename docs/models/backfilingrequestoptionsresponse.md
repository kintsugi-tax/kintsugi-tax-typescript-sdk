# BackFilingRequestOptionsResponse

## Example Usage

```typescript
import { BackFilingRequestOptionsResponse } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: BackFilingRequestOptionsResponse = {
  registrations: [
    {
      registrationId: "<id>",
      stateCode: "<value>",
      remittanceTag: "<value>",
      periods: [
        {
          startDate: new RFCDate("2024-06-26"),
          endDate: new RFCDate("2025-07-02"),
          label: "<value>",
        },
      ],
    },
  ],
  helpArticleUrl: "https://dutiful-chow.com",
  helpArticleLabel: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `registrations`                                                                                  | [models.BackFilingRequestRegistrationOption](../models/backfilingrequestregistrationoption.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `helpArticleUrl`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `helpArticleLabel`                                                                               | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |