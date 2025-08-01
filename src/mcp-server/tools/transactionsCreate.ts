/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsCreate } from "../../funcs/transactionsCreate.js";
import * as models from "../../models/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: models.TransactionPublicRequest$inboundSchema,
};

export const tool$transactionsCreate: ToolDefinition<typeof args> = {
  name: "transactions-create",
  description: `Create Transaction

Create a transaction.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await transactionsCreate(
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
