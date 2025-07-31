# Products
(*products*)

## Overview

### Available Operations

* [getProductsV1ProductsGet](#getproductsv1productsget) - Get Products
* [createProductV1ProductsPost](#createproductv1productspost) - Create Product
* [getProductByIdV1ProductsProductIdGet](#getproductbyidv1productsproductidget) - Get Product By Id
* [updateProductV1ProductsProductIdPut](#updateproductv1productsproductidput) - Update Product
* [getProductCategoriesV1ProductsCategoriesGet](#getproductcategoriesv1productscategoriesget) - Get Product Categories

## getProductsV1ProductsGet

Retrieve a paginated list of products based on filters and search query.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_products_v1_products__get" method="get" path="/v1/products/" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.products.getProductsV1ProductsGet({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { productsGetProductsV1ProductsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/productsGetProductsV1ProductsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await productsGetProductsV1ProductsGet(sdk, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsGetProductsV1ProductsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProductsV1ProductsGetRequest](../../models/operations/getproductsv1productsgetrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PageProductRead](../../models/pageproductread.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ErrorResponse                                      | 401, 404                                                  | application/json                                          |
| errors.BackendSrcProductsResponsesValidationErrorResponse | 422                                                       | application/json                                          |
| errors.ErrorResponse                                      | 500                                                       | application/json                                          |
| errors.SDKDefaultError                                    | 4XX, 5XX                                                  | \*/\*                                                     |

## createProductV1ProductsPost

The Create Product API allows users to manually create a new product
    in the system. This includes specifying product details such as category,
    subcategory, and tax exemption status, etc.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_product_v1_products__post" method="post" path="/v1/products/" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.products.createProductV1ProductsPost({
    externalId: "prod_001",
    name: "Sample Product",
    description: "A description of the product",
    status: "APPROVED",
    productCategory: "PHYSICAL",
    productSubcategory: "GENERAL_CLOTHING",
    taxExempt: false,
    source: "BIGCOMMERCE",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { productsCreateProductV1ProductsPost } from "@kintsugi-tax/tax-platform-sdk/funcs/productsCreateProductV1ProductsPost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await productsCreateProductV1ProductsPost(sdk, {
    externalId: "prod_001",
    name: "Sample Product",
    description: "A description of the product",
    status: "APPROVED",
    productCategory: "PHYSICAL",
    productSubcategory: "GENERAL_CLOTHING",
    taxExempt: false,
    source: "BIGCOMMERCE",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsCreateProductV1ProductsPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ProductCreateManual](../../models/productcreatemanual.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductRead](../../models/productread.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ErrorResponse                                      | 401                                                       | application/json                                          |
| errors.BackendSrcProductsResponsesValidationErrorResponse | 422                                                       | application/json                                          |
| errors.ErrorResponse                                      | 500                                                       | application/json                                          |
| errors.SDKDefaultError                                    | 4XX, 5XX                                                  | \*/\*                                                     |

## getProductByIdV1ProductsProductIdGet

The Get Product By ID API retrieves detailed information about
    a single product by its unique ID. This API helps in viewing the specific details
    of a product, including its attributes, status, and categorization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_product_by_id_v1_products__product_id__get" method="get" path="/v1/products/{product_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.products.getProductByIdV1ProductsProductIdGet({
    productId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { productsGetProductByIdV1ProductsProductIdGet } from "@kintsugi-tax/tax-platform-sdk/funcs/productsGetProductByIdV1ProductsProductIdGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await productsGetProductByIdV1ProductsProductIdGet(sdk, {
    productId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsGetProductByIdV1ProductsProductIdGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProductByIdV1ProductsProductIdGetRequest](../../models/operations/getproductbyidv1productsproductidgetrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductRead](../../models/productread.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ErrorResponse                                      | 401                                                       | application/json                                          |
| errors.BackendSrcProductsResponsesValidationErrorResponse | 422                                                       | application/json                                          |
| errors.ErrorResponse                                      | 500                                                       | application/json                                          |
| errors.SDKDefaultError                                    | 4XX, 5XX                                                  | \*/\*                                                     |

## updateProductV1ProductsProductIdPut

The Update Product API allows users to modify the details of
    an existing product identified by its unique product_id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_product_v1_products__product_id__put" method="put" path="/v1/products/{product_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.products.updateProductV1ProductsProductIdPut({
    productId: "<id>",
    productUpdate: {
      externalId: "prod_001",
      name: "Updated Product Name",
      description: "An updated description for the product",
      status: "APPROVED",
      productCategory: "PHYSICAL",
      productSubcategory: "GENERAL_CLOTHING",
      taxExempt: false,
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
import { productsUpdateProductV1ProductsProductIdPut } from "@kintsugi-tax/tax-platform-sdk/funcs/productsUpdateProductV1ProductsProductIdPut.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await productsUpdateProductV1ProductsProductIdPut(sdk, {
    productId: "<id>",
    productUpdate: {
      externalId: "prod_001",
      name: "Updated Product Name",
      description: "An updated description for the product",
      status: "APPROVED",
      productCategory: "PHYSICAL",
      productSubcategory: "GENERAL_CLOTHING",
      taxExempt: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsUpdateProductV1ProductsProductIdPut failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateProductV1ProductsProductIdPutRequest](../../models/operations/updateproductv1productsproductidputrequest.md)                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductRead](../../models/productread.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.ErrorResponse                                      | 401                                                       | application/json                                          |
| errors.BackendSrcProductsResponsesValidationErrorResponse | 422                                                       | application/json                                          |
| errors.ErrorResponse                                      | 500                                                       | application/json                                          |
| errors.SDKDefaultError                                    | 4XX, 5XX                                                  | \*/\*                                                     |

## getProductCategoriesV1ProductsCategoriesGet

The Get Product Categories API retrieves all
    product categories.  This endpoint helps users understand and select the
    appropriate categories for their products.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_product_categories_v1_products_categories__get" method="get" path="/v1/products/categories/" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.products.getProductCategoriesV1ProductsCategoriesGet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "@kintsugi-tax/tax-platform-sdk/core.js";
import { productsGetProductCategoriesV1ProductsCategoriesGet } from "@kintsugi-tax/tax-platform-sdk/funcs/productsGetProductCategoriesV1ProductsCategoriesGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
    customHeader: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await productsGetProductCategoriesV1ProductsCategoriesGet(sdk);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsGetProductCategoriesV1ProductsCategoriesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductCategories[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKDefaultError     | 4XX, 5XX                   | \*/\*                      |