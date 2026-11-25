# Registrations

## Overview

### Available Operations

* [get](#get) - Get registrations
* [create](#create) - Create registration
* [getJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet](#getjurisdictionspecificfieldsv1registrationsjurisdictionspecificfieldsget) - Get jurisdiction specific fields
* [listRegistrationJurisdictionsV1RegistrationsJurisdictionsGet](#listregistrationjurisdictionsv1registrationsjurisdictionsget) - List registration jurisdictions
* [getById](#getbyid) - Get registration by id
* [update](#update) - Update registration
* [uploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost](#uploadregistrationattachmentv1registrationsregistrationidattachmentspost) - Upload registration attachment
* [deregister](#deregister) - Deregister registration
* [getOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet](#getosscountriesforregistrationv1registrationsregistrationidosscountriesget) - Get oss countries for registration

## get

The Get Registrations API retrieves a
    paginated list of registrations.
    This API helps in tracking and managing registrations efficiently across multiple
    jurisdictions. Stored credential fields come back masked; use the reveal parameter
    of the Get Registration By ID API to read them.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_registrations_v1_registrations_get" method="get" path="/v1/registrations" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.get({
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
import { registrationsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsGet(sdk, {
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsGet failed:", res.error);
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

## create

The Create Registration API allows users to create a new registration
    for tracking and managing tax filings efficiently across multiple jurisdictions.

### Example Usage: oss

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="oss" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "OSS",
      passwordPlainText: "oss_pass_fr",
      passwordMetadataPlainText: "{\"q\":\"a\"}",
      memberStateOfIdentificationCode: "FR",
      imported: true,
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "OSS",
      passwordPlainText: "oss_pass_fr",
      passwordMetadataPlainText: "{\"q\":\"a\"}",
      memberStateOfIdentificationCode: "FR",
      imported: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_alabama

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_alabama" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "AL",
      stateName: "Alabama",
      filingFrequency: "MONTHLY",
      username: "alabama_user",
      amountFees: 100,
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp",
        signOnId: "acme_sign_on",
        accessCode: "abc123",
        thirdPartyPassword: "tp_pass",
        mfaCompleted: true,
        salesTaxId: "ST-AL-EXAMPLE",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "AL",
      stateName: "Alabama",
      filingFrequency: "MONTHLY",
      username: "alabama_user",
      amountFees: 100,
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp",
        signOnId: "acme_sign_on",
        accessCode: "abc123",
        thirdPartyPassword: "tp_pass",
        mfaCompleted: true,
        salesTaxId: "ST-AL-EXAMPLE",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_arizona

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_arizona" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "BT",
      stateCode: "<value>",
      stateName: "<value>",
      jurisdictionSpecificFields: {
        registrationType: "REMOTE_SELLER",
        businessName: "<value>",
        arAccountId: "<id>",
        zipCode: "86037",
        lastPaymentToState: "<value>",
        mfaCompleted: false,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "BT",
      stateCode: "<value>",
      stateName: "<value>",
      jurisdictionSpecificFields: {
        registrationType: "REMOTE_SELLER",
        businessName: "<value>",
        arAccountId: "<id>",
        zipCode: "86037",
        lastPaymentToState: "<value>",
        mfaCompleted: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_arkansas

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_arkansas" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "AR",
      stateName: "Arkansas",
      filingFrequency: "MONTHLY",
      username: "atap_user",
      amountFees: 100,
      passwordPlainText: "atap_password",
      jurisdictionSpecificFields: {
        registrationType: "REMOTE_SELLER",
        businessName: "Acme Corp",
        arAccountId: "AR-123456789",
        zipCode: "72201",
        lastPaymentToState: "0.00",
        mfaCompleted: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "AR",
      stateName: "Arkansas",
      filingFrequency: "MONTHLY",
      username: "atap_user",
      amountFees: 100,
      passwordPlainText: "atap_password",
      jurisdictionSpecificFields: {
        registrationType: "REMOTE_SELLER",
        businessName: "Acme Corp",
        arAccountId: "AR-123456789",
        zipCode: "72201",
        lastPaymentToState: "0.00",
        mfaCompleted: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_california

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_california" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "CA",
      stateName: "California",
      filingFrequency: "MONTHLY",
      username: "cdtfa_user",
      amountFees: 100,
      passwordPlainText: "cdtfa_password",
      jurisdictionSpecificFields: {
        registrationType: "REMOTE_SELLER",
        mfaCompleted: true,
        businessName: "Acme Corp",
        salesTaxId: "CA-1234567890",
        cdtfaThirdPartyAccessSecurityCode: "sec-code-example",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "CA",
      stateName: "California",
      filingFrequency: "MONTHLY",
      username: "cdtfa_user",
      amountFees: 100,
      passwordPlainText: "cdtfa_password",
      jurisdictionSpecificFields: {
        registrationType: "REMOTE_SELLER",
        mfaCompleted: true,
        businessName: "Acme Corp",
        salesTaxId: "CA-1234567890",
        cdtfaThirdPartyAccessSecurityCode: "sec-code-example",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_connecticut

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_connecticut" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "CT",
      stateName: "Connecticut",
      filingFrequency: "MONTHLY",
      username: "ct_user",
      amountFees: 100,
      passwordPlainText: "ct_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Test Connecticut Biz",
        ctTaxRegistrationNumber: "CT-REG-999",
        registrationId: "REG-123456",
        lastPaymentToState: "0.00",
        mfaCompleted: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "CT",
      stateName: "Connecticut",
      filingFrequency: "MONTHLY",
      username: "ct_user",
      amountFees: 100,
      passwordPlainText: "ct_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Test Connecticut Biz",
        ctTaxRegistrationNumber: "CT-REG-999",
        registrationId: "REG-123456",
        lastPaymentToState: "0.00",
        mfaCompleted: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_district_of_columbia

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_district_of_columbia" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "DC",
      stateName: "District of Columbia",
      filingFrequency: "MONTHLY",
      username: "mytax_dc_user",
      amountFees: 100,
      passwordPlainText: "mytax_dc_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp District of Columbia",
        dcStateTaxId: "123456789012",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "DC",
      stateName: "District of Columbia",
      filingFrequency: "MONTHLY",
      username: "mytax_dc_user",
      amountFees: 100,
      passwordPlainText: "mytax_dc_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp District of Columbia",
        dcStateTaxId: "123456789012",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_florida

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_florida" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "FL",
      stateName: "Florida",
      filingFrequency: "MONTHLY",
      username: "florida_user",
      amountFees: 100,
      passwordPlainText: "florida_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_TAX",
        "business_name": "Acme Corp Florida",
        "fl_certificate_number": "78-8012345678-9",
        "business_partner_number": "0001234567",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "FL",
      stateName: "Florida",
      filingFrequency: "MONTHLY",
      username: "florida_user",
      amountFees: 100,
      passwordPlainText: "florida_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_TAX",
        "business_name": "Acme Corp Florida",
        "fl_certificate_number": "78-8012345678-9",
        "business_partner_number": "0001234567",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_georgia

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_georgia" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "GA",
      stateName: "Georgia",
      filingFrequency: "MONTHLY",
      username: "gtc_user",
      amountFees: 100,
      passwordPlainText: "gtc_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Georgia",
        salesTaxId: "GA-ST-12345",
        zipCode: "30301",
        lastPaymentToState: "0.00",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "GA",
      stateName: "Georgia",
      filingFrequency: "MONTHLY",
      username: "gtc_user",
      amountFees: 100,
      passwordPlainText: "gtc_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Georgia",
        salesTaxId: "GA-ST-12345",
        zipCode: "30301",
        lastPaymentToState: "0.00",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_hawaii

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_hawaii" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "HI",
      stateName: "Hawaii",
      filingFrequency: "MONTHLY",
      username: "hawaii_user",
      amountFees: 100,
      passwordPlainText: "hawaii_password",
      jurisdictionSpecificFields: {
        "registration_type": "GENERAL_EXCISE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Hawaii",
        "sales_tax_id": "HI-GE-12345",
        "letter_id": "LTR-HI-001",
        "last_payment_to_state": "0.00",
        "third_party_access_enabled": true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "HI",
      stateName: "Hawaii",
      filingFrequency: "MONTHLY",
      username: "hawaii_user",
      amountFees: 100,
      passwordPlainText: "hawaii_password",
      jurisdictionSpecificFields: {
        "registration_type": "GENERAL_EXCISE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Hawaii",
        "sales_tax_id": "HI-GE-12345",
        "letter_id": "LTR-HI-001",
        "last_payment_to_state": "0.00",
        "third_party_access_enabled": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_idaho

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_idaho" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "ID",
      stateName: "Idaho",
      filingFrequency: "MONTHLY",
      username: "idaho_user",
      amountFees: 100,
      passwordPlainText: "idaho_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Idaho",
        salesTaxId: "ID-ST-12345",
        accessCode: "tap-code-example",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "ID",
      stateName: "Idaho",
      filingFrequency: "MONTHLY",
      username: "idaho_user",
      amountFees: 100,
      passwordPlainText: "idaho_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Idaho",
        salesTaxId: "ID-ST-12345",
        accessCode: "tap-code-example",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_illinois

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_illinois" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "IL",
      stateName: "Illinois",
      filingFrequency: "MONTHLY",
      username: "illinois_user",
      amountFees: 100,
      passwordPlainText: "illinois_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_AND_USE_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Illinois",
        illinoisAccountId: "IL-9876543210",
        lastPaymentToState: "0.00",
        firstName: "Jane",
        lastName: "Smith",
        businessPhone: "217-555-9876",
        st2Activated: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "IL",
      stateName: "Illinois",
      filingFrequency: "MONTHLY",
      username: "illinois_user",
      amountFees: 100,
      passwordPlainText: "illinois_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_AND_USE_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Illinois",
        illinoisAccountId: "IL-9876543210",
        lastPaymentToState: "0.00",
        firstName: "Jane",
        lastName: "Smith",
        businessPhone: "217-555-9876",
        st2Activated: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_indiana

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_indiana" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "IN",
      stateName: "Indiana",
      filingFrequency: "MONTHLY",
      username: "indiana_user",
      amountFees: 100,
      passwordPlainText: "indiana_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Indiana",
        inStateTaxId: "1234567890",
        locationId: "LOC-IND-01",
        salesTaxAccountNumber: "RST-0123456789",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "IN",
      stateName: "Indiana",
      filingFrequency: "MONTHLY",
      username: "indiana_user",
      amountFees: 100,
      passwordPlainText: "indiana_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Indiana",
        inStateTaxId: "1234567890",
        locationId: "LOC-IND-01",
        salesTaxAccountNumber: "RST-0123456789",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_iowa

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_iowa" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "IA",
      stateName: "Iowa",
      filingFrequency: "MONTHLY",
      username: "iowa_user",
      amountFees: 100,
      passwordPlainText: "iowa_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Iowa",
        iaAccountType: "SALES_TAX_LICENSE",
        iaStateTaxPermitNumber: "IA-PERMIT-123",
        idrNumber: "1234567890",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "IA",
      stateName: "Iowa",
      filingFrequency: "MONTHLY",
      username: "iowa_user",
      amountFees: 100,
      passwordPlainText: "iowa_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Iowa",
        iaAccountType: "SALES_TAX_LICENSE",
        iaStateTaxPermitNumber: "IA-PERMIT-123",
        idrNumber: "1234567890",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_kansas

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_kansas" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "KS",
      stateName: "Kansas",
      filingFrequency: "MONTHLY",
      username: "kansas_user",
      amountFees: 100,
      passwordPlainText: "kansas_password",
      jurisdictionSpecificFields: {
        registrationType: "RETAILERS_SALES_TAX",
        businessName: "Acme Corp Kansas",
        ksStateTaxId: "KS-TAX-001",
        accessCode: "ks-access-secret",
        thirdPartyAccessEnabled: false,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "KS",
      stateName: "Kansas",
      filingFrequency: "MONTHLY",
      username: "kansas_user",
      amountFees: 100,
      passwordPlainText: "kansas_password",
      jurisdictionSpecificFields: {
        registrationType: "RETAILERS_SALES_TAX",
        businessName: "Acme Corp Kansas",
        ksStateTaxId: "KS-TAX-001",
        accessCode: "ks-access-secret",
        thirdPartyAccessEnabled: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_kentucky

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_kentucky" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "KY",
      stateName: "Kentucky",
      filingFrequency: "MONTHLY",
      username: "kentucky_user",
      amountFees: 100,
      passwordPlainText: "kentucky_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Kentucky",
        "ky_state_tax_id": "KY-12345678",
        "registered_via_sst": false,
        "third_party_access_enabled": true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "KY",
      stateName: "Kentucky",
      filingFrequency: "MONTHLY",
      username: "kentucky_user",
      amountFees: 100,
      passwordPlainText: "kentucky_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Kentucky",
        "ky_state_tax_id": "KY-12345678",
        "registered_via_sst": false,
        "third_party_access_enabled": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_legacy

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_legacy" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TX",
      stateName: "Texas",
      filingFrequency: "MONTHLY",
      comment: "Registering for monthly sales tax filings",
      initialSync: false,
      amountFees: 100,
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TX",
      stateName: "Texas",
      filingFrequency: "MONTHLY",
      comment: "Registering for monthly sales tax filings",
      initialSync: false,
      amountFees: 100,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_louisiana

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_louisiana" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "LA",
      stateName: "Louisiana",
      filingFrequency: "MONTHLY",
      username: "louisiana_user",
      amountFees: 100,
      passwordPlainText: "louisiana_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Louisiana",
        "la_state_tax_id": "1234567890",
        "license_type": "DIRECT_MARKETER",
        "naics_code": "454110",
        "registered_email_address": "louisiana@domain.com",
        "last_payment_to_state": "0",
        "zip_code": "70802",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "LA",
      stateName: "Louisiana",
      filingFrequency: "MONTHLY",
      username: "louisiana_user",
      amountFees: 100,
      passwordPlainText: "louisiana_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Louisiana",
        "la_state_tax_id": "1234567890",
        "license_type": "DIRECT_MARKETER",
        "naics_code": "454110",
        "registered_email_address": "louisiana@domain.com",
        "last_payment_to_state": "0",
        "zip_code": "70802",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_maine

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_maine" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "ME",
      stateName: "Maine",
      filingFrequency: "MONTHLY",
      username: "maine_user",
      amountFees: 100,
      passwordPlainText: "maine_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Maine",
        meStateTaxId: "12345678",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "ME",
      stateName: "Maine",
      filingFrequency: "MONTHLY",
      username: "maine_user",
      amountFees: 100,
      passwordPlainText: "maine_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Maine",
        meStateTaxId: "12345678",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_maryland

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_maryland" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: null,
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MD",
      stateName: "Maryland",
      filingFrequency: "MONTHLY",
      username: "maryland_user",
      amountFees: 100,
      passwordPlainText: "maryland_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Maryland",
        "md_state_tax_id": "MD-12345678",
        "marketplace_facilitator": false,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: null,
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MD",
      stateName: "Maryland",
      filingFrequency: "MONTHLY",
      username: "maryland_user",
      amountFees: 100,
      passwordPlainText: "maryland_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Maryland",
        "md_state_tax_id": "MD-12345678",
        "marketplace_facilitator": false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_massachusetts

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_massachusetts" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MA",
      stateName: "Massachusetts",
      filingFrequency: "MONTHLY",
      username: "massachusetts_user",
      amountFees: 100,
      passwordPlainText: "massachusetts_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Massachusetts",
        maStateAccountId: "MA-ACCT-001",
        mfaCompleted: true,
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MA",
      stateName: "Massachusetts",
      filingFrequency: "MONTHLY",
      username: "massachusetts_user",
      amountFees: 100,
      passwordPlainText: "massachusetts_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Massachusetts",
        maStateAccountId: "MA-ACCT-001",
        mfaCompleted: true,
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_michigan

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_michigan" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MI",
      stateName: "Michigan",
      filingFrequency: "MONTHLY",
      username: "michigan_user",
      amountFees: 100,
      passwordPlainText: "michigan_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Michigan",
        miStateTaxId: "MI-ACCT-001",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MI",
      stateName: "Michigan",
      filingFrequency: "MONTHLY",
      username: "michigan_user",
      amountFees: 100,
      passwordPlainText: "michigan_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Michigan",
        miStateTaxId: "MI-ACCT-001",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_minnesota

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_minnesota" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MN",
      stateName: "Minnesota",
      filingFrequency: "MONTHLY",
      username: "minnesota_user",
      amountFees: 100,
      passwordPlainText: "minnesota_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Minnesota",
        mnStateTaxId: "1234567",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MN",
      stateName: "Minnesota",
      filingFrequency: "MONTHLY",
      username: "minnesota_user",
      amountFees: 100,
      passwordPlainText: "minnesota_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Minnesota",
        mnStateTaxId: "1234567",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_mississippi

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_mississippi" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MS",
      stateName: "Mississippi",
      filingFrequency: "MONTHLY",
      username: "mississippi_user",
      amountFees: 100,
      passwordPlainText: "mississippi_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_AND_USE_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Mississippi",
        msStateTaxId: "12345678",
        msAccountType: "SALES_TAX_LICENSE",
        letterId: "LTR-MS-001",
        thirdPartyAccessEnabled: false,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MS",
      stateName: "Mississippi",
      filingFrequency: "MONTHLY",
      username: "mississippi_user",
      amountFees: 100,
      passwordPlainText: "mississippi_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_AND_USE_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Mississippi",
        msStateTaxId: "12345678",
        msAccountType: "SALES_TAX_LICENSE",
        letterId: "LTR-MS-001",
        thirdPartyAccessEnabled: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_missouri

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_missouri" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MO",
      stateName: "Missouri",
      filingFrequency: "MONTHLY",
      username: "missouri_user",
      amountFees: 100,
      passwordPlainText: "missouri_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Missouri",
        moStateTaxId: "MO-ACCT-001",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "MO",
      stateName: "Missouri",
      filingFrequency: "MONTHLY",
      username: "missouri_user",
      amountFees: 100,
      passwordPlainText: "missouri_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Missouri",
        moStateTaxId: "MO-ACCT-001",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_nebraska

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_nebraska" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NE",
      stateName: "Nebraska",
      filingFrequency: "MONTHLY",
      username: "nebraska_user",
      amountFees: 100,
      passwordPlainText: "nebraska_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Nebraska",
        neUserId: "12345678",
      },
      pinPlainText: "12345",
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NE",
      stateName: "Nebraska",
      filingFrequency: "MONTHLY",
      username: "nebraska_user",
      amountFees: 100,
      passwordPlainText: "nebraska_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Nebraska",
        neUserId: "12345678",
      },
      pinPlainText: "12345",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_nevada

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_nevada" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NV",
      stateName: "Nevada",
      filingFrequency: "MONTHLY",
      username: "nevada_user",
      amountFees: 100,
      passwordPlainText: "nevada_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Nevada",
        "nv_state_tax_id": "12345678",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NV",
      stateName: "Nevada",
      filingFrequency: "MONTHLY",
      username: "nevada_user",
      amountFees: 100,
      passwordPlainText: "nevada_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Nevada",
        "nv_state_tax_id": "12345678",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_new

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_new" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TX",
      stateName: "Texas",
      filingFrequency: "MONTHLY",
      comment: "Registering for monthly sales tax filings",
      initialSync: false,
      amountFees: 100,
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TX",
      stateName: "Texas",
      filingFrequency: "MONTHLY",
      comment: "Registering for monthly sales tax filings",
      initialSync: false,
      amountFees: 100,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_new_jersey

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_new_jersey" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "<value>",
      stateName: "<value>",
      jurisdictionSpecificFields: {
        "mfa_completed": false,
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "<value>",
        "nv_state_tax_id": "<id>",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "<value>",
      stateName: "<value>",
      jurisdictionSpecificFields: {
        "mfa_completed": false,
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "<value>",
        "nv_state_tax_id": "<id>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_new_mexico

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_new_mexico" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NM",
      stateName: "New Mexico",
      filingFrequency: "MONTHLY",
      username: "new_mexico_user",
      amountFees: 100,
      passwordPlainText: "new_mexico_password",
      jurisdictionSpecificFields: {
        "registration_type": "GROSS_RECEIPTS_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp New Mexico",
        "nm_state_tax_id": "03-123456-001",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NM",
      stateName: "New Mexico",
      filingFrequency: "MONTHLY",
      username: "new_mexico_user",
      amountFees: 100,
      passwordPlainText: "new_mexico_password",
      jurisdictionSpecificFields: {
        "registration_type": "GROSS_RECEIPTS_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp New Mexico",
        "nm_state_tax_id": "03-123456-001",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_new_york

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_new_york" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NY",
      stateName: "New York",
      filingFrequency: "MONTHLY",
      username: "new_york_user",
      amountFees: 100,
      passwordPlainText: "new_york_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "Acme Corp New York",
        "ny_state_tax_id": "123456789",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NY",
      stateName: "New York",
      filingFrequency: "MONTHLY",
      username: "new_york_user",
      amountFees: 100,
      passwordPlainText: "new_york_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "Acme Corp New York",
        "ny_state_tax_id": "123456789",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_north_carolina

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_north_carolina" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NC",
      stateName: "North Carolina",
      filingFrequency: "MONTHLY",
      username: "north_carolina_user",
      amountFees: 100,
      passwordPlainText: "north_carolina_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "Acme Corp North Carolina",
        "nc_state_tax_id": "NC-ACCT-001",
        "contact_name": "Jane Smith",
        "contact_email": "jane.smith@example.com",
        "contact_phone": "919-555-0100",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "NC",
      stateName: "North Carolina",
      filingFrequency: "MONTHLY",
      username: "north_carolina_user",
      amountFees: 100,
      passwordPlainText: "north_carolina_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "Acme Corp North Carolina",
        "nc_state_tax_id": "NC-ACCT-001",
        "contact_name": "Jane Smith",
        "contact_email": "jane.smith@example.com",
        "contact_phone": "919-555-0100",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_north_dakota

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_north_dakota" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "ND",
      stateName: "North Dakota",
      filingFrequency: "MONTHLY",
      username: "north_dakota_user",
      amountFees: 100,
      passwordPlainText: "north_dakota_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp North Dakota",
        "nd_state_tax_id": "ND-123456",
        "letter_id": "L9999999999",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "ND",
      stateName: "North Dakota",
      filingFrequency: "MONTHLY",
      username: "north_dakota_user",
      amountFees: 100,
      passwordPlainText: "north_dakota_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp North Dakota",
        "nd_state_tax_id": "ND-123456",
        "letter_id": "L9999999999",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_ohio

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_ohio" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "OH",
      stateName: "Ohio",
      filingFrequency: "MONTHLY",
      username: "ohio_user",
      amountFees: 100,
      passwordPlainText: "ohio_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Ohio",
        "oh_state_tax_id": "99-123456",
        "third_party_access_enabled": true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "OH",
      stateName: "Ohio",
      filingFrequency: "MONTHLY",
      username: "ohio_user",
      amountFees: 100,
      passwordPlainText: "ohio_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Ohio",
        "oh_state_tax_id": "99-123456",
        "third_party_access_enabled": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_oklahoma

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_oklahoma" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "OK",
      stateName: "Oklahoma",
      filingFrequency: "MONTHLY",
      username: "oklahoma_user",
      amountFees: 100,
      passwordPlainText: "oklahoma_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Oklahoma",
        "ok_state_tax_id": "1234567890",
        "zip_code": "73102",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "OK",
      stateName: "Oklahoma",
      filingFrequency: "MONTHLY",
      username: "oklahoma_user",
      amountFees: 100,
      passwordPlainText: "oklahoma_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Oklahoma",
        "ok_state_tax_id": "1234567890",
        "zip_code": "73102",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_pennsylvania

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_pennsylvania" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: null,
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "PA",
      stateName: "Pennsylvania",
      filingFrequency: "MONTHLY",
      username: "pennsylvania_user",
      amountFees: 100,
      passwordPlainText: "pennsylvania_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Pennsylvania",
        "pa_state_tax_id": "12345678",
        "account_type": "ACCOUNT_ID",
        "account_id": "1234567890",
        "identification_type": "FEIN",
        "identification_number": "12-3456789",
        "account_validation_method": "LETTER_ID",
        "account_validation_value": "L1234567890",
        "sales_and_use_account_id": "12345678901",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: null,
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "PA",
      stateName: "Pennsylvania",
      filingFrequency: "MONTHLY",
      username: "pennsylvania_user",
      amountFees: 100,
      passwordPlainText: "pennsylvania_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Pennsylvania",
        "pa_state_tax_id": "12345678",
        "account_type": "ACCOUNT_ID",
        "account_id": "1234567890",
        "identification_type": "FEIN",
        "identification_number": "12-3456789",
        "account_validation_method": "LETTER_ID",
        "account_validation_value": "L1234567890",
        "sales_and_use_account_id": "12345678901",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_rhode_island

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_rhode_island" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: null,
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "RI",
      stateName: "Rhode Island",
      filingFrequency: "MONTHLY",
      username: "rhode_island_user",
      amountFees: 100,
      passwordPlainText: "rhode_island_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Rhode Island",
        "ri_state_tax_id": "RI-123456",
        "ri_sales_filing_id": "123456789",
        "third_party_access_enabled": true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: null,
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "RI",
      stateName: "Rhode Island",
      filingFrequency: "MONTHLY",
      username: "rhode_island_user",
      amountFees: 100,
      passwordPlainText: "rhode_island_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp Rhode Island",
        "ri_state_tax_id": "RI-123456",
        "ri_sales_filing_id": "123456789",
        "third_party_access_enabled": true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_south_carolina

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_south_carolina" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "SC",
      stateName: "South Carolina",
      filingFrequency: "MONTHLY",
      username: "south_carolina_user",
      amountFees: 100,
      passwordPlainText: "south_carolina_password",
      jurisdictionSpecificFields: {
        "registration_type": "RETAIL_SALES_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp South Carolina",
        "sc_state_tax_id": "12345678",
        "sc_sid": "87654321",
        "letter_id": "L9999999999",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "SC",
      stateName: "South Carolina",
      filingFrequency: "MONTHLY",
      username: "south_carolina_user",
      amountFees: 100,
      passwordPlainText: "south_carolina_password",
      jurisdictionSpecificFields: {
        "registration_type": "RETAIL_SALES_TAX",
        "mfa_completed": true,
        "business_name": "Acme Corp South Carolina",
        "sc_state_tax_id": "12345678",
        "sc_sid": "87654321",
        "letter_id": "L9999999999",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_south_dakota

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_south_dakota" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "SD",
      stateName: "South Dakota",
      filingFrequency: "MONTHLY",
      username: "south_dakota_user",
      amountFees: 100,
      passwordPlainText: "south_dakota_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "Acme Corp South Dakota",
        "sd_state_tax_id": "1234-5678-ST",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "SD",
      stateName: "South Dakota",
      filingFrequency: "MONTHLY",
      username: "south_dakota_user",
      amountFees: 100,
      passwordPlainText: "south_dakota_password",
      jurisdictionSpecificFields: {
        "registration_type": "SALES_AND_USE_TAX",
        "business_name": "Acme Corp South Dakota",
        "sd_state_tax_id": "1234-5678-ST",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_tennessee

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_tennessee" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TN",
      stateName: "Tennessee",
      filingFrequency: "MONTHLY",
      username: "tennessee_user",
      amountFees: 100,
      passwordPlainText: "tennessee_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Tennessee",
        tnStateTaxId: "TN-ACCT-001",
        zipCode: "37201",
        letterId: "L1234567890",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TN",
      stateName: "Tennessee",
      filingFrequency: "MONTHLY",
      username: "tennessee_user",
      amountFees: 100,
      passwordPlainText: "tennessee_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Tennessee",
        tnStateTaxId: "TN-ACCT-001",
        zipCode: "37201",
        letterId: "L1234567890",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_texas

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_texas" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TX",
      stateName: "Texas",
      filingFrequency: "MONTHLY",
      username: "texas_user",
      amountFees: 100,
      passwordPlainText: "texas_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Texas",
        texasTaxpayerNumber: "12345678901",
        webfileNumber: "RT888777",
        registeredLocationNumber: "LOC-9",
        registeredAddress: "400 W Commerce St, Dallas TX 75208",
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "TX",
      stateName: "Texas",
      filingFrequency: "MONTHLY",
      username: "texas_user",
      amountFees: 100,
      passwordPlainText: "texas_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Texas",
        texasTaxpayerNumber: "12345678901",
        webfileNumber: "RT888777",
        registeredLocationNumber: "LOC-9",
        registeredAddress: "400 W Commerce St, Dallas TX 75208",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_utah

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_utah" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "UT",
      stateName: "Utah",
      filingFrequency: "MONTHLY",
      username: "utah_user",
      amountFees: 100,
      passwordPlainText: "utah_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Utah",
        utStateTaxId: "UT-9876543210",
      },
      pinPlainText: "654321",
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "UT",
      stateName: "Utah",
      filingFrequency: "MONTHLY",
      username: "utah_user",
      amountFees: 100,
      passwordPlainText: "utah_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Utah",
        utStateTaxId: "UT-9876543210",
      },
      pinPlainText: "654321",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_vermont

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_vermont" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "VT",
      stateName: "Vermont",
      filingFrequency: "MONTHLY",
      username: "vermont_user",
      amountFees: 100,
      passwordPlainText: "vermont_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Vermont",
        vtStateTaxId: "SUT-12345678",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "VT",
      stateName: "Vermont",
      filingFrequency: "MONTHLY",
      username: "vermont_user",
      amountFees: 100,
      passwordPlainText: "vermont_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_TAX",
        businessName: "Acme Corp Vermont",
        vtStateTaxId: "SUT-12345678",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_virginia

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_virginia" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "VA",
      stateName: "Virginia",
      filingFrequency: "MONTHLY",
      username: "virginia_user",
      amountFees: 100,
      passwordPlainText: "virginia_password",
      jurisdictionSpecificFields: {
        registrationType: "RETAIL_SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Virginia",
        vaStateTaxId: "54-9876543",
        thirdPartyAccessEnabled: false,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "VA",
      stateName: "Virginia",
      filingFrequency: "MONTHLY",
      username: "virginia_user",
      amountFees: 100,
      passwordPlainText: "virginia_password",
      jurisdictionSpecificFields: {
        registrationType: "RETAIL_SALES_TAX",
        mfaCompleted: true,
        businessName: "Acme Corp Virginia",
        vaStateTaxId: "54-9876543",
        thirdPartyAccessEnabled: false,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_washington

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_washington" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WA",
      stateName: "Washington",
      filingFrequency: "MONTHLY",
      username: "washington_user",
      amountFees: 100,
      passwordPlainText: "washington_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "EXCISE_TAX",
        businessName: "Acme Corp Washington",
        waStateTaxId: "600123456",
        litterTaxRequired: false,
        exciseAccountLinked: true,
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WA",
      stateName: "Washington",
      filingFrequency: "MONTHLY",
      username: "washington_user",
      amountFees: 100,
      passwordPlainText: "washington_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "EXCISE_TAX",
        businessName: "Acme Corp Washington",
        waStateTaxId: "600123456",
        litterTaxRequired: false,
        exciseAccountLinked: true,
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_west_virginia

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_west_virginia" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WV",
      stateName: "West Virginia",
      filingFrequency: "MONTHLY",
      username: "west_virginia_user",
      amountFees: 100,
      passwordPlainText: "west_virginia_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp West Virginia",
        wvStateTaxId: "WV-12345678",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WV",
      stateName: "West Virginia",
      filingFrequency: "MONTHLY",
      username: "west_virginia_user",
      amountFees: 100,
      passwordPlainText: "west_virginia_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp West Virginia",
        wvStateTaxId: "WV-12345678",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_wisconsin

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_wisconsin" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WI",
      stateName: "Wisconsin",
      filingFrequency: "MONTHLY",
      username: "wisconsin_user",
      amountFees: 100,
      passwordPlainText: "wisconsin_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Wisconsin",
        wiStateTaxId: "WI-12345678",
        thirdPartyAccessEnabled: true,
      },
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WI",
      stateName: "Wisconsin",
      filingFrequency: "MONTHLY",
      username: "wisconsin_user",
      amountFees: 100,
      passwordPlainText: "wisconsin_password",
      jurisdictionSpecificFields: {
        mfaCompleted: true,
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Wisconsin",
        wiStateTaxId: "WI-12345678",
        thirdPartyAccessEnabled: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: regular_wyoming

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="regular_wyoming" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WY",
      stateName: "Wyoming",
      filingFrequency: "MONTHLY",
      username: "wyoming_user",
      amountFees: 100,
      passwordPlainText: "wyoming_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Wyoming",
        wyStateTaxId: "WY-ACCT-001",
      },
      pinPlainText: "wy-pin-1234",
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "REGULAR",
      registrationDate: new RFCDate("2025-02-01"),
      registrationEmail: "example@domain.com",
      autoRegistered: true,
      doNotFile: false,
      isPreCollecting: false,
      countryCode: "US",
      stateCode: "WY",
      stateName: "Wyoming",
      filingFrequency: "MONTHLY",
      username: "wyoming_user",
      amountFees: 100,
      passwordPlainText: "wyoming_password",
      jurisdictionSpecificFields: {
        registrationType: "SALES_AND_USE_TAX",
        businessName: "Acme Corp Wyoming",
        wyStateTaxId: "WY-ACCT-001",
      },
      pinPlainText: "wy-pin-1234",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: sst

<!-- UsageSnippet language="typescript" operationID="create_registration_v1_registrations_post" method="post" path="/v1/registrations" example="sst" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.create({
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "SST",
      passwordPlainText: "sst_pass",
      passwordMetadataPlainText: "{\"q\":\"a\"}",
      username: "sst_user",
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
import { registrationsCreate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsCreate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsCreate(sdk, {
    xOrganizationId: "<id>",
    requestBody: {
      registrationImportType: "SST",
      passwordPlainText: "sst_pass",
      passwordMetadataPlainText: "{\"q\":\"a\"}",
      username: "sst_user",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRegistrationV1RegistrationsPostRequest](../../models/operations/createregistrationv1registrationspostrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## getJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet

Returns the JSON Schema and UI metadata for a state-specific registration form, and the tax types that can be imported there.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_jurisdiction_specific_fields_v1_registrations_jurisdiction_specific_fields_get" method="get" path="/v1/registrations/jurisdiction-specific-fields" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.getJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet({
    countryCode: "MH",
    stateCode: "<value>",
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
import {
  registrationsGetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet,
} from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsGetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet(sdk, {
    countryCode: "MH",
    stateCode: "<value>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsGetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.GetJurisdictionSpecificFieldsV1RegistrationsJurisdictionSpecificFieldsGetRequest](../../models/operations/getjurisdictionspecificfieldsv1registrationsjurisdictionspecificfieldsgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[models.CustomerJurisdictionSpecificFieldsResponse](../../models/customerjurisdictionspecificfieldsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## listRegistrationJurisdictionsV1RegistrationsJurisdictionsGet

Distinct registration jurisdictions (country + state) for filter dropdowns. Non-SST only. Default status__in matches GET /registrations (all statuses).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_registration_jurisdictions_v1_registrations_jurisdictions_get" method="get" path="/v1/registrations/jurisdictions" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.listRegistrationJurisdictionsV1RegistrationsJurisdictionsGet({
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
import { registrationsListRegistrationJurisdictionsV1RegistrationsJurisdictionsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsListRegistrationJurisdictionsV1RegistrationsJurisdictionsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsListRegistrationJurisdictionsV1RegistrationsJurisdictionsGet(sdk, {
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsListRegistrationJurisdictionsV1RegistrationsJurisdictionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.ListRegistrationJurisdictionsV1RegistrationsJurisdictionsGetRequest](../../models/operations/listregistrationjurisdictionsv1registrationsjurisdictionsgetrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[models.RegistrationJurisdictionOptionRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## getById

The Get Registration By ID API retrieves a single registration record
    based on its unique identifier.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_registration_by_id_v1_registrations__registration_id__get" method="get" path="/v1/registrations/{registration_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.getById({
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
import { registrationsGetById } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGetById.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsGetById(sdk, {
    registrationId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsGetById failed:", res.error);
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
| errors.ErrorResponse                                           | 401, 403                                                       | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |

## update

The Update Registration API allows you to modify
    an existing registration using its unique registration_id. Sending a value for,
    or clearing, a credential that is already stored (username, password, security
    questions or a portal access code) needs an Owner of the organization or a
    Kintsugi Portfolio user who can open it. An API key counts as the user it belongs
    to, and a service key as the user who created it. Other callers, and automated
    assistant integrations, get 403, even when the value matches the stored one.
    Any caller who can edit the registration may fill a credential that has no
    stored value, except that a stored password also guards the username and security
    questions. A masked username sent back unchanged is ignored. A password made
    only of asterisks, the mask a read shows, gets 400. Stored credential fields in the
    response come back masked.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_registration_v1_registrations__registration_id__put" method="put" path="/v1/registrations/{registration_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.update({
    registrationId: "<id>",
    xOrganizationId: "org_12345",
    registrationUpdateAPI: {
      registrationDate: new RFCDate("2025-03-01"),
      registrationEmail: "example@domain.com",
      registrationRequested: new Date("2025-02-18T19:43:32.684802"),
      autoRegistered: true,
      registrationsRegime: "STANDARD",
      changeRegimeStatus: "REQUESTED",
      username: "User Name",
      filingFrequency: "MONTHLY",
      createFilingsFrom: new RFCDate("2025-03-01"),
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
import { registrationsUpdate } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsUpdate.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsUpdate(sdk, {
    registrationId: "<id>",
    xOrganizationId: "org_12345",
    registrationUpdateAPI: {
      registrationDate: new RFCDate("2025-03-01"),
      registrationEmail: "example@domain.com",
      registrationRequested: new Date("2025-02-18T19:43:32.684802"),
      autoRegistered: true,
      registrationsRegime: "STANDARD",
      changeRegimeStatus: "REQUESTED",
      username: "User Name",
      filingFrequency: "MONTHLY",
      createFilingsFrom: new RFCDate("2025-03-01"),
      isApproaching: false,
      comment: "Updated registration for compliance",
      vda: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsUpdate failed:", res.error);
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
| errors.ErrorResponse                                           | 401, 403                                                       | application/json                                               |
| errors.BackendSrcRegistrationsResponsesValidationErrorResponse | 422                                                            | application/json                                               |
| errors.ErrorResponse                                           | 500                                                            | application/json                                               |
| errors.SDKDefaultError                                         | 4XX, 5XX                                                       | \*/\*                                                          |

## uploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost

Upload an attachment for a specific registration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload_registration_attachment_v1_registrations__registration_id__attachments_post" method="post" path="/v1/registrations/{registration_id}/attachments" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.uploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost({
    registrationId: "<id>",
    xOrganizationId: "org_12345",
    bodyUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost: {
      file: "" // Populate with string from file, for example example.file,
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
import {
  registrationsUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost,
} from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost(sdk, {
    registrationId: "<id>",
    xOrganizationId: "org_12345",
    bodyUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost: {
      file: "" // Populate with string from file, for example example.file,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsUploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.UploadRegistrationAttachmentV1RegistrationsRegistrationIdAttachmentsPostRequest](../../models/operations/uploadregistrationattachmentv1registrationsregistrationidattachmentspostrequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[models.Attachment](../../models/attachment.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |

## deregister

Deregister an existing registration. Stored credential fields in the
    response come back masked.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deregister_registration_v1_registrations__registration_id__deregister_post" method="post" path="/v1/registrations/{registration_id}/deregister" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.deregister({
    registrationId: "regs_123456",
    xOrganizationId: "org_12345",
    deregisterRegistrationRequest: {
      closureDate: new RFCDate("2026-01-04"),
      reason: "CLOSING_NEXUS_IN_STATE",
      finalReturnAcknowledged: true,
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
import { registrationsDeregister } from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsDeregister.js";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsDeregister(sdk, {
    registrationId: "regs_123456",
    xOrganizationId: "org_12345",
    deregisterRegistrationRequest: {
      closureDate: new RFCDate("2026-01-04"),
      reason: "CLOSING_NEXUS_IN_STATE",
      finalReturnAcknowledged: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsDeregister failed:", res.error);
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

## getOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet

Get all OSS countries for a specific registration. This endpoint returns
    a list of EU countries that are covered by the OSS registration.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_oss_countries_for_registration_v1_registrations__registration_id__oss_countries_get" method="get" path="/v1/registrations/{registration_id}/oss-countries" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.registrations.getOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet({
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
import {
  registrationsGetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet,
} from "@kintsugi-tax/tax-platform-sdk/funcs/registrationsGetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await registrationsGetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet(sdk, {
    registrationId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("registrationsGetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.GetOssCountriesForRegistrationV1RegistrationsRegistrationIdOssCountriesGetRequest](../../models/operations/getosscountriesforregistrationv1registrationsregistrationidosscountriesgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[models.OssRegistrationCountryRead[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |