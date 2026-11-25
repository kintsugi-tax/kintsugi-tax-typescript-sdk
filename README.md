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

Kintsugi Customer API: Publicly documented Kintsugi Customer API endpoints. The source (openapi/_source/openapi-master.json) is the platform spec filtered to the documented customer surface (openapi/customer-endpoints.json); scripts/build-specs.mjs re-applies that filter here. Do not edit by hand.
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
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
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
yarn add @kintsugi-tax/tax-platform-sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "SDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "@kintsugi-tax/tax-platform-sdk",
        "--",
        "mcp", "start",
        "--api-key-header", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "SDK": {
      "command": "npx",
      "args": [
        "-y", "--package", "@kintsugi-tax/tax-platform-sdk",
        "--",
        "mcp", "start",
        "--api-key-header", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @kintsugi-tax/tax-platform-sdk -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

### Lazy operation loading in Node.js

The `/node` entry point and its lazy SDK classes are generated for every SDK. No `gen.yaml` flag is needed; Node.js applications opt in to loading operation functions on first use by changing their import:

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk/node";

const sdk = new SDK();
```

The `/node` entry point keeps the same method signatures, pagination behaviour, and response helpers. Operation modules load through dynamic imports when a method is called. Models and error classes are shared with the standard entry points, rather than bundled into separate copies.

The standard package entry point and SDK subpaths retain their static imports. Keep using those entry points in browser bundles, including IIFE and UMD builds, to avoid dynamic-import chunks. Custom root exports may still load additional modules.

The Node SDK classes live in `src/sdk/*.lazy.ts`. Custom code regions in the standard SDK classes are not copied to these classes; apply any required customisations to their separate regions. Accept-header enums have the same values, but their enum objects are specific to each entry point.

Generated model schemas are constructed synchronously and cached on first use with either entry point. Importing a model does not construct its schema; parsing or inspecting a schema does. This does not require changing the configured Zod version.

`Object.freeze`, `Object.seal`, and `Object.preventExtensions` construct the schema and apply to the cached Zod object. Zod's own restrictions on frozen schemas still apply, including methods that install properties on first access.
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.addressValidation.search({
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
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.addressValidation.search({
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

### [AddressValidation](docs/sdks/addressvalidation/README.md)

* [search](docs/sdks/addressvalidation/README.md#search) - Search
* [suggest](docs/sdks/addressvalidation/README.md#suggest) - Suggestions

### [CustomerTaxRegistration](docs/sdks/customertaxregistration/README.md)

* [upsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost](docs/sdks/customertaxregistration/README.md#upsertcustomertaxregistrationv1customerscustomeridtaxregistrationspost) - Upsert customer tax registration

### [Customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - Get customers
* [create](docs/sdks/customers/README.md#create) - Create customer
* [getByExternalId](docs/sdks/customers/README.md#getbyexternalid) - Get customer by external id
* [get](docs/sdks/customers/README.md#get) - Get customer by id
* [update](docs/sdks/customers/README.md#update) - Update customer
* [getTransactions](docs/sdks/customers/README.md#gettransactions) - Get transactions by customer id
* [createTransaction](docs/sdks/customers/README.md#createtransaction) - Create transaction by customer id

### [Exemptions](docs/sdks/exemptions/README.md)

* [list](docs/sdks/exemptions/README.md#list) - Get exemptions
* [create](docs/sdks/exemptions/README.md#create) - Create exemption
* [listPartialCertificateTypesV1ExemptionsPartialCertificateTypesGet](docs/sdks/exemptions/README.md#listpartialcertificatetypesv1exemptionspartialcertificatetypesget) - List partial certificate types
* [get](docs/sdks/exemptions/README.md#get) - Get exemption by id
* [getAttachments](docs/sdks/exemptions/README.md#getattachments) - Get attachments for exemption
* [uploadCertificate](docs/sdks/exemptions/README.md#uploadcertificate) - Upload exemption certificate

### [Filings](docs/sdks/filings/README.md)

* [list](docs/sdks/filings/README.md#list) - Get filings
* [createBackFilingRequestV1FilingsBackFilingRequestPost](docs/sdks/filings/README.md#createbackfilingrequestv1filingsbackfilingrequestpost) - Create back filing request
* [getBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet](docs/sdks/filings/README.md#getbackfilingrequestoptionsv1filingsbackfilingrequestoptionsget) - Get back filing request options
* [getCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet](docs/sdks/filings/README.md#getcurrentbackfilingtermsv1filingsbackfilingtermscurrentget) - Get current back filing terms
* [getByRegistrationId](docs/sdks/filings/README.md#getbyregistrationid) - Get filings by registration id
* [get](docs/sdks/filings/README.md#get) - Get filing by id
* [approveFilingV1FilingsFilingIdApprovePut](docs/sdks/filings/README.md#approvefilingv1filingsfilingidapproveput) - Approve filing

### [Nexus](docs/sdks/nexus/README.md)

* [list](docs/sdks/nexus/README.md#list) - Get nexus for org
* [listPhysical](docs/sdks/nexus/README.md#listphysical) - Get physical nexus
* [createPhysical](docs/sdks/nexus/README.md#createphysical) - Create physical nexus
* [getPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet](docs/sdks/nexus/README.md#getphysicalnexuscategoriesv1nexusphysicalnexuscategoriesget) - Get physical nexus categories
* [deletePhysical](docs/sdks/nexus/README.md#deletephysical) - Delete physical nexus
* [updatePhysical](docs/sdks/nexus/README.md#updatephysical) - Update physical nexus
* [getNexusDetailsForIdV1NexusNexusIdGet](docs/sdks/nexus/README.md#getnexusdetailsforidv1nexusnexusidget) - Get nexus details for id

### [Products](docs/sdks/products/README.md)

* [getProductsV1ProductsGet](docs/sdks/products/README.md#getproductsv1productsget) - Get products
* [createProductV1ProductsPost](docs/sdks/products/README.md#createproductv1productspost) - Create product
* [getProductCategoriesV1ProductsCategoriesGet](docs/sdks/products/README.md#getproductcategoriesv1productscategoriesget) - Get product categories
* [get](docs/sdks/products/README.md#get) - Get product by id
* [update](docs/sdks/products/README.md#update) - Update product

### [Registrations](docs/sdks/registrations/README.md)

* [get](docs/sdks/registrations/README.md#get) - Get registrations
* [create](docs/sdks/registrations/README.md#create) - Create registration
* [getJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet](docs/sdks/registrations/README.md#getjurisdictionspecificfieldsv1registrationsjurisdictionspecificfieldsget) - Get jurisdiction specific fields
* [listRegistrationJurisdictionsV1RegistrationsJurisdictionsGet](docs/sdks/registrations/README.md#listregistrationjurisdictionsv1registrationsjurisdictionsget) - List registration jurisdictions
* [getById](docs/sdks/registrations/README.md#getbyid) - Get registration by id
* [update](docs/sdks/registrations/README.md#update) - Update registration
* [uploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost](docs/sdks/registrations/README.md#uploadregistrationattachmentv1registrationsregistrationidattachmentspost) - Upload registration attachment
* [deregister](docs/sdks/registrations/README.md#deregister) - Deregister registration
* [getOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet](docs/sdks/registrations/README.md#getosscountriesforregistrationv1registrationsregistrationidosscountriesget) - Get oss countries for registration

### [TaxEstimation](docs/sdks/taxestimation/README.md)

* [estimate](docs/sdks/taxestimation/README.md#estimate) - Estimate tax

### [Transactions](docs/sdks/transactions/README.md)

* [get](docs/sdks/transactions/README.md#get) - Get transactions
* [create](docs/sdks/transactions/README.md#create) - Create transaction
* [archiveTransactionByIdV1TransactionsArchivePost](docs/sdks/transactions/README.md#archivetransactionbyidv1transactionsarchivepost) - Archive transaction by id
* [getByExternalId](docs/sdks/transactions/README.md#getbyexternalid) - Get transaction by external id
* [getByFilingId](docs/sdks/transactions/README.md#getbyfilingid) - Get transactions by filing id
* [createCreditNote](docs/sdks/transactions/README.md#createcreditnote) - Create credit note by transaction id
* [updateCreditNote](docs/sdks/transactions/README.md#updatecreditnote) - Update credit note by transaction id
* [getById](docs/sdks/transactions/README.md#getbyid) - Get transaction by id
* [update](docs/sdks/transactions/README.md#update) - Update transaction
* [setTransactionTaxOnlyV1TransactionsTransactionIdTaxOnlyPost](docs/sdks/transactions/README.md#settransactiontaxonlyv1transactionstransactionidtaxonlypost) - Set transaction tax only

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
- [`addressValidationSuggest`](docs/sdks/addressvalidation/README.md#suggest) - Suggestions
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create customer
- [`customersCreateTransaction`](docs/sdks/customers/README.md#createtransaction) - Create transaction by customer id
- [`customersGet`](docs/sdks/customers/README.md#get) - Get customer by id
- [`customersGetByExternalId`](docs/sdks/customers/README.md#getbyexternalid) - Get customer by external id
- [`customersGetTransactions`](docs/sdks/customers/README.md#gettransactions) - Get transactions by customer id
- [`customersList`](docs/sdks/customers/README.md#list) - Get customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update customer
- [`customerTaxRegistrationUpsertCustomerTaxRegistrationV1CustomersCustomerIdTaxRegistrationsPost`](docs/sdks/customertaxregistration/README.md#upsertcustomertaxregistrationv1customerscustomeridtaxregistrationspost) - Upsert customer tax registration
- [`exemptionsCreate`](docs/sdks/exemptions/README.md#create) - Create exemption
- [`exemptionsGet`](docs/sdks/exemptions/README.md#get) - Get exemption by id
- [`exemptionsGetAttachments`](docs/sdks/exemptions/README.md#getattachments) - Get attachments for exemption
- [`exemptionsList`](docs/sdks/exemptions/README.md#list) - Get exemptions
- [`exemptionsListPartialCertificateTypesV1ExemptionsPartialCertificateTypesGet`](docs/sdks/exemptions/README.md#listpartialcertificatetypesv1exemptionspartialcertificatetypesget) - List partial certificate types
- [`exemptionsUploadCertificate`](docs/sdks/exemptions/README.md#uploadcertificate) - Upload exemption certificate
- [`filingsApproveFilingV1FilingsFilingIdApprovePut`](docs/sdks/filings/README.md#approvefilingv1filingsfilingidapproveput) - Approve filing
- [`filingsCreateBackFilingRequestV1FilingsBackFilingRequestPost`](docs/sdks/filings/README.md#createbackfilingrequestv1filingsbackfilingrequestpost) - Create back filing request
- [`filingsGet`](docs/sdks/filings/README.md#get) - Get filing by id
- [`filingsGetBackFilingRequestOptionsV1FilingsBackFilingRequestOptionsGet`](docs/sdks/filings/README.md#getbackfilingrequestoptionsv1filingsbackfilingrequestoptionsget) - Get back filing request options
- [`filingsGetByRegistrationId`](docs/sdks/filings/README.md#getbyregistrationid) - Get filings by registration id
- [`filingsGetCurrentBackFilingTermsV1FilingsBackFilingTermsCurrentGet`](docs/sdks/filings/README.md#getcurrentbackfilingtermsv1filingsbackfilingtermscurrentget) - Get current back filing terms
- [`filingsList`](docs/sdks/filings/README.md#list) - Get filings
- [`nexusCreatePhysical`](docs/sdks/nexus/README.md#createphysical) - Create physical nexus
- [`nexusDeletePhysical`](docs/sdks/nexus/README.md#deletephysical) - Delete physical nexus
- [`nexusGetNexusDetailsForIdV1NexusNexusIdGet`](docs/sdks/nexus/README.md#getnexusdetailsforidv1nexusnexusidget) - Get nexus details for id
- [`nexusGetPhysicalNexusCategoriesV1NexusPhysicalNexusCategoriesGet`](docs/sdks/nexus/README.md#getphysicalnexuscategoriesv1nexusphysicalnexuscategoriesget) - Get physical nexus categories
- [`nexusList`](docs/sdks/nexus/README.md#list) - Get nexus for org
- [`nexusListPhysical`](docs/sdks/nexus/README.md#listphysical) - Get physical nexus
- [`nexusUpdatePhysical`](docs/sdks/nexus/README.md#updatephysical) - Update physical nexus
- [`productsCreateProductV1ProductsPost`](docs/sdks/products/README.md#createproductv1productspost) - Create product
- [`productsGet`](docs/sdks/products/README.md#get) - Get product by id
- [`productsGetProductCategoriesV1ProductsCategoriesGet`](docs/sdks/products/README.md#getproductcategoriesv1productscategoriesget) - Get product categories
- [`productsGetProductsV1ProductsGet`](docs/sdks/products/README.md#getproductsv1productsget) - Get products
- [`productsUpdate`](docs/sdks/products/README.md#update) - Update product
- [`registrationsCreate`](docs/sdks/registrations/README.md#create) - Create registration
- [`registrationsDeregister`](docs/sdks/registrations/README.md#deregister) - Deregister registration
- [`registrationsGet`](docs/sdks/registrations/README.md#get) - Get registrations
- [`registrationsGetById`](docs/sdks/registrations/README.md#getbyid) - Get registration by id
- [`registrationsGetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet`](docs/sdks/registrations/README.md#getjurisdictionspecificfieldsv1registrationsjurisdictionspecificfieldsget) - Get jurisdiction specific fields
- [`registrationsGetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet`](docs/sdks/registrations/README.md#getosscountriesforregistrationv1registrationsregistrationidosscountriesget) - Get oss countries for registration
- [`registrationsListRegistrationJurisdictionsV1RegistrationsJurisdictionsGet`](docs/sdks/registrations/README.md#listregistrationjurisdictionsv1registrationsjurisdictionsget) - List registration jurisdictions
- [`registrationsUpdate`](docs/sdks/registrations/README.md#update) - Update registration
- [`registrationsUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost`](docs/sdks/registrations/README.md#uploadregistrationattachmentv1registrationsregistrationidattachmentspost) - Upload registration attachment
- [`taxEstimationEstimate`](docs/sdks/taxestimation/README.md#estimate) - Estimate tax
- [`transactionsArchiveTransactionByIdV1TransactionsArchivePost`](docs/sdks/transactions/README.md#archivetransactionbyidv1transactionsarchivepost) - Archive transaction by id
- [`transactionsCreate`](docs/sdks/transactions/README.md#create) - Create transaction
- [`transactionsCreateCreditNote`](docs/sdks/transactions/README.md#createcreditnote) - Create credit note by transaction id
- [`transactionsGet`](docs/sdks/transactions/README.md#get) - Get transactions
- [`transactionsGetByExternalId`](docs/sdks/transactions/README.md#getbyexternalid) - Get transaction by external id
- [`transactionsGetByFilingId`](docs/sdks/transactions/README.md#getbyfilingid) - Get transactions by filing id
- [`transactionsGetById`](docs/sdks/transactions/README.md#getbyid) - Get transaction by id
- [`transactionsSetTransactionTaxOnlyV1TransactionsTransactionIdTaxOnlyPost`](docs/sdks/transactions/README.md#settransactiontaxonlyv1transactionstransactionidtaxonlypost) - Set transaction tax only
- [`transactionsUpdate`](docs/sdks/transactions/README.md#update) - Update transaction
- [`transactionsUpdateCreditNote`](docs/sdks/transactions/README.md#updatecreditnote) - Update credit note by transaction id

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.addressValidation.search({
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
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.addressValidation.search({
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
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  try {
    const result = await sdk.addressValidation.search({
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

<details><summary>Less common errors (17)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`SDKError`](./src/models/errors/sdkerror.ts)**:
* [`ErrorResponse`](./src/models/errors/errorresponse.ts): Applicable to 34 of 55 methods.*
* [`HTTPValidationError`](./src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. Applicable to 22 of 55 methods.*
* [`BackendSrcExemptionsResponsesValidationErrorResponse`](./src/models/errors/backendsrcexemptionsresponsesvalidationerrorresponse.ts): Validation issues, such as missing required fields or invalid field values. Status code `422`. Applicable to 5 of 55 methods.*
* [`BackendSrcProductsSchemasResponsesValidationErrorResponse`](./src/models/errors/backendsrcproductsschemasresponsesvalidationerrorresponse.ts): Validation error. Status code `422`. Applicable to 5 of 55 methods.*
* [`BackendSrcRegistrationsResponsesValidationErrorResponse`](./src/models/errors/backendsrcregistrationsresponsesvalidationerrorresponse.ts): Validation error. Status code `422`. Applicable to 5 of 55 methods.*
* [`BackendSrcTransactionsResponsesValidationErrorResponse`](./src/models/errors/backendsrctransactionsresponsesvalidationerrorresponse.ts): Status code `422`. Applicable to 5 of 55 methods.*
* [`BackendSrcNexusResponsesValidationErrorResponse`](./src/models/errors/backendsrcnexusresponsesvalidationerrorresponse.ts): Validation error. Status code `422`. Applicable to 4 of 55 methods.*
* [`BackendSrcCustomersResponsesValidationErrorResponse`](./src/models/errors/backendsrccustomersresponsesvalidationerrorresponse.ts): Query parameters failed validation, such as an out-of-range page number. Status code `422`. Applicable to 3 of 55 methods.*
* [`BackendSrcFilingsResponsesValidationErrorResponse`](./src/models/errors/backendsrcfilingsresponsesvalidationerrorresponse.ts): Validation error. Status code `422`. Applicable to 3 of 55 methods.*
* [`BackendSrcAddressValidationResponsesValidationErrorResponse`](./src/models/errors/backendsrcaddressvalidationresponsesvalidationerrorresponse.ts): Validation error - Address fields failed validation or are incomplete. Status code `422`. Applicable to 2 of 55 methods.*
* [`BackendSrcTaxEstimationResponsesValidationErrorResponse`](./src/models/errors/backendsrctaxestimationresponsesvalidationerrorresponse.ts): Validation Error. Status code `422`. Applicable to 1 of 55 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  serverURL: "https://api.trykintsugi.com",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.addressValidation.search({
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
<!-- End Server Selection [server] -->

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

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@kintsugi-tax/tax-platform-sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
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

const sdk = new SDK({ httpClient: httpClient });
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
