# GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest

## Example Usage

```typescript
import { GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value:
  GetFilingsByRegistrationIdV1FilingsRegistrationRegistrationIdGetRequest = {
    registrationId: "<id>",
  };
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `registrationId`                                                            | *string*                                                                    | :heavy_check_mark:                                                          | Unique identifier for the registration<br/>        associated with the filings. |
| `page`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Page number                                                                 |
| `size`                                                                      | *number*                                                                    | :heavy_minus_sign:                                                          | Page size                                                                   |