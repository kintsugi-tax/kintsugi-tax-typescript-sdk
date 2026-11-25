# PartialCertificateTypeRead

One certificate form the Add Exemption dropdown can offer for a partial exemption.

## Example Usage

```typescript
import { PartialCertificateTypeRead } from "@kintsugi-tax/tax-platform-sdk/models";

let value: PartialCertificateTypeRead = {
  code: "<value>",
  name: "<value>",
  jurisdiction: "<value>",
  country: "LU",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `code`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `jurisdiction`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `country`                                              | [models.CountryCodeEnum](../models/countrycodeenum.md) | :heavy_check_mark:                                     | N/A                                                    |