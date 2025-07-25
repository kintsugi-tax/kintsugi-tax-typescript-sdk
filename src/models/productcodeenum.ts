/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../types/enums.js";

export const ProductCodeEnum = {
  Code0000: "CODE_0000",
  Code1001: "CODE_1001",
  Code1002: "CODE_1002",
  Code1003: "CODE_1003",
  Code1004: "CODE_1004",
  Code1005: "CODE_1005",
  Code1006: "CODE_1006",
  Code1007: "CODE_1007",
  Code1008: "CODE_1008",
  Code1009: "CODE_1009",
  Code2001: "CODE_2001",
  Code2002: "CODE_2002",
  Code2003: "CODE_2003",
  Code2004: "CODE_2004",
  Code2005: "CODE_2005",
  Code2006: "CODE_2006",
  Code2007: "CODE_2007",
  Code2008: "CODE_2008",
  Code2009: "CODE_2009",
  Code2010: "CODE_2010",
  Code2011: "CODE_2011",
  Code2012: "CODE_2012",
  Code3001: "CODE_3001",
  Code3002: "CODE_3002",
  Code3003: "CODE_3003",
  Code3004: "CODE_3004",
  Code3005: "CODE_3005",
  Code3006: "CODE_3006",
  Code3007: "CODE_3007",
  Code3008: "CODE_3008",
  Code3009: "CODE_3009",
  Code3010: "CODE_3010",
  Code3011: "CODE_3011",
  Code3012: "CODE_3012",
  Code3013: "CODE_3013",
  Code3014: "CODE_3014",
  Code3015: "CODE_3015",
  Code3016: "CODE_3016",
  Code3017: "CODE_3017",
  Code3018: "CODE_3018",
  Code3019: "CODE_3019",
  Code3020: "CODE_3020",
  Code3021: "CODE_3021",
  Code3022: "CODE_3022",
  Code3023: "CODE_3023",
  Code3024: "CODE_3024",
  Code3025: "CODE_3025",
  Code3026: "CODE_3026",
  Code3027: "CODE_3027",
  Code3028: "CODE_3028",
  Code3029: "CODE_3029",
  Code3030: "CODE_3030",
  Code9001: "CODE_9001",
  Code9002: "CODE_9002",
  Code9003: "CODE_9003",
  Code9004: "CODE_9004",
  Code9005: "CODE_9005",
  Code9006: "CODE_9006",
  Code9007: "CODE_9007",
  Code9008: "CODE_9008",
  Code9009: "CODE_9009",
  Code9010: "CODE_9010",
} as const;
export type ProductCodeEnum = ClosedEnum<typeof ProductCodeEnum>;

/** @internal */
export const ProductCodeEnum$inboundSchema: z.ZodNativeEnum<
  typeof ProductCodeEnum
> = z.nativeEnum(ProductCodeEnum);

/** @internal */
export const ProductCodeEnum$outboundSchema: z.ZodNativeEnum<
  typeof ProductCodeEnum
> = ProductCodeEnum$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductCodeEnum$ {
  /** @deprecated use `ProductCodeEnum$inboundSchema` instead. */
  export const inboundSchema = ProductCodeEnum$inboundSchema;
  /** @deprecated use `ProductCodeEnum$outboundSchema` instead. */
  export const outboundSchema = ProductCodeEnum$outboundSchema;
}
