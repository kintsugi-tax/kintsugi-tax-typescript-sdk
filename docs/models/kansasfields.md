# KansasFields

State-specific fields for Kansas Customer Service Center portal registration import.

Values are plaintext in API request/response models. Before persistence,
``access_code`` is encrypted with ``kintsugi_encrypt``
(see ``finalize_jurisdiction_specific_fields_for_storage``).

## Example Usage

```typescript
import { KansasFields } from "@kintsugi-tax/tax-platform-sdk/models";

let value: KansasFields = {
  registrationType: "RETAILERS_COMPENSATING_USE_TAX",
  businessName: "<value>",
  ksStateTaxId: "<id>",
  accessCode: "<value>",
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `registrationType`                                                                                                                                                    | [models.KansasRegistrationType](../models/kansasregistrationtype.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `businessName`                                                                                                                                                        | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | State-registered business name as shown in the Kansas tax portal.                                                                                                     |
| `ksStateTaxId`                                                                                                                                                        | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Kansas state-issued tax identification number.                                                                                                                        |
| `accessCode`                                                                                                                                                          | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Kansas Access Code used for portal access / third-party setup.                                                                                                        |
| `thirdPartyAccessEnabled`                                                                                                                                             | *boolean*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                    | Whether third-party access has been granted to Kintsugi in the Kansas tax portal. Customers are informed via footer copy; Kintsugi implements access on their behalf. |