# CustomerJurisdictionSpecificFieldsResponse

Customer import fields, including the tax types that jurisdiction allows.

The partner and public jurisdiction-fields routes stay on the base response.
Allowed tax types depend on the organization, and those contracts do not.

## Example Usage

```typescript
import { CustomerJurisdictionSpecificFieldsResponse } from "@kintsugi-tax/tax-platform-sdk/models";

let value: CustomerJurisdictionSpecificFieldsResponse = {
  countryCode: "KP",
  stateCode: "<value>",
  defaultForm: true,
  jurisdictionFieldsJsonSchema: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  taxTypes: [],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `countryCode`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `stateCode`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `defaultForm`                                                                              | *boolean*                                                                                  | :heavy_check_mark:                                                                         | True when no state-specific schema exists and the generic form should be used.             |
| `jurisdictionFieldsJsonSchema`                                                             | Record<string, *any*>                                                                      | :heavy_check_mark:                                                                         | JSON Schema for the jurisdiction-specific fields, or empty dict when default_form is True. |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_check_mark:                                                                         | UI metadata (help articles, portal URL, filing frequencies, etc.).                         |
| `taxTypes`                                                                                 | [models.TaxTypeEnum](../models/taxtypeenum.md)[]                                           | :heavy_check_mark:                                                                         | Tax types that can be imported for this jurisdiction.                                      |