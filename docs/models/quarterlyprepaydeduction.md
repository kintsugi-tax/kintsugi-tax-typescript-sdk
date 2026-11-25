# QuarterlyPrepayDeduction

A single monthly prepayment netted against a quarterly reconciliation filing.

## Example Usage

```typescript
import { QuarterlyPrepayDeduction } from "@kintsugi-tax/tax-platform-sdk/models";

let value: QuarterlyPrepayDeduction = {
  label: "<value>",
  amount: "111.34",
  filingId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `label`                                                     | *string*                                                    | :heavy_check_mark:                                          | Human-readable label, e.g. 'April prepayment'.              |
| `amount`                                                    | *string*                                                    | :heavy_check_mark:                                          | Prepayment tax liability subtracted from the quarter total. |
| `filingId`                                                  | *string*                                                    | :heavy_check_mark:                                          | Identifier of the monthly prepayment filing.                |