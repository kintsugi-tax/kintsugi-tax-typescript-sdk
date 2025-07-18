/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type GetExemptionsV1ExemptionsGetSecurity = {
  apiKeyHeader?: string | undefined;
  httpBearer?: string | undefined;
};

export type CountryCode = models.CountryCodeEnum | string;

export type GetExemptionsV1ExemptionsGetRequest = {
  /**
   * Search term to filter exemptions by exemption ID, customer name, or customer email
   */
  searchQuery?: string | null | undefined;
  /**
   * Filter exemptions by their status
   */
  statusIn?: string | null | undefined;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  countryCode?: Array<models.CountryCodeEnum | string> | null | undefined;
  /**
   * Jurisdiction identifier
   */
  jurisdiction?: string | null | undefined;
  /**
   * Start date for filtering exemptions
   */
  startDate?: RFCDate | null | undefined;
  /**
   * End date for filtering exemptions
   */
  endDate?: RFCDate | null | undefined;
  /**
   * Customer ID to filter exemptions
   */
  customerId?: string | null | undefined;
  /**
   * Transaction ID to filter exemptions
   */
  transactionId?: string | null | undefined;
  /**
   * Fields to sort by (comma-separated)
   */
  orderBy?: string | null | undefined;
  /**
   * Page number
   */
  page?: number | undefined;
  /**
   * Page size
   */
  size?: number | undefined;
  /**
   * The unique identifier for the organization making the request
   */
  xOrganizationId: string | null;
};

/** @internal */
export const GetExemptionsV1ExemptionsGetSecurity$inboundSchema: z.ZodType<
  GetExemptionsV1ExemptionsGetSecurity,
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
export type GetExemptionsV1ExemptionsGetSecurity$Outbound = {
  APIKeyHeader?: string | undefined;
  HTTPBearer?: string | undefined;
};

/** @internal */
export const GetExemptionsV1ExemptionsGetSecurity$outboundSchema: z.ZodType<
  GetExemptionsV1ExemptionsGetSecurity$Outbound,
  z.ZodTypeDef,
  GetExemptionsV1ExemptionsGetSecurity
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
export namespace GetExemptionsV1ExemptionsGetSecurity$ {
  /** @deprecated use `GetExemptionsV1ExemptionsGetSecurity$inboundSchema` instead. */
  export const inboundSchema =
    GetExemptionsV1ExemptionsGetSecurity$inboundSchema;
  /** @deprecated use `GetExemptionsV1ExemptionsGetSecurity$outboundSchema` instead. */
  export const outboundSchema =
    GetExemptionsV1ExemptionsGetSecurity$outboundSchema;
  /** @deprecated use `GetExemptionsV1ExemptionsGetSecurity$Outbound` instead. */
  export type Outbound = GetExemptionsV1ExemptionsGetSecurity$Outbound;
}

export function getExemptionsV1ExemptionsGetSecurityToJSON(
  getExemptionsV1ExemptionsGetSecurity: GetExemptionsV1ExemptionsGetSecurity,
): string {
  return JSON.stringify(
    GetExemptionsV1ExemptionsGetSecurity$outboundSchema.parse(
      getExemptionsV1ExemptionsGetSecurity,
    ),
  );
}

export function getExemptionsV1ExemptionsGetSecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetExemptionsV1ExemptionsGetSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetExemptionsV1ExemptionsGetSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetExemptionsV1ExemptionsGetSecurity' from JSON`,
  );
}

/** @internal */
export const CountryCode$inboundSchema: z.ZodType<
  CountryCode,
  z.ZodTypeDef,
  unknown
> = z.union([models.CountryCodeEnum$inboundSchema, z.string()]);

/** @internal */
export type CountryCode$Outbound = string | string;

/** @internal */
export const CountryCode$outboundSchema: z.ZodType<
  CountryCode$Outbound,
  z.ZodTypeDef,
  CountryCode
> = z.union([models.CountryCodeEnum$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CountryCode$ {
  /** @deprecated use `CountryCode$inboundSchema` instead. */
  export const inboundSchema = CountryCode$inboundSchema;
  /** @deprecated use `CountryCode$outboundSchema` instead. */
  export const outboundSchema = CountryCode$outboundSchema;
  /** @deprecated use `CountryCode$Outbound` instead. */
  export type Outbound = CountryCode$Outbound;
}

export function countryCodeToJSON(countryCode: CountryCode): string {
  return JSON.stringify(CountryCode$outboundSchema.parse(countryCode));
}

export function countryCodeFromJSON(
  jsonString: string,
): SafeParseResult<CountryCode, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CountryCode$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CountryCode' from JSON`,
  );
}

/** @internal */
export const GetExemptionsV1ExemptionsGetRequest$inboundSchema: z.ZodType<
  GetExemptionsV1ExemptionsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  search_query: z.nullable(z.string()).optional(),
  status__in: z.nullable(z.string()).optional(),
  country_code: z.nullable(
    z.array(z.union([models.CountryCodeEnum$inboundSchema, z.string()])),
  ).optional(),
  jurisdiction: z.nullable(z.string()).optional(),
  start_date: z.nullable(z.string().transform(v => new RFCDate(v))).optional(),
  end_date: z.nullable(z.string().transform(v => new RFCDate(v))).optional(),
  customer_id: z.nullable(z.string()).optional(),
  transaction_id: z.nullable(z.string()).optional(),
  order_by: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  size: z.number().int().default(50),
  "x-organization-id": z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "search_query": "searchQuery",
    "status__in": "statusIn",
    "country_code": "countryCode",
    "start_date": "startDate",
    "end_date": "endDate",
    "customer_id": "customerId",
    "transaction_id": "transactionId",
    "order_by": "orderBy",
    "x-organization-id": "xOrganizationId",
  });
});

/** @internal */
export type GetExemptionsV1ExemptionsGetRequest$Outbound = {
  search_query?: string | null | undefined;
  status__in?: string | null | undefined;
  country_code?: Array<string | string> | null | undefined;
  jurisdiction?: string | null | undefined;
  start_date?: string | null | undefined;
  end_date?: string | null | undefined;
  customer_id?: string | null | undefined;
  transaction_id?: string | null | undefined;
  order_by?: string | null | undefined;
  page: number;
  size: number;
  "x-organization-id": string | null;
};

/** @internal */
export const GetExemptionsV1ExemptionsGetRequest$outboundSchema: z.ZodType<
  GetExemptionsV1ExemptionsGetRequest$Outbound,
  z.ZodTypeDef,
  GetExemptionsV1ExemptionsGetRequest
> = z.object({
  searchQuery: z.nullable(z.string()).optional(),
  statusIn: z.nullable(z.string()).optional(),
  countryCode: z.nullable(
    z.array(z.union([models.CountryCodeEnum$outboundSchema, z.string()])),
  ).optional(),
  jurisdiction: z.nullable(z.string()).optional(),
  startDate: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  endDate: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  customerId: z.nullable(z.string()).optional(),
  transactionId: z.nullable(z.string()).optional(),
  orderBy: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  size: z.number().int().default(50),
  xOrganizationId: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    searchQuery: "search_query",
    statusIn: "status__in",
    countryCode: "country_code",
    startDate: "start_date",
    endDate: "end_date",
    customerId: "customer_id",
    transactionId: "transaction_id",
    orderBy: "order_by",
    xOrganizationId: "x-organization-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetExemptionsV1ExemptionsGetRequest$ {
  /** @deprecated use `GetExemptionsV1ExemptionsGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetExemptionsV1ExemptionsGetRequest$inboundSchema;
  /** @deprecated use `GetExemptionsV1ExemptionsGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetExemptionsV1ExemptionsGetRequest$outboundSchema;
  /** @deprecated use `GetExemptionsV1ExemptionsGetRequest$Outbound` instead. */
  export type Outbound = GetExemptionsV1ExemptionsGetRequest$Outbound;
}

export function getExemptionsV1ExemptionsGetRequestToJSON(
  getExemptionsV1ExemptionsGetRequest: GetExemptionsV1ExemptionsGetRequest,
): string {
  return JSON.stringify(
    GetExemptionsV1ExemptionsGetRequest$outboundSchema.parse(
      getExemptionsV1ExemptionsGetRequest,
    ),
  );
}

export function getExemptionsV1ExemptionsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetExemptionsV1ExemptionsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      GetExemptionsV1ExemptionsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetExemptionsV1ExemptionsGetRequest' from JSON`,
  );
}
