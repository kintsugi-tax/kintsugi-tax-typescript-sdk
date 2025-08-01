/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filingsGet } from "../../funcs/filingsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetFilingByIdV1FilingsFilingIdGetRequest$inboundSchema,
};

export const tool$filingsGet: ToolDefinition<typeof args> = {
  name: "filings-get",
  description: `Get Filing By Id

This API retrieves detailed information about a specific
    filing using its unique identifier (filing_id).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filingsGet(
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
