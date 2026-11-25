# Filings

## Overview

### Available Operations

* [list](#list) - Get filings
* [createBackFilingRequestV1FilingsBackFilingRequestPost](#createbackfilingrequestv1filingsbackfilingrequestpost) - Create back filing request
* [getBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet](#getbackfilingrequestoptionsv1filingsbackfilingrequestoptionsget) - Get back filing request options
* [getCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet](#getcurrentbackfilingtermsv1filingsbackfilingtermscurrentget) - Get current back filing terms
* [getByRegistrationId](#getbyregistrationid) - Get filings by registration id
* [get](#get) - Get filing by id
* [approveFilingV1FilingsFilingIdApprovePut](#approvefilingv1filingsfilingidapproveput) - Approve filing

## list

The Get Filings API retrieves a paginated list of filings based on
    filters such as dates, jurisdiction, Country, status, etc. This helps track
    and manage tax filings efficiently across multiple jurisdictions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_filings_v1_filings_get" method="get" path="/v1/filings" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.list({
    statusIn: "FILED,FILING,SUBMITTED,UNFILED,PAUSED,CANCELLED,ISSUE,SKIPPED",
    startDate: new RFCDate("2024-01-01"),
    endDate: new RFCDate("2024-12-31"),
    dateFiledGte: new RFCDate("2024-01-01"),
    dateFiledLte: new RFCDate("2024-12-31"),
    orderBy: "status,start_date,end_date,amount",
    stateCode: "CA",
    countryCode: [
      "U",
      "S",
    ],
    filingCategoryIn: "REGULAR",
    taxTypeIn: "SALES_TAX,USE_TAX",
    xOrganizationId: "org_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { filingsList } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsList.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsList(sdk, {
    statusIn: "FILED,FILING,SUBMITTED,UNFILED,PAUSED,CANCELLED,ISSUE,SKIPPED",
    startDate: new RFCDate("2024-01-01"),
    endDate: new RFCDate("2024-12-31"),
    dateFiledGte: new RFCDate("2024-01-01"),
    dateFiledLte: new RFCDate("2024-12-31"),
    orderBy: "status,start_date,end_date,amount",
    stateCode: "CA",
    countryCode: [
      "U",
      "S",
    ],
    filingCategoryIn: "REGULAR",
    taxTypeIn: "SALES_TAX,USE_TAX",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsList failed:", res.error);
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

## createBackFilingRequestV1FilingsBackFilingRequestPost

Create unapproved BACK_FILING rows for requested in-bounds periods.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_back_filing_request_v1_filings_back_filing_request_post" method="post" path="/v1/filings/back-filing-request" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.createBackFilingRequestV1FilingsBackFilingRequestPost({
    xOrganizationId: "<id>",
    backFilingRequestCreate: {
      requests: [
        {
          registrationId: "<id>",
          periods: [
            {
              startDate: new RFCDate("2026-03-03"),
              endDate: new RFCDate("2026-08-19"),
            },
          ],
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
import { filingsCreateBackFilingRequestV1FilingsBackFilingRequestPost } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsCreateBackFilingRequestV1FilingsBackFilingRequestPost.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsCreateBackFilingRequestV1FilingsBackFilingRequestPost(sdk, {
    xOrganizationId: "<id>",
    backFilingRequestCreate: {
      requests: [
        {
          registrationId: "<id>",
          periods: [
            {
              startDate: new RFCDate("2026-03-03"),
              endDate: new RFCDate("2026-08-19"),
            },
          ],
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsCreateBackFilingRequestV1FilingsBackFilingRequestPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBackFilingRequestV1FilingsBackFilingRequestPostRequest](../../models/operations/createbackfilingrequestv1filingsbackfilingrequestpostrequest.md)             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BackFilingRequestCreateResponse](../../models/backfilingrequestcreateresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet

Eligible US registrations and periods for a customer back-filing request.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_back_filing_request_options_v1_filings_back_filing_request_options_get" method="get" path="/v1/filings/back-filing-request/options" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.getBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet({
    xOrganizationId: "org_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { filingsGetBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsGetBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet(sdk, {
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsGetBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGetRequest](../../models/operations/getbackfilingrequestoptionsv1filingsbackfilingrequestoptionsgetrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.BackFilingRequestOptionsResponse](../../models/backfilingrequestoptionsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet

Current back filing terms shown before BACK_FILING approval.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_current_back_filing_terms_v1_filings_back_filing_terms_current_get" method="get" path="/v1/filings/back-filing-terms/current" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.getCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet({
    xOrganizationId: "org_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { filingsGetCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsGetCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet(sdk, {
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsGetCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGetRequest](../../models/operations/getcurrentbackfilingtermsv1filingsbackfilingtermscurrentgetrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BackFilingTermsRead](../../models/backfilingtermsread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getByRegistrationId

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
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.getByRegistrationId({
    registrationId: "<id>",
    xOrganizationId: "org_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { filingsGetByRegistrationId } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGetByRegistrationId.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsGetByRegistrationId(sdk, {
    registrationId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsGetByRegistrationId failed:", res.error);
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

## get

This API retrieves detailed information about a specific
    filing using its unique identifier (filing_id).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_filing_by_id_v1_filings__filing_id__get" method="get" path="/v1/filings/{filing_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.get({
    filingId: "<id>",
    xOrganizationId: "org_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { filingsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsGet(sdk, {
    filingId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsGet failed:", res.error);
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

## approveFilingV1FilingsFilingIdApprovePut

Approve a specific filing by its ID. Returns 409 while the filing is being recalculated; retry the request.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="approve_filing_v1_filings__filing_id__approve_put" method="put" path="/v1/filings/{filing_id}/approve" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.filings.approveFilingV1FilingsFilingIdApprovePut({
    filingId: "<id>",
    xOrganizationId: "org_12345",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { filingsApproveFilingV1FilingsFilingIdApprovePut } from "@kintsugi-tax/tax-platform-sdk/funcs/filingsApproveFilingV1FilingsFilingIdApprovePut.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await filingsApproveFilingV1FilingsFilingIdApprovePut(sdk, {
    filingId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("filingsApproveFilingV1FilingsFilingIdApprovePut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ApproveFilingV1FilingsFilingIdApprovePutRequest](../../models/operations/approvefilingv1filingsfilingidapproveputrequest.md)                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FilingRead](../../models/filingread.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorResponse       | 409                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |