# SuggestionsV1AddressValidationSuggestionsPostRequest

## Example Usage

```typescript
import { SuggestionsV1AddressValidationSuggestionsPostRequest } from "@kintsugi-tax/tax-platform-sdk/models/operations";

let value: SuggestionsV1AddressValidationSuggestionsPostRequest = {
  xOrganizationId: "org_12345",
  validationAddress: {},
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `xOrganizationId`                                             | *string*                                                      | :heavy_check_mark:                                            | The unique identifier for the organization making the request | org_12345                                                     |
| `validationAddress`                                           | [models.ValidationAddress](../../models/validationaddress.md) | :heavy_check_mark:                                            | N/A                                                           |                                                               |