# ExemptionRequired

## Example Usage

```typescript
import { ExemptionRequired } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ExemptionRequired = {
  organizationId: "<id>",
  exemptionType: "transaction",
  startDate: new Date("2023-09-18T18:47:48.196Z"),
  status: "ARCHIVED",
  reseller: false,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `jurisdiction`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `exemptionType`                                                                               | [models.ExemptionType](../models/exemptiontype.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [models.ExemptionStatus](../models/exemptionstatus.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reseller`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |