# TransactionEmbeddedExemption

Public read schema mirroring the ORM ``Exemption`` for /v1 transaction embedding.

A non-table twin of ``exemptions.models.Exemption``: it re-declares the exact fields
the ORM adds on top of ``ExemptionBase``/``TableBase`` (id, organization_id,
certificate_import_id, source, certificate_type) so
``TransactionSerializerBase.exemptions`` can be
typed without importing the private ORM model (CP-4895). Its serialized shape is
byte-identical to the ORM's — ``from_attributes`` reads the same attributes off each
ORM row — so the /v1 response payload is unchanged. Keep it in lockstep with
``Exemption`` if the ORM's public columns change (a JSON-schema parity test guards it).

## Example Usage

```typescript
import { TransactionEmbeddedExemption } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: TransactionEmbeddedExemption = {
  exemptionType: "customer",
  startDate: new RFCDate("2026-10-12"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the exemption                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when transaction was created in Kintsugi.                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when transaction was last updated.                                                  |
| `exemptionType`                                                                               | [models.ExemptionType](../models/exemptiontype.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `jurisdiction`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The jurisdiction identifier for the exemption                                                 |
| `countryCode`                                                                                 | [models.CountryCodeEnum](../models/countrycodeenum.md)                                        | :heavy_minus_sign:                                                                            | Country code in ISO 3166-1 alpha-2 format (e.g., 'US')                                        |
| `startDate`                                                                                   | [RFCDate](../types/rfcdate.md)                                                                | :heavy_check_mark:                                                                            | Start date for the exemption validity period (YYYY-MM-DD format)                              |
| `endDate`                                                                                     | [RFCDate](../types/rfcdate.md)                                                                | :heavy_minus_sign:                                                                            | End date for the exemption validity period (YYYY-MM-DD format)                                |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the customer associated with the exemption                              |
| `transactionId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Unique identifier for the transaction<br/>        associated with the exemption, if applicable. |
| `reseller`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Indicates whether the exemption is for a reseller                                             |
| `fein`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Federal Employer Identification Number<br/>        associated with the exemption.             |
| `salesTaxId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sales tax ID for the exemption                                                                |
| `status`                                                                                      | [models.ExemptionStatus](../models/exemptionstatus.md)                                        | :heavy_minus_sign:                                                                            | The status of the exemption.<br/>        Defaults to ACTIVE if not provided.                  |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `certificateImportId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | FK to bulk-imported certificate; NULL for manually-created exemptions                         |
| `source`                                                                                      | [models.ExemptionSourceEnum](../models/exemptionsourceenum.md)                                | :heavy_minus_sign:                                                                            | Source of exemption.                                                                          |
| `certificateType`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | Partial-exemption certificate form code. Null when the exemption is not a partial exemption.  |