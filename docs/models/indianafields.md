# IndianaFields

State-specific fields for Indiana INTIME portal registration import.

## Example Usage

```typescript
import { IndianaFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: IndianaFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  inStateTaxId: "<id>",
  locationId: "<id>",
  salesTaxAccountNumber: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `mfaCompleted`                                                                                                             | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether the customer has completed MFA setup using the Kintsugi virtual mail group ID on their Indiana DOR INTIME account. |
| `registrationType`                                                                                                         | *"SALES_TAX"*                                                                                                              | :heavy_check_mark:                                                                                                         | Registration type for this Indiana import: sales tax (INTIME).                                                             |
| `businessName`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | State-registered business name as shown in INTIME.                                                                         |
| `inStateTaxId`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Indiana state-issued tax identification number (State Tax ID).                                                             |
| `locationId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Location ID for this registration in INTIME.                                                                               |
| `salesTaxAccountNumber`                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Indiana sales tax account number: prefix RST- followed by the 10-digit number assigned by the state.                       |
| `thirdPartyAccessEnabled`                                                                                                  | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether third-party access has been granted to Kintsugi in INTIME.                                                         |