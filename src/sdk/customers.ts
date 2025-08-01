/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersCreateTransaction } from "../funcs/customersCreateTransaction.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersGetByExternalId } from "../funcs/customersGetByExternalId.js";
import { customersGetTransactions } from "../funcs/customersGetTransactions.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Customers extends ClientSDK {
  /**
   * Get Customers
   *
   * @remarks
   * The Get Customers API retrieves
   *     a paginated list of customers based on specified filters.
   *     This API allows searching, filtering by country and state, and sorting the results.
   */
  async list(
    request?: operations.GetCustomersV1Request | undefined,
    options?: RequestOptions,
  ): Promise<models.PageCustomerRead> {
    return unwrapAsync(customersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Customer
   *
   * @remarks
   * The Create Customer API enables the creation of a new customer record with essential
   * details like name, contact information, and address, along with optional metadata.
   */
  async create(
    request: models.CustomerCreate,
    options?: RequestOptions,
  ): Promise<models.CustomerRead> {
    return unwrapAsync(customersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer By Id
   *
   * @remarks
   * The Get Customer By ID API retrieves the details of a single customer
   *     using their unique identifier. It returns customer-specific data,
   *     including contact information, address, name and metadata, etc.
   */
  async get(
    request: operations.GetCustomerByIdV1CustomersCustomerIdGetRequest,
    options?: RequestOptions,
  ): Promise<models.CustomerRead> {
    return unwrapAsync(customersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Customer
   *
   * @remarks
   * The Update Customer API allows you to modify an existing customer's
   *     information using their unique identifier,
   *     enabling updates to their details as needed.
   */
  async update(
    request: operations.UpdateCustomerV1CustomersCustomerIdPutRequest,
    options?: RequestOptions,
  ): Promise<models.CustomerRead> {
    return unwrapAsync(customersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer By External Id
   *
   * @remarks
   * The Get Customer By External ID API retrieves the details of a single customer using
   * their external identifier. This endpoint is useful for accessing customer data when only
   * an external ID is available.
   */
  async getByExternalId(
    request:
      operations.GetCustomerByExternalIdV1CustomersExternalExternalIdGetRequest,
    options?: RequestOptions,
  ): Promise<models.CustomerRead> {
    return unwrapAsync(customersGetByExternalId(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Transactions By Customer Id
   *
   * @remarks
   * Get a list of transactions for a customer by their unique ID.
   */
  async getTransactions(
    request:
      operations.GetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGetRequest,
    options?: RequestOptions,
  ): Promise<Array<models.TransactionRead>> {
    return unwrapAsync(customersGetTransactions(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Transaction By Customer Id
   *
   * @remarks
   * Create a new transaction for a specific customer.
   */
  async createTransaction(
    request:
      operations.CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest,
    options?: RequestOptions,
  ): Promise<models.TransactionRead> {
    return unwrapAsync(customersCreateTransaction(
      this,
      request,
      options,
    ));
  }
}
