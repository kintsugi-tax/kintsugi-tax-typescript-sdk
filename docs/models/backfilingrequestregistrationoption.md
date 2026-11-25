# BackFilingRequestRegistrationOption

## Example Usage

```typescript
import { BackFilingRequestRegistrationOption } from "@kintsugi-tax/tax-platform-sdk/models";

let value: BackFilingRequestRegistrationOption = {
  registrationId: "<id>",
  stateCode: "<value>",
  remittanceTag: "<value>",
  periods: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `registrationId`                                                         | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `stateCode`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `remittanceTag`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `periods`                                                                | [models.BackFilingRequestPeriod](../models/backfilingrequestperiod.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |