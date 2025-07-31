# Customers
(*customers*)

## Overview

### Available Operations

* [list](#list) - Get Customers
* [create](#create) - Create Customer
* [get](#get) - Get Customer By Id
* [update](#update) - Update Customer
* [getByExternalId](#getbyexternalid) - Get Customer By External Id
* [getTransactions](#gettransactions) - Get Transactions By Customer Id
* [createTransaction](#createtransaction) - Create Transaction By Customer Id

## list

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
  const result = await sdk.customers.list({
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
import { customersList } from "@kintsugi-tax/tax-platform-sdk/funcs/customersList.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersList(sdk, {
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
    console.log("customersList failed:", res.error);
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

## create

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
  const result = await sdk.customers.create({
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
import { customersCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/customersCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersCreate(sdk, {
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
    console.log("customersCreate failed:", res.error);
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

## get

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
  const result = await sdk.customers.get({
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
import { customersGet } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGet(sdk, {
    customerId: "cust_abc123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGet failed:", res.error);
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

## update

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
  const result = await sdk.customers.update({
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
import { customersUpdate } from "@kintsugi-tax/tax-platform-sdk/funcs/customersUpdate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersUpdate(sdk, {
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
    console.log("customersUpdate failed:", res.error);
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

## getByExternalId

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
  const result = await sdk.customers.getByExternalId({
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
import { customersGetByExternalId } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGetByExternalId.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGetByExternalId(sdk, {
    externalId: "external_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetByExternalId failed:", res.error);
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

## getTransactions

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
  const result = await sdk.customers.getTransactions({
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
import { customersGetTransactions } from "@kintsugi-tax/tax-platform-sdk/funcs/customersGetTransactions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersGetTransactions(sdk, {
    customerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customersGetTransactions failed:", res.error);
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

## createTransaction

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
  const result = await sdk.customers.createTransaction({
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
import { customersCreateTransaction } from "@kintsugi-tax/tax-platform-sdk/funcs/customersCreateTransaction.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await customersCreateTransaction(sdk, {
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
    console.log("customersCreateTransaction failed:", res.error);
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