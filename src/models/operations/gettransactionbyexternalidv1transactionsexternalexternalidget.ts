/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest =
  {
    /**
     * The unique external identifier of the transaction.
     */
    externalId: string;
  };

/** @internal */
export const GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$inboundSchema:
  z.ZodType<
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    external_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "external_id": "externalId",
    });
  });

/** @internal */
export type GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$Outbound =
  {
    external_id: string;
  };

/** @internal */
export const GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$outboundSchema:
  z.ZodType<
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$Outbound,
    z.ZodTypeDef,
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest
  > = z.object({
    externalId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      externalId: "external_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$ {
  /** @deprecated use `GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$inboundSchema;
  /** @deprecated use `GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$outboundSchema;
  /** @deprecated use `GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$Outbound` instead. */
  export type Outbound =
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$Outbound;
}

export function getTransactionByExternalIdV1TransactionsExternalExternalIdGetRequestToJSON(
  getTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest:
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest,
): string {
  return JSON.stringify(
    GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$outboundSchema
      .parse(
        getTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest,
      ),
  );
}

export function getTransactionByExternalIdV1TransactionsExternalExternalIdGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'GetTransactionByExternalIdV1TransactionsExternalExternalIdGetRequest' from JSON`,
  );
}
