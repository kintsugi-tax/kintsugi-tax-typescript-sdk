# Exemptions
(*exemptions*)

## Overview

### Available Operations

* [getExemptionsV1ExemptionsGet](#getexemptionsv1exemptionsget) - Get Exemptions
* [createExemptionV1ExemptionsPost](#createexemptionv1exemptionspost) - Create Exemption
* [getExemptionByIdV1ExemptionsExemptionIdGet](#getexemptionbyidv1exemptionsexemptionidget) - Get Exemption By Id
* [uploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost](#uploadexemptioncertificatev1exemptionsexemptionidattachmentspost) - Upload Exemption Certificate
* [getAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet](#getattachmentsforexemptionv1exemptionsexemptionidattachmentsget) - Get Attachments For Exemption

## getExemptionsV1ExemptionsGet

Retrieve a list of exemptions based on filters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_exemptions_v1_exemptions_get" method="get" path="/v1/exemptions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.exemptions.getExemptionsV1ExemptionsGet({
    searchQuery: "John",
    countryCode: [

    ],
    jurisdiction: "CA",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
    customerId: "cust_1234",
    transactionId: "trans_1234",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { exemptionsGetExemptionsV1ExemptionsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/exemptionsGetExemptionsV1ExemptionsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await exemptionsGetExemptionsV1ExemptionsGet(sdk, {
    searchQuery: "John",
    countryCode: [
  
    ],
    jurisdiction: "CA",
    startDate: "2024-01-01",
    endDate: "2024-01-01",
    customerId: "cust_1234",
    transactionId: "trans_1234",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exemptionsGetExemptionsV1ExemptionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExemptionsV1ExemptionsGetRequest](../../models/operations/getexemptionsv1exemptionsgetrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.FastapiPaginationDefaultPageExemptionRead2](../../models/fastapipaginationdefaultpageexemptionread2.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ErrorResponse                                        | 401                                                         | application/json                                            |
| errors.BackendSrcExemptionsResponsesValidationErrorResponse | 422                                                         | application/json                                            |
| errors.ErrorResponse                                        | 500                                                         | application/json                                            |
| errors.SDKDefaultError                                      | 4XX, 5XX                                                    | \*/\*                                                       |

## createExemptionV1ExemptionsPost

The Create Exemption API allows you to create a new exemption record.
    This includes defining details such as exemption type, jurisdiction,
    Country, State, validity dates, etc.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_exemption_v1_exemptions_post" method="post" path="/v1/exemptions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.exemptions.createExemptionV1ExemptionsPost({
    exemptionType: "wholesale",
    jurisdiction: "CA",
    countryCode: "US",
    startDate: new RFCDate("2024-01-01"),
    endDate: "2026-01-01",
    customerId: "cust_001",
    transactionId: "txn_123",
    reseller: true,
    fein: "12-3456789",
    salesTaxId: "ST-98765",
    status: "ACTIVE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { exemptionsCreateExemptionV1ExemptionsPost } from "@kintsugi-tax/tax-platform-sdk/funcs/exemptionsCreateExemptionV1ExemptionsPost.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await exemptionsCreateExemptionV1ExemptionsPost(sdk, {
    exemptionType: "wholesale",
    jurisdiction: "CA",
    countryCode: "US",
    startDate: new RFCDate("2024-01-01"),
    endDate: "2026-01-01",
    customerId: "cust_001",
    transactionId: "txn_123",
    reseller: true,
    fein: "12-3456789",
    salesTaxId: "ST-98765",
    status: "ACTIVE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exemptionsCreateExemptionV1ExemptionsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ExemptionCreate](../../models/exemptioncreate.md)                                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BackendSrcExemptionsSerializersExemptionRead](../../models/backendsrcexemptionsserializersexemptionread.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ErrorResponse                                        | 401                                                         | application/json                                            |
| errors.BackendSrcExemptionsResponsesValidationErrorResponse | 422                                                         | application/json                                            |
| errors.ErrorResponse                                        | 500                                                         | application/json                                            |
| errors.SDKDefaultError                                      | 4XX, 5XX                                                    | \*/\*                                                       |

## getExemptionByIdV1ExemptionsExemptionIdGet

The Get Exemption By ID API retrieves a specific exemption record by
    its unique ID. This API is useful for retrieving detailed information
    about a particular exemption, including its associated
    customer, organisation id, status, etc.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_exemption_by_id_v1_exemptions__exemption_id__get" method="get" path="/v1/exemptions/{exemption_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.exemptions.getExemptionByIdV1ExemptionsExemptionIdGet({
    exemptionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { exemptionsGetExemptionByIdV1ExemptionsExemptionIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/exemptionsGetExemptionByIdV1ExemptionsExemptionIdGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await exemptionsGetExemptionByIdV1ExemptionsExemptionIdGet(sdk, {
    exemptionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exemptionsGetExemptionByIdV1ExemptionsExemptionIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExemptionByIdV1ExemptionsExemptionIdGetRequest](../../models/operations/getexemptionbyidv1exemptionsexemptionidgetrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BackendSrcExemptionsModelsExemptionRead](../../models/backendsrcexemptionsmodelsexemptionread.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ErrorResponse                                        | 404                                                         | application/json                                            |
| errors.BackendSrcExemptionsResponsesValidationErrorResponse | 422                                                         | application/json                                            |
| errors.ErrorResponse                                        | 500                                                         | application/json                                            |
| errors.SDKDefaultError                                      | 4XX, 5XX                                                    | \*/\*                                                       |

## uploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost

The Upload Exemption Certificate API allows you
    to upload a file attachment (e.g., exemption certificate) for a specific exemption.
    This is primarily used to associate supporting documents with an exemption record
    to ensure compliance and facilitate verification.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload_exemption_certificate_v1_exemptions__exemption_id__attachments_post" method="post" path="/v1/exemptions/{exemption_id}/attachments" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { openAsBlob } from "node:fs";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.exemptions.uploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost({
    exemptionId: "<id>",
    bodyUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost: {
      file: await openAsBlob("example.file"),
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
import { exemptionsUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost } from "@kintsugi-tax/tax-platform-sdk/funcs/exemptionsUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost.js";
import { openAsBlob } from "node:fs";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await exemptionsUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost(sdk, {
    exemptionId: "<id>",
    bodyUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost: {
      file: await openAsBlob("example.file"),
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exemptionsUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.UploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPostRequest](../../models/operations/uploadexemptioncertificatev1exemptionsexemptionidattachmentspostrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `options`                                                                                                                                                                                | RequestOptions                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                  | :heavy_minus_sign:                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.           |
| `options.retries`                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                         |

### Response

**Promise\<[models.AttachmentRead](../../models/attachmentread.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ErrorResponse                                        | 401                                                         | application/json                                            |
| errors.BackendSrcExemptionsResponsesValidationErrorResponse | 422                                                         | application/json                                            |
| errors.ErrorResponse                                        | 500                                                         | application/json                                            |
| errors.SDKDefaultError                                      | 4XX, 5XX                                                    | \*/\*                                                       |

## getAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet

The Get Attachments for Exemption API retrieves all
    attachments associated with a specific exemption.
    This is used to view and manage supporting documents
    like exemption certificates uploaded for a particular exemption record.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_attachments_for_exemption_v1_exemptions__exemption_id__attachments_get" method="get" path="/v1/exemptions/{exemption_id}/attachments" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.exemptions.getAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet({
    exemptionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { exemptionsGetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/exemptionsGetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await exemptionsGetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet(sdk, {
    exemptionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("exemptionsGetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetAttachmentsForExemptionV1ExemptionsExemptionIdAttachmentsGetRequest](../../models/operations/getattachmentsforexemptionv1exemptionsexemptionidattachmentsgetrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[models.AttachmentRead[]](../../models/.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.ErrorResponse                                        | 401                                                         | application/json                                            |
| errors.BackendSrcExemptionsResponsesValidationErrorResponse | 422                                                         | application/json                                            |
| errors.SDKDefaultError                                      | 4XX, 5XX                                                    | \*/\*                                                       |