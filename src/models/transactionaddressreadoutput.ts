/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  AddressStatus,
  AddressStatus$inboundSchema,
  AddressStatus$outboundSchema,
} from "./addressstatus.js";
import {
  AddressType,
  AddressType$inboundSchema,
  AddressType$outboundSchema,
} from "./addresstype.js";
import {
  CountryCodeEnum,
  CountryCodeEnum$inboundSchema,
  CountryCodeEnum$outboundSchema,
} from "./countrycodeenum.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

export type TransactionAddressReadOutput = {
  /**
   * Phone number associated with the address.
   */
  phone?: string | undefined;
  /**
   * Primary street address.
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
   * State or province of the customer.
   */
  state?: string | undefined;
  /**
   * ZIP or Postal code of the customer.
   */
  postalCode?: string | undefined;
  country?: CountryCodeEnum | undefined;
  /**
   * Complete address string of the customer, which can be used as an alternative to individual fields.
   */
  fullAddress?: string | undefined;
  type: AddressType;
  status?: AddressStatus | undefined;
  /**
   * Unique identifier of the address being updated.
   */
  id?: string | undefined;
  /**
   * ID of the transaction associated with the address.
   */
  transactionId?: string | undefined;
  /**
   * ID of the connection associated with the address.
   */
  connectionId?: string | undefined;
};

/** @internal */
export const TransactionAddressReadOutput$inboundSchema: z.ZodType<
  TransactionAddressReadOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  phone: z.string().optional(),
  street_1: z.string().optional(),
  street_2: z.string().optional(),
  city: z.string().optional(),
  county: z.string().optional(),
  state: z.string().optional(),
  postal_code: z.string().optional(),
  country: CountryCodeEnum$inboundSchema.optional(),
  full_address: z.string().optional(),
  type: AddressType$inboundSchema,
  status: AddressStatus$inboundSchema.optional(),
  id: z.string().optional(),
  transaction_id: z.string().optional(),
  connection_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "street_1": "street1",
    "street_2": "street2",
    "postal_code": "postalCode",
    "full_address": "fullAddress",
    "transaction_id": "transactionId",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type TransactionAddressReadOutput$Outbound = {
  phone?: string | undefined;
  street_1?: string | undefined;
  street_2?: string | undefined;
  city?: string | undefined;
  county?: string | undefined;
  state?: string | undefined;
  postal_code?: string | undefined;
  country?: string | undefined;
  full_address?: string | undefined;
  type: string;
  status?: string | undefined;
  id?: string | undefined;
  transaction_id?: string | undefined;
  connection_id?: string | undefined;
};

/** @internal */
export const TransactionAddressReadOutput$outboundSchema: z.ZodType<
  TransactionAddressReadOutput$Outbound,
  z.ZodTypeDef,
  TransactionAddressReadOutput
> = z.object({
  phone: z.string().optional(),
  street1: z.string().optional(),
  street2: z.string().optional(),
  city: z.string().optional(),
  county: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: CountryCodeEnum$outboundSchema.optional(),
  fullAddress: z.string().optional(),
  type: AddressType$outboundSchema,
  status: AddressStatus$outboundSchema.optional(),
  id: z.string().optional(),
  transactionId: z.string().optional(),
  connectionId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    street1: "street_1",
    street2: "street_2",
    postalCode: "postal_code",
    fullAddress: "full_address",
    transactionId: "transaction_id",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionAddressReadOutput$ {
  /** @deprecated use `TransactionAddressReadOutput$inboundSchema` instead. */
  export const inboundSchema = TransactionAddressReadOutput$inboundSchema;
  /** @deprecated use `TransactionAddressReadOutput$outboundSchema` instead. */
  export const outboundSchema = TransactionAddressReadOutput$outboundSchema;
  /** @deprecated use `TransactionAddressReadOutput$Outbound` instead. */
  export type Outbound = TransactionAddressReadOutput$Outbound;
}

export function transactionAddressReadOutputToJSON(
  transactionAddressReadOutput: TransactionAddressReadOutput,
): string {
  return JSON.stringify(
    TransactionAddressReadOutput$outboundSchema.parse(
      transactionAddressReadOutput,
    ),
  );
}

export function transactionAddressReadOutputFromJSON(
  jsonString: string,
): SafeParseResult<TransactionAddressReadOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionAddressReadOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionAddressReadOutput' from JSON`,
  );
}
