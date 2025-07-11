# AddressSearchResponse

## Example Usage

```typescript
import { AddressSearchResponse } from "@kintsugi-tax/tax-platform-sdk/models";

let value: AddressSearchResponse = {
  addressSubmitted: {},
  responseAddress: {},
  verificationStatus: "<value>",
  enrichFields: [],
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `addressSubmitted`                                                                      | [models.AddressSubmittedResponse](../models/addresssubmittedresponse.md)                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `responseAddress`                                                                       | [models.AddressResponseData](../models/addressresponsedata.md)                          | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `verificationStatus`                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | Indicates if the address was VERIFIED, PARTIALLY_VERIFIED, INVALID, UNVERIFIABLE, BLANK |
| `enrichFields`                                                                          | *string*[]                                                                              | :heavy_check_mark:                                                                      | List of additional fields added to enrich the address                                   |