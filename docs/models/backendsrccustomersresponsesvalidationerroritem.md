# BackendSrcCustomersResponsesValidationErrorItem

## Example Usage

```typescript
import { BackendSrcCustomersResponsesValidationErrorItem } from "@kintsugi-tax/tax-platform-sdk/models";

let value: BackendSrcCustomersResponsesValidationErrorItem = {
  type: "<value>",
  loc: [
    "<value 1>",
    "<value 2>",
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

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `type`                   | *string*                 | :heavy_check_mark:       | Type of validation error |
| `loc`                    | *string*[]               | :heavy_check_mark:       | Location of error        |
| `msg`                    | *string*                 | :heavy_check_mark:       | Error message            |
| `input`                  | *any*                    | :heavy_check_mark:       | Invalid input value      |
| `ctx`                    | Record<string, *any*>    | :heavy_check_mark:       | Additional context       |