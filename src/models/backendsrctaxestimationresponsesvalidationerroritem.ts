/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type BackendSrcTaxEstimationResponsesValidationErrorItem = {
  /**
   * Type of validation error
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
export const BackendSrcTaxEstimationResponsesValidationErrorItem$inboundSchema:
  z.ZodType<
    BackendSrcTaxEstimationResponsesValidationErrorItem,
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
export type BackendSrcTaxEstimationResponsesValidationErrorItem$Outbound = {
  type: string;
  loc: Array<string>;
  msg: string;
  input?: any | undefined;
  ctx: { [k: string]: any };
};

/** @internal */
export const BackendSrcTaxEstimationResponsesValidationErrorItem$outboundSchema:
  z.ZodType<
    BackendSrcTaxEstimationResponsesValidationErrorItem$Outbound,
    z.ZodTypeDef,
    BackendSrcTaxEstimationResponsesValidationErrorItem
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
export namespace BackendSrcTaxEstimationResponsesValidationErrorItem$ {
  /** @deprecated use `BackendSrcTaxEstimationResponsesValidationErrorItem$inboundSchema` instead. */
  export const inboundSchema =
    BackendSrcTaxEstimationResponsesValidationErrorItem$inboundSchema;
  /** @deprecated use `BackendSrcTaxEstimationResponsesValidationErrorItem$outboundSchema` instead. */
  export const outboundSchema =
    BackendSrcTaxEstimationResponsesValidationErrorItem$outboundSchema;
  /** @deprecated use `BackendSrcTaxEstimationResponsesValidationErrorItem$Outbound` instead. */
  export type Outbound =
    BackendSrcTaxEstimationResponsesValidationErrorItem$Outbound;
}

export function backendSrcTaxEstimationResponsesValidationErrorItemToJSON(
  backendSrcTaxEstimationResponsesValidationErrorItem:
    BackendSrcTaxEstimationResponsesValidationErrorItem,
): string {
  return JSON.stringify(
    BackendSrcTaxEstimationResponsesValidationErrorItem$outboundSchema.parse(
      backendSrcTaxEstimationResponsesValidationErrorItem,
    ),
  );
}

export function backendSrcTaxEstimationResponsesValidationErrorItemFromJSON(
  jsonString: string,
): SafeParseResult<
  BackendSrcTaxEstimationResponsesValidationErrorItem,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BackendSrcTaxEstimationResponsesValidationErrorItem$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BackendSrcTaxEstimationResponsesValidationErrorItem' from JSON`,
  );
}
