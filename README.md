# Kintsugi Tax

Developer-friendly & type-safe Typescript SDK specifically catered to leverage Kintsugi's tax API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Kintsugi Tax](#kintsugi-tax)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @kintsugi-tax/tax-platform-sdk
```

### PNPM

```bash
pnpm add @kintsugi-tax/tax-platform-sdk
```

### Bun

```bash
bun add @kintsugi-tax/tax-platform-sdk
```

### Yarn

```bash
yarn add @kintsugi-tax/tax-platform-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type   | Scheme  |
| -------------- | ------ | ------- |
| `apiKeyHeader` | apiKey | API key |

To authenticate with the API the `apiKeyHeader` parameter must be set when initializing the SDK client instance. For example:


### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.addressValidation.search({}, {
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [addressValidation](docs/sdks/addressvalidation/README.md)

* [search](docs/sdks/addressvalidation/README.md#search) - Search
* [suggestions](docs/sdks/addressvalidation/README.md#suggestions) - Suggestions

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - Get Customers
* [create](docs/sdks/customers/README.md#create) - Create Customer
* [get](docs/sdks/customers/README.md#get) - Get Customer By Id
* [update](docs/sdks/customers/README.md#update) - Update Customer
* [getByExternalId](docs/sdks/customers/README.md#getbyexternalid) - Get Customer By External Id
* [getTransactions](docs/sdks/customers/README.md#gettransactions) - Get Transactions By Customer Id
* [createTransaction](docs/sdks/customers/README.md#createtransaction) - Create Transaction By Customer Id

### [exemptions](docs/sdks/exemptions/README.md)

* [list](docs/sdks/exemptions/README.md#list) - Get Exemptions
* [create](docs/sdks/exemptions/README.md#create) - Create Exemption
* [get](docs/sdks/exemptions/README.md#get) - Get Exemption By Id
* [uploadCertificate](docs/sdks/exemptions/README.md#uploadcertificate) - Upload Exemption Certificate
* [getAttachments](docs/sdks/exemptions/README.md#getattachments) - Get Attachments For Exemption

### [nexus](docs/sdks/nexus/README.md)

* [list](docs/sdks/nexus/README.md#list) - Get Nexus For Org

### [products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - Get Products
* [create](docs/sdks/products/README.md#create) - Create Product
* [get](docs/sdks/products/README.md#get) - Get Product By Id
* [update](docs/sdks/products/README.md#update) - Update Product
* [listCategories](docs/sdks/products/README.md#listcategories) - Get Product Categories


### [taxEstimation](docs/sdks/taxestimation/README.md)

* [estimateTax](docs/sdks/taxestimation/README.md#estimatetax) - Estimate Tax

### [transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - Get Transactions
* [create](docs/sdks/transactions/README.md#create) - Create Transaction
* [getByExternalId](docs/sdks/transactions/README.md#getbyexternalid) - Get Transaction By External Id
* [update](docs/sdks/transactions/README.md#update) - Update Transaction
* [getById](docs/sdks/transactions/README.md#getbyid) - Get Transaction By Id
* [getByFilingId](docs/sdks/transactions/README.md#getbyfilingid) - Get Transactions By Filing Id
* [createCreditNote](docs/sdks/transactions/README.md#createcreditnote) - Create Credit Note By Transaction Id
* [updateCreditNote](docs/sdks/transactions/README.md#updatecreditnote) - Update Credit Note By Transaction Id

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`addressValidationSearch`](docs/sdks/addressvalidation/README.md#search) - Search
- [`addressValidationSuggestions`](docs/sdks/addressvalidation/README.md#suggestions) - Suggestions
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create Customer
- [`customersCreateTransaction`](docs/sdks/customers/README.md#createtransaction) - Create Transaction By Customer Id
- [`customersGet`](docs/sdks/customers/README.md#get) - Get Customer By Id
- [`customersGetByExternalId`](docs/sdks/customers/README.md#getbyexternalid) - Get Customer By External Id
- [`customersGetTransactions`](docs/sdks/customers/README.md#gettransactions) - Get Transactions By Customer Id
- [`customersList`](docs/sdks/customers/README.md#list) - Get Customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update Customer
- [`exemptionsCreate`](docs/sdks/exemptions/README.md#create) - Create Exemption
- [`exemptionsGet`](docs/sdks/exemptions/README.md#get) - Get Exemption By Id
- [`exemptionsGetAttachments`](docs/sdks/exemptions/README.md#getattachments) - Get Attachments For Exemption
- [`exemptionsList`](docs/sdks/exemptions/README.md#list) - Get Exemptions
- [`exemptionsUploadCertificate`](docs/sdks/exemptions/README.md#uploadcertificate) - Upload Exemption Certificate
- [`nexusList`](docs/sdks/nexus/README.md#list) - Get Nexus For Org
- [`productsCreate`](docs/sdks/products/README.md#create) - Create Product
- [`productsGet`](docs/sdks/products/README.md#get) - Get Product By Id
- [`productsList`](docs/sdks/products/README.md#list) - Get Products
- [`productsListCategories`](docs/sdks/products/README.md#listcategories) - Get Product Categories
- [`productsUpdate`](docs/sdks/products/README.md#update) - Update Product
- [`taxEstimationEstimateTax`](docs/sdks/taxestimation/README.md#estimatetax) - Estimate Tax
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create Transaction
- [`transactionsCreateCreditNote`](docs/sdks/transactions/README.md#createcreditnote) - Create Credit Note By Transaction Id
- [`transactionsGetByExternalId`](docs/sdks/transactions/README.md#getbyexternalid) - Get Transaction By External Id
- [`transactionsGetByFilingId`](docs/sdks/transactions/README.md#getbyfilingid) - Get Transactions By Filing Id
- [`transactionsGetById`](docs/sdks/transactions/README.md#getbyid) - Get Transaction By Id
- [`transactionsList`](docs/sdks/transactions/README.md#list) - Get Transactions
- [`transactionsUpdate`](docs/sdks/transactions/README.md#update) - Update Transaction
- [`transactionsUpdateCreditNote`](docs/sdks/transactions/README.md#updatecreditnote) - Update Credit Note By Transaction Id

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { openAsBlob } from "node:fs";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await sdk.exemptions.uploadCertificate({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    exemptionId: "<id>",
    xOrganizationId: "org_12345",
    bodyUploadExemptionCertificateV1ExemptionsExemptionIdAttachmentsPost: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SDKError`](./src/models/errors/sdkerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import * as errors from "@kintsugi-tax/tax-platform-sdk/models/errors";

const sdk = new SDK({
  serverURL: "https://api.example.com",
});

async function run() {
  try {
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
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SDKError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.detail); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`SDKError`](./src/models/errors/sdkerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (14)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SDKError`](./src/models/errors/sdkerror.ts)**:
* [`ErrorResponse`](./src/models/errors/errorresponse.ts): Applicable to 20 of 29 methods.*
* [`HTTPValidationError`](./src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. Applicable to 9 of 29 methods.*
* [`BackendSrcExemptionsResponsesValidationErrorResponse`](./src/models/errors/backendsrcexemptionsresponsesvalidationerrorresponse.ts): Validation issues, such as missing required fields or invalid field values. Status code `422`. Applicable to 5 of 29 methods.*
* [`BackendSrcTransactionsResponsesValidationErrorResponse`](./src/models/errors/backendsrctransactionsresponsesvalidationerrorresponse.ts): Status code `422`. Applicable to 5 of 29 methods.*
* [`BackendSrcProductsResponsesValidationErrorResponse`](./src/models/errors/backendsrcproductsresponsesvalidationerrorresponse.ts): Validation error. Status code `422`. Applicable to 4 of 29 methods.*
* [`BackendSrcCustomersResponsesValidationErrorResponse`](./src/models/errors/backendsrccustomersresponsesvalidationerrorresponse.ts): Query parameters failed validation, such as an out-of-range page number. Status code `422`. Applicable to 3 of 29 methods.*
* [`BackendSrcAddressValidationResponsesValidationErrorResponse`](./src/models/errors/backendsrcaddressvalidationresponsesvalidationerrorresponse.ts): Validation error - Address fields failed validation or are incomplete. Status code `422`. Applicable to 2 of 29 methods.*
* [`BackendSrcTaxEstimationResponsesValidationErrorResponse`](./src/models/errors/backendsrctaxestimationresponsesvalidationerrorresponse.ts): Validation Error. Status code `422`. Applicable to 1 of 29 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { HTTPClient } from "@kintsugi-tax/tax-platform-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
