# Products

## Overview

### Available Operations

* [getProductsV1ProductsGet](#getproductsv1productsget) - Get products
* [createProductV1ProductsPost](#createproductv1productspost) - Create product
* [getProductCategoriesV1ProductsCategoriesGet](#getproductcategoriesv1productscategoriesget) - Get product categories
* [get](#get) - Get product by id
* [update](#update) - Update product

## getProductsV1ProductsGet

Retrieve a paginated list of products based on filters and search query.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_products_v1_products_get" method="get" path="/v1/products" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.products.getProductsV1ProductsGet({
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
import { productsGetProductsV1ProductsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/productsGetProductsV1ProductsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await productsGetProductsV1ProductsGet(sdk, {
    xOrganizationId: "org_12345",
  });
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

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ErrorResponse                                             | 401, 404                                                         | application/json                                                 |
| errors.BackendSrcProductsSchemasResponsesValidationErrorResponse | 422                                                              | application/json                                                 |
| errors.ErrorResponse                                             | 500                                                              | application/json                                                 |
| errors.SDKDefaultError                                           | 4XX, 5XX                                                         | \*/\*                                                            |

## createProductV1ProductsPost

The Create Product API allows users to manually create a new product
    in the system. This includes specifying product details such as category,
    subcategory, and tax exemption status, etc. You can
    retrieve supported categories and subcategories from the
    [GET /products/categories endpoint](/reference/api/products/get-product-categories),
    or browse the full catalog with descriptions and examples in the
    [Product Categories guide](/docs/guides/product-categories).

    Idempotent on ``(organization_id, external_id, source)`` for connectionless
    creates (CP-4726): a re-POST of an existing identity returns ``200``. A live
    match is unchanged; a previously deleted match is revived (status returns to
    ``PENDING``). Use PUT to update fields.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_product_v1_products_post" method="post" path="/v1/products" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.products.createProductV1ProductsPost({
    xOrganizationId: "org_12345",
    productCreateManual: {
      externalId: "prod_001",
      name: "T-shirts",
      description: "Common items of everyday wearing apparel designed for human use, covering a wide variety of non-specialized garments.",
      status: "APPROVED",
      productCategory: "Physical",
      productSubcategory: "General Clothing",
      taxExempt: false,
      source: "BIGCOMMERCE",
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
import { productsCreateProductV1ProductsPost } from "@kintsugi-tax/tax-platform-sdk/funcs/productsCreateProductV1ProductsPost.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await productsCreateProductV1ProductsPost(sdk, {
    xOrganizationId: "org_12345",
    productCreateManual: {
      externalId: "prod_001",
      name: "T-shirts",
      description: "Common items of everyday wearing apparel designed for human use, covering a wide variety of non-specialized garments.",
      status: "APPROVED",
      productCategory: "Physical",
      productSubcategory: "General Clothing",
      taxExempt: false,
      source: "BIGCOMMERCE",
    },
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
| `request`                                                                                                                                                                      | [operations.CreateProductV1ProductsPostRequest](../../models/operations/createproductv1productspostrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductRead](../../models/productread.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ErrorResponse                                             | 401                                                              | application/json                                                 |
| errors.BackendSrcProductsSchemasResponsesValidationErrorResponse | 422                                                              | application/json                                                 |
| errors.ErrorResponse                                             | 500                                                              | application/json                                                 |
| errors.SDKDefaultError                                           | 4XX, 5XX                                                         | \*/\*                                                            |

## getProductCategoriesV1ProductsCategoriesGet

The Get Product Categories API retrieves all
    product categories.  This endpoint helps users understand and select the
    appropriate categories for their products.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_product_categories_v1_products_categories_get" method="get" path="/v1/products/categories" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.products.getProductCategoriesV1ProductsCategoriesGet({
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
import { productsGetProductCategoriesV1ProductsCategoriesGet } from "@kintsugi-tax/tax-platform-sdk/funcs/productsGetProductCategoriesV1ProductsCategoriesGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await productsGetProductCategoriesV1ProductsCategoriesGet(sdk, {
    xOrganizationId: "org_12345",
  });
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
| `request`                                                                                                                                                                      | [operations.GetProductCategoriesV1ProductsCategoriesGetRequest](../../models/operations/getproductcategoriesv1productscategoriesgetrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ProductCategoryRead](../../models/productcategoryread.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ErrorResponse                                             | 401                                                              | application/json                                                 |
| errors.BackendSrcProductsSchemasResponsesValidationErrorResponse | 422                                                              | application/json                                                 |
| errors.ErrorResponse                                             | 500                                                              | application/json                                                 |
| errors.SDKDefaultError                                           | 4XX, 5XX                                                         | \*/\*                                                            |

## get

The Get Product By ID API retrieves detailed information about
    a single product by its unique ID. This API helps in viewing the specific details
    of a product, including its attributes, status, and categorization.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_product_by_id_v1_products__product_id__get" method="get" path="/v1/products/{product_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.products.get({
    productId: "<id>",
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
import { productsGet } from "@kintsugi-tax/tax-platform-sdk/funcs/productsGet.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await productsGet(sdk, {
    productId: "<id>",
    xOrganizationId: "org_12345",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsGet failed:", res.error);
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

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ErrorResponse                                             | 401                                                              | application/json                                                 |
| errors.BackendSrcProductsSchemasResponsesValidationErrorResponse | 422                                                              | application/json                                                 |
| errors.ErrorResponse                                             | 500                                                              | application/json                                                 |
| errors.SDKDefaultError                                           | 4XX, 5XX                                                         | \*/\*                                                            |

## update

The Update Product API allows users to modify the details of
    an existing product identified by its unique product_id. You can
    retrieve supported categories and subcategories from the
    [GET /products/categories endpoint](/reference/api/products/get-product-categories),
    or browse the full catalog with descriptions and examples in the
    [Product Categories guide](/docs/guides/product-categories)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_product_v1_products__product_id__put" method="put" path="/v1/products/{product_id}" -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.products.update({
    productId: "<id>",
    xOrganizationId: "org_12345",
    requestBody: {
      name: "Updated T-Shirt",
      status: "APPROVED",
      productCategory: "Physical",
      productSubcategory: "General Clothing",
      taxExempt: false,
      externalId: "prod_001",
      description: "An updated description for the product",
      classificationFailed: false,
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
import { productsUpdate } from "@kintsugi-tax/tax-platform-sdk/funcs/productsUpdate.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await productsUpdate(sdk, {
    productId: "<id>",
    xOrganizationId: "org_12345",
    requestBody: {
      name: "Updated T-Shirt",
      status: "APPROVED",
      productCategory: "Physical",
      productSubcategory: "General Clothing",
      taxExempt: false,
      externalId: "prod_001",
      description: "An updated description for the product",
      classificationFailed: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsUpdate failed:", res.error);
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

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.ErrorResponse                                             | 401                                                              | application/json                                                 |
| errors.BackendSrcProductsSchemasResponsesValidationErrorResponse | 422                                                              | application/json                                                 |
| errors.ErrorResponse                                             | 500                                                              | application/json                                                 |
| errors.SDKDefaultError                                           | 4XX, 5XX                                                         | \*/\*                                                            |