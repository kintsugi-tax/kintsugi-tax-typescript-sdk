# BackendSrcExemptionsResponsesValidationErrorItem

## Example Usage

```typescript
import { BackendSrcExemptionsResponsesValidationErrorItem } from "@kintsugi-tax/tax-platform-sdk/models";

let value: BackendSrcExemptionsResponsesValidationErrorItem = {
  type: "<value>",
  loc: [
    "<value 1>",
    "<value 2>",
  ],
  msg: "<value>",
  input: "<value>",
  ctx: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `type`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | Validation issues, such as missing required<br/>                    fields or invalid field values. |
| `loc`                                                                                           | *string*[]                                                                                      | :heavy_check_mark:                                                                              | Location of error                                                                               |
| `msg`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | Error message                                                                                   |
| `input`                                                                                         | *any*                                                                                           | :heavy_check_mark:                                                                              | Invalid input value                                                                             |
| `ctx`                                                                                           | Record<string, *any*>                                                                           | :heavy_check_mark:                                                                              | Additional context                                                                              |