# CustomerTaxRegistrationRead

## Example Usage

```typescript
import { CustomerTaxRegistrationRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: CustomerTaxRegistrationRead = {
  id: "<id>",
  customerId: "<id>",
  countryCode: "IR",
  taxType: "rst",
  taxId: "<id>",
  isValid: true,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `customerId`                                                   | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `countryCode`                                                  | [models.CountryCodeEnum](../models/countrycodeenum.md)         | :heavy_check_mark:                                             | N/A                                                            |
| `taxType`                                                      | [models.CustomerTaxTypeEnum](../models/customertaxtypeenum.md) | :heavy_check_mark:                                             | Enum for customer tax registration types.                      |
| `taxId`                                                        | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `isValid`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |