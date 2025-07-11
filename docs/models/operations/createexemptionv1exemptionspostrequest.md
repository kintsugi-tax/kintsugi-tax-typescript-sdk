# CreateExemptionV1ExemptionsPostRequest

## Example Usage

```typescript
import { CreateExemptionV1ExemptionsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: CreateExemptionV1ExemptionsPostRequest = {
  xOrganizationId: "org_12345",
  exemptionCreate: {
    exemptionType: "transaction",
    startDate: new RFCDate("2024-08-31"),
    customerId: "<id>",
    fein: "<value>",
    salesTaxId: "<id>",
    status: "EXPIRED",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `exemptionCreate`                                             | [models.ExemptionCreate](../../models/exemptioncreate.md)     | :heavy_check_mark:                                            | N/A                                                           |                                                               |