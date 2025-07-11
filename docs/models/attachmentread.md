# AttachmentRead

## Example Usage

```typescript
import { AttachmentRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: AttachmentRead = {
  relatedEntityId: "<id>",
  relatedEntityType: "FILING_PAYMENT",
  id: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `relatedEntityId`                                                              | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier of the exemption associated<br/>        with the attachment. |
| `relatedEntityType`                                                            | [models.RelatedEntityType](../models/relatedentitytype.md)                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The unique identifier of the uploaded attachment (attachment ID).              |