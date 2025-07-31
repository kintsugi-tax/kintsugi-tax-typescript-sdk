# Nexus
(*nexus*)

## Overview

### Available Operations

<<<<<<< HEAD
* [listPhysical](#listphysical) - Get Physical Nexus
* [createPhysical](#createphysical) - Create Physical Nexus
* [updatePhysical](#updatephysical) - Update Physical Nexus
* [deletePhysical](#deletephysical) - Delete Physical Nexus
* [list](#list) - Get Nexus For Org

## listPhysical
=======
* [getPhysicalNexusV1NexusPhysicalNexusGet](#getphysicalnexusv1nexusphysicalnexusget) - Get Physical Nexus
* [createPhysicalNexusV1NexusPhysicalNexusPost](#createphysicalnexusv1nexusphysicalnexuspost) - Create Physical Nexus
* [updatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut](#updatephysicalnexusv1nexusphysicalnexusphysicalnexusidput) - Update Physical Nexus
* [deletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete](#deletephysicalnexusv1nexusphysicalnexusphysicalnexusiddelete) - Delete Physical Nexus
* [getNexusForOrgV1NexusGet](#getnexusfororgv1nexusget) - Get Nexus For Org

## getPhysicalNexusV1NexusPhysicalNexusGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

Retrieve a paginated list of
    physical nexuses for a specific organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_physical_nexus_v1_nexus_physical_nexus_get" method="get" path="/v1/nexus/physical_nexus" -->
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
  const result = await sdk.nexus.listPhysical({});
=======
  const result = await sdk.nexus.getPhysicalNexusV1NexusPhysicalNexusGet({});
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
<<<<<<< HEAD
import { nexusListPhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusListPhysical.js";
=======
import { nexusGetPhysicalNexusV1NexusPhysicalNexusGet } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusGetPhysicalNexusV1NexusPhysicalNexusGet.js";
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
  const res = await nexusListPhysical(sdk, {});
=======
  const res = await nexusGetPhysicalNexusV1NexusPhysicalNexusGet(sdk, {});
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("nexusListPhysical failed:", res.error);
=======
    console.log("nexusGetPhysicalNexusV1NexusPhysicalNexusGet failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPhysicalNexusV1NexusPhysicalNexusGetRequest](../../models/operations/getphysicalnexusv1nexusphysicalnexusgetrequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PagePhysicalNexusRead](../../models/pagephysicalnexusread.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ErrorResponse                                   | 401, 404                                               | application/json                                       |
| errors.BackendSrcNexusResponsesValidationErrorResponse | 422                                                    | application/json                                       |
| errors.ErrorResponse                                   | 500                                                    | application/json                                       |
| errors.SDKDefaultError                                 | 4XX, 5XX                                               | \*/\*                                                  |

<<<<<<< HEAD
## createPhysical
=======
## createPhysicalNexusV1NexusPhysicalNexusPost
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Create Physical Nexus API allows you to create a new physical
    nexus by specifying its attributes, including the location,
    start date, end date, etc.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_physical_nexus_v1_nexus_physical_nexus_post" method="post" path="/v1/nexus/physical_nexus" -->
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
<<<<<<< HEAD
  const result = await sdk.nexus.createPhysical({
=======
  const result = await sdk.nexus.createPhysicalNexusV1NexusPhysicalNexusPost({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    countryCode: "US",
    stateCode: "CA",
    startDate: new RFCDate("2024-01-01"),
    endDate: "2025-01-01",
    category: "PHYSICAL_BUSINESS_LOCATION",
    externalId: "ext_ABC123",
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
import { nexusCreatePhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusCreatePhysical.js";
=======
import { nexusCreatePhysicalNexusV1NexusPhysicalNexusPost } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusCreatePhysicalNexusV1NexusPhysicalNexusPost.js";
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
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
<<<<<<< HEAD
  const res = await nexusCreatePhysical(sdk, {
=======
  const res = await nexusCreatePhysicalNexusV1NexusPhysicalNexusPost(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    countryCode: "US",
    stateCode: "CA",
    startDate: new RFCDate("2024-01-01"),
    endDate: "2025-01-01",
    category: "PHYSICAL_BUSINESS_LOCATION",
    externalId: "ext_ABC123",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("nexusCreatePhysical failed:", res.error);
=======
    console.log("nexusCreatePhysicalNexusV1NexusPhysicalNexusPost failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PhysicalNexusCreate](../../models/physicalnexuscreate.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PhysicalNexusRead](../../models/physicalnexusread.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ErrorResponse                                   | 401                                                    | application/json                                       |
| errors.BackendSrcNexusResponsesValidationErrorResponse | 422                                                    | application/json                                       |
| errors.ErrorResponse                                   | 500                                                    | application/json                                       |
| errors.SDKDefaultError                                 | 4XX, 5XX                                               | \*/\*                                                  |

<<<<<<< HEAD
## updatePhysical
=======
## updatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Update Physical Nexus API allows you to modify the details of
    an existing physical nexus by its unique ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_physical_nexus_v1_nexus_physical_nexus__physical_nexus_id__put" method="put" path="/v1/nexus/physical_nexus/{physical_nexus_id}" -->
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
<<<<<<< HEAD
  const result = await sdk.nexus.updatePhysical({
=======
  const result = await sdk.nexus.updatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    physicalNexusId: "<id>",
    physicalNexusUpdate: {
      startDate: new RFCDate("2024-01-01"),
      endDate: "2025-01-01",
      category: "PHYSICAL_BUSINESS_LOCATION",
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
<<<<<<< HEAD
import { nexusUpdatePhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusUpdatePhysical.js";
=======
import { nexusUpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusUpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut.js";
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
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
<<<<<<< HEAD
  const res = await nexusUpdatePhysical(sdk, {
=======
  const res = await nexusUpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    physicalNexusId: "<id>",
    physicalNexusUpdate: {
      startDate: new RFCDate("2024-01-01"),
      endDate: "2025-01-01",
      category: "PHYSICAL_BUSINESS_LOCATION",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("nexusUpdatePhysical failed:", res.error);
=======
    console.log("nexusUpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPut failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPutRequest](../../models/operations/updatephysicalnexusv1nexusphysicalnexusphysicalnexusidputrequest.md)     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PhysicalNexusRead](../../models/physicalnexusread.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ErrorResponse                                   | 401, 404                                               | application/json                                       |
| errors.BackendSrcNexusResponsesValidationErrorResponse | 422                                                    | application/json                                       |
| errors.ErrorResponse                                   | 500                                                    | application/json                                       |
| errors.SDKDefaultError                                 | 4XX, 5XX                                               | \*/\*                                                  |

<<<<<<< HEAD
## deletePhysical
=======
## deletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Delete Physical Nexus API allows you to remove an existing
    physical nexus by its unique ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_physical_nexus_v1_nexus_physical_nexus__physical_nexus_id__delete" method="delete" path="/v1/nexus/physical_nexus/{physical_nexus_id}" -->
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
  const result = await sdk.nexus.deletePhysical({
=======
  const result = await sdk.nexus.deletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    physicalNexusId: "<id>",
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
import { nexusDeletePhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusDeletePhysical.js";
=======
import { nexusDeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusDeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete.js";
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
  const res = await nexusDeletePhysical(sdk, {
=======
  const res = await nexusDeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    physicalNexusId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("nexusDeletePhysical failed:", res.error);
=======
    console.log("nexusDeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDelete failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.DeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDeleteRequest](../../models/operations/deletephysicalnexusv1nexusphysicalnexusphysicalnexusiddeleterequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                             | Status Code                                            | Content Type                                           |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| errors.ErrorResponse                                   | 401, 404                                               | application/json                                       |
| errors.BackendSrcNexusResponsesValidationErrorResponse | 422                                                    | application/json                                       |
| errors.ErrorResponse                                   | 500                                                    | application/json                                       |
| errors.SDKDefaultError                                 | 4XX, 5XX                                               | \*/\*                                                  |

<<<<<<< HEAD
## list
=======
## getNexusForOrgV1NexusGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

Get a list of all nexuses for the organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_nexus_for_org_v1_nexus_get" method="get" path="/v1/nexus" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.nexus.getNexusForOrgV1NexusGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { nexusGetNexusForOrgV1NexusGet } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusGetNexusForOrgV1NexusGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await nexusGetNexusForOrgV1NexusGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusGetNexusForOrgV1NexusGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNexusForOrgV1NexusGetRequest](../../models/operations/getnexusfororgv1nexusgetrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageNexusResponse](../../models/pagenexusresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |