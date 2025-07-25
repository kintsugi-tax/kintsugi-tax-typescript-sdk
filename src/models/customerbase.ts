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
  CountryCodeEnum,
  CountryCodeEnum$inboundSchema,
  CountryCodeEnum$outboundSchema,
} from "./countrycodeenum.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  SourceEnum,
  SourceEnum$inboundSchema,
  SourceEnum$outboundSchema,
} from "./sourceenum.js";
import {
  StatusEnum,
  StatusEnum$inboundSchema,
  StatusEnum$outboundSchema,
} from "./statusenum.js";

export type CustomerBase = {
  /**
   * Phone number associated with the address.
   */
  phone?: string | null | undefined;
  /**
   * Primary street address.
   */
  street1?: string | null | undefined;
  /**
   * Additional street address details, such as an apartment or suite number.
   */
  street2?: string | null | undefined;
  /**
   * City where the customer resides.
   */
  city?: string | null | undefined;
  /**
   * County or district of the customer.
   */
  county?: string | null | undefined;
  /**
   * State or province of the customer.
   */
  state?: string | null | undefined;
  /**
   * ZIP or Postal code of the customer.
   */
  postalCode?: string | null | undefined;
  /**
   * Country code in ISO 3166-1 alpha-2 format
   */
  country?: CountryCodeEnum | null | undefined;
  /**
   * Complete address string of the customer, which can be used as an alternative to individual fields.
   */
  fullAddress?: string | null | undefined;
  /**
   * Name of the customer.
   */
  name?: string | null | undefined;
  /**
   * A unique identifier for the customer.
   */
  externalId?: string | null | undefined;
  status?: StatusEnum | undefined;
  /**
   * Email address of the customer.
   */
  email?: string | null | undefined;
  addressStatus?: AddressStatus | undefined;
  /**
   * Source of the customer information (e.g., BIGCOMMERCE, STRIPE, etc.).
   */
  source?: SourceEnum | null | undefined;
  registrationNumber?: string | null | undefined;
  /**
   * Unique identifier of the connection related to the customer.
   */
  connectionId?: string | null | undefined;
};

/** @internal */
export const CustomerBase$inboundSchema: z.ZodType<
  CustomerBase,
  z.ZodTypeDef,
  unknown
> = z.object({
  phone: z.nullable(z.string()).optional(),
  street_1: z.nullable(z.string()).optional(),
  street_2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  county: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postal_code: z.nullable(z.string()).optional(),
  country: z.nullable(CountryCodeEnum$inboundSchema).optional(),
  full_address: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  external_id: z.nullable(z.string()).optional(),
  status: StatusEnum$inboundSchema.optional(),
  email: z.nullable(z.string()).optional(),
  address_status: AddressStatus$inboundSchema.optional(),
  source: z.nullable(SourceEnum$inboundSchema).optional(),
  registration_number: z.nullable(z.string()).optional(),
  connection_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "street_1": "street1",
    "street_2": "street2",
    "postal_code": "postalCode",
    "full_address": "fullAddress",
    "external_id": "externalId",
    "address_status": "addressStatus",
    "registration_number": "registrationNumber",
    "connection_id": "connectionId",
  });
});

/** @internal */
export type CustomerBase$Outbound = {
  phone?: string | null | undefined;
  street_1?: string | null | undefined;
  street_2?: string | null | undefined;
  city?: string | null | undefined;
  county?: string | null | undefined;
  state?: string | null | undefined;
  postal_code?: string | null | undefined;
  country?: string | null | undefined;
  full_address?: string | null | undefined;
  name?: string | null | undefined;
  external_id?: string | null | undefined;
  status?: string | undefined;
  email?: string | null | undefined;
  address_status?: string | undefined;
  source?: string | null | undefined;
  registration_number?: string | null | undefined;
  connection_id?: string | null | undefined;
};

/** @internal */
export const CustomerBase$outboundSchema: z.ZodType<
  CustomerBase$Outbound,
  z.ZodTypeDef,
  CustomerBase
> = z.object({
  phone: z.nullable(z.string()).optional(),
  street1: z.nullable(z.string()).optional(),
  street2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  county: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postalCode: z.nullable(z.string()).optional(),
  country: z.nullable(CountryCodeEnum$outboundSchema).optional(),
  fullAddress: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  externalId: z.nullable(z.string()).optional(),
  status: StatusEnum$outboundSchema.optional(),
  email: z.nullable(z.string()).optional(),
  addressStatus: AddressStatus$outboundSchema.optional(),
  source: z.nullable(SourceEnum$outboundSchema).optional(),
  registrationNumber: z.nullable(z.string()).optional(),
  connectionId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    street1: "street_1",
    street2: "street_2",
    postalCode: "postal_code",
    fullAddress: "full_address",
    externalId: "external_id",
    addressStatus: "address_status",
    registrationNumber: "registration_number",
    connectionId: "connection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerBase$ {
  /** @deprecated use `CustomerBase$inboundSchema` instead. */
  export const inboundSchema = CustomerBase$inboundSchema;
  /** @deprecated use `CustomerBase$outboundSchema` instead. */
  export const outboundSchema = CustomerBase$outboundSchema;
  /** @deprecated use `CustomerBase$Outbound` instead. */
  export type Outbound = CustomerBase$Outbound;
}

export function customerBaseToJSON(customerBase: CustomerBase): string {
  return JSON.stringify(CustomerBase$outboundSchema.parse(customerBase));
}

export function customerBaseFromJSON(
  jsonString: string,
): SafeParseResult<CustomerBase, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerBase$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerBase' from JSON`,
  );
}
