# Transactions
(*transactions*)

## Overview

### Available Operations

* [get](#get) - Get Transactions
* [create](#create) - Create Transaction
* [getByExternalId](#getbyexternalid) - Get Transaction By External Id
* [update](#update) - Update Transaction
* [getById](#getbyid) - Get Transaction By Id
* [getByFilingId](#getbyfilingid) - Get Transactions By Filing Id
* [createCreditNote](#createcreditnote) - Create Credit Note By Transaction Id
* [updateCreditNote](#updatecreditnote) - Update Credit Note By Transaction Id

## get

The Get Transactions API retrieves a list of transactions with
    optional filtering, sorting, and pagination.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transactions_v1_transactions_get" method="get" path="/v1/transactions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.get({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { transactionsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionsV1TransactionsGetRequest](../../models/operations/gettransactionsv1transactionsgetrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageTransactionRead](../../models/pagetransactionread.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ErrorResponse                                          | 401, 404                                                      | application/json                                              |
| errors.BackendSrcTransactionsResponsesValidationErrorResponse | 422                                                           | application/json                                              |
| errors.ErrorResponse                                          | 500                                                           | application/json                                              |
| errors.SDKDefaultError                                        | 4XX, 5XX                                                      | \*/\*                                                         |

## create

Create a transaction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_transaction_v1_transactions_post" method="post" path="/v1/transactions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.create({
    organizationId: "orgn_YourOrgIdHere",
    externalId: "YourUniqueOrder123",
    date: new Date("2024-01-15T14:30:00Z"),
    currency: "USD",
    source: "API",
    addresses: [
      {
        street1: "123 Main St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        country: "US",
        type: "SHIP_TO",
      },
    ],
    transactionItems: [
      {
        organizationId: "orgn_YourOrgIdHere",
        date: new Date("2024-01-15T14:30:00Z"),
        externalProductId: "SKU-ABC",
        product: "Example Widget",
        quantity: 2,
        amount: 50,
      },
    ],
    customer: {
      name: "John Doe",
      externalId: "Cust456",
      organizationId: "orgn_YourOrgIdHere",
    },
    type: "SALE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { transactionsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsCreate(sdk, {
    organizationId: "orgn_YourOrgIdHere",
    externalId: "YourUniqueOrder123",
    date: new Date("2024-01-15T14:30:00Z"),
    currency: "USD",
    source: "API",
    addresses: [
      {
        street1: "123 Main St",
        city: "San Francisco",
        state: "CA",
        postalCode: "94107",
        country: "US",
        type: "SHIP_TO",
      },
    ],
    transactionItems: [
      {
        organizationId: "orgn_YourOrgIdHere",
        date: new Date("2024-01-15T14:30:00Z"),
        externalProductId: "SKU-ABC",
        product: "Example Widget",
        quantity: 2,
        amount: 50,
      },
    ],
    customer: {
      name: "John Doe",
      externalId: "Cust456",
      organizationId: "orgn_YourOrgIdHere",
    },
    type: "SALE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.TransactionPublicRequest](../../models/transactionpublicrequest.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionRead](../../models/transactionread.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ErrorResponse                                          | 400, 401                                                      | application/json                                              |
| errors.BackendSrcTransactionsResponsesValidationErrorResponse | 422                                                           | application/json                                              |
| errors.ErrorResponse                                          | 500                                                           | application/json                                              |
| errors.SDKDefaultError                                        | 4XX, 5XX                                                      | \*/\*                                                         |

## getByExternalId

Retrieves a specific transaction based on its external ID.
    This allows users to fetch transaction details using an identifier from an external system.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transaction_by_external_id_v1_transactions_external__external_id__get" method="get" path="/v1/transactions/external/{external_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.getByExternalId({
    externalId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { transactionsGetByExternalId } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsGetByExternalId.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsGetByExternalId(sdk, {
    externalId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetByExternalId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest](../../models/operations/gettransactionbyexternalidv1transactionsexternalexternalidgetrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[models.TransactionRead](../../models/transactionread.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ErrorResponse                                          | 401, 404                                                      | application/json                                              |
| errors.BackendSrcTransactionsResponsesValidationErrorResponse | 422                                                           | application/json                                              |
| errors.ErrorResponse                                          | 500                                                           | application/json                                              |
| errors.SDKDefaultError                                        | 4XX, 5XX                                                      | \*/\*                                                         |

## update

Update a specific transaction by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_transaction_v1_transactions__transaction_id__put" method="put" path="/v1/transactions/{transaction_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.update({
    transactionId: "<id>",
    transactionUpdate: {
      organizationId: "orgn_argaLQwMy2fJc",
      externalId: "EXT12345",
      date: new Date("2025-04-02T17:36:59.814Z"),
      addresses: [
        {
          type: "BILL_TO",
        },
      ],
      transactionItems: [
        {
          organizationId: "orgn_argaLQwMy2fJc",
          date: new Date("2025-04-02T17:36:59.814Z"),
          externalProductId: "1186DUMMYITEM",
        },
      ],
      customer: {},
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
import { transactionsUpdate } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsUpdate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsUpdate(sdk, {
    transactionId: "<id>",
    transactionUpdate: {
      organizationId: "orgn_argaLQwMy2fJc",
      externalId: "EXT12345",
      date: new Date("2025-04-02T17:36:59.814Z"),
      addresses: [
        {
          type: "BILL_TO",
        },
      ],
      transactionItems: [
        {
          organizationId: "orgn_argaLQwMy2fJc",
          date: new Date("2025-04-02T17:36:59.814Z"),
          externalProductId: "1186DUMMYITEM",
        },
      ],
      customer: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateTransactionV1TransactionsTransactionIdPutRequest](../../models/operations/updatetransactionv1transactionstransactionidputrequest.md)                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionRead](../../models/transactionread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getById

The Get Transaction By Id API retrieves detailed information
    about a specific transaction by providing its unique transaction ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transaction_by_id_v1_transactions__transaction_id__get" method="get" path="/v1/transactions/{transaction_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.getById({
    transactionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { transactionsGetById } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsGetById.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsGetById(sdk, {
    transactionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionByIdV1TransactionsTransactionIdGetRequest](../../models/operations/gettransactionbyidv1transactionstransactionidgetrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionRead](../../models/transactionread.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ErrorResponse                                          | 401, 404                                                      | application/json                                              |
| errors.BackendSrcTransactionsResponsesValidationErrorResponse | 422                                                           | application/json                                              |
| errors.ErrorResponse                                          | 500                                                           | application/json                                              |
| errors.SDKDefaultError                                        | 4XX, 5XX                                                      | \*/\*                                                         |

## getByFilingId

Retrieve transactions by filing ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_transactions_by_filing_id_v1_transactions_filings__filing_id__get" method="get" path="/v1/transactions/filings/{filing_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.getByFilingId({
    filingId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { transactionsGetByFilingId } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsGetByFilingId.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsGetByFilingId(sdk, {
    filingId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetByFilingId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest](../../models/operations/gettransactionsbyfilingidv1transactionsfilingsfilingidgetrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionRead[]](../../models/.md)\>**

### Errors

| Error Type                                                    | Status Code                                                   | Content Type                                                  |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| errors.ErrorResponse                                          | 401                                                           | application/json                                              |
| errors.BackendSrcTransactionsResponsesValidationErrorResponse | 422                                                           | application/json                                              |
| errors.ErrorResponse                                          | 500                                                           | application/json                                              |
| errors.SDKDefaultError                                        | 4XX, 5XX                                                      | \*/\*                                                         |

## createCreditNote

Create a new credit note for a specific transaction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="POST_create_credit_note_by_transaction_id" method="post" path="/v1/transactions/{original_transaction_id}/credit_notes" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.createCreditNote({
    originalTransactionId: "<id>",
    creditNoteCreate: {
      externalId: "CN-12345",
      date: new Date("2024-10-27T14:30:00Z"),
      status: "PENDING",
      description: "Refund for damaged product",
      totalAmount: 50,
      currency: "USD",
      transactionItems: [
        {
          externalId: "ITEM-1",
          date: new Date("2024-10-27T14:30:00Z"),
          externalProductId: "PROD-ABC",
          quantity: 1,
          amount: 50,
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
import { transactionsCreateCreditNote } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsCreateCreditNote.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsCreateCreditNote(sdk, {
    originalTransactionId: "<id>",
    creditNoteCreate: {
      externalId: "CN-12345",
      date: new Date("2024-10-27T14:30:00Z"),
      status: "PENDING",
      description: "Refund for damaged product",
      totalAmount: 50,
      currency: "USD",
      transactionItems: [
        {
          externalId: "ITEM-1",
          date: new Date("2024-10-27T14:30:00Z"),
          externalProductId: "PROD-ABC",
          quantity: 1,
          amount: 50,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsCreateCreditNote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.POSTCreateCreditNoteByTransactionIdRequest](../../models/operations/postcreatecreditnotebytransactionidrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TransactionRead](../../models/transactionread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## updateCreditNote

Update an existing credit note for a specific transaction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PUT_update_credit_note_by_transaction_id" method="put" path="/v1/transactions/{original_transaction_id}/credit_notes/{credit_note_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.transactions.updateCreditNote({
    originalTransactionId: "<id>",
    creditNoteId: "<id>",
    creditNoteCreate: {
      externalId: "<id>",
      date: new Date("2023-07-25T11:01:44.924Z"),
      status: "CANCELLED",
      totalAmount: 0,
      currency: "SPL",
      transactionItems: [
        {
          externalId: "<id>",
          date: new Date("2024-09-15T23:01:02.880Z"),
          externalProductId: "<id>",
          quantity: 1,
          amount: 0,
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
import { transactionsUpdateCreditNote } from "@kintsugi-tax/tax-platform-sdk/funcs/transactionsUpdateCreditNote.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await transactionsUpdateCreditNote(sdk, {
    originalTransactionId: "<id>",
    creditNoteId: "<id>",
    creditNoteCreate: {
      externalId: "<id>",
      date: new Date("2023-07-25T11:01:44.924Z"),
      status: "CANCELLED",
      totalAmount: 0,
      currency: "SPL",
      transactionItems: [
        {
          externalId: "<id>",
          date: new Date("2024-09-15T23:01:02.880Z"),
          externalProductId: "<id>",
          quantity: 1,
          amount: 0,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsUpdateCreditNote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PUTUpdateCreditNoteByTransactionIdRequest](../../models/operations/putupdatecreditnotebytransactionidrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |