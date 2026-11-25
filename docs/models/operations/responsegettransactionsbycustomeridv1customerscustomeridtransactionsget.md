# ResponseGetTransactionsByCustomerIdV1CustomersCustomerIdTransactionsGet

Successful Response


## Supported Types

### `models.TransactionRead[]`

```typescript
const value: models.TransactionRead[] = [
  {
    organizationId: "<id>",
    externalId: "<id>",
    date: "2024-03-14",
    id: "<id>",
    addresses: [],
    transactionItems: [
      {
        organizationId: "<id>",
        date: "2024-08-28",
        externalProductId: "<id>",
        id: "<id>",
        taxItems: [
          {
            rate: "<value>",
            amount: "930.91",
            name: "<value>",
          },
        ],
      },
    ],
    type: "SALE",
  },
];
```

### `models.PageTransactionRead`

```typescript
const value: models.PageTransactionRead = {
  items: [
    {
      organizationId: "<id>",
      externalId: "<id>",
      date: "2024-06-21",
      id: "<id>",
      addresses: [],
      transactionItems: [],
      type: "TAX_COLLECTION",
    },
  ],
  total: 467045,
  page: 592293,
  size: 693910,
  pages: 314435,
};
```

