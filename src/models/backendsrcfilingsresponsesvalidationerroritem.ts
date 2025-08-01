/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type BackendSrcFilingsResponsesValidationErrorItem = {
  /**
   * Validation issues, such as missing required
   *
   * @remarks
   *                     fields or invalid field values.
   */
  type: string;
  /**
   * Location of error
   */
  loc: Array<string>;
  /**
   * Error message
   */
  msg: string;
  /**
   * Invalid input value
   */
  input?: any | undefined;
  /**
   * Additional context
   */
  ctx: { [k: string]: any };
};

/** @internal */
export const BackendSrcFilingsResponsesValidationErrorItem$inboundSchema:
  z.ZodType<
    BackendSrcFilingsResponsesValidationErrorItem,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: z.string(),
    loc: z.array(z.string()),
    msg: z.string(),
    input: z.any().optional(),
    ctx: z.record(z.any()),
  });

/** @internal */
export type BackendSrcFilingsResponsesValidationErrorItem$Outbound = {
  type: string;
  loc: Array<string>;
  msg: string;
  input?: any | undefined;
  ctx: { [k: string]: any };
};

/** @internal */
export const BackendSrcFilingsResponsesValidationErrorItem$outboundSchema:
  z.ZodType<
    BackendSrcFilingsResponsesValidationErrorItem$Outbound,
    z.ZodTypeDef,
    BackendSrcFilingsResponsesValidationErrorItem
  > = z.object({
    type: z.string(),
    loc: z.array(z.string()),
    msg: z.string(),
    input: z.any().optional(),
    ctx: z.record(z.any()),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackendSrcFilingsResponsesValidationErrorItem$ {
  /** @deprecated use `BackendSrcFilingsResponsesValidationErrorItem$inboundSchema` instead. */
  export const inboundSchema =
    BackendSrcFilingsResponsesValidationErrorItem$inboundSchema;
  /** @deprecated use `BackendSrcFilingsResponsesValidationErrorItem$outboundSchema` instead. */
  export const outboundSchema =
    BackendSrcFilingsResponsesValidationErrorItem$outboundSchema;
  /** @deprecated use `BackendSrcFilingsResponsesValidationErrorItem$Outbound` instead. */
  export type Outbound = BackendSrcFilingsResponsesValidationErrorItem$Outbound;
}

export function backendSrcFilingsResponsesValidationErrorItemToJSON(
  backendSrcFilingsResponsesValidationErrorItem:
    BackendSrcFilingsResponsesValidationErrorItem,
): string {
  return JSON.stringify(
    BackendSrcFilingsResponsesValidationErrorItem$outboundSchema.parse(
      backendSrcFilingsResponsesValidationErrorItem,
    ),
  );
}

export function backendSrcFilingsResponsesValidationErrorItemFromJSON(
  jsonString: string,
): SafeParseResult<
  BackendSrcFilingsResponsesValidationErrorItem,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BackendSrcFilingsResponsesValidationErrorItem$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BackendSrcFilingsResponsesValidationErrorItem' from JSON`,
  );
}
