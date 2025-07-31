# Filings
(*filings*)

## Overview

### Available Operations

<<<<<<< HEAD
* [list](#list) - Get Filings
* [get](#get) - Get Filing By Id
* [getByRegistrationId](#getbyregistrationid) - Get Filings By Registration Id

## list
=======
* [getFilingsV1FilingsGet](#getfilingsv1filingsget) - Get Filings
* [getFilingByIdV1FilingsFilingIdGet](#getfilingbyidv1filingsfilingidget) - Get Filing By Id
* [getFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet](#getfilingsbyregistrationidv1filingsregistrationregistrationidget) - Get Filings By Registration Id

## getFilingsV1FilingsGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Get Filings API retrieves a paginated list of filings based on
    filters such as dates, jurisdiction, Country, status, etc. This helps track
    and manage tax filings efficiently across multiple jurisdictions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_filings_v1_filings_get" method="get" path="/v1/filings" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
<<<<<<< HEAD
  const result = await sdk.filings.list({
=======
  const result = await sdk.filings.getFilingsV1FilingsGet({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    dateFiledGte: "2024-01-01",
    dateFiledLte: "2024-12-31",
    orderBy: "status,start_date,end_date,amount",
    stateCode: "CA",
    countryCode: [

    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
<<<<<<< HEAD
import { filingsList } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsList.js";
=======
import { filingsGetFilingsV1FilingsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetFilingsV1FilingsGet.js";
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
<<<<<<< HEAD
  const res = await filingsList(sdk, {
=======
  const res = await filingsGetFilingsV1FilingsGet(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    dateFiledGte: "2024-01-01",
    dateFiledLte: "2024-12-31",
    orderBy: "status,start_date,end_date,amount",
    stateCode: "CA",
    countryCode: [
  
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("filingsList failed:", res.error);
=======
    console.log("filingsGetFilingsV1FilingsGet failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFilingsV1FilingsGetRequest](../../models/operations/getfilingsv1filingsgetrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageFilingRead](../../models/pagefilingread.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ErrorResponse                                     | 401, 404                                                 | application/json                                         |
| errors.BackendSrcFilingsResponsesValidationErrorResponse | 422                                                      | application/json                                         |
| errors.ErrorResponse                                     | 500                                                      | application/json                                         |
| errors.SDKDefaultError                                   | 4XX, 5XX                                                 | \*/\*                                                    |

<<<<<<< HEAD
## get
=======
## getFilingByIdV1FilingsFilingIdGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

This API retrieves detailed information about a specific
    filing using its unique identifier (filing_id).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_filing_by_id_v1_filings__filing_id__get" method="get" path="/v1/filings/{filing_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
<<<<<<< HEAD
  const result = await sdk.filings.get({
=======
  const result = await sdk.filings.getFilingByIdV1FilingsFilingIdGet({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
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
<<<<<<< HEAD
import { filingsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGet.js";
=======
import { filingsGetFilingByIdV1FilingsFilingIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetFilingByIdV1FilingsFilingIdGet.js";
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
<<<<<<< HEAD
  const res = await filingsGet(sdk, {
=======
  const res = await filingsGetFilingByIdV1FilingsFilingIdGet(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    filingId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("filingsGet failed:", res.error);
=======
    console.log("filingsGetFilingByIdV1FilingsFilingIdGet failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFilingByIdV1FilingsFilingIdGetRequest](../../models/operations/getfilingbyidv1filingsfilingidgetrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FilingDetailsRead](../../models/filingdetailsread.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ErrorResponse                                     | 401, 404                                                 | application/json                                         |
| errors.BackendSrcFilingsResponsesValidationErrorResponse | 422                                                      | application/json                                         |
| errors.ErrorResponse                                     | 500                                                      | application/json                                         |
| errors.SDKDefaultError                                   | 4XX, 5XX                                                 | \*/\*                                                    |

<<<<<<< HEAD
## getByRegistrationId
=======
## getFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Get Filings By Registration ID API
    retrieves all filings
    associated with a specific registration ID. This allows users to query detailed
    filing information tied to
    a specific registration record.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_filings_by_registration_id_v1_filings_registration__registration_id__get" method="get" path="/v1/filings/registration/{registration_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
<<<<<<< HEAD
  const result = await sdk.filings.getByRegistrationId({
=======
  const result = await sdk.filings.getFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
<<<<<<< HEAD
import { filingsGetByRegistrationId } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetByRegistrationId.js";
=======
import { filingsGetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet.js";
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
<<<<<<< HEAD
  const res = await filingsGetByRegistrationId(sdk, {
=======
  const res = await filingsGetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("filingsGetByRegistrationId failed:", res.error);
=======
    console.log("filingsGetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGet failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest](../../models/operations/getfilingsbyregistrationidv1filingsregistrationregistrationidgetrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[models.PageFilingRead](../../models/pagefilingread.md)\>**

### Errors

| Error Type                                               | Status Code                                              | Content Type                                             |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| errors.ErrorResponse                                     | 401, 404                                                 | application/json                                         |
| errors.BackendSrcFilingsResponsesValidationErrorResponse | 422                                                      | application/json                                         |
| errors.ErrorResponse                                     | 500                                                      | application/json                                         |
| errors.SDKDefaultError                                   | 4XX, 5XX                                                 | \*/\*                                                    |