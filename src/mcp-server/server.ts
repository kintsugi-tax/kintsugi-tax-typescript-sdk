/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SDKCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$addressValidationSuggest } from "./tools/addressValidationSuggest.js";
import { tool$customersCreate } from "./tools/customersCreate.js";
import { tool$customersCreateTransaction } from "./tools/customersCreateTransaction.js";
import { tool$customersGet } from "./tools/customersGet.js";
import { tool$customersGetByExternalId } from "./tools/customersGetByExternalId.js";
import { tool$customersGetTransactions } from "./tools/customersGetTransactions.js";
import { tool$customersList } from "./tools/customersList.js";
import { tool$customersUpdate } from "./tools/customersUpdate.js";
import { tool$exemptionsCreate } from "./tools/exemptionsCreate.js";
import { tool$exemptionsGet } from "./tools/exemptionsGet.js";
import { tool$exemptionsGetAttachments } from "./tools/exemptionsGetAttachments.js";
import { tool$exemptionsList } from "./tools/exemptionsList.js";
import { tool$exemptionsUploadCertificate } from "./tools/exemptionsUploadCertificate.js";
import { tool$filingsGet } from "./tools/filingsGet.js";
import { tool$filingsGetByRegistrationId } from "./tools/filingsGetByRegistrationId.js";
import { tool$filingsList } from "./tools/filingsList.js";
import { tool$nexusCreatePhysical } from "./tools/nexusCreatePhysical.js";
import { tool$nexusDeletePhysical } from "./tools/nexusDeletePhysical.js";
import { tool$nexusList } from "./tools/nexusList.js";
import { tool$nexusListPhysical } from "./tools/nexusListPhysical.js";
import { tool$nexusUpdatePhysical } from "./tools/nexusUpdatePhysical.js";
import { tool$productsCreate } from "./tools/productsCreate.js";
import { tool$productsGet } from "./tools/productsGet.js";
import { tool$productsGetCategories } from "./tools/productsGetCategories.js";
import { tool$productsList } from "./tools/productsList.js";
import { tool$productsUpdate } from "./tools/productsUpdate.js";
import { tool$registrationsCreate } from "./tools/registrationsCreate.js";
import { tool$registrationsDeregister } from "./tools/registrationsDeregister.js";
import { tool$registrationsGet } from "./tools/registrationsGet.js";
import { tool$registrationsGetById } from "./tools/registrationsGetById.js";
import { tool$registrationsUpdate } from "./tools/registrationsUpdate.js";
import { tool$taxEstimationEstimate } from "./tools/taxEstimationEstimate.js";
import { tool$transactionsCreate } from "./tools/transactionsCreate.js";
import { tool$transactionsCreateCreditNote } from "./tools/transactionsCreateCreditNote.js";
import { tool$transactionsGet } from "./tools/transactionsGet.js";
import { tool$transactionsGetByExternalId } from "./tools/transactionsGetByExternalId.js";
import { tool$transactionsGetByFilingId } from "./tools/transactionsGetByFilingId.js";
import { tool$transactionsGetById } from "./tools/transactionsGetById.js";
import { tool$transactionsUpdate } from "./tools/transactionsUpdate.js";
import { tool$transactionsUpdateCreditNote } from "./tools/transactionsUpdateCreditNote.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  security?: SDKOptions["security"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "SDK",
    version: "0.8.1",
  });

  const client = new SDKCore({
    security: deps.security,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$addressValidationSuggest);
  tool(tool$customersList);
  tool(tool$customersCreate);
  tool(tool$customersGet);
  tool(tool$customersUpdate);
  tool(tool$customersGetByExternalId);
  tool(tool$customersGetTransactions);
  tool(tool$customersCreateTransaction);
  tool(tool$exemptionsList);
  tool(tool$exemptionsCreate);
  tool(tool$exemptionsGet);
  tool(tool$exemptionsUploadCertificate);
  tool(tool$exemptionsGetAttachments);
  tool(tool$filingsList);
  tool(tool$filingsGet);
  tool(tool$filingsGetByRegistrationId);
  tool(tool$nexusListPhysical);
  tool(tool$nexusCreatePhysical);
  tool(tool$nexusUpdatePhysical);
  tool(tool$nexusDeletePhysical);
  tool(tool$nexusList);
  tool(tool$productsList);
  tool(tool$productsCreate);
  tool(tool$productsGet);
  tool(tool$productsUpdate);
  tool(tool$productsGetCategories);
  tool(tool$registrationsGet);
  tool(tool$registrationsCreate);
  tool(tool$registrationsGetById);
  tool(tool$registrationsUpdate);
  tool(tool$registrationsDeregister);
  tool(tool$transactionsGet);
  tool(tool$transactionsCreate);
  tool(tool$transactionsGetByExternalId);
  tool(tool$transactionsUpdate);
  tool(tool$transactionsGetById);
  tool(tool$transactionsGetByFilingId);
  tool(tool$transactionsCreateCreditNote);
  tool(tool$transactionsUpdateCreditNote);
  tool(tool$taxEstimationEstimate);

  return server;
}
