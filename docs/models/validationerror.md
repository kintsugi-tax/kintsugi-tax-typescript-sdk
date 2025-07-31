# ValidationError

## Example Usage

```typescript
import { ValidationError } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ValidationError = {
  loc: [
    "<value 1>",
    "<value 2>",
  ],
  msg: "<value>",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `loc`              | *string*[]         | :heavy_check_mark: | N/A                |
| `msg`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |