# UpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPutRequest

## Example Usage

```typescript
import { UpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPutRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: UpdatePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdPutRequest = {
  physicalNexusId: "<id>",
  physicalNexusUpdate: {
    startDate: new RFCDate("2023-10-04"),
    category: "EMPLOYEES_AGENTS_CONTRACTORS",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `physicalNexusId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the physical<br/>                                nexus to update. |
| `physicalNexusUpdate`                                                                  | [models.PhysicalNexusUpdate](../../models/physicalnexusupdate.md)                      | :heavy_check_mark:                                                                     | N/A                                                                                    |