# IdahoFields

State-specific fields for Idaho TAP portal registration import.

## Example Usage

```typescript
import { IdahoFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: IdahoFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  salesTaxId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `registrationType`                                                       | [models.IdahoRegistrationType](../models/idahoregistrationtype.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `mfaCompleted`                                                           | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether the customer has completed MFA setup in their Idaho tax account. |
| `businessName`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | Business name as registered with the Idaho State Tax Commission.         |
| `salesTaxId`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Idaho State Tax ID.                                                      |
| `accessCode`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Customers add this in registration credentials after the Idaho           |