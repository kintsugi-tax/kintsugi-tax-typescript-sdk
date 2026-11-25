# IllinoisFields

State-specific fields for Illinois registration import (MyTax Illinois).

## Example Usage

```typescript
import { IllinoisFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: IllinoisFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  illinoisAccountId: "<id>",
  lastPaymentToState: "<value>",
  firstName: "Vernice",
  lastName: "Rice",
  businessPhone: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                     | [models.IllinoisRegistrationType](../models/illinoisregistrationtype.md)                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `mfaCompleted`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the customer has completed MFA setup in their Illinois tax account.                                            |
| `businessName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Business name as registered with the Illinois Department of Revenue.                                                   |
| `illinoisAccountId`                                                                                                    | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Illinois Account ID from MyTax Illinois.                                                                               |
| `lastPaymentToState`                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Last payment made to the state as a plain decimal (e.g. 0.00 if no payment has been made; do not include $ or commas). |
| `firstName`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | First name of the primary contact on the Illinois tax account.                                                         |
| `lastName`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Last name of the primary contact on the Illinois tax account.                                                          |
| `businessPhone`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Business phone number on file with the Illinois Department of Revenue.                                                 |
| `st2Activated`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the customer has activated the ST-2 return in their Illinois tax account.                                      |