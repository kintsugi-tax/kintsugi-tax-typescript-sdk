# TaxOnlyUpdate

## Example Usage

```typescript
import { TaxOnlyUpdate } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TaxOnlyUpdate = {
  taxOnly: true,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `taxOnly`                                                       | *boolean*                                                       | :heavy_check_mark:                                              | True to mark as tax-only; false to remove the tax-only marking. |