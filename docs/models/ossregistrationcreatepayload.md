# OSSRegistrationCreatePayload

## Example Usage

```typescript
import { OSSRegistrationCreatePayload } from "@kintsugi-tax/tax-platform-sdk/models";

let value: OSSRegistrationCreatePayload = {
  registrationImportType: "OSS",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `registrationImportType`                                           | *"OSS"*                                                            | :heavy_check_mark:                                                 | Specifies this is an OSS registration import.                      |
| `passwordPlainText`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The plaintext password for accessing the tax registration account. |
| `passwordMetadataPlainText`                                        | *string*                                                           | :heavy_minus_sign:                                                 | Metadata related to the password.                                  |
| `memberStateOfIdentificationCode`                                  | [models.CountryCodeEnum](../models/countrycodeenum.md)             | :heavy_minus_sign:                                                 | N/A                                                                |
| `imported`                                                         | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether the registration was imported from another system.         |