/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { nexusGetPhysicalNexusV1NexusPhysicalNexusGet } from "../../funcs/nexusGetPhysicalNexusV1NexusPhysicalNexusGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations
    .GetPhysicalNexusV1NexusPhysicalNexusGetRequest$inboundSchema.optional(),
};

export const tool$nexusGetPhysicalNexusV1NexusPhysicalNexusGet: ToolDefinition<
  typeof args
> = {
  name: "nexus-get-physical-nexus-v1-nexus-physical-nexus-get",
  description: `Get Physical Nexus

Retrieve a paginated list of
    physical nexuses for a specific organization.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] =
      await nexusGetPhysicalNexusV1NexusPhysicalNexusGet(
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
