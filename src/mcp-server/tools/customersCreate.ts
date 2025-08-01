/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../../funcs/customersCreate.js";
import * as models from "../../models/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: models.CustomerCreate$inboundSchema,
};

export const tool$customersCreate: ToolDefinition<typeof args> = {
  name: "customers-create",
  description: `Create Customer

The Create Customer API enables the creation of a new customer record with essential
details like name, contact information, and address, along with optional metadata.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await customersCreate(
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
