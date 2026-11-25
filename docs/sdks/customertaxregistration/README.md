# CustomerTaxRegistration

## Overview

### Available Operations

* [upsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost](#upsertcustomertaxregistrationv1customerscustomeridtaxregistrationspost) - Upsert customer tax registration

## upsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost

Creates or updates a customer tax registration record. If a registration already exists
    for this customer with the same tax type and country code, it will be updated.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upsert_customer_tax_registration_v1_customers__customer_id__tax_registrations_post" method="post" path="/v1/customers/{customer_id}/tax-registrations" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.customerTaxRegistration.upsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost({
    customerId: "<id>",
    xOrganizationId: "org_12345",
    customerTaxRegistrationCreateUpdate: {
      taxId: "1234567890",
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
import {
  customerTaxRegistrationUpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost,
} from "@kintsugi-tax/tax-platform-sdk/funcs/customerTaxRegistrationUpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await customerTaxRegistrationUpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost(sdk, {
    customerId: "<id>",
    xOrganizationId: "org_12345",
    customerTaxRegistrationCreateUpdate: {
      taxId: "1234567890",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerTaxRegistrationUpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.UpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPostRequest](../../models/operations/upsertcustomertaxregistrationv1customerscustomeridtaxregistrationspostrequest.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[models.CustomerTaxRegistrationRead](../../models/customertaxregistrationread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |