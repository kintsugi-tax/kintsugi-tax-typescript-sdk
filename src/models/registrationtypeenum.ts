/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const RegistrationTypeEnum = {
  EuOss: "EU_OSS",
  Other: "OTHER",
} as const;
export type RegistrationTypeEnum = ClosedEnum<typeof RegistrationTypeEnum>;

/** @internal */
export const RegistrationTypeEnum$inboundSchema: z.ZodNativeEnum<
  typeof RegistrationTypeEnum
> = z.nativeEnum(RegistrationTypeEnum);

/** @internal */
export const RegistrationTypeEnum$outboundSchema: z.ZodNativeEnum<
  typeof RegistrationTypeEnum
> = RegistrationTypeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RegistrationTypeEnum$ {
  /** @deprecated use `RegistrationTypeEnum$inboundSchema` instead. */
  export const inboundSchema = RegistrationTypeEnum$inboundSchema;
  /** @deprecated use `RegistrationTypeEnum$outboundSchema` instead. */
  export const outboundSchema = RegistrationTypeEnum$outboundSchema;
}
