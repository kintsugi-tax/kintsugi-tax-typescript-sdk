# GetNexusDetailsForIdV1NexusNexusIdGetRequest

## Example Usage

```typescript
import { GetNexusDetailsForIdV1NexusNexusIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: GetNexusDetailsForIdV1NexusNexusIdGetRequest = {
  nexusId: "<id>",
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `nexusId`                                                     | *string*                                                      | :heavy_check_mark:                                            | The unique identifier of the nexus.                           |                                                               |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |