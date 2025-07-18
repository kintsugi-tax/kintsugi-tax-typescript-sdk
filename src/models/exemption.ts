/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { RFCDate } from "../types/rfcdate.js";
import {
  CountryCodeEnum,
  CountryCodeEnum$inboundSchema,
  CountryCodeEnum$outboundSchema,
} from "./countrycodeenum.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  ExemptionStatus,
  ExemptionStatus$inboundSchema,
  ExemptionStatus$outboundSchema,
} from "./exemptionstatus.js";
import {
  ExemptionType,
  ExemptionType$inboundSchema,
  ExemptionType$outboundSchema,
} from "./exemptiontype.js";

export type Exemption = {
  /**
   * Unique identifier for the exemption
   */
  id?: string | undefined;
  /**
   * Timestamp when transaction was created in Kintsugi.
   */
  createdAt?: Date | undefined;
  /**
   * Timestamp when transaction was last updated.
   */
  updatedAt?: Date | null | undefined;
  exemptionType: ExemptionType;
  /**
   * The jurisdiction identifier for the exemption
   */
  jurisdiction?: string | null | undefined;
  /**
   * Country code in ISO 3166-1 alpha-2 format (e.g., 'US')
   */
  countryCode?: CountryCodeEnum | null | undefined;
  /**
   * Start date for the exemption validity period (YYYY-MM-DD format)
   */
  startDate: RFCDate;
  /**
   * End date for the exemption validity period (YYYY-MM-DD format)
   */
  endDate?: RFCDate | null | undefined;
  /**
   * Unique identifier for the customer associated with the exemption
   */
  customerId?: string | null | undefined;
  /**
   * Unique identifier for the transaction
   *
   * @remarks
   *         associated with the exemption, if applicable.
   */
  transactionId?: string | null | undefined;
  /**
   * Indicates whether the exemption is for a reseller
   */
  reseller?: boolean | undefined;
  /**
   * Federal Employer Identification Number
   *
   * @remarks
   *         associated with the exemption.
   */
  fein?: string | null | undefined;
  /**
   * Sales tax ID for the exemption
   */
  salesTaxId?: string | null | undefined;
  /**
   * The status of the exemption.
   *
   * @remarks
   *         Defaults to ACTIVE if not provided.
   */
  status?: ExemptionStatus | null | undefined;
  organizationId?: string | undefined;
};

/** @internal */
export const Exemption$inboundSchema: z.ZodType<
  Exemption,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  exemption_type: ExemptionType$inboundSchema,
  jurisdiction: z.nullable(z.string()).optional(),
  country_code: z.nullable(CountryCodeEnum$inboundSchema).optional(),
  start_date: z.string().transform(v => new RFCDate(v)),
  end_date: z.nullable(z.string().transform(v => new RFCDate(v))).optional(),
  customer_id: z.nullable(z.string()).optional(),
  transaction_id: z.nullable(z.string()).optional(),
  reseller: z.boolean().default(false),
  FEIN: z.nullable(z.string()).optional(),
  sales_tax_id: z.nullable(z.string()).optional(),
  status: z.nullable(ExemptionStatus$inboundSchema).optional(),
  organization_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "exemption_type": "exemptionType",
    "country_code": "countryCode",
    "start_date": "startDate",
    "end_date": "endDate",
    "customer_id": "customerId",
    "transaction_id": "transactionId",
    "FEIN": "fein",
    "sales_tax_id": "salesTaxId",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type Exemption$Outbound = {
  id?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | null | undefined;
  exemption_type: string;
  jurisdiction?: string | null | undefined;
  country_code?: string | null | undefined;
  start_date: string;
  end_date?: string | null | undefined;
  customer_id?: string | null | undefined;
  transaction_id?: string | null | undefined;
  reseller: boolean;
  FEIN?: string | null | undefined;
  sales_tax_id?: string | null | undefined;
  status?: string | null | undefined;
  organization_id?: string | undefined;
};

/** @internal */
export const Exemption$outboundSchema: z.ZodType<
  Exemption$Outbound,
  z.ZodTypeDef,
  Exemption
> = z.object({
  id: z.string().optional(),
  createdAt: z.date().transform(v => v.toISOString()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  exemptionType: ExemptionType$outboundSchema,
  jurisdiction: z.nullable(z.string()).optional(),
  countryCode: z.nullable(CountryCodeEnum$outboundSchema).optional(),
  startDate: z.instanceof(RFCDate).transform(v => v.toString()),
  endDate: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  customerId: z.nullable(z.string()).optional(),
  transactionId: z.nullable(z.string()).optional(),
  reseller: z.boolean().default(false),
  fein: z.nullable(z.string()).optional(),
  salesTaxId: z.nullable(z.string()).optional(),
  status: z.nullable(ExemptionStatus$outboundSchema).optional(),
  organizationId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
    exemptionType: "exemption_type",
    countryCode: "country_code",
    startDate: "start_date",
    endDate: "end_date",
    customerId: "customer_id",
    transactionId: "transaction_id",
    fein: "FEIN",
    salesTaxId: "sales_tax_id",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Exemption$ {
  /** @deprecated use `Exemption$inboundSchema` instead. */
  export const inboundSchema = Exemption$inboundSchema;
  /** @deprecated use `Exemption$outboundSchema` instead. */
  export const outboundSchema = Exemption$outboundSchema;
  /** @deprecated use `Exemption$Outbound` instead. */
  export type Outbound = Exemption$Outbound;
}

export function exemptionToJSON(exemption: Exemption): string {
  return JSON.stringify(Exemption$outboundSchema.parse(exemption));
}

export function exemptionFromJSON(
  jsonString: string,
): SafeParseResult<Exemption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Exemption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Exemption' from JSON`,
  );
}
