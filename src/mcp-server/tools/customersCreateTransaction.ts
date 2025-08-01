/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreateTransaction } from "../../funcs/customersCreateTransaction.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .CreateTransactionByCustomerIdV1CustomersCustomerIdTransactionsPostRequest$inboundSchema,
};

export const tool$customersCreateTransaction: ToolDefinition<typeof args> = {
  name: "customers-create-transaction",
  description: `Create Transaction By Customer Id

Create a new transaction for a specific customer.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await customersCreateTransaction(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
