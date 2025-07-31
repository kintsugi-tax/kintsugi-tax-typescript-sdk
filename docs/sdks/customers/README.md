# Customers
(*customers*)

## Overview

### Available Operations

* [getCustomersV1](#getcustomersv1) - Get Customers
* [createCustomerV1CustomersPost](#createcustomerv1customerspost) - Create Customer
* [getCustomerByIdV1CustomersCustomerIdGet](#getcustomerbyidv1customerscustomeridget) - Get Customer By Id
* [updateCustomerV1CustomersCustomerIdPut](#updatecustomerv1customerscustomeridput) - Update Customer
* [getCustomerByExternalIdV1CustomersExternalExternalIdGet](#getcustomerbyexternalidv1customersexternalexternalidget) - Get Customer By External Id
* [getTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet](#gettransactionsbycustomeridv1customerscustomeridtransactionsget) - Get Transactions By Customer Id
* [createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost](#createtransactionbycustomeridv1customerscustomeridtransactionspost) - Create Transaction By Customer Id

## getCustomersV1

The Get Customers API retrieves
    a paginated list of customers based on specified filters.
    This API allows searching, filtering by country and state, and sorting the results.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_customers_v1" method="get" path="/v1/customers" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.getCustomersV1({
    searchQuery: "John",
    country: [

    ],
    state: "CA",
    sourceIn: "SHOPIFY,API",
    orderBy: "created_at,street_1,street_2,city,state,postal_code,country,status",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { customersGetCustomersV1 } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGetCustomersV1.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGetCustomersV1(sdk, {
    searchQuery: "John",
    country: [
  
    ],
    state: "CA",
    sourceIn: "SHOPIFY,API",
    orderBy: "created_at,street_1,street_2,city,state,postal_code,country,status",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetCustomersV1 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomersV1Request](../../models/operations/getcustomersv1request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageCustomerRead](../../models/pagecustomerread.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ErrorResponse                                       | 401, 404                                                   | application/json                                           |
| errors.BackendSrcCustomersResponsesValidationErrorResponse | 422                                                        | application/json                                           |
| errors.ErrorResponse                                       | 500                                                        | application/json                                           |
| errors.SDKDefaultError                                     | 4XX, 5XX                                                   | \*/\*                                                      |

## createCustomerV1CustomersPost

The Create Customer API enables the creation of a new customer record with essential
details like name, contact information, and address, along with optional metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_customer_v1_customers_post" method="post" path="/v1/customers" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.createCustomerV1CustomersPost({
    phone: "987-654-3210",
    street1: "456 Elm St",
    street2: "Suite 202",
    city: "Metropolis",
    county: "Wayne",
    state: "NY",
    postalCode: "10001",
    country: "US",
    name: "Jane Smith",
    externalId: "cust_002",
    status: "ARCHIVED",
    email: "jane.smith@example.com",
    source: "SHOPIFY",
    addressStatus: "PARTIALLY_VERIFIED",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { customersCreateCustomerV1CustomersPost } from "@kintsugi-tax/tax-platform-sdk/funcs/customersCreateCustomerV1CustomersPost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersCreateCustomerV1CustomersPost(sdk, {
    phone: "987-654-3210",
    street1: "456 Elm St",
    street2: "Suite 202",
    city: "Metropolis",
    county: "Wayne",
    state: "NY",
    postalCode: "10001",
    country: "US",
    name: "Jane Smith",
    externalId: "cust_002",
    status: "ARCHIVED",
    email: "jane.smith@example.com",
    source: "SHOPIFY",
    addressStatus: "PARTIALLY_VERIFIED",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateCustomerV1CustomersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CustomerCreate](../../models/customercreate.md)                                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerRead](../../models/customerread.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ErrorResponse                                       | 401, 404                                                   | application/json                                           |
| errors.BackendSrcCustomersResponsesValidationErrorResponse | 422                                                        | application/json                                           |
| errors.ErrorResponse                                       | 500                                                        | application/json                                           |
| errors.SDKDefaultError                                     | 4XX, 5XX                                                   | \*/\*                                                      |

## getCustomerByIdV1CustomersCustomerIdGet

The Get Customer By ID API retrieves the details of a single customer
    using their unique identifier. It returns customer-specific data,
    including contact information, address, name and metadata, etc.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_customer_by_id_v1_customers__customer_id__get" method="get" path="/v1/customers/{customer_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.getCustomerByIdV1CustomersCustomerIdGet({
    customerId: "cust_abc123",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { customersGetCustomerByIdV1CustomersCustomerIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGetCustomerByIdV1CustomersCustomerIdGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGetCustomerByIdV1CustomersCustomerIdGet(sdk, {
    customerId: "cust_abc123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetCustomerByIdV1CustomersCustomerIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerByIdV1CustomersCustomerIdGetRequest](../../models/operations/getcustomerbyidv1customerscustomeridgetrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerRead](../../models/customerread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateCustomerV1CustomersCustomerIdPut

The Update Customer API allows you to modify an existing customer's
    information using their unique identifier,
    enabling updates to their details as needed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_customer_v1_customers__customer_id__put" method="put" path="/v1/customers/{customer_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.updateCustomerV1CustomersCustomerIdPut({
    customerId: "<id>",
    customerUpdate: {
      phone: "987-654-3210",
      street1: "456 Elm St",
      street2: "Suite 202",
      city: "Metropolis",
      county: "Wayne",
      state: "NY",
      postalCode: "10001",
      country: "US",
      fullAddress: "456 Elm St, Suite 202, Metropolis, NY 10001, US",
      name: "Jane Smith",
      status: "ACTIVE",
      email: "john.doe@example.com",
      source: "SHOPIFY",
      addressStatus: "VERIFIED",
      externalId: "cust_002",
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
import { customersUpdateCustomerV1CustomersCustomerIdPut } from "@kintsugi-tax/tax-platform-sdk/funcs/customersUpdateCustomerV1CustomersCustomerIdPut.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersUpdateCustomerV1CustomersCustomerIdPut(sdk, {
    customerId: "<id>",
    customerUpdate: {
      phone: "987-654-3210",
      street1: "456 Elm St",
      street2: "Suite 202",
      city: "Metropolis",
      county: "Wayne",
      state: "NY",
      postalCode: "10001",
      country: "US",
      fullAddress: "456 Elm St, Suite 202, Metropolis, NY 10001, US",
      name: "Jane Smith",
      status: "ACTIVE",
      email: "john.doe@example.com",
      source: "SHOPIFY",
      addressStatus: "VERIFIED",
      externalId: "cust_002",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersUpdateCustomerV1CustomersCustomerIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCustomerV1CustomersCustomerIdPutRequest](../../models/operations/updatecustomerv1customerscustomeridputrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerRead](../../models/customerread.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.ErrorResponse                                       | 401, 404                                                   | application/json                                           |
| errors.BackendSrcCustomersResponsesValidationErrorResponse | 422                                                        | application/json                                           |
| errors.ErrorResponse                                       | 500                                                        | application/json                                           |
| errors.SDKDefaultError                                     | 4XX, 5XX                                                   | \*/\*                                                      |

## getCustomerByExternalIdV1CustomersExternalExternalIdGet

The Get Customer By External ID API retrieves the details of a single customer using
their external identifier. This endpoint is useful for accessing customer data when only
an external ID is available.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_customer_by_external_id_v1_customers_external__external_id__get" method="get" path="/v1/customers/external/{external_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.getCustomerByExternalIdV1CustomersExternalExternalIdGet({
    externalId: "external_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { customersGetCustomerByExternalIdV1CustomersExternalExternalIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGetCustomerByExternalIdV1CustomersExternalExternalIdGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGetCustomerByExternalIdV1CustomersExternalExternalIdGet(sdk, {
    externalId: "external_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetCustomerByExternalIdV1CustomersExternalExternalIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustomerByExternalIdV1CustomersExternalExternalIdGetRequest](../../models/operations/getcustomerbyexternalidv1customersexternalexternalidgetrequest.md)         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CustomerRead](../../models/customerread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet

Get a list of transactions for a customer by their unique ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transactions_by_customer_id_v1_customers__customer_id__transactions_get" method="get" path="/v1/customers/{customer_id}/transactions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.getTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet({
    customerId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { customersGetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet(sdk, {
    customerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGetRequest](../../models/operations/gettransactionsbycustomeridv1customerscustomeridtransactionsgetrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.TransactionRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost

Create a new transaction for a specific customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_transaction_by_customer_id_v1_customers__customer_id__transactions_post" method="post" path="/v1/customers/{customer_id}/transactions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.customers.createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost({
    customerId: "<id>",
    transactionCreate: {
      organizationId: "<id>",
      externalId: "<id>",
      date: new Date("2023-02-16T04:36:50.697Z"),
      totalAmount: 0,
      totalTaxAmountImported: 0,
      taxRateImported: 0,
      totalTaxAmountCalculated: 0,
      taxRateCalculated: 0,
      totalTaxLiabilityAmount: 0,
      taxableAmount: 0,
      addresses: [],
      transactionItems: [
        {
          organizationId: "<id>",
          date: new Date("2024-05-13T04:49:24.946Z"),
          externalProductId: "<id>",
          quantity: 1,
          amount: 0,
          taxAmountImported: 0,
          taxRateImported: 0,
          taxAmountCalculated: 0,
          taxRateCalculated: 0,
          taxableAmount: 0,
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
import { customersCreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost } from "@kintsugi-tax/tax-platform-sdk/funcs/customersCreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersCreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost(sdk, {
    customerId: "<id>",
    transactionCreate: {
      organizationId: "<id>",
      externalId: "<id>",
      date: new Date("2023-02-16T04:36:50.697Z"),
      totalAmount: 0,
      totalTaxAmountImported: 0,
      taxRateImported: 0,
      totalTaxAmountCalculated: 0,
      taxRateCalculated: 0,
      totalTaxLiabilityAmount: 0,
      taxableAmount: 0,
      addresses: [],
      transactionItems: [
        {
          organizationId: "<id>",
          date: new Date("2024-05-13T04:49:24.946Z"),
          externalProductId: "<id>",
          quantity: 1,
          amount: 0,
          taxAmountImported: 0,
          taxRateImported: 0,
          taxAmountCalculated: 0,
          taxRateCalculated: 0,
          taxableAmount: 0,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersCreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest](../../models/operations/createtransactionbycustomeridv1customerscustomeridtransactionspostrequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[models.TransactionRead](../../models/transactionread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |