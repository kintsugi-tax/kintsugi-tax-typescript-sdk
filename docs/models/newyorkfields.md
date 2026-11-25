# NewYorkFields

State-specific fields for New York (NYS Tax) registration import.

New York requires no 2FA/MFA setup, so there is no ``mfa_completed`` field,
and it grants no customer-facing third-party access step, so there is no
``third_party_access_enabled`` field either.

## Example Usage

```typescript
import { NewYorkFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: NewYorkFields = {
  registrationType: "SALES_AND_USE_TAX",
  businessName: "<value>",
  nyStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                                                              | *"SALES_AND_USE_TAX"*                                                                                                                                           | :heavy_check_mark:                                                                                                                                              | Registration type for this New York import: sales and use tax.                                                                                                  |
| `businessName`                                                                                                                                                  | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | State-registered business name as shown on the New York tax account.                                                                                            |
| `nyStateTaxId`                                                                                                                                                  | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | NY State Tax ID: 9-digit state certificate number (normally the Federal Tax ID), or TF followed by 7 digits for sole proprietors (e.g. 123456789 or TF1234567). |