/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { nexusCreatePhysical } from "../../funcs/nexusCreatePhysical.js";
import * as models from "../../models/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: models.PhysicalNexusCreate$inboundSchema,
};

export const tool$nexusCreatePhysical: ToolDefinition<typeof args> = {
  name: "nexus-create-physical",
  description: `Create Physical Nexus

The Create Physical Nexus API allows you to create a new physical
    nexus by specifying its attributes, including the location,
    start date, end date, etc.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await nexusCreatePhysical(
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
