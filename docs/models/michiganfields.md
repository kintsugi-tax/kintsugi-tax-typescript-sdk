# MichiganFields

State-specific fields for Michigan registration import (Michigan Treasury Online / MTO).

## Example Usage

```typescript
import { MichiganFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: MichiganFields = {
  registrationType: "SALES_TAX",
  businessName: "<value>",
  miStateTaxId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `registrationType`                                                                         | [models.MichiganRegistrationType](../models/michiganregistrationtype.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `businessName`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | State-registered business name as shown in Michigan Treasury Online (MTO).                 |
| `miStateTaxId`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | Michigan state-issued tax identification number (MI State Tax ID).                         |
| `thirdPartyAccessEnabled`                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether third-party access has been granted to Kintsugi in Michigan Treasury Online (MTO). |