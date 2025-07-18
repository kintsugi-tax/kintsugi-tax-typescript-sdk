/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTransactionByIdV1TransactionsTransactionIdGetSecurity = {
  apiKeyHeader?: string | undefined;
  httpBearer?: string | undefined;
};

export type GetTransactionByIdV1TransactionsTransactionIdGetRequest = {
  /**
   * The unique identifier of the transaction to retrieve.
   */
  transactionId: string;
  /**
   * The unique identifier for the organization making the request
   */
  xOrganizationId: string | null;
};

/** @internal */
export const GetTransactionByIdV1TransactionsTransactionIdGetSecurity$inboundSchema:
  z.ZodType<
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity,
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
export type GetTransactionByIdV1TransactionsTransactionIdGetSecurity$Outbound =
  {
    APIKeyHeader?: string | undefined;
    HTTPBearer?: string | undefined;
  };

/** @internal */
export const GetTransactionByIdV1TransactionsTransactionIdGetSecurity$outboundSchema:
  z.ZodType<
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity$Outbound,
    z.ZodTypeDef,
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity
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
export namespace GetTransactionByIdV1TransactionsTransactionIdGetSecurity$ {
  /** @deprecated use `GetTransactionByIdV1TransactionsTransactionIdGetSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity$inboundSchema;
  /** @deprecated use `GetTransactionByIdV1TransactionsTransactionIdGetSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity$outboundSchema;
  /** @deprecated use `GetTransactionByIdV1TransactionsTransactionIdGetSecurity$Outbound` instead. */
  export type Outbound =
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity$Outbound;
}

export function getTransactionByIdV1TransactionsTransactionIdGetSecurityToJSON(
  getTransactionByIdV1TransactionsTransactionIdGetSecurity:
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity,
): string {
  return JSON.stringify(
    GetTransactionByIdV1TransactionsTransactionIdGetSecurity$outboundSchema
      .parse(getTransactionByIdV1TransactionsTransactionIdGetSecurity),
  );
}

export function getTransactionByIdV1TransactionsTransactionIdGetSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  GetTransactionByIdV1TransactionsTransactionIdGetSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetTransactionByIdV1TransactionsTransactionIdGetSecurity$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionByIdV1TransactionsTransactionIdGetSecurity' from JSON`,
  );
}

/** @internal */
export const GetTransactionByIdV1TransactionsTransactionIdGetRequest$inboundSchema:
  z.ZodType<
    GetTransactionByIdV1TransactionsTransactionIdGetRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    transaction_id: z.string(),
    "x-organization-id": z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      "transaction_id": "transactionId",
      "x-organization-id": "xOrganizationId",
    });
  });

/** @internal */
export type GetTransactionByIdV1TransactionsTransactionIdGetRequest$Outbound = {
  transaction_id: string;
  "x-organization-id": string | null;
};

/** @internal */
export const GetTransactionByIdV1TransactionsTransactionIdGetRequest$outboundSchema:
  z.ZodType<
    GetTransactionByIdV1TransactionsTransactionIdGetRequest$Outbound,
    z.ZodTypeDef,
    GetTransactionByIdV1TransactionsTransactionIdGetRequest
  > = z.object({
    transactionId: z.string(),
    xOrganizationId: z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      transactionId: "transaction_id",
      xOrganizationId: "x-organization-id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionByIdV1TransactionsTransactionIdGetRequest$ {
  /** @deprecated use `GetTransactionByIdV1TransactionsTransactionIdGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetTransactionByIdV1TransactionsTransactionIdGetRequest$inboundSchema;
  /** @deprecated use `GetTransactionByIdV1TransactionsTransactionIdGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetTransactionByIdV1TransactionsTransactionIdGetRequest$outboundSchema;
  /** @deprecated use `GetTransactionByIdV1TransactionsTransactionIdGetRequest$Outbound` instead. */
  export type Outbound =
    GetTransactionByIdV1TransactionsTransactionIdGetRequest$Outbound;
}

export function getTransactionByIdV1TransactionsTransactionIdGetRequestToJSON(
  getTransactionByIdV1TransactionsTransactionIdGetRequest:
    GetTransactionByIdV1TransactionsTransactionIdGetRequest,
): string {
  return JSON.stringify(
    GetTransactionByIdV1TransactionsTransactionIdGetRequest$outboundSchema
      .parse(getTransactionByIdV1TransactionsTransactionIdGetRequest),
  );
}

export function getTransactionByIdV1TransactionsTransactionIdGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetTransactionByIdV1TransactionsTransactionIdGetRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetTransactionByIdV1TransactionsTransactionIdGetRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionByIdV1TransactionsTransactionIdGetRequest' from JSON`,
  );
}
