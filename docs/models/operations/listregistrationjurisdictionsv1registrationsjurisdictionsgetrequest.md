# ListRegistrationJurisdictionsV1RegistrationsJurisdictionsGetRequest

## Example Usage

```typescript
import { ListRegistrationJurisdictionsV1RegistrationsJurisdictionsGetRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: ListRegistrationJurisdictionsV1RegistrationsJurisdictionsGetRequest =
  {
    xOrganizationId: "org_12345",
  };
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `statusIn`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Filter by registration status (comma-separated); same as GET /registrations. |                                                                              |
| `xOrganizationId`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | The unique identifier for the organization making the request                | org_12345                                                                    |