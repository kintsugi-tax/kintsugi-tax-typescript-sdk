# SSTRegistrationCreatePayload

## Example Usage

```typescript
import { SSTRegistrationCreatePayload } from "@kintsugi-tax/tax-platform-sdk/models";

let value: SSTRegistrationCreatePayload = {
  registrationImportType: "SST",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `registrationImportType`                                           | *"SST"*                                                            | :heavy_check_mark:                                                 | Specifies this is an SST registration import.                      |
| `passwordPlainText`                                                | *string*                                                           | :heavy_minus_sign:                                                 | The plaintext password for accessing the tax registration account. |
| `passwordMetadataPlainText`                                        | *string*                                                           | :heavy_minus_sign:                                                 | Metadata related to the password.                                  |
| `username`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Username for accessing the tax registration account.               |