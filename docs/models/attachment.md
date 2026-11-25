# Attachment

## Example Usage

```typescript
import { Attachment } from "@kintsugi-tax/tax-platform-sdk/models";

let value: Attachment = {
  relatedEntityId: "<id>",
  relatedEntityType: "FILING_DOCUMENT",
  organizationId: "<id>",
  fileName: "example.file",
  mimeType: "<value>",
  fileSizeBytes: 163898,
  fileLocation: "<value>",
  fileLocationType: "S3",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when transaction was created in Kintsugi.                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp when transaction was last updated.                                                  |
| `relatedEntityId`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the exemption associated<br/>        with the attachment.            |
| `relatedEntityType`                                                                           | [models.RelatedEntityType](../models/relatedentitytype.md)                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileSizeBytes`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileLocation`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `fileLocationType`                                                                            | [models.AttachmentLocationType](../models/attachmentlocationtype.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |