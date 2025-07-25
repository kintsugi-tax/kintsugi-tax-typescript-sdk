/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity =
  {
    apiKeyHeader?: string | undefined;
    httpBearer?: string | undefined;
  };

export type GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest = {
  /**
   * The unique identifier of the filing
   *
   * @remarks
   *         whose transactions you wish to retrieve.
   */
  filingId: string;
  /**
   * The unique identifier for the organization making the request
   */
  xOrganizationId: string | null;
};

/** @internal */
export const GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$inboundSchema:
  z.ZodType<
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity,
    z.ZodTypeDef,
    unknown
  > = z.object({
    APIKeyHeader: z.string().optional(),
    HTTPBearer: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "APIKeyHeader": "apiKeyHeader",
      "HTTPBearer": "httpBearer",
    });
  });

/** @internal */
export type GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$Outbound =
  {
    APIKeyHeader?: string | undefined;
    HTTPBearer?: string | undefined;
  };

/** @internal */
export const GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$outboundSchema:
  z.ZodType<
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$Outbound,
    z.ZodTypeDef,
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity
  > = z.object({
    apiKeyHeader: z.string().optional(),
    httpBearer: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      apiKeyHeader: "APIKeyHeader",
      httpBearer: "HTTPBearer",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$ {
  /** @deprecated use `GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$inboundSchema;
  /** @deprecated use `GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$outboundSchema;
  /** @deprecated use `GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$Outbound` instead. */
  export type Outbound =
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$Outbound;
}

export function getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurityToJSON(
  getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity:
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity,
): string {
  return JSON.stringify(
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$outboundSchema
      .parse(getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity),
  );
}

export function getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetSecurity' from JSON`,
  );
}

/** @internal */
export const GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$inboundSchema:
  z.ZodType<
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    filing_id: z.string(),
    "x-organization-id": z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      "filing_id": "filingId",
      "x-organization-id": "xOrganizationId",
    });
  });

/** @internal */
export type GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$Outbound =
  {
    filing_id: string;
    "x-organization-id": string | null;
  };

/** @internal */
export const GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$outboundSchema:
  z.ZodType<
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$Outbound,
    z.ZodTypeDef,
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest
  > = z.object({
    filingId: z.string(),
    xOrganizationId: z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      filingId: "filing_id",
      xOrganizationId: "x-organization-id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$ {
  /** @deprecated use `GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$inboundSchema;
  /** @deprecated use `GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$outboundSchema;
  /** @deprecated use `GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$Outbound` instead. */
  export type Outbound =
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$Outbound;
}

export function getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequestToJSON(
  getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest:
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest,
): string {
  return JSON.stringify(
    GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$outboundSchema
      .parse(getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest),
  );
}

export function getTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest' from JSON`,
  );
}
