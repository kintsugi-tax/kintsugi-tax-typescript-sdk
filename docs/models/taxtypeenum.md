# TaxTypeEnum

Tax obligation on a nexus, registration, or filing row.

Registrations and filings may be SALES_AND_USE_TAX: one state account and
one return can cover both taxes, and each is stored as a single row.
Nexus rows are SALES_TAX, USE_TAX, RETAIL_DELIVERY_FEE, or
SMALL_PARCEL_VAT. Sales tax, use tax, the retail delivery fee, and the
Swiss small-parcel threshold are separate obligations with their own met
dates and period models. SMALL_PARCEL_VAT is a threshold only. A sales
tax registration covers it, and it has no account and no return of its own.

## Example Usage

```typescript
import { TaxTypeEnum } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TaxTypeEnum = "SMALL_PARCEL_VAT";
```

## Values

```typescript
"SALES_TAX" | "USE_TAX" | "SALES_AND_USE_TAX" | "RETAIL_DELIVERY_FEE" | "SMALL_PARCEL_VAT"
```