/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filingsGet } from "../funcs/filingsGet.js";
import { filingsGetByRegistrationId } from "../funcs/filingsGetByRegistrationId.js";
import { filingsList } from "../funcs/filingsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as models from "../models/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Filings extends ClientSDK {
  /**
   * Get Filings
   *
   * @remarks
   * The Get Filings API retrieves a paginated list of filings based on
   *     filters such as dates, jurisdiction, Country, status, etc. This helps track
   *     and manage tax filings efficiently across multiple jurisdictions.
   */
  async list(
    request?: operations.GetFilingsV1FilingsGetRequest | undefined,
    options?: RequestOptions,
  ): Promise<models.PageFilingRead> {
    return unwrapAsync(filingsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Filing By Id
   *
   * @remarks
   * This API retrieves detailed information about a specific
   *     filing using its unique identifier (filing_id).
   */
  async get(
    request: operations.GetFilingByIdV1FilingsFilingIdGetRequest,
    options?: RequestOptions,
  ): Promise<models.FilingDetailsRead> {
    return unwrapAsync(filingsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Filings By Registration Id
   *
   * @remarks
   * The Get Filings By Registration ID API
   *     retrieves all filings
   *     associated with a specific registration ID. This allows users to query detailed
   *     filing information tied to
   *     a specific registration record.
   */
  async getByRegistrationId(
    request:
      operations.GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest,
    options?: RequestOptions,
  ): Promise<models.PageFilingRead> {
    return unwrapAsync(filingsGetByRegistrationId(
      this,
      request,
      options,
    ));
  }
}
