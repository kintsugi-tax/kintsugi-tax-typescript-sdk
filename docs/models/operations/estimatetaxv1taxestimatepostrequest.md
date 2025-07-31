# EstimateTaxV1TaxEstimatePostRequest

## Example Usage

```typescript
import { EstimateTaxV1TaxEstimatePostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: EstimateTaxV1TaxEstimatePostRequest = {
  transactionEstimatePublicRequest: {
    date: new Date("2024-10-01T04:29:50.884Z"),
    externalId: "<id>",
    totalAmount: 0,
    currency: "JEP",
    transactionItems: [],
    addresses: [
      {
        type: "SHIP_TO",
        state: "South Carolina",
        postalCode: "39209-7720",
        country: "Christmas Island",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`simulateNexusMet`~~                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>**Deprecated:** Use `simulate_active_registration` in the request body instead. |
| `transactionEstimatePublicRequest`                                                                                                                                                                       | [models.TransactionEstimatePublicRequest](../../models/transactionestimatepublicrequest.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                                                       | N/A                                                                                                                                                                                                      |