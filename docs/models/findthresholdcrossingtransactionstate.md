# FindThresholdCrossingTransactionState

## Example Usage

```typescript
import { FindThresholdCrossingTransactionState } from "@kintsugi-tax/tax-platform-sdk/models";

let value: FindThresholdCrossingTransactionState = {
  periodStartDate: "<value>",
  periodEndDate: "<value>",
  runningSalesTotalDecimal: "<value>",
  runningTransactionCount: 511413,
  hasAllMarketplaceTransactions: true,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `lastTxnId`                     | *string*                        | :heavy_minus_sign:              | N/A                             |
| `lastTxnDatetime`               | *string*                        | :heavy_minus_sign:              | N/A                             |
| `periodStartDate`               | *string*                        | :heavy_check_mark:              | N/A                             |
| `periodEndDate`                 | *string*                        | :heavy_check_mark:              | N/A                             |
| `runningSalesTotalDecimal`      | *string*                        | :heavy_check_mark:              | N/A                             |
| `runningTransactionCount`       | *number*                        | :heavy_check_mark:              | N/A                             |
| `hasAllMarketplaceTransactions` | *boolean*                       | :heavy_check_mark:              | N/A                             |