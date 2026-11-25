# DeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDeleteRequest

## Example Usage

```typescript
import { DeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDeleteRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: DeletePhysicalNexusV1NexusPhysicalNexusPhysicalNexusIdDeleteRequest =
  {
    physicalNexusId: "<id>",
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `physicalNexusId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier of the physical<br/>                                nexus to delete. |                                                                                        |
| `xOrganizationId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier for the organization making the request                          | org_12345                                                                              |