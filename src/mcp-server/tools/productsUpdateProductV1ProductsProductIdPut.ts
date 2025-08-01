/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { productsUpdateProductV1ProductsProductIdPut } from "../../funcs/productsUpdateProductV1ProductsProductIdPut.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateProductV1ProductsProductIdPutRequest$inboundSchema,
};

export const tool$productsUpdateProductV1ProductsProductIdPut: ToolDefinition<
  typeof args
> = {
  name: "products-update-product-v1-products-product-id-put",
  description: `Update Product

The Update Product API allows users to modify the details of
    an existing product identified by its unique product_id`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await productsUpdateProductV1ProductsProductIdPut(
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
