# TransactionRefundStatus

Shopify has 2 order statuses for refund case: refunded and partially_refunded
If the given order has different status from these 2, we will set the
transaction's refund_status to PARTIALLY_REFUNDED by default.

## Example Usage

```typescript
import { TransactionRefundStatus } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TransactionRefundStatus = "FULLY_REFUNDED";
```

## Values

```typescript
"FULLY_REFUNDED" | "PARTIALLY_REFUNDED"
```