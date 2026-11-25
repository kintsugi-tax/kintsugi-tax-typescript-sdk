# CreateBackFilingRequestV1FilingsBackFilingRequestPostRequest

## Example Usage

```typescript
import { CreateBackFilingRequestV1FilingsBackFilingRequestPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: CreateBackFilingRequestV1FilingsBackFilingRequestPostRequest = {
  xOrganizationId: "<id>",
  backFilingRequestCreate: {
    requests: [],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `xOrganizationId`                                                         | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `backFilingRequestCreate`                                                 | [models.BackFilingRequestCreate](../../models/backfilingrequestcreate.md) | :heavy_check_mark:                                                        | N/A                                                                       |