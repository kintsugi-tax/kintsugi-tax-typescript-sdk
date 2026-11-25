# PageRegistrationReadWithPassword

## Example Usage

```typescript
import { PageRegistrationReadWithPassword } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PageRegistrationReadWithPassword = {
  items: [
    {
      status: "VALIDATING",
      countryCode: "UG",
      stateCode: "<value>",
      stateName: "<value>",
      filingFrequency: "FOUR_MONTHLY",
      id: "<id>",
      filingDays: 74800,
      registrationType: "OTHER",
      filingWebsiteUrl: "https://shameless-embarrassment.name",
    },
  ],
  total: 559261,
  page: 664977,
  size: 656284,
  pages: 610000,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `items`                                                                            | [models.RegistrationReadWithPassword](../models/registrationreadwithpassword.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `total`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `page`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `size`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `pages`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |