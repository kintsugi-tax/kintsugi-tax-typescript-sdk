# ConnecticutFields

State-specific fields for Connecticut registration import (myconneCT / DRS).

## Example Usage

```typescript
import { ConnecticutFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ConnecticutFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  ctTaxRegistrationNumber: "<value>",
  lastPaymentToState: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                     | [models.ConnecticutRegistrationType](../models/connecticutregistrationtype.md)                                         | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `businessName`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Business name as registered with the state of Connecticut.                                                             |
| `ctTaxRegistrationNumber`                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Connecticut tax registration number issued by DRS.                                                                     |
| `registrationId`                                                                                                       | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Connecticut DRS registration number used on the filing (AP) report; distinct from the myconneCT login credentials.     |
| `lastPaymentToState`                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Last payment made to the state as a plain decimal (e.g. 0.00 if no payment has been made; do not include $ or commas). |
| `mfaCompleted`                                                                                                         | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | Whether the customer has completed MFA setup in their Connecticut tax account.                                         |