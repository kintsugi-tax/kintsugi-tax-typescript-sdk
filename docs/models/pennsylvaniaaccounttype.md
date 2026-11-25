# PennsylvaniaAccountType

Account ID types accepted when requesting third-party access on Pennsylvania myPATH.

myPATH identifies the account by one of these: a Business Use ID, an Account ID,
or a Sales License ID.

## Example Usage

```typescript
import { PennsylvaniaAccountType } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PennsylvaniaAccountType = "SALES_LICENSE_ID";
```

## Values

```typescript
"BUSINESS_USE_ID" | "ACCOUNT_ID" | "SALES_LICENSE_ID"
```