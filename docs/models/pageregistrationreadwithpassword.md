# PageRegistrationReadWithPassword

## Example Usage

```typescript
import { PageRegistrationReadWithPassword } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PageRegistrationReadWithPassword = {
  items: [
    {
      status: "DEREGISTERED",
      countryCode: "UG",
      stateCode: "<value>",
      stateName: "<value>",
      filingFrequency: "FOUR_MONTHLY",
      id: "<id>",
      registrationType: "EU_OSS",
    },
  ],
  total: 929584,
  page: 392519,
  size: 691562,
  pages: 732700,
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