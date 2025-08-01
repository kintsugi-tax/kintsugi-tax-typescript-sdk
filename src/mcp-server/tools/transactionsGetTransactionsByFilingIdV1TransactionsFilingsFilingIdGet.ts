/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsGetTransactionsByFilingIdV1TransactionsFilingsFilingIdGet } from "../../funcs/transactionsGetTransactionsByFilingIdV1TransactionsFilingsFilingIdGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .GetTransactionsByFilingIdV1TransactionsFilingsFilingIdGetRequest$inboundSchema,
};

export const tool$transactionsGetTransactionsByFilingIdV1TransactionsFilingsFilingIdGet:
  ToolDefinition<typeof args> = {
    name:
      "transactions-get-transactions-by-filing-id-v1-transactions-filings-filing-id-get",
    description: `Get Transactions By Filing Id

Retrieve transactions by filing ID.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await transactionsGetTransactionsByFilingIdV1TransactionsFilingsFilingIdGet(
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
