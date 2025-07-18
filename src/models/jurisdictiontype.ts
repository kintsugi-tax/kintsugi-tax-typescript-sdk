/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const JurisdictionType = {
  Country: "COUNTRY",
  Federal: "FEDERAL",
  State: "STATE",
  County: "COUNTY",
  City: "CITY",
  Special: "SPECIAL",
  Other: "OTHER",
  Hybrid: "HYBRID",
} as const;
export type JurisdictionType = ClosedEnum<typeof JurisdictionType>;

/** @internal */
export const JurisdictionType$inboundSchema: z.ZodNativeEnum<
  typeof JurisdictionType
> = z.nativeEnum(JurisdictionType);

/** @internal */
export const JurisdictionType$outboundSchema: z.ZodNativeEnum<
  typeof JurisdictionType
> = JurisdictionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JurisdictionType$ {
  /** @deprecated use `JurisdictionType$inboundSchema` instead. */
  export const inboundSchema = JurisdictionType$inboundSchema;
  /** @deprecated use `JurisdictionType$outboundSchema` instead. */
  export const outboundSchema = JurisdictionType$outboundSchema;
}
