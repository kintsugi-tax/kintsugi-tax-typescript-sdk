# DeregisterRegistrationRequest

Body for POST /registrations/{id}/deregister.

## Example Usage

```typescript
import { DeregisterRegistrationRequest } from "@kintsugi-tax/tax-platform-sdk/models";
import { RFCDate } from "@kintsugi-tax/tax-platform-sdk/types";

let value: DeregisterRegistrationRequest = {
  closureDate: new RFCDate("2026-09-16"),
  reason: "CLOSING_NEXUS_IN_STATE",
  finalReturnAcknowledged: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `closureDate`                                                                                            | [RFCDate](../types/rfcdate.md)                                                                           | :heavy_check_mark:                                                                                       | Effective date the permit closes with the jurisdiction (YYYY-MM-DD). Past and future dates are accepted. |
| `reason`                                                                                                 | [models.DeregistrationReasonEnum](../models/deregistrationreasonenum.md)                                 | :heavy_check_mark:                                                                                       | Reason a registration is being closed.                                                                   |
| `finalReturnAcknowledged`                                                                                | *true*                                                                                                   | :heavy_check_mark:                                                                                       | Must be true: the actor confirms a final return is still owed.                                           |
| `requestId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Optional client-minted id for this confirm attempt.                                                      |