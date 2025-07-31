# TransactionAddressPublic

Public address class for transaction addresses

## Example Usage

```typescript
import { TransactionAddressPublic } from "@kintsugi-tax/tax-platform-sdk/models";

let value: TransactionAddressPublic = {
  type: "BILL_TO",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `phone`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Phone number associated with the address.                                                          |
| `street1`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Primary street address.                                                                            |
| `street2`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Additional street address details, such as an apartment or suite number.                           |
| `city`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | City where the customer resides.                                                                   |
| `county`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | County or district of the customer.                                                                |
| `state`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | State or province of the customer.                                                                 |
| `postalCode`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | ZIP or Postal code of the customer.                                                                |
| `country`                                                                                          | [models.CountryCodeEnum](../models/countrycodeenum.md)                                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `fullAddress`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Complete address string of the customer, which can be used as an alternative to individual fields. |
| `type`                                                                                             | [models.AddressType](../models/addresstype.md)                                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |