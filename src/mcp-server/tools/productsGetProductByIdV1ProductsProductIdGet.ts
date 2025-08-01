/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { productsGetProductByIdV1ProductsProductIdGet } from "../../funcs/productsGetProductByIdV1ProductsProductIdGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetProductByIdV1ProductsProductIdGetRequest$inboundSchema,
};

export const tool$productsGetProductByIdV1ProductsProductIdGet: ToolDefinition<
  typeof args
> = {
  name: "products-get-product-by-id-v1-products-product-id-get",
  description: `Get Product By Id

The Get Product By ID API retrieves detailed information about
    a single product by its unique ID. This API helps in viewing the specific details
    of a product, including its attributes, status, and categorization.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] =
      await productsGetProductByIdV1ProductsProductIdGet(
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
