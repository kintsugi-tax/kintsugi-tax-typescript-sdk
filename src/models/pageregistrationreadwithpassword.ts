/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  RegistrationReadWithPassword,
  RegistrationReadWithPassword$inboundSchema,
  RegistrationReadWithPassword$Outbound,
  RegistrationReadWithPassword$outboundSchema,
} from "./registrationreadwithpassword.js";

export type PageRegistrationReadWithPassword = {
  items: Array<RegistrationReadWithPassword>;
  total: number;
  page: number;
  size: number;
  pages?: number | undefined;
};

/** @internal */
export const PageRegistrationReadWithPassword$inboundSchema: z.ZodType<
  PageRegistrationReadWithPassword,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(RegistrationReadWithPassword$inboundSchema),
  total: z.number().int(),
  page: z.number().int(),
  size: z.number().int(),
  pages: z.number().int().optional(),
});

/** @internal */
export type PageRegistrationReadWithPassword$Outbound = {
  items: Array<RegistrationReadWithPassword$Outbound>;
  total: number;
  page: number;
  size: number;
  pages?: number | undefined;
};

/** @internal */
export const PageRegistrationReadWithPassword$outboundSchema: z.ZodType<
  PageRegistrationReadWithPassword$Outbound,
  z.ZodTypeDef,
  PageRegistrationReadWithPassword
> = z.object({
  items: z.array(RegistrationReadWithPassword$outboundSchema),
  total: z.number().int(),
  page: z.number().int(),
  size: z.number().int(),
  pages: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PageRegistrationReadWithPassword$ {
  /** @deprecated use `PageRegistrationReadWithPassword$inboundSchema` instead. */
  export const inboundSchema = PageRegistrationReadWithPassword$inboundSchema;
  /** @deprecated use `PageRegistrationReadWithPassword$outboundSchema` instead. */
  export const outboundSchema = PageRegistrationReadWithPassword$outboundSchema;
  /** @deprecated use `PageRegistrationReadWithPassword$Outbound` instead. */
  export type Outbound = PageRegistrationReadWithPassword$Outbound;
}

export function pageRegistrationReadWithPasswordToJSON(
  pageRegistrationReadWithPassword: PageRegistrationReadWithPassword,
): string {
  return JSON.stringify(
    PageRegistrationReadWithPassword$outboundSchema.parse(
      pageRegistrationReadWithPassword,
    ),
  );
}

export function pageRegistrationReadWithPasswordFromJSON(
  jsonString: string,
): SafeParseResult<PageRegistrationReadWithPassword, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PageRegistrationReadWithPassword$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PageRegistrationReadWithPassword' from JSON`,
  );
}
