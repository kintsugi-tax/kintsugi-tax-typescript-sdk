# PennsylvaniaIdentificationType

Identification types accepted by Pennsylvania myPATH third-party access requests.

myPATH validates the requester against a federal/state identifier: an FEIN, ITIN,
Revenue ID, or SSN.

## Example Usage

```typescript
import { PennsylvaniaIdentificationType } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PennsylvaniaIdentificationType = "FEIN";
```

## Values

```typescript
"FEIN" | "ITIN" | "REVENUE_ID" | "SSN"
```