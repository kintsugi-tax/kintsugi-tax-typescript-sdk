# CreatePhysicalNexusV1NexusPhysicalNexusPostRequest

## Example Usage

```typescript
import { CreatePhysicalNexusV1NexusPhysicalNexusPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: CreatePhysicalNexusV1NexusPhysicalNexusPostRequest = {
  xOrganizationId: "org_12345",
  physicalNexusCreate: {
    countryCode: "BN",
    stateCode: "<value>",
    startDate: new RFCDate("2024-06-06"),
    category: "WAREHOUSE_AND_INVENTORY_PRESENCE",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `xOrganizationId`                                                 | *string*                                                          | :heavy_check_mark:                                                | The unique identifier for the organization making the request     | org_12345                                                         |
| `physicalNexusCreate`                                             | [models.PhysicalNexusCreate](../../models/physicalnexuscreate.md) | :heavy_check_mark:                                                | N/A                                                               |                                                                   |