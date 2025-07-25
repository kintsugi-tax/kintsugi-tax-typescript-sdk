/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const TaxItemTypeEnum = {
  Imported: "IMPORTED",
  Calculated: "CALCULATED",
} as const;
export type TaxItemTypeEnum = ClosedEnum<typeof TaxItemTypeEnum>;

/** @internal */
export const TaxItemTypeEnum$inboundSchema: z.ZodNativeEnum<
  typeof TaxItemTypeEnum
> = z.nativeEnum(TaxItemTypeEnum);

/** @internal */
export const TaxItemTypeEnum$outboundSchema: z.ZodNativeEnum<
  typeof TaxItemTypeEnum
> = TaxItemTypeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TaxItemTypeEnum$ {
  /** @deprecated use `TaxItemTypeEnum$inboundSchema` instead. */
  export const inboundSchema = TaxItemTypeEnum$inboundSchema;
  /** @deprecated use `TaxItemTypeEnum$outboundSchema` instead. */
  export const outboundSchema = TaxItemTypeEnum$outboundSchema;
}
