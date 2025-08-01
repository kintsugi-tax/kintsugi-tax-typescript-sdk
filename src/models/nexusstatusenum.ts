/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const NexusStatusEnum = {
  NeedsRerun: "NEEDS_RERUN",
  UpToDate: "UP_TO_DATE",
  NotReady: "NOT_READY",
} as const;
export type NexusStatusEnum = ClosedEnum<typeof NexusStatusEnum>;

/** @internal */
export const NexusStatusEnum$inboundSchema: z.ZodNativeEnum<
  typeof NexusStatusEnum
> = z.nativeEnum(NexusStatusEnum);

/** @internal */
export const NexusStatusEnum$outboundSchema: z.ZodNativeEnum<
  typeof NexusStatusEnum
> = NexusStatusEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NexusStatusEnum$ {
  /** @deprecated use `NexusStatusEnum$inboundSchema` instead. */
  export const inboundSchema = NexusStatusEnum$inboundSchema;
  /** @deprecated use `NexusStatusEnum$outboundSchema` instead. */
  export const outboundSchema = NexusStatusEnum$outboundSchema;
}
