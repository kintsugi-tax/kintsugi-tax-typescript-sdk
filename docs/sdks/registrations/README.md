# Registrations
(*registrations*)

## Overview

### Available Operations

<<<<<<< HEAD
* [get](#get) - Get Registrations
* [create](#create) - Create Registration
* [getById](#getbyid) - Get Registration By Id
* [update](#update) - Update Registration
* [deregister](#deregister) - Deregister Registration

## get
=======
* [getRegistrationsV1RegistrationsGet](#getregistrationsv1registrationsget) - Get Registrations
* [createRegistrationV1RegistrationsPost](#createregistrationv1registrationspost) - Create Registration
* [getRegistrationByIdV1RegistrationsRegistrationIdGet](#getregistrationbyidv1registrationsregistrationidget) - Get Registration By Id
* [updateRegistrationV1RegistrationsRegistrationIdPut](#updateregistrationv1registrationsregistrationidput) - Update Registration
* [deregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost](#deregisterregistrationv1registrationsregistrationidderegisterpost) - Deregister Registration

## getRegistrationsV1RegistrationsGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Get Registrations API retrieves a
    paginated list of registrations.
    This API helps in tracking and managing registrations efficiently across multiple
    jurisdictions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_registrations_v1_registrations_get" method="get" path="/v1/registrations" -->
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
  const result = await sdk.registrations.get({});
=======
  const result = await sdk.registrations.getRegistrationsV1RegistrationsGet({});
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
import { registrationsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGet.js";
=======
import { registrationsGetRegistrationsV1RegistrationsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGetRegistrationsV1RegistrationsGet.js";
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
  const res = await registrationsGet(sdk, {});
=======
  const res = await registrationsGetRegistrationsV1RegistrationsGet(sdk, {});
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("registrationsGet failed:", res.error);
=======
    console.log("registrationsGetRegistrationsV1RegistrationsGet failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRegistrationsV1RegistrationsGetRequest](../../models/operations/getregistrationsv1registrationsgetrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageRegistrationReadWithPassword](../../models/pageregistrationreadwithpassword.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ErrorResponse                                           | 401, 404                                                       | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |

<<<<<<< HEAD
## create
=======
## createRegistrationV1RegistrationsPost
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Create Registration API allows users to create a new registration
    for tracking and managing tax filings efficiently across multiple jurisdictions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" -->
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
  const result = await sdk.registrations.create({
=======
  const result = await sdk.registrations.createRegistrationV1RegistrationsPost({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationImportType: "OSS",
    imported: false,
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
=======
import { registrationsCreateRegistrationV1RegistrationsPost } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreateRegistrationV1RegistrationsPost.js";
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
  const res = await registrationsCreate(sdk, {
=======
  const res = await registrationsCreateRegistrationV1RegistrationsPost(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationImportType: "OSS",
    imported: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("registrationsCreate failed:", res.error);
=======
    console.log("registrationsCreateRegistrationV1RegistrationsPost failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRegistration](../../models/operations/createregistration.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RegistrationRead](../../models/registrationread.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ErrorResponse                                           | 401, 409                                                       | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |

<<<<<<< HEAD
## getById
=======
## getRegistrationByIdV1RegistrationsRegistrationIdGet
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Get Registration By ID API retrieves a single registration record
    based on its unique identifier.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_registration_by_id_v1_registrations__registration_id__get" method="get" path="/v1/registrations/{registration_id}" -->
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
  const result = await sdk.registrations.getById({
=======
  const result = await sdk.registrations.getRegistrationByIdV1RegistrationsRegistrationIdGet({
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
import { registrationsGetById } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGetById.js";
=======
import { registrationsGetRegistrationByIdV1RegistrationsRegistrationIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGetRegistrationByIdV1RegistrationsRegistrationIdGet.js";
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
  const res = await registrationsGetById(sdk, {
=======
  const res = await registrationsGetRegistrationByIdV1RegistrationsRegistrationIdGet(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("registrationsGetById failed:", res.error);
=======
    console.log("registrationsGetRegistrationByIdV1RegistrationsRegistrationIdGet failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRegistrationByIdV1RegistrationsRegistrationIdGetRequest](../../models/operations/getregistrationbyidv1registrationsregistrationidgetrequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RegistrationRead](../../models/registrationread.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ErrorResponse                                           | 401                                                            | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |

<<<<<<< HEAD
## update
=======
## updateRegistrationV1RegistrationsRegistrationIdPut
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

The Update Registration API allows you to modify
    an existing registration using its unique registration_id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_registration_v1_registrations__registration_id__put" method="put" path="/v1/registrations/{registration_id}" -->
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
  const result = await sdk.registrations.update({
=======
  const result = await sdk.registrations.updateRegistrationV1RegistrationsRegistrationIdPut({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "<id>",
    registrationUpdateAPI: {
      registrationDate: "2025-03-01",
      registrationEmail: "example@domain.com",
      registrationKey: "REG-123456",
      registrationRequested: "2025-02-18T19:43:32.684802",
      autoRegistered: true,
      registrationsRegime: "STANDARD",
      changeRegimeStatus: "REQUESTED",
      username: "User Name",
      filingFrequency: "MONTHLY",
      createFilingsFrom: "2025-03-01",
      isApproaching: false,
      comment: "Updated registration for compliance",
      vda: false,
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
import { registrationsUpdate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsUpdate.js";
=======
import { registrationsUpdateRegistrationV1RegistrationsRegistrationIdPut } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsUpdateRegistrationV1RegistrationsRegistrationIdPut.js";
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
  const res = await registrationsUpdate(sdk, {
=======
  const res = await registrationsUpdateRegistrationV1RegistrationsRegistrationIdPut(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "<id>",
    registrationUpdateAPI: {
      registrationDate: "2025-03-01",
      registrationEmail: "example@domain.com",
      registrationKey: "REG-123456",
      registrationRequested: "2025-02-18T19:43:32.684802",
      autoRegistered: true,
      registrationsRegime: "STANDARD",
      changeRegimeStatus: "REQUESTED",
      username: "User Name",
      filingFrequency: "MONTHLY",
      createFilingsFrom: "2025-03-01",
      isApproaching: false,
      comment: "Updated registration for compliance",
      vda: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("registrationsUpdate failed:", res.error);
=======
    console.log("registrationsUpdateRegistrationV1RegistrationsRegistrationIdPut failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateRegistrationV1RegistrationsRegistrationIdPutRequest](../../models/operations/updateregistrationv1registrationsregistrationidputrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.RegistrationRead](../../models/registrationread.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ErrorResponse                                           | 401                                                            | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |

<<<<<<< HEAD
## deregister
=======
## deregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7

Deregister an existing registration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deregister_registration_v1_registrations__registration_id__deregister_post" method="post" path="/v1/registrations/{registration_id}/deregister" -->
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
  const result = await sdk.registrations.deregister({
=======
  const result = await sdk.registrations.deregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost({
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "regs_123456",
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
import { registrationsDeregister } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsDeregister.js";
=======
import { registrationsDeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsDeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost.js";
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
  const res = await registrationsDeregister(sdk, {
=======
  const res = await registrationsDeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost(sdk, {
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
    registrationId: "regs_123456",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
<<<<<<< HEAD
    console.log("registrationsDeregister failed:", res.error);
=======
    console.log("registrationsDeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPost failed:", res.error);
>>>>>>> 68f5712d768e774ab185da2f28d4e8cecdd8bee7
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.DeregisterRegistrationV1RegistrationsRegistrationIdDeregisterPostRequest](../../models/operations/deregisterregistrationv1registrationsregistrationidderegisterpostrequest.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `options`                                                                                                                                                                                  | RequestOptions                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.             |
| `options.retries`                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                           |

### Response

**Promise\<[models.RegistrationRead](../../models/registrationread.md)\>**

### Errors

| Error Type                                                     | Status Code                                                    | Content Type                                                   |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| errors.ErrorResponse                                           | 401                                                            | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |