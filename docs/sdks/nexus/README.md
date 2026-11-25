# Nexus

## Overview

### Available Operations

* [list](#list) - Get nexus for org
* [listPhysical](#listphysical) - Get physical nexus
* [createPhysical](#createphysical) - Create physical nexus
* [getPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet](#getphysicalnexuscategoriesv1nexusphysicalnexuscategoriesget) - Get physical nexus categories
* [deletePhysical](#deletephysical) - Delete physical nexus
* [updatePhysical](#updatephysical) - Update physical nexus
* [getNexusDetailsForIdV1NexusNexusIdGet](#getnexusdetailsforidv1nexusnexusidget) - Get nexus details for id

## list

Get a list of all nexuses for the organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_nexus_for_org_v1_nexus_get" method="get" path="/v1/nexus" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.list({
    statusIn: "APPROACHING,NOT_EXPOSED,PENDING_REGISTRATION,EXPOSED,APPROACHING,REGISTERED",
    orderBy: "state_code,country_code",
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
import { nexusList } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusList.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusList(sdk, {
    statusIn: "APPROACHING,NOT_EXPOSED,PENDING_REGISTRATION,EXPOSED,APPROACHING,REGISTERED",
    orderBy: "state_code,country_code",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusList failed:", res.error);
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

**Promise\<[operations.ResponseGetNexusForOrgV1NexusGet](../../models/operations/responsegetnexusfororgv1nexusget.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## listPhysical

Retrieve a paginated list of
    physical nexuses for a specific organization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_physical_nexus_v1_nexus_physical_nexus_get" method="get" path="/v1/nexus/physical_nexus" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.listPhysical({
    orderBy: "country_code,state_code,start_date,end_date",
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
import { nexusListPhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusListPhysical.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusListPhysical(sdk, {
    orderBy: "country_code,state_code,start_date,end_date",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusListPhysical failed:", res.error);
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

## createPhysical

The Create Physical Nexus API allows you to create a new physical
    nexus by specifying its attributes, including the location,
    start date, end date, etc.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_physical_nexus_v1_nexus_physical_nexus_post" method="post" path="/v1/nexus/physical_nexus" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.createPhysical({
    xOrganizationId: "org_12345",
    physicalNexusCreate: {
      countryCode: "US",
      stateCode: "CA",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2025-01-01"),
      category: "PHYSICAL_BUSINESS_LOCATION",
      externalId: "ext_ABC123",
      source: "USER",
      street1: "123 Main Street",
      street2: "Suite 100",
      city: "San Francisco",
      postalCode: "94102",
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
import { nexusCreatePhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusCreatePhysical.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusCreatePhysical(sdk, {
    xOrganizationId: "org_12345",
    physicalNexusCreate: {
      countryCode: "US",
      stateCode: "CA",
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2025-01-01"),
      category: "PHYSICAL_BUSINESS_LOCATION",
      externalId: "ext_ABC123",
      source: "USER",
      street1: "123 Main Street",
      street2: "Suite 100",
      city: "San Francisco",
      postalCode: "94102",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusCreatePhysical failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePhysicalNexusV1NexusPhysicalNexusPostRequest](../../models/operations/createphysicalnexusv1nexusphysicalnexuspostrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet

Get physical nexus categories

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_physical_nexus_categories_v1_nexus_physical_nexus_categories_get" method="get" path="/v1/nexus/physical_nexus/categories" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.getPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet({
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
import { nexusGetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusGetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusGetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet(sdk, {
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusGetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGetRequest](../../models/operations/getphysicalnexuscategoriesv1nexusphysicalnexuscategoriesgetrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PhysicalNexusCategories[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deletePhysical

The Delete Physical Nexus API allows you to remove an existing
    physical nexus by its unique ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_physical_nexus_v1_nexus_physical_nexus__physical_nexus_id__delete" method="delete" path="/v1/nexus/physical_nexus/{physical_nexus_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.deletePhysical({
    physicalNexusId: "<id>",
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
import { nexusDeletePhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusDeletePhysical.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusDeletePhysical(sdk, {
    physicalNexusId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusDeletePhysical failed:", res.error);
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

## updatePhysical

The Update Physical Nexus API allows you to modify the details of
    an existing physical nexus by its unique ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_physical_nexus_v1_nexus_physical_nexus__physical_nexus_id__put" method="put" path="/v1/nexus/physical_nexus/{physical_nexus_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.updatePhysical({
    physicalNexusId: "<id>",
    xOrganizationId: "org_12345",
    physicalNexusUpdate: {
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2025-01-01"),
      category: "PHYSICAL_BUSINESS_LOCATION",
      street1: "123 Main Street",
      street2: "Suite 100",
      city: "San Francisco",
      postalCode: "94102",
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
import { nexusUpdatePhysical } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusUpdatePhysical.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusUpdatePhysical(sdk, {
    physicalNexusId: "<id>",
    xOrganizationId: "org_12345",
    physicalNexusUpdate: {
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2025-01-01"),
      category: "PHYSICAL_BUSINESS_LOCATION",
      street1: "123 Main Street",
      street2: "Suite 100",
      city: "San Francisco",
      postalCode: "94102",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusUpdatePhysical failed:", res.error);
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

## getNexusDetailsForIdV1NexusNexusIdGet

Get details for a specific nexus by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_nexus_details_for_id_v1_nexus__nexus_id__get" method="get" path="/v1/nexus/{nexus_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.nexus.getNexusDetailsForIdV1NexusNexusIdGet({
    nexusId: "<id>",
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
import { nexusGetNexusDetailsForIdV1NexusNexusIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/nexusGetNexusDetailsForIdV1NexusNexusIdGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await nexusGetNexusDetailsForIdV1NexusNexusIdGet(sdk, {
    nexusId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("nexusGetNexusDetailsForIdV1NexusNexusIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetNexusDetailsForIdV1NexusNexusIdGetRequest](../../models/operations/getnexusdetailsforidv1nexusnexusidgetrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.NexusResponse](../../models/nexusresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |