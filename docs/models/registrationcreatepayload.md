# RegistrationCreatePayload

## Example Usage

```typescript
import { RegistrationCreatePayload } from "@kintsugi-tax/tax-platform-sdk/models";

let value: RegistrationCreatePayload = {
  countryCode: "SI",
  stateCode: "<value>",
  stateName: "<value>",
  filingFrequency: "ANNUAL_FISCAL_YEAR",
  filingDays: 601562,
  amountFees: 0,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `registrationImportType`                                                  | *string*                                                                  | :heavy_minus_sign:                                                        | Specifies this is a regular jurisdiction registration import.             |
| `registrationDate`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | The date when the registration was created. Format: YYYY-MM-DD.           |
| `registrationEmail`                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | Email address associated with the registration.                           |
| `registrationKey`                                                         | *string*                                                                  | :heavy_minus_sign:                                                        | A unique key assigned to the registration.                                |
| `deregistrationKey`                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | A unique key assigned for deregistration.                                 |
| `registrationRequested`                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Timestamp when the registration was requested.                            |
| `registrationCompleted`                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Timestamp when the registration was completed.                            |
| `deregistrationRequested`                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Timestamp when deregistration was requested.                              |
| `deregistrationCompleted`                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Timestamp when the deregistration was completed.                          |
| `autoRegistered`                                                          | *boolean*                                                                 | :heavy_minus_sign:                                                        | Indicates whether the registration was completed automatically.           |
| `registrationsRegime`                                                     | [models.RegistrationsRegimeEnum](../models/registrationsregimeenum.md)    | :heavy_minus_sign:                                                        | N/A                                                                       |
| `changeRegimeStatus`                                                      | [models.ChangeRegimeStatusEnum](../models/changeregimestatusenum.md)      | :heavy_minus_sign:                                                        | N/A                                                                       |
| `countryCode`                                                             | [models.CountryCodeEnum](../models/countrycodeenum.md)                    | :heavy_check_mark:                                                        | N/A                                                                       |
| `stateCode`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The state/province code where the registration applies.                   |
| `stateName`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The name of the state/province.                                           |
| `filingFrequency`                                                         | [models.FilingFrequencyEnum](../models/filingfrequencyenum.md)            | :heavy_check_mark:                                                        | N/A                                                                       |
| `filingDays`                                                              | *number*                                                                  | :heavy_check_mark:                                                        | The number of days before the filing deadline.                            |
| `username`                                                                | *string*                                                                  | :heavy_minus_sign:                                                        | Username for accessing tax registration details.                          |
| `comment`                                                                 | *string*                                                                  | :heavy_minus_sign:                                                        | Additional comments related to the registration.                          |
| `createFilingsFrom`                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | The date from which filings should be created. should start (YYYY-MM-DD). |
| `initialSync`                                                             | *boolean*                                                                 | :heavy_minus_sign:                                                        | Indicates whether an initial synchronization should be performed.         |
| `amountFees`                                                              | *number*                                                                  | :heavy_minus_sign:                                                        | The amount of fees associated with the registration.                      |
| `vda`                                                                     | *boolean*                                                                 | :heavy_minus_sign:                                                        | Indicates whether a Voluntary Disclosure Agreement (VDA) applies.         |
| `imported`                                                                | *boolean*                                                                 | :heavy_minus_sign:                                                        | Whether the registration was imported from another system.                |
| `salesTaxId`                                                              | *string*                                                                  | :heavy_minus_sign:                                                        | The sales tax ID associated with the registration.                        |
| `sstImport`                                                               | *boolean*                                                                 | :heavy_minus_sign:                                                        | Indicates whether the registration is an SST Import.                      |
| `passwordPlainText`                                                       | *string*                                                                  | :heavy_minus_sign:                                                        | The plaintext password for accessing the tax registration account.        |
| `passwordMetadataPlainText`                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Metadata related to the password.                                         |