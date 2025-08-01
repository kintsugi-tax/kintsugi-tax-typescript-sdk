/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { ClosedEnum } from "../types/enums.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CurrencyEnum,
  CurrencyEnum$inboundSchema,
  CurrencyEnum$outboundSchema,
} from "./currencyenum.js";
import {
  CustomerBasePublic,
  CustomerBasePublic$inboundSchema,
  CustomerBasePublic$Outbound,
  CustomerBasePublic$outboundSchema,
} from "./customerbasepublic.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  SourceEnum,
  SourceEnum$inboundSchema,
  SourceEnum$outboundSchema,
} from "./sourceenum.js";
import {
  TransactionItemEstimateBase,
  TransactionItemEstimateBase$inboundSchema,
  TransactionItemEstimateBase$Outbound,
  TransactionItemEstimateBase$outboundSchema,
} from "./transactionitemestimatebase.js";

/**
 * Type of the address. Must be either
 *
 * @remarks
 *                         SHIP_TO or BILL_TO.
 */
export const TransactionEstimatePublicRequestType = {
  ShipTo: "SHIP_TO",
  BillTo: "BILL_TO",
} as const;
/**
 * Type of the address. Must be either
 *
 * @remarks
 *                         SHIP_TO or BILL_TO.
 */
export type TransactionEstimatePublicRequestType = ClosedEnum<
  typeof TransactionEstimatePublicRequestType
>;

export type TransactionEstimatePublicRequestAddress = {
  /**
   * Type of the address. Must be either
   *
   * @remarks
   *                         SHIP_TO or BILL_TO.
   */
  type: TransactionEstimatePublicRequestType;
  /**
   * Phone number associated with the customer.
   */
  phone?: string | undefined;
  /**
   * Primary street address of the customer.
   */
  street1?: string | undefined;
  /**
   * Additional street address details, such as an apartment or suite number.
   */
  street2?: string | undefined;
  /**
   * City where the customer resides.
   */
  city?: string | undefined;
  /**
   * County or district of the customer.
   */
  county?: string | undefined;
  /**
   * State or province of the address.
   */
  state: string;
  /**
   * Postal code of the address.
   */
  postalCode: string;
  /**
   * Country of the address.
   */
  country: string;
  /**
   * Complete address string of the customer, which can be used as an alternative to individual fields.
   */
  fullAddress?: string | undefined;
  /**
   * Status of the address. Deprecated and ignored.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  status?: string | undefined;
};

/**
 * Public request model for tax estimation API documentation.
 *
 * @remarks
 * This model excludes internal fields like enriched_fields that should not be exposed in API docs.
 */
export type TransactionEstimatePublicRequest = {
  /**
   * The date of the transaction in ISO 8601 format (e.g., 2025-01-25T12:00:00Z).
   */
  date: Date;
  /**
   * Unique identifier of this transaction in the source system.
   */
  externalId: string;
  /**
   * Total amount of the transaction.
   */
  totalAmount?: number | undefined;
  currency: CurrencyEnum;
  /**
   * An optional description of the transaction.
   */
  description?: string | undefined;
  source?: SourceEnum | undefined;
  /**
   * Indicates if the transaction involves a marketplace.
   */
  marketplace?: boolean | undefined;
  /**
   * List of items involved in the transaction.
   */
  transactionItems: Array<TransactionItemEstimateBase>;
  customer?: CustomerBasePublic | undefined;
  /**
   * List of addresses related to the transaction. At least one BILL_TO or SHIP_TO address must be provided. The address will be validated during estimation, and the transaction may be rejected if the address does not pass validation. The SHIP_TO will be preferred to use for determining tax liability.
   */
  addresses: Array<TransactionEstimatePublicRequestAddress>;
};

/** @internal */
export const TransactionEstimatePublicRequestType$inboundSchema:
  z.ZodNativeEnum<typeof TransactionEstimatePublicRequestType> = z.nativeEnum(
    TransactionEstimatePublicRequestType,
  );

/** @internal */
export const TransactionEstimatePublicRequestType$outboundSchema:
  z.ZodNativeEnum<typeof TransactionEstimatePublicRequestType> =
    TransactionEstimatePublicRequestType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionEstimatePublicRequestType$ {
  /** @deprecated use `TransactionEstimatePublicRequestType$inboundSchema` instead. */
  export const inboundSchema =
    TransactionEstimatePublicRequestType$inboundSchema;
  /** @deprecated use `TransactionEstimatePublicRequestType$outboundSchema` instead. */
  export const outboundSchema =
    TransactionEstimatePublicRequestType$outboundSchema;
}

/** @internal */
export const TransactionEstimatePublicRequestAddress$inboundSchema: z.ZodType<
  TransactionEstimatePublicRequestAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TransactionEstimatePublicRequestType$inboundSchema,
  phone: z.string().optional(),
  street_1: z.string().optional(),
  street_2: z.string().optional(),
  city: z.string().optional(),
  county: z.string().optional(),
  state: z.string(),
  postal_code: z.string(),
  country: z.string(),
  full_address: z.string().optional(),
  status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "street_1": "street1",
    "street_2": "street2",
    "postal_code": "postalCode",
    "full_address": "fullAddress",
  });
});

/** @internal */
export type TransactionEstimatePublicRequestAddress$Outbound = {
  type: string;
  phone?: string | undefined;
  street_1?: string | undefined;
  street_2?: string | undefined;
  city?: string | undefined;
  county?: string | undefined;
  state: string;
  postal_code: string;
  country: string;
  full_address?: string | undefined;
  status?: string | undefined;
};

/** @internal */
export const TransactionEstimatePublicRequestAddress$outboundSchema: z.ZodType<
  TransactionEstimatePublicRequestAddress$Outbound,
  z.ZodTypeDef,
  TransactionEstimatePublicRequestAddress
> = z.object({
  type: TransactionEstimatePublicRequestType$outboundSchema,
  phone: z.string().optional(),
  street1: z.string().optional(),
  street2: z.string().optional(),
  city: z.string().optional(),
  county: z.string().optional(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  fullAddress: z.string().optional(),
  status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    street1: "street_1",
    street2: "street_2",
    postalCode: "postal_code",
    fullAddress: "full_address",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionEstimatePublicRequestAddress$ {
  /** @deprecated use `TransactionEstimatePublicRequestAddress$inboundSchema` instead. */
  export const inboundSchema =
    TransactionEstimatePublicRequestAddress$inboundSchema;
  /** @deprecated use `TransactionEstimatePublicRequestAddress$outboundSchema` instead. */
  export const outboundSchema =
    TransactionEstimatePublicRequestAddress$outboundSchema;
  /** @deprecated use `TransactionEstimatePublicRequestAddress$Outbound` instead. */
  export type Outbound = TransactionEstimatePublicRequestAddress$Outbound;
}

export function transactionEstimatePublicRequestAddressToJSON(
  transactionEstimatePublicRequestAddress:
    TransactionEstimatePublicRequestAddress,
): string {
  return JSON.stringify(
    TransactionEstimatePublicRequestAddress$outboundSchema.parse(
      transactionEstimatePublicRequestAddress,
    ),
  );
}

export function transactionEstimatePublicRequestAddressFromJSON(
  jsonString: string,
): SafeParseResult<
  TransactionEstimatePublicRequestAddress,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TransactionEstimatePublicRequestAddress$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TransactionEstimatePublicRequestAddress' from JSON`,
  );
}

/** @internal */
export const TransactionEstimatePublicRequest$inboundSchema: z.ZodType<
  TransactionEstimatePublicRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  date: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  external_id: z.string(),
  total_amount: z.number().default(0.0),
  currency: CurrencyEnum$inboundSchema,
  description: z.string().optional(),
  source: SourceEnum$inboundSchema.optional(),
  marketplace: z.boolean().default(false),
  transaction_items: z.array(TransactionItemEstimateBase$inboundSchema),
  customer: CustomerBasePublic$inboundSchema.optional(),
  addresses: z.array(
    z.lazy(() => TransactionEstimatePublicRequestAddress$inboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "total_amount": "totalAmount",
    "transaction_items": "transactionItems",
  });
});

/** @internal */
export type TransactionEstimatePublicRequest$Outbound = {
  date: string;
  external_id: string;
  total_amount: number;
  currency: string;
  description?: string | undefined;
  source?: string | undefined;
  marketplace: boolean;
  transaction_items: Array<TransactionItemEstimateBase$Outbound>;
  customer?: CustomerBasePublic$Outbound | undefined;
  addresses: Array<TransactionEstimatePublicRequestAddress$Outbound>;
};

/** @internal */
export const TransactionEstimatePublicRequest$outboundSchema: z.ZodType<
  TransactionEstimatePublicRequest$Outbound,
  z.ZodTypeDef,
  TransactionEstimatePublicRequest
> = z.object({
  date: z.date().transform(v => v.toISOString()),
  externalId: z.string(),
  totalAmount: z.number().default(0.0),
  currency: CurrencyEnum$outboundSchema,
  description: z.string().optional(),
  source: SourceEnum$outboundSchema.optional(),
  marketplace: z.boolean().default(false),
  transactionItems: z.array(TransactionItemEstimateBase$outboundSchema),
  customer: CustomerBasePublic$outboundSchema.optional(),
  addresses: z.array(
    z.lazy(() => TransactionEstimatePublicRequestAddress$outboundSchema),
  ),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    totalAmount: "total_amount",
    transactionItems: "transaction_items",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionEstimatePublicRequest$ {
  /** @deprecated use `TransactionEstimatePublicRequest$inboundSchema` instead. */
  export const inboundSchema = TransactionEstimatePublicRequest$inboundSchema;
  /** @deprecated use `TransactionEstimatePublicRequest$outboundSchema` instead. */
  export const outboundSchema = TransactionEstimatePublicRequest$outboundSchema;
  /** @deprecated use `TransactionEstimatePublicRequest$Outbound` instead. */
  export type Outbound = TransactionEstimatePublicRequest$Outbound;
}

export function transactionEstimatePublicRequestToJSON(
  transactionEstimatePublicRequest: TransactionEstimatePublicRequest,
): string {
  return JSON.stringify(
    TransactionEstimatePublicRequest$outboundSchema.parse(
      transactionEstimatePublicRequest,
    ),
  );
}

export function transactionEstimatePublicRequestFromJSON(
  jsonString: string,
): SafeParseResult<TransactionEstimatePublicRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionEstimatePublicRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionEstimatePublicRequest' from JSON`,
  );
}
