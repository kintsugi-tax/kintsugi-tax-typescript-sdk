/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as models from "../index.js";

export type CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest =
  {
    customerId: string;
    transactionCreate: models.TransactionCreate;
  };

/** @internal */
export const CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$inboundSchema:
  z.ZodType<
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    customer_id: z.string(),
    TransactionCreate: models.TransactionCreate$inboundSchema,
  }).transform((v) => {
    return remap$(v, {
      "customer_id": "customerId",
      "TransactionCreate": "transactionCreate",
    });
  });

/** @internal */
export type CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$Outbound =
  {
    customer_id: string;
    TransactionCreate: models.TransactionCreate$Outbound;
  };

/** @internal */
export const CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$outboundSchema:
  z.ZodType<
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$Outbound,
    z.ZodTypeDef,
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest
  > = z.object({
    customerId: z.string(),
    transactionCreate: models.TransactionCreate$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      customerId: "customer_id",
      transactionCreate: "TransactionCreate",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$ {
  /** @deprecated use `CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$inboundSchema` instead. */
  export const inboundSchema =
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$inboundSchema;
  /** @deprecated use `CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$outboundSchema;
  /** @deprecated use `CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$Outbound` instead. */
  export type Outbound =
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$Outbound;
}

export function createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequestToJSON(
  createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest:
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest,
): string {
  return JSON.stringify(
    CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$outboundSchema
      .parse(
        createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest,
      ),
  );
}

export function createTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest' from JSON`,
  );
}
