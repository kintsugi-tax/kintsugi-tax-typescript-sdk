# ProcessingStatusEnum

Our transaction state, used to determine when/if a transaction needs additional
processing.

## Example Usage

```typescript
import { ProcessingStatusEnum } from "@kintsugi-tax/tax-platform-sdk/models";

let value: ProcessingStatusEnum = "ADDRESS_DONE";
```

## Values

```typescript
"NEW" | "UPDATED" | "QUEUED" | "ADDRESS_DONE" | "EXEMPT_DONE" | "NEXUS_DONE" | "PROCESSED" | "FILING_STARTED" | "FILING_DONE" | "LOCKED" | "PENDING" | "ARCHIVED" | "NEEDS_REFETCH"
```