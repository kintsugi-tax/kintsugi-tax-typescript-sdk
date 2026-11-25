# PennsylvaniaAccountValidationMethod

Account validation methods offered by Pennsylvania myPATH third-party access.

The requester proves ownership with exactly one of these: a Letter ID, a Business
Registration Confirmation Code, a Payment Amount, or a Return Line Item.

## Example Usage

```typescript
import { PennsylvaniaAccountValidationMethod } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PennsylvaniaAccountValidationMethod = "PAYMENT_AMOUNT";
```

## Values

```typescript
"LETTER_ID" | "BUSINESS_REGISTRATION_CONFIRMATION_CODE" | "PAYMENT_AMOUNT" | "RETURN_LINE_ITEM"
```