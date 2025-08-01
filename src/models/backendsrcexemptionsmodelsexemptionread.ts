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

export type BackendSrcExemptionsModelsExemptionRead = {
  exemptionType: ExemptionType;
  /**
   * The jurisdiction identifier for the exemption
   */
  jurisdiction?: string | undefined;
  countryCode?: CountryCodeEnum | undefined;
  /**
   * Start date for the exemption validity period (YYYY-MM-DD format)
   */
  startDate: RFCDate;
  /**
   * End date for the exemption validity period (YYYY-MM-DD format)
   */
  endDate?: string | undefined;
  /**
   * Unique identifier for the customer associated with the exemption
   */
  customerId?: string | undefined;
  /**
   * Unique identifier for the transaction
   *
   * @remarks
   *         associated with the exemption, if applicable.
   */
  transactionId?: string | undefined;
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
  fein?: string | undefined;
  /**
   * Sales tax ID for the exemption
   */
  salesTaxId?: string | undefined;
  status?: ExemptionStatus | undefined;
  id: string;
  customerName?: string | undefined;
  attachmentId?: string | undefined;
};

/** @internal */
export const BackendSrcExemptionsModelsExemptionRead$inboundSchema: z.ZodType<
  BackendSrcExemptionsModelsExemptionRead,
  z.ZodTypeDef,
  unknown
> = z.object({
  exemption_type: ExemptionType$inboundSchema,
  jurisdiction: z.string().optional(),
  country_code: CountryCodeEnum$inboundSchema.optional(),
  start_date: z.string().transform(v => new RFCDate(v)),
  end_date: z.string().optional(),
  customer_id: z.string().optional(),
  transaction_id: z.string().optional(),
  reseller: z.boolean().default(false),
  FEIN: z.string().optional(),
  sales_tax_id: z.string().optional(),
  status: ExemptionStatus$inboundSchema.optional(),
  id: z.string(),
  customer_name: z.string().optional(),
  attachment_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "exemption_type": "exemptionType",
    "country_code": "countryCode",
    "start_date": "startDate",
    "end_date": "endDate",
    "customer_id": "customerId",
    "transaction_id": "transactionId",
    "FEIN": "fein",
    "sales_tax_id": "salesTaxId",
    "customer_name": "customerName",
    "attachment_id": "attachmentId",
  });
});

/** @internal */
export type BackendSrcExemptionsModelsExemptionRead$Outbound = {
  exemption_type: string;
  jurisdiction?: string | undefined;
  country_code?: string | undefined;
  start_date: string;
  end_date?: string | undefined;
  customer_id?: string | undefined;
  transaction_id?: string | undefined;
  reseller: boolean;
  FEIN?: string | undefined;
  sales_tax_id?: string | undefined;
  status?: string | undefined;
  id: string;
  customer_name?: string | undefined;
  attachment_id?: string | undefined;
};

/** @internal */
export const BackendSrcExemptionsModelsExemptionRead$outboundSchema: z.ZodType<
  BackendSrcExemptionsModelsExemptionRead$Outbound,
  z.ZodTypeDef,
  BackendSrcExemptionsModelsExemptionRead
> = z.object({
  exemptionType: ExemptionType$outboundSchema,
  jurisdiction: z.string().optional(),
  countryCode: CountryCodeEnum$outboundSchema.optional(),
  startDate: z.instanceof(RFCDate).transform(v => v.toString()),
  endDate: z.string().optional(),
  customerId: z.string().optional(),
  transactionId: z.string().optional(),
  reseller: z.boolean().default(false),
  fein: z.string().optional(),
  salesTaxId: z.string().optional(),
  status: ExemptionStatus$outboundSchema.optional(),
  id: z.string(),
  customerName: z.string().optional(),
  attachmentId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    exemptionType: "exemption_type",
    countryCode: "country_code",
    startDate: "start_date",
    endDate: "end_date",
    customerId: "customer_id",
    transactionId: "transaction_id",
    fein: "FEIN",
    salesTaxId: "sales_tax_id",
    customerName: "customer_name",
    attachmentId: "attachment_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BackendSrcExemptionsModelsExemptionRead$ {
  /** @deprecated use `BackendSrcExemptionsModelsExemptionRead$inboundSchema` instead. */
  export const inboundSchema =
    BackendSrcExemptionsModelsExemptionRead$inboundSchema;
  /** @deprecated use `BackendSrcExemptionsModelsExemptionRead$outboundSchema` instead. */
  export const outboundSchema =
    BackendSrcExemptionsModelsExemptionRead$outboundSchema;
  /** @deprecated use `BackendSrcExemptionsModelsExemptionRead$Outbound` instead. */
  export type Outbound = BackendSrcExemptionsModelsExemptionRead$Outbound;
}

export function backendSrcExemptionsModelsExemptionReadToJSON(
  backendSrcExemptionsModelsExemptionRead:
    BackendSrcExemptionsModelsExemptionRead,
): string {
  return JSON.stringify(
    BackendSrcExemptionsModelsExemptionRead$outboundSchema.parse(
      backendSrcExemptionsModelsExemptionRead,
    ),
  );
}

export function backendSrcExemptionsModelsExemptionReadFromJSON(
  jsonString: string,
): SafeParseResult<
  BackendSrcExemptionsModelsExemptionRead,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      BackendSrcExemptionsModelsExemptionRead$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'BackendSrcExemptionsModelsExemptionRead' from JSON`,
  );
}
