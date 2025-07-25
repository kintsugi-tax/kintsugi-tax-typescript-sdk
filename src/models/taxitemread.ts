/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CurrencyEnum,
  CurrencyEnum$inboundSchema,
  CurrencyEnum$outboundSchema,
} from "./currencyenum.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  JurisdictionType,
  JurisdictionType$inboundSchema,
  JurisdictionType$outboundSchema,
} from "./jurisdictiontype.js";
import {
  TaxItemTypeEnum,
  TaxItemTypeEnum$inboundSchema,
  TaxItemTypeEnum$outboundSchema,
} from "./taxitemtypeenum.js";

export type TaxItemRead = {
  /**
   * The rule ID of the tax item
   */
  ruleId?: string | undefined;
  rate: string;
  amount: string;
  convertedAmount?: string | null | undefined;
  currency?: CurrencyEnum | null | undefined;
  destinationCurrency?: CurrencyEnum | null | undefined;
  externalId?: string | null | undefined;
  /**
   * Deprecated: use `jurisdiction_type` instead
   */
  name: string;
  type?: TaxItemTypeEnum | undefined;
  jurisdictionType?: JurisdictionType | null | undefined;
  jurisdictionName?: string | null | undefined;
};

/** @internal */
export const TaxItemRead$inboundSchema: z.ZodType<
  TaxItemRead,
  z.ZodTypeDef,
  unknown
> = z.object({
  rule_id: z.string().default("0000"),
  rate: z.string(),
  amount: z.string(),
  converted_amount: z.nullable(z.string()).optional(),
  currency: z.nullable(CurrencyEnum$inboundSchema).optional(),
  destination_currency: z.nullable(CurrencyEnum$inboundSchema).optional(),
  external_id: z.nullable(z.string()).optional(),
  name: z.string(),
  type: TaxItemTypeEnum$inboundSchema.optional(),
  jurisdiction_type: z.nullable(JurisdictionType$inboundSchema).optional(),
  jurisdiction_name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "rule_id": "ruleId",
    "converted_amount": "convertedAmount",
    "destination_currency": "destinationCurrency",
    "external_id": "externalId",
    "jurisdiction_type": "jurisdictionType",
    "jurisdiction_name": "jurisdictionName",
  });
});

/** @internal */
export type TaxItemRead$Outbound = {
  rule_id: string;
  rate: string;
  amount: string;
  converted_amount?: string | null | undefined;
  currency?: string | null | undefined;
  destination_currency?: string | null | undefined;
  external_id?: string | null | undefined;
  name: string;
  type?: string | undefined;
  jurisdiction_type?: string | null | undefined;
  jurisdiction_name?: string | null | undefined;
};

/** @internal */
export const TaxItemRead$outboundSchema: z.ZodType<
  TaxItemRead$Outbound,
  z.ZodTypeDef,
  TaxItemRead
> = z.object({
  ruleId: z.string().default("0000"),
  rate: z.string(),
  amount: z.string(),
  convertedAmount: z.nullable(z.string()).optional(),
  currency: z.nullable(CurrencyEnum$outboundSchema).optional(),
  destinationCurrency: z.nullable(CurrencyEnum$outboundSchema).optional(),
  externalId: z.nullable(z.string()).optional(),
  name: z.string(),
  type: TaxItemTypeEnum$outboundSchema.optional(),
  jurisdictionType: z.nullable(JurisdictionType$outboundSchema).optional(),
  jurisdictionName: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    ruleId: "rule_id",
    convertedAmount: "converted_amount",
    destinationCurrency: "destination_currency",
    externalId: "external_id",
    jurisdictionType: "jurisdiction_type",
    jurisdictionName: "jurisdiction_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxItemRead$ {
  /** @deprecated use `TaxItemRead$inboundSchema` instead. */
  export const inboundSchema = TaxItemRead$inboundSchema;
  /** @deprecated use `TaxItemRead$outboundSchema` instead. */
  export const outboundSchema = TaxItemRead$outboundSchema;
  /** @deprecated use `TaxItemRead$Outbound` instead. */
  export type Outbound = TaxItemRead$Outbound;
}

export function taxItemReadToJSON(taxItemRead: TaxItemRead): string {
  return JSON.stringify(TaxItemRead$outboundSchema.parse(taxItemRead));
}

export function taxItemReadFromJSON(
  jsonString: string,
): SafeParseResult<TaxItemRead, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxItemRead$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxItemRead' from JSON`,
  );
}
