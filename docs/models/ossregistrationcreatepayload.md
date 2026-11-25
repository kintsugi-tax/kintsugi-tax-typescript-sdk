# OSSRegistrationCreatePayload

## Example Usage

```typescript
import { OSSRegistrationCreatePayload } from "@kintsugi-tax/tax-platform-sdk/models";

let value: OSSRegistrationCreatePayload = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `registrationImportType`                                                      | *"OSS"*                                                                       | :heavy_minus_sign:                                                            | Specifies this is an OSS registration import.                                 |
| `passwordPlainText`                                                           | *string*                                                                      | :heavy_minus_sign:                                                            | The plaintext password for accessing the tax registration account.            |
| `passwordMetadataPlainText`                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | Metadata related to the password.                                             |
| `memberStateOfIdentificationCode`                                             | [models.CountryCodeEnum](../models/countrycodeenum.md)                        | :heavy_minus_sign:                                                            | If importing an OSS registration, specify the Member State of Identification. |
| `ossType`                                                                     | [models.OssTypeEnum](../models/osstypeenum.md)                                | :heavy_minus_sign:                                                            | Type of OSS registration.                                                     |
| `imported`                                                                    | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether the registration was imported from another system.                    |
| `requestId`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | Optional client-minted id for this confirm attempt.                           |