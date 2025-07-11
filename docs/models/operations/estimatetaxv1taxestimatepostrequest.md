# EstimateTaxV1TaxEstimatePostRequest

## Example Usage

```typescript
import { EstimateTaxV1TaxEstimatePostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: EstimateTaxV1TaxEstimatePostRequest = {
  xOrganizationId: "org_12345",
  transactionEstimateRequest: {
    date: new Date("2024-10-01T04:29:50.884Z"),
    externalId: "<id>",
    currency: "JEP",
    addresses: [],
    transactionItems: [
      {
        date: new Date("2025-07-15T01:50:35.780Z"),
        amount: 1992.94,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              | Example                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`simulateNexusMet`~~                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>**Deprecated:** Use `simulate_active_registration` in the request body instead. |                                                                                                                                                                                                          |
| `xOrganizationId`                                                                                                                                                                                        | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The unique identifier for the organization making the request                                                                                                                                            | org_12345                                                                                                                                                                                                |
| `transactionEstimateRequest`                                                                                                                                                                             | [models.TransactionEstimateRequest](../../models/transactionestimaterequest.md)                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |                                                                                                                                                                                                          |