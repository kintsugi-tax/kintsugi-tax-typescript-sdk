# CommitTaxMagentoCommitPostRequest

## Example Usage

```typescript
import { CommitTaxMagentoCommitPostRequest } from "openapi/models/operations";

let value: CommitTaxMagentoCommitPostRequest = {
  xOrganizationId: "org_12345",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `xOrganizationId`                                                                 | *string*                                                                          | :heavy_check_mark:                                                                | The unique identifier for the organization making the request                     | org_12345                                                                         |
| `magentoTaxEstimationRequest`                                                     | [models.MagentoTaxEstimationRequest](../../models/magentotaxestimationrequest.md) | :heavy_check_mark:                                                                | N/A                                                                               |                                                                                   |