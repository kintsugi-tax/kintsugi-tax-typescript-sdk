/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetCustomersV1Request = {
  /**
   * Search term to filter customers by name or other details
   */
  searchQuery?: string | undefined;
  /**
   * Country code in ISO 3166-1 alpha-2 format (e.g., 'US')
   */
  country?: Array<models.CountryCodeEnum> | undefined;
  /**
   * State or province code to filter customers
   */
  state?: string | undefined;
  /**
   * Filter customers by source (comma-separated)
   */
  sourceIn?: string | undefined;
  /**
   * Comma-separated list of fields to sort results by.
   */
  orderBy?: string | undefined;
  /**
   * Page number
   */
  page?: number | undefined;
  /**
   * Page size
   */
  size?: number | undefined;
};

/** @internal */
export const GetCustomersV1Request$inboundSchema: z.ZodType<
  GetCustomersV1Request,
  z.ZodTypeDef,
  unknown
> = z.object({
  search_query: z.string().optional(),
  country: z.array(models.CountryCodeEnum$inboundSchema).optional(),
  state: z.string().optional(),
  source__in: z.string().optional(),
  order_by: z.string().optional(),
  page: z.number().int().default(1),
  size: z.number().int().default(50),
}).transform((v) => {
  return remap$(v, {
    "search_query": "searchQuery",
    "source__in": "sourceIn",
    "order_by": "orderBy",
  });
});

/** @internal */
export type GetCustomersV1Request$Outbound = {
  search_query?: string | undefined;
  country?: Array<string> | undefined;
  state?: string | undefined;
  source__in?: string | undefined;
  order_by?: string | undefined;
  page: number;
  size: number;
};

/** @internal */
export const GetCustomersV1Request$outboundSchema: z.ZodType<
  GetCustomersV1Request$Outbound,
  z.ZodTypeDef,
  GetCustomersV1Request
> = z.object({
  searchQuery: z.string().optional(),
  country: z.array(models.CountryCodeEnum$outboundSchema).optional(),
  state: z.string().optional(),
  sourceIn: z.string().optional(),
  orderBy: z.string().optional(),
  page: z.number().int().default(1),
  size: z.number().int().default(50),
}).transform((v) => {
  return remap$(v, {
    searchQuery: "search_query",
    sourceIn: "source__in",
    orderBy: "order_by",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCustomersV1Request$ {
  /** @deprecated use `GetCustomersV1Request$inboundSchema` instead. */
  export const inboundSchema = GetCustomersV1Request$inboundSchema;
  /** @deprecated use `GetCustomersV1Request$outboundSchema` instead. */
  export const outboundSchema = GetCustomersV1Request$outboundSchema;
  /** @deprecated use `GetCustomersV1Request$Outbound` instead. */
  export type Outbound = GetCustomersV1Request$Outbound;
}

export function getCustomersV1RequestToJSON(
  getCustomersV1Request: GetCustomersV1Request,
): string {
  return JSON.stringify(
    GetCustomersV1Request$outboundSchema.parse(getCustomersV1Request),
  );
}

export function getCustomersV1RequestFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomersV1Request, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomersV1Request$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomersV1Request' from JSON`,
  );
}
