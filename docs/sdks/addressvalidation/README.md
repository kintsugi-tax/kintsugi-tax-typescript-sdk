# AddressValidation
(*addressValidation*)

## Overview

### Available Operations

* [search](#search) - Search
* [suggestions](#suggestions) - Suggestions

## search

This API validates and enriches address information
    submitted by the user. It ensures that the address is standardized, accurate,
    and compliant with geographical and postal standards.
    The API also adds additional fields, such as county, when possible.

### Example Usage

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.addressValidation.search({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    phone: "555-123-4567",
    street1: "1600 Amphitheatre Parkway",
    street2: "Building 40",
    city: "Mountain View",
    county: "Santa Clara",
    state: "CA",
    postalCode: "94043",
    country: "US",
    fullAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { addressValidationSearch } from "@kintsugi-tax/tax-platform-sdk/funcs/addressValidationSearch.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await addressValidationSearch(sdk, {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    phone: "555-123-4567",
    street1: "1600 Amphitheatre Parkway",
    street2: "Building 40",
    city: "Mountain View",
    county: "Santa Clara",
    state: "CA",
    postalCode: "94043",
    country: "US",
    fullAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addressValidationSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.AddressBase](../../models/addressbase.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SearchV1AddressValidationSearchPostSecurity](../../models/operations/searchv1addressvalidationsearchpostsecurity.md)                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AddressSearchResponse[]](../../models/.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.ErrorResponse                                               | 401                                                                | application/json                                                   |
| errors.BackendSrcAddressValidationResponsesValidationErrorResponse | 422                                                                | application/json                                                   |
| errors.ErrorResponse                                               | 500                                                                | application/json                                                   |
| errors.SDKDefaultError                                             | 4XX, 5XX                                                           | \*/\*                                                              |

## suggestions

This API endpoint provides address suggestions based on
    partial input data. It helps users auto-complete and validate addresses efficiently
    by returning a list of suggested addresses that match the input criteria.
    This improves accuracy, increases speed, reduces errors,
    and streamlines the data entry process.

### Example Usage

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.addressValidation.suggestions({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    xOrganizationId: "org_12345",
    validationAddress: {
      line1: "1600 Amphitheatre Parkway",
      line2: "",
      line3: "",
      city: "Mountain View",
      state: "CA",
      country: "US",
      postalCode: "94043",
      id: 215,
      county: "",
      fullAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
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
import { addressValidationSuggestions } from "@kintsugi-tax/tax-platform-sdk/funcs/addressValidationSuggestions.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await addressValidationSuggestions(sdk, {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    xOrganizationId: "org_12345",
    validationAddress: {
      line1: "1600 Amphitheatre Parkway",
      line2: "",
      line3: "",
      city: "Mountain View",
      state: "CA",
      country: "US",
      postalCode: "94043",
      id: 215,
      county: "",
      fullAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("addressValidationSuggestions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SuggestionsV1AddressValidationSuggestionsPostRequest](../../models/operations/suggestionsv1addressvalidationsuggestionspostrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.SuggestionsV1AddressValidationSuggestionsPostSecurity](../../models/operations/suggestionsv1addressvalidationsuggestionspostsecurity.md)                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.ErrorResponse                                               | 401                                                                | application/json                                                   |
| errors.BackendSrcAddressValidationResponsesValidationErrorResponse | 422                                                                | application/json                                                   |
| errors.ErrorResponse                                               | 500                                                                | application/json                                                   |
| errors.SDKDefaultError                                             | 4XX, 5XX                                                           | \*/\*                                                              |