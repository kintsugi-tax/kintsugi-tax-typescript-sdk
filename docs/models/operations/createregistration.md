# CreateRegistration


## Supported Types

### `models.RegistrationCreatePayload`

```typescript
const value: models.RegistrationCreatePayload = {
  registrationImportType: "REGULAR",
  countryCode: "SI",
  stateCode: "<value>",
  stateName: "<value>",
  filingFrequency: "ANNUAL_FISCAL_YEAR",
  amountFees: 0,
};
```

### `models.OSSRegistrationCreatePayload`

```typescript
const value: models.OSSRegistrationCreatePayload = {
  registrationImportType: "OSS",
};
```

### `models.SSTRegistrationCreatePayload`

```typescript
const value: models.SSTRegistrationCreatePayload = {
  registrationImportType: "SST",
};
```

