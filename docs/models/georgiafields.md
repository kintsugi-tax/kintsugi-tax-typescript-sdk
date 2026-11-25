# GeorgiaFields

State-specific fields for Georgia GTC registration import.

## Example Usage

```typescript
import { GeorgiaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: GeorgiaFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  salesTaxId: "<id>",
  zipCode: "31361",
  lastPaymentToState: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `registrationType`                                                         | [models.GeorgiaRegistrationType](../models/georgiaregistrationtype.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `mfaCompleted`                                                             | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the customer has completed MFA setup in their Georgia GTC account. |
| `businessName`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | Business name as registered with the state of Georgia.                     |
| `salesTaxId`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | Georgia State Tax ID.                                                      |
| `zipCode`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Georgia ZIP code on file with the Georgia Department of Revenue.           |
| `lastPaymentToState`                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Last payment amount made to the state ('0.00' if no payments made).        |