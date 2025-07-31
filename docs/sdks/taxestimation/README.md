# TaxEstimation
(*taxEstimation*)

## Overview

### Available Operations

* [estimateTax](#estimatetax) - Estimate Tax

## estimateTax

The Estimate Tax API calculates the estimated tax for a specific
    transaction based on the provided details, including organization nexus,
    transaction details, customer details, and addresses. Optionally simulates nexus being met for tax calculation purposes. The `simulate_nexus_met` parameter is deprecated and will be removed in future releases.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="estimate_tax_v1_tax_estimate_post" method="post" path="/v1/tax/estimate" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.taxEstimation.estimateTax({
    transactionEstimatePublicRequest: {
      date: new Date("2025-01-23T13:01:29.949Z"),
      externalId: "txn_12345",
      currency: "USD",
      transactionItems: [
        {
          externalId: "item_A",
          date: new Date("2024-10-28T10:00:00Z"),
          externalProductId: "prod_abc",
          quantity: 2,
          amount: 100,
        },
        {
          externalId: "item_B",
          date: new Date("2024-10-28T10:00:00Z"),
          externalProductId: "prod_xyz",
          quantity: 1,
          amount: 75.5,
        },
      ],
      addresses: [
        {
          type: "SHIP_TO",
          street1: "789 Pine St",
          city: "Austin",
          state: "TX",
          postalCode: "78701",
          country: "US",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { taxEstimationEstimateTax } from "@kintsugi-tax/tax-platform-sdk/funcs/taxEstimationEstimateTax.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await taxEstimationEstimateTax(sdk, {
    transactionEstimatePublicRequest: {
      date: new Date("2025-01-23T13:01:29.949Z"),
      externalId: "txn_12345",
      currency: "USD",
      transactionItems: [
        {
          externalId: "item_A",
          date: new Date("2024-10-28T10:00:00Z"),
          externalProductId: "prod_abc",
          quantity: 2,
          amount: 100,
        },
        {
          externalId: "item_B",
          date: new Date("2024-10-28T10:00:00Z"),
          externalProductId: "prod_xyz",
          quantity: 1,
          amount: 75.5,
        },
      ],
      addresses: [
        {
          type: "SHIP_TO",
          street1: "789 Pine St",
          city: "Austin",
          state: "TX",
          postalCode: "78701",
          country: "US",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("taxEstimationEstimateTax failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EstimateTaxV1TaxEstimatePostRequest](../../models/operations/estimatetaxv1taxestimatepostrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageTransactionEstimateResponse](../../models/pagetransactionestimateresponse.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ErrorResponse                                           | 401                                                            | application/json                                               |
| errors.BackendSrcTaxEstimationResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |