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

export type Rate = number | string;

export type TaxItemBuilderAmount = number | string;

export type TaxItemBuilderConvertedAmount = number | string;

export type TaxItemBuilder = {
  /**
   * The rule ID of the tax item
   */
  ruleId?: string | undefined;
  rate: number | string;
  amount: number | string;
  convertedAmount?: number | string | null | undefined;
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
  organizationId: string | null;
};

/** @internal */
export const Rate$inboundSchema: z.ZodType<Rate, z.ZodTypeDef, unknown> = z
  .union([z.number(), z.string()]);

/** @internal */
export type Rate$Outbound = number | string;

/** @internal */
export const Rate$outboundSchema: z.ZodType<Rate$Outbound, z.ZodTypeDef, Rate> =
  z.union([z.number(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Rate$ {
  /** @deprecated use `Rate$inboundSchema` instead. */
  export const inboundSchema = Rate$inboundSchema;
  /** @deprecated use `Rate$outboundSchema` instead. */
  export const outboundSchema = Rate$outboundSchema;
  /** @deprecated use `Rate$Outbound` instead. */
  export type Outbound = Rate$Outbound;
}

export function rateToJSON(rate: Rate): string {
  return JSON.stringify(Rate$outboundSchema.parse(rate));
}

export function rateFromJSON(
  jsonString: string,
): SafeParseResult<Rate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Rate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Rate' from JSON`,
  );
}

/** @internal */
export const TaxItemBuilderAmount$inboundSchema: z.ZodType<
  TaxItemBuilderAmount,
  z.ZodTypeDef,
  unknown
> = z.union([z.number(), z.string()]);

/** @internal */
export type TaxItemBuilderAmount$Outbound = number | string;

/** @internal */
export const TaxItemBuilderAmount$outboundSchema: z.ZodType<
  TaxItemBuilderAmount$Outbound,
  z.ZodTypeDef,
  TaxItemBuilderAmount
> = z.union([z.number(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxItemBuilderAmount$ {
  /** @deprecated use `TaxItemBuilderAmount$inboundSchema` instead. */
  export const inboundSchema = TaxItemBuilderAmount$inboundSchema;
  /** @deprecated use `TaxItemBuilderAmount$outboundSchema` instead. */
  export const outboundSchema = TaxItemBuilderAmount$outboundSchema;
  /** @deprecated use `TaxItemBuilderAmount$Outbound` instead. */
  export type Outbound = TaxItemBuilderAmount$Outbound;
}

export function taxItemBuilderAmountToJSON(
  taxItemBuilderAmount: TaxItemBuilderAmount,
): string {
  return JSON.stringify(
    TaxItemBuilderAmount$outboundSchema.parse(taxItemBuilderAmount),
  );
}

export function taxItemBuilderAmountFromJSON(
  jsonString: string,
): SafeParseResult<TaxItemBuilderAmount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxItemBuilderAmount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxItemBuilderAmount' from JSON`,
  );
}

/** @internal */
export const TaxItemBuilderConvertedAmount$inboundSchema: z.ZodType<
  TaxItemBuilderConvertedAmount,
  z.ZodTypeDef,
  unknown
> = z.union([z.number(), z.string()]);

/** @internal */
export type TaxItemBuilderConvertedAmount$Outbound = number | string;

/** @internal */
export const TaxItemBuilderConvertedAmount$outboundSchema: z.ZodType<
  TaxItemBuilderConvertedAmount$Outbound,
  z.ZodTypeDef,
  TaxItemBuilderConvertedAmount
> = z.union([z.number(), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxItemBuilderConvertedAmount$ {
  /** @deprecated use `TaxItemBuilderConvertedAmount$inboundSchema` instead. */
  export const inboundSchema = TaxItemBuilderConvertedAmount$inboundSchema;
  /** @deprecated use `TaxItemBuilderConvertedAmount$outboundSchema` instead. */
  export const outboundSchema = TaxItemBuilderConvertedAmount$outboundSchema;
  /** @deprecated use `TaxItemBuilderConvertedAmount$Outbound` instead. */
  export type Outbound = TaxItemBuilderConvertedAmount$Outbound;
}

export function taxItemBuilderConvertedAmountToJSON(
  taxItemBuilderConvertedAmount: TaxItemBuilderConvertedAmount,
): string {
  return JSON.stringify(
    TaxItemBuilderConvertedAmount$outboundSchema.parse(
      taxItemBuilderConvertedAmount,
    ),
  );
}

export function taxItemBuilderConvertedAmountFromJSON(
  jsonString: string,
): SafeParseResult<TaxItemBuilderConvertedAmount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxItemBuilderConvertedAmount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxItemBuilderConvertedAmount' from JSON`,
  );
}

/** @internal */
export const TaxItemBuilder$inboundSchema: z.ZodType<
  TaxItemBuilder,
  z.ZodTypeDef,
  unknown
> = z.object({
  rule_id: z.string().default("0000"),
  rate: z.union([z.number(), z.string()]),
  amount: z.union([z.number(), z.string()]),
  converted_amount: z.nullable(z.union([z.number(), z.string()])).optional(),
  currency: z.nullable(CurrencyEnum$inboundSchema).optional(),
  destination_currency: z.nullable(CurrencyEnum$inboundSchema).optional(),
  external_id: z.nullable(z.string()).optional(),
  name: z.string(),
  type: TaxItemTypeEnum$inboundSchema.optional(),
  jurisdiction_type: z.nullable(JurisdictionType$inboundSchema).optional(),
  jurisdiction_name: z.nullable(z.string()).optional(),
  organization_id: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "rule_id": "ruleId",
    "converted_amount": "convertedAmount",
    "destination_currency": "destinationCurrency",
    "external_id": "externalId",
    "jurisdiction_type": "jurisdictionType",
    "jurisdiction_name": "jurisdictionName",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type TaxItemBuilder$Outbound = {
  rule_id: string;
  rate: number | string;
  amount: number | string;
  converted_amount?: number | string | null | undefined;
  currency?: string | null | undefined;
  destination_currency?: string | null | undefined;
  external_id?: string | null | undefined;
  name: string;
  type?: string | undefined;
  jurisdiction_type?: string | null | undefined;
  jurisdiction_name?: string | null | undefined;
  organization_id: string | null;
};

/** @internal */
export const TaxItemBuilder$outboundSchema: z.ZodType<
  TaxItemBuilder$Outbound,
  z.ZodTypeDef,
  TaxItemBuilder
> = z.object({
  ruleId: z.string().default("0000"),
  rate: z.union([z.number(), z.string()]),
  amount: z.union([z.number(), z.string()]),
  convertedAmount: z.nullable(z.union([z.number(), z.string()])).optional(),
  currency: z.nullable(CurrencyEnum$outboundSchema).optional(),
  destinationCurrency: z.nullable(CurrencyEnum$outboundSchema).optional(),
  externalId: z.nullable(z.string()).optional(),
  name: z.string(),
  type: TaxItemTypeEnum$outboundSchema.optional(),
  jurisdictionType: z.nullable(JurisdictionType$outboundSchema).optional(),
  jurisdictionName: z.nullable(z.string()).optional(),
  organizationId: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    ruleId: "rule_id",
    convertedAmount: "converted_amount",
    destinationCurrency: "destination_currency",
    externalId: "external_id",
    jurisdictionType: "jurisdiction_type",
    jurisdictionName: "jurisdiction_name",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxItemBuilder$ {
  /** @deprecated use `TaxItemBuilder$inboundSchema` instead. */
  export const inboundSchema = TaxItemBuilder$inboundSchema;
  /** @deprecated use `TaxItemBuilder$outboundSchema` instead. */
  export const outboundSchema = TaxItemBuilder$outboundSchema;
  /** @deprecated use `TaxItemBuilder$Outbound` instead. */
  export type Outbound = TaxItemBuilder$Outbound;
}

export function taxItemBuilderToJSON(taxItemBuilder: TaxItemBuilder): string {
  return JSON.stringify(TaxItemBuilder$outboundSchema.parse(taxItemBuilder));
}

export function taxItemBuilderFromJSON(
  jsonString: string,
): SafeParseResult<TaxItemBuilder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TaxItemBuilder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TaxItemBuilder' from JSON`,
  );
}
