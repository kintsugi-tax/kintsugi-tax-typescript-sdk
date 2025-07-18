/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import {
  CurrencyEnum,
  CurrencyEnum$inboundSchema,
  CurrencyEnum$outboundSchema,
} from "./currencyenum.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";
import {
  TaxExemptionEnum,
  TaxExemptionEnum$inboundSchema,
  TaxExemptionEnum$outboundSchema,
} from "./taxexemptionenum.js";
import {
  TaxItemRead,
  TaxItemRead$inboundSchema,
  TaxItemRead$Outbound,
  TaxItemRead$outboundSchema,
} from "./taxitemread.js";

export type TransactionItemRead = {
  /**
   * External item identifier.
   */
  externalId?: string | null | undefined;
  /**
   * Organization identifier.
   */
  organizationId: string | null;
  /**
   * Date/time of item.
   */
  date: Date;
  /**
   * Item description
   */
  description?: string | null | undefined;
  /**
   * External product identifier.
   */
  externalProductId: string;
  /**
   * Product name
   */
  product?: string | null | undefined;
  /**
   * Product identifier.
   */
  productId?: string | null | undefined;
  /**
   * Product name (detailed)
   */
  productName?: string | null | undefined;
  /**
   * Product description
   */
  productDescription?: string | null | undefined;
  /**
   * Quantity of item.
   */
  quantity?: string | undefined;
  /**
   * Item amount.
   */
  amount?: string | undefined;
  /**
   * Imported tax amount for the item.
   */
  taxAmountImported?: string | undefined;
  /**
   * Imported tax rate.
   */
  taxRateImported?: string | undefined;
  /**
   * Calculated tax amount for the item.
   */
  taxAmountCalculated?: string | undefined;
  /**
   * Calculated tax rate.
   */
  taxRateCalculated?: string | undefined;
  /**
   * Original currency code.
   */
  originalCurrency?: CurrencyEnum | null | undefined;
  /**
   * Destination currency code.
   */
  destinationCurrency?: CurrencyEnum | null | undefined;
  /**
   * Converted item amount.
   */
  convertedAmount?: string | null | undefined;
  /**
   * Converted taxable amount.
   */
  convertedTaxableAmount?: string | null | undefined;
  /**
   * Converted imported tax amount.
   */
  convertedTaxAmountImported?: string | null | undefined;
  /**
   * Converted calculated tax amount
   */
  convertedTaxAmountCalculated?: string | null | undefined;
  /**
   * Converted total discount amount.
   */
  convertedTotalDiscount?: string | null | undefined;
  /**
   * Converted subtotal amount.
   */
  convertedSubtotal?: string | null | undefined;
  /**
   * Taxable amount for the item.
   */
  taxableAmount?: string | undefined;
  /**
   * Tax exemption status.
   */
  taxExemption?: TaxExemptionEnum | null | undefined;
  /**
   * Indicates if the item is exempt.
   */
  exempt?: boolean | undefined;
  /**
   * The unique transaction item identifier.
   */
  id: string;
  /**
   * List of tax items associated with the transaction item.
   */
  taxItems: Array<TaxItemRead>;
  /**
   * Total discount amount applied to this transaction item.
   */
  totalDiscount?: string | null | undefined;
  /**
   * Subtotal amount before any discount is applied.
   */
  subtotal?: string | null | undefined;
};

/** @internal */
export const TransactionItemRead$inboundSchema: z.ZodType<
  TransactionItemRead,
  z.ZodTypeDef,
  unknown
> = z.object({
  external_id: z.nullable(z.string()).optional(),
  organization_id: z.nullable(z.string()),
  date: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  description: z.nullable(z.string()).optional(),
  external_product_id: z.string(),
  product: z.nullable(z.string()).optional(),
  product_id: z.nullable(z.string()).optional(),
  product_name: z.nullable(z.string()).optional(),
  product_description: z.nullable(z.string()).optional(),
  quantity: z.string().default("1.0"),
  amount: z.string().default("0.00"),
  tax_amount_imported: z.string().default("0.00"),
  tax_rate_imported: z.string().default("0.00"),
  tax_amount_calculated: z.string().default("0.00"),
  tax_rate_calculated: z.string().default("0.00"),
  original_currency: z.nullable(CurrencyEnum$inboundSchema).optional(),
  destination_currency: z.nullable(CurrencyEnum$inboundSchema).optional(),
  converted_amount: z.nullable(z.string()).optional(),
  converted_taxable_amount: z.nullable(z.string()).optional(),
  converted_tax_amount_imported: z.nullable(z.string()).optional(),
  converted_tax_amount_calculated: z.nullable(z.string()).optional(),
  converted_total_discount: z.nullable(z.string()).optional(),
  converted_subtotal: z.nullable(z.string()).optional(),
  taxable_amount: z.string().default("0.00"),
  tax_exemption: z.nullable(TaxExemptionEnum$inboundSchema).optional(),
  exempt: z.boolean().default(false),
  id: z.string(),
  tax_items: z.array(TaxItemRead$inboundSchema),
  total_discount: z.nullable(z.string()).optional(),
  subtotal: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "external_id": "externalId",
    "organization_id": "organizationId",
    "external_product_id": "externalProductId",
    "product_id": "productId",
    "product_name": "productName",
    "product_description": "productDescription",
    "tax_amount_imported": "taxAmountImported",
    "tax_rate_imported": "taxRateImported",
    "tax_amount_calculated": "taxAmountCalculated",
    "tax_rate_calculated": "taxRateCalculated",
    "original_currency": "originalCurrency",
    "destination_currency": "destinationCurrency",
    "converted_amount": "convertedAmount",
    "converted_taxable_amount": "convertedTaxableAmount",
    "converted_tax_amount_imported": "convertedTaxAmountImported",
    "converted_tax_amount_calculated": "convertedTaxAmountCalculated",
    "converted_total_discount": "convertedTotalDiscount",
    "converted_subtotal": "convertedSubtotal",
    "taxable_amount": "taxableAmount",
    "tax_exemption": "taxExemption",
    "tax_items": "taxItems",
    "total_discount": "totalDiscount",
  });
});

/** @internal */
export type TransactionItemRead$Outbound = {
  external_id?: string | null | undefined;
  organization_id: string | null;
  date: string;
  description?: string | null | undefined;
  external_product_id: string;
  product?: string | null | undefined;
  product_id?: string | null | undefined;
  product_name?: string | null | undefined;
  product_description?: string | null | undefined;
  quantity: string;
  amount: string;
  tax_amount_imported: string;
  tax_rate_imported: string;
  tax_amount_calculated: string;
  tax_rate_calculated: string;
  original_currency?: string | null | undefined;
  destination_currency?: string | null | undefined;
  converted_amount?: string | null | undefined;
  converted_taxable_amount?: string | null | undefined;
  converted_tax_amount_imported?: string | null | undefined;
  converted_tax_amount_calculated?: string | null | undefined;
  converted_total_discount?: string | null | undefined;
  converted_subtotal?: string | null | undefined;
  taxable_amount: string;
  tax_exemption?: string | null | undefined;
  exempt: boolean;
  id: string;
  tax_items: Array<TaxItemRead$Outbound>;
  total_discount?: string | null | undefined;
  subtotal?: string | null | undefined;
};

/** @internal */
export const TransactionItemRead$outboundSchema: z.ZodType<
  TransactionItemRead$Outbound,
  z.ZodTypeDef,
  TransactionItemRead
> = z.object({
  externalId: z.nullable(z.string()).optional(),
  organizationId: z.nullable(z.string()),
  date: z.date().transform(v => v.toISOString()),
  description: z.nullable(z.string()).optional(),
  externalProductId: z.string(),
  product: z.nullable(z.string()).optional(),
  productId: z.nullable(z.string()).optional(),
  productName: z.nullable(z.string()).optional(),
  productDescription: z.nullable(z.string()).optional(),
  quantity: z.string().default("1.0"),
  amount: z.string().default("0.00"),
  taxAmountImported: z.string().default("0.00"),
  taxRateImported: z.string().default("0.00"),
  taxAmountCalculated: z.string().default("0.00"),
  taxRateCalculated: z.string().default("0.00"),
  originalCurrency: z.nullable(CurrencyEnum$outboundSchema).optional(),
  destinationCurrency: z.nullable(CurrencyEnum$outboundSchema).optional(),
  convertedAmount: z.nullable(z.string()).optional(),
  convertedTaxableAmount: z.nullable(z.string()).optional(),
  convertedTaxAmountImported: z.nullable(z.string()).optional(),
  convertedTaxAmountCalculated: z.nullable(z.string()).optional(),
  convertedTotalDiscount: z.nullable(z.string()).optional(),
  convertedSubtotal: z.nullable(z.string()).optional(),
  taxableAmount: z.string().default("0.00"),
  taxExemption: z.nullable(TaxExemptionEnum$outboundSchema).optional(),
  exempt: z.boolean().default(false),
  id: z.string(),
  taxItems: z.array(TaxItemRead$outboundSchema),
  totalDiscount: z.nullable(z.string()).optional(),
  subtotal: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    externalId: "external_id",
    organizationId: "organization_id",
    externalProductId: "external_product_id",
    productId: "product_id",
    productName: "product_name",
    productDescription: "product_description",
    taxAmountImported: "tax_amount_imported",
    taxRateImported: "tax_rate_imported",
    taxAmountCalculated: "tax_amount_calculated",
    taxRateCalculated: "tax_rate_calculated",
    originalCurrency: "original_currency",
    destinationCurrency: "destination_currency",
    convertedAmount: "converted_amount",
    convertedTaxableAmount: "converted_taxable_amount",
    convertedTaxAmountImported: "converted_tax_amount_imported",
    convertedTaxAmountCalculated: "converted_tax_amount_calculated",
    convertedTotalDiscount: "converted_total_discount",
    convertedSubtotal: "converted_subtotal",
    taxableAmount: "taxable_amount",
    taxExemption: "tax_exemption",
    taxItems: "tax_items",
    totalDiscount: "total_discount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransactionItemRead$ {
  /** @deprecated use `TransactionItemRead$inboundSchema` instead. */
  export const inboundSchema = TransactionItemRead$inboundSchema;
  /** @deprecated use `TransactionItemRead$outboundSchema` instead. */
  export const outboundSchema = TransactionItemRead$outboundSchema;
  /** @deprecated use `TransactionItemRead$Outbound` instead. */
  export type Outbound = TransactionItemRead$Outbound;
}

export function transactionItemReadToJSON(
  transactionItemRead: TransactionItemRead,
): string {
  return JSON.stringify(
    TransactionItemRead$outboundSchema.parse(transactionItemRead),
  );
}

export function transactionItemReadFromJSON(
  jsonString: string,
): SafeParseResult<TransactionItemRead, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TransactionItemRead$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TransactionItemRead' from JSON`,
  );
}
