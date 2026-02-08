# CreditNoteItemCreateUpdate

## Example Usage

```typescript
import { CreditNoteItemCreateUpdate } from "@kintsugi-tax/tax-platform-sdk/models";

let value: CreditNoteItemCreateUpdate = {
  externalId: "<id>",
  date: new Date("2026-05-09T16:48:14.799Z"),
  externalProductId: "<id>",
  quantity: 5055.9,
  amount: 7252.29,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the credit note item in the external system.                            |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Date when the credit note item was issued or created.                                         |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Brief explanation or details about the credit note item.                                      |
| `externalProductId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the associated product in the external system.                          |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of units or amount of the product being credited.                                      |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Total monetary value of the credit note item before taxes.                                    |
| `taxAmountImported`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Pre-calculated tax amount for the item, if provided by the external system.                   |
| `taxRateImported`                                                                             | *number*                                                                                      | :heavy_minus_sign:                                                                            | Pre-calculated tax rate for the item, if provided by the external system.                     |
| `taxableAmount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Portion of the item amount subject to taxation.                                               |
| `taxExemption`                                                                                | [models.TaxExemptionEnum](../models/taxexemptionenum.md)                                      | :heavy_minus_sign:                                                                            | This enum is used to determine if a transaction is exempt from tax.                           |
| `taxItems`                                                                                    | [models.TaxItemBuilder](../models/taxitembuilder.md)[]                                        | :heavy_minus_sign:                                                                            | Detailed breakdown of individual tax components applied to this item.                         |