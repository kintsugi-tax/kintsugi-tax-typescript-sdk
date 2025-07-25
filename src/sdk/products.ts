/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { productsCreate } from "../funcs/productsCreate.js";
import { productsGet } from "../funcs/productsGet.js";
import { productsList } from "../funcs/productsList.js";
import { productsListCategories } from "../funcs/productsListCategories.js";
import { productsUpdate } from "../funcs/productsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Products extends ClientSDK {
  /**
   * Get Products
   *
   * @remarks
   * Retrieve a paginated list of products based on filters and search query.
   */
  async list(
    security: operations.GetProductsV1ProductsGetSecurity,
    request: operations.GetProductsV1ProductsGetRequest,
    options?: RequestOptions,
  ): Promise<models.PageProductRead> {
    return unwrapAsync(productsList(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Create Product
   *
   * @remarks
   * The Create Product API allows users to manually create a new product
   *     in the system. This includes specifying product details such as category,
   *     subcategory, and tax exemption status, etc.
   */
  async create(
    security: operations.CreateProductV1ProductsPostSecurity,
    request: operations.CreateProductV1ProductsPostRequest,
    options?: RequestOptions,
  ): Promise<models.ProductRead> {
    return unwrapAsync(productsCreate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get Product By Id
   *
   * @remarks
   * The Get Product By ID API retrieves detailed information about
   *     a single product by its unique ID. This API helps in viewing the specific details
   *     of a product, including its attributes, status, and categorization.
   */
  async get(
    security: operations.GetProductByIdV1ProductsProductIdGetSecurity,
    request: operations.GetProductByIdV1ProductsProductIdGetRequest,
    options?: RequestOptions,
  ): Promise<models.ProductRead> {
    return unwrapAsync(productsGet(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Update Product
   *
   * @remarks
   * The Update Product API allows users to modify the details of
   *     an existing product identified by its unique product_id
   */
  async update(
    security: operations.UpdateProductV1ProductsProductIdPutSecurity,
    request: operations.UpdateProductV1ProductsProductIdPutRequest,
    options?: RequestOptions,
  ): Promise<models.ProductRead> {
    return unwrapAsync(productsUpdate(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Get Product Categories
   *
   * @remarks
   * The Get Product Categories API retrieves all
   *     product categories.  This endpoint helps users understand and select the
   *     appropriate categories for their products.
   */
  async listCategories(
    security: operations.GetProductCategoriesV1ProductsCategoriesGetSecurity,
    request: operations.GetProductCategoriesV1ProductsCategoriesGetRequest,
    options?: RequestOptions,
  ): Promise<Array<models.ProductCategories>> {
    return unwrapAsync(productsListCategories(
      this,
      security,
      request,
      options,
    ));
  }
}
