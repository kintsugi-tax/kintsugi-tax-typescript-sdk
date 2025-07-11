# BackendSrcTransactionsResponsesValidationErrorItem

## Example Usage

```typescript
import { BackendSrcTransactionsResponsesValidationErrorItem } from "@kintsugi-tax/tax-platform-sdk/models";

let value: BackendSrcTransactionsResponsesValidationErrorItem = {
  type: "<value>",
  loc: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  msg: "<value>",
  input: "<value>",
  ctx: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
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