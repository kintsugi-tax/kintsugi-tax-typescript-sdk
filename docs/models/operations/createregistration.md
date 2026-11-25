# CreateRegistration


## Supported Types

### `models.AlabamaRegistrationPayload`

```typescript
const value: models.AlabamaRegistrationPayload = {
  countryCode: "BW",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SELLERS_USE_LOCAL",
    businessName: "<value>",
    signOnId: "<id>",
    accessCode: "<value>",
    thirdPartyPassword: "<value>",
    salesTaxId: "<id>",
  },
};
```

### `models.ArizonaRegistrationPayload`

```typescript
const value: models.ArizonaRegistrationPayload = {
  countryCode: "BZ",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "REMOTE_SELLER",
    businessName: "<value>",
    salesTaxId: "<id>",
    locationId: "<id>",
  },
};
```

### `models.ArkansasRegistrationPayload`

```typescript
const value: models.ArkansasRegistrationPayload = {
  countryCode: "BS",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    arAccountId: "<id>",
    zipCode: "69994-0232",
    lastPaymentToState: "<value>",
  },
};
```

### `models.CaliforniaRegistrationPayload`

```typescript
const value: models.CaliforniaRegistrationPayload = {
  countryCode: "PA",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    salesTaxId: "<id>",
  },
};
```

### `models.ConnecticutRegistrationPayload`

```typescript
const value: models.ConnecticutRegistrationPayload = {
  countryCode: "SA",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    ctTaxRegistrationNumber: "<value>",
    lastPaymentToState: "<value>",
  },
};
```

### `models.DistrictOfColumbiaRegistrationPayload`

```typescript
const value: models.DistrictOfColumbiaRegistrationPayload = {
  countryCode: "TZ",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    dcStateTaxId: "<id>",
  },
};
```

### `models.GeorgiaRegistrationPayload`

```typescript
const value: models.GeorgiaRegistrationPayload = {
  countryCode: "CV",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    salesTaxId: "<id>",
    zipCode: "50489-9014",
    lastPaymentToState: "<value>",
  },
};
```

### `models.HawaiiRegistrationPayload`

```typescript
const value: models.HawaiiRegistrationPayload = {
  countryCode: "PG",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "GENERAL_EXCISE_TAX",
    businessName: "<value>",
    salesTaxId: "<id>",
    letterId: "<id>",
    lastPaymentToState: "<value>",
  },
};
```

### `models.IdahoRegistrationPayload`

```typescript
const value: models.IdahoRegistrationPayload = {
  countryCode: "CK",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    salesTaxId: "<id>",
  },
};
```

### `models.IllinoisRegistrationPayload`

```typescript
const value: models.IllinoisRegistrationPayload = {
  countryCode: "PF",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    illinoisAccountId: "<id>",
    lastPaymentToState: "<value>",
    firstName: "Vivien",
    lastName: "Quitzon",
    businessPhone: "<value>",
  },
};
```

### `models.IndianaRegistrationPayload`

```typescript
const value: models.IndianaRegistrationPayload = {
  countryCode: "CD",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    inStateTaxId: "<id>",
    locationId: "<id>",
    salesTaxAccountNumber: "<value>",
  },
};
```

### `models.IowaRegistrationPayload`

```typescript
const value: models.IowaRegistrationPayload = {
  countryCode: "BN",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    iaAccountType: "RETAIL_USE_TAX_LICENSE",
    iaStateTaxPermitNumber: "<value>",
    idrNumber: "<value>",
  },
};
```

### `models.KansasRegistrationPayload`

```typescript
const value: models.KansasRegistrationPayload = {
  countryCode: "GW",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "RETAILERS_COMPENSATING_USE_TAX",
    businessName: "<value>",
    ksStateTaxId: "<id>",
    accessCode: "<value>",
  },
};
```

### `models.MassachusettsRegistrationPayload`

```typescript
const value: models.MassachusettsRegistrationPayload = {
  countryCode: "SO",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    maStateAccountId: "<id>",
  },
};
```

### `models.MississippiRegistrationPayload`

```typescript
const value: models.MississippiRegistrationPayload = {
  countryCode: "DE",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    msStateTaxId: "<id>",
    msAccountType: "SALES_TAX_LICENSE",
    letterId: "<id>",
  },
};
```

### `models.MichiganRegistrationPayload`

```typescript
const value: models.MichiganRegistrationPayload = {
  countryCode: "UY",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "USE_TAX",
    businessName: "<value>",
    miStateTaxId: "<id>",
  },
};
```

### `models.MissouriRegistrationPayload`

```typescript
const value: models.MissouriRegistrationPayload = {
  countryCode: "PL",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    moStateTaxId: "<id>",
  },
};
```

### `models.TennesseeRegistrationPayload`

```typescript
const value: models.TennesseeRegistrationPayload = {
  countryCode: "CX",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "USE_TAX",
    businessName: "<value>",
    tnStateTaxId: "<id>",
    zipCode: "47762",
    letterId: "<id>",
  },
};
```

### `models.TexasRegistrationPayload`

```typescript
const value: models.TexasRegistrationPayload = {
  countryCode: "GG",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    texasTaxpayerNumber: "<value>",
    webfileNumber: "<value>",
  },
};
```

### `models.UtahRegistrationPayload`

```typescript
const value: models.UtahRegistrationPayload = {
  countryCode: "GF",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    utStateTaxId: "<id>",
  },
};
```

### `models.VermontRegistrationPayload`

```typescript
const value: models.VermontRegistrationPayload = {
  countryCode: "LA",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    vtStateTaxId: "<id>",
  },
};
```

### `models.VirginiaRegistrationPayload`

```typescript
const value: models.VirginiaRegistrationPayload = {
  countryCode: "UY",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "USE_TAX",
    businessName: "<value>",
    vaStateTaxId: "<id>",
  },
};
```

### `models.WashingtonRegistrationPayload`

```typescript
const value: models.WashingtonRegistrationPayload = {
  countryCode: "YE",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "EXCISE_TAX",
    businessName: "<value>",
    waStateTaxId: "<id>",
  },
};
```

### `models.WestVirginiaRegistrationPayload`

```typescript
const value: models.WestVirginiaRegistrationPayload = {
  countryCode: "LV",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    wvStateTaxId: "<id>",
  },
};
```

### `models.WisconsinRegistrationPayload`

```typescript
const value: models.WisconsinRegistrationPayload = {
  countryCode: "HR",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    wiStateTaxId: "<id>",
  },
};
```

### `models.MaineRegistrationPayload`

```typescript
const value: models.MaineRegistrationPayload = {
  countryCode: "GR",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    meStateTaxId: "<id>",
  },
};
```

### `models.MinnesotaRegistrationPayload`

```typescript
const value: models.MinnesotaRegistrationPayload = {
  countryCode: "BV",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    mnStateTaxId: "<id>",
  },
};
```

### `models.RegistrationCreatePayload`

```typescript
const value: models.RegistrationCreatePayload = {
  countryCode: "SI",
  stateCode: "<value>",
  stateName: "<value>",
};
```

### `models.OSSRegistrationCreatePayload`

```typescript
const value: models.OSSRegistrationCreatePayload = {};
```

### `models.SSTRegistrationCreatePayload`

```typescript
const value: models.SSTRegistrationCreatePayload = {};
```

### `models.KentuckyRegistrationPayload`

```typescript
const value: models.KentuckyRegistrationPayload = {
  countryCode: "QA",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    kyStateTaxId: "<id>",
  },
};
```

### `models.MarylandRegistrationPayload`

```typescript
const value: models.MarylandRegistrationPayload = {
  countryCode: "GW",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    mdStateTaxId: "<id>",
    marketplaceFacilitator: false,
  },
};
```

### `models.NebraskaRegistrationPayload`

```typescript
const value: models.NebraskaRegistrationPayload = {
  countryCode: "RO",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    neUserId: "<id>",
  },
};
```

### `models.NevadaRegistrationPayload`

```typescript
const value: models.NevadaRegistrationPayload = {
  countryCode: "FJ",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    nvStateTaxId: "<id>",
  },
};
```

### `models.NewJerseyRegistrationPayload`

```typescript
const value: models.NewJerseyRegistrationPayload = {
  countryCode: "HU",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    njStateTaxId: "<id>",
  },
};
```

### `models.NewMexicoRegistrationPayload`

```typescript
const value: models.NewMexicoRegistrationPayload = {
  countryCode: "SO",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "GROSS_RECEIPTS_TAX",
    businessName: "<value>",
    nmStateTaxId: "<id>",
  },
};
```

### `models.NewYorkRegistrationPayload`

```typescript
const value: models.NewYorkRegistrationPayload = {
  countryCode: "SD",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    nyStateTaxId: "<id>",
  },
};
```

### `models.NorthDakotaRegistrationPayload`

```typescript
const value: models.NorthDakotaRegistrationPayload = {
  countryCode: "IQ",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    ndStateTaxId: "<id>",
    letterId: "<id>",
  },
};
```

### `models.SouthCarolinaRegistrationPayload`

```typescript
const value: models.SouthCarolinaRegistrationPayload = {
  countryCode: "KM",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "RETAIL_SALES_TAX",
    businessName: "<value>",
    scStateTaxId: "<id>",
    scSid: "<id>",
    letterId: "<id>",
  },
};
```

### `models.OklahomaRegistrationPayload`

```typescript
const value: models.OklahomaRegistrationPayload = {
  countryCode: "GY",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "REMOTE_SELLER",
    businessName: "<value>",
    okStateTaxId: "<id>",
    zipCode: "54048-1695",
  },
};
```

### `models.LouisianaRegistrationPayload`

```typescript
const value: models.LouisianaRegistrationPayload = {
  countryCode: "AL",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "REMOTE_SELLER",
    businessName: "<value>",
    laStateTaxId: "<id>",
    licenseType: "DIRECT_MARKETER",
    naicsCode: "<value>",
    registeredEmailAddress: "<value>",
  },
};
```

### `models.OhioRegistrationPayload`

```typescript
const value: models.OhioRegistrationPayload = {
  countryCode: "HU",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    ohStateTaxId: "<id>",
  },
};
```

### `models.PennsylvaniaRegistrationPayload`

```typescript
const value: models.PennsylvaniaRegistrationPayload = {
  countryCode: "MV",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    paStateTaxId: "<id>",
    accountType: "BUSINESS_USE_ID",
    accountId: "<id>",
    identificationType: "REVENUE_ID",
    identificationNumber: "<value>",
    accountValidationMethod: "LETTER_ID",
    accountValidationValue: "<value>",
    salesAndUseAccountId: "<id>",
  },
};
```

### `models.RhodeIslandRegistrationPayload`

```typescript
const value: models.RhodeIslandRegistrationPayload = {
  countryCode: "AG",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    mfaCompleted: true,
    businessName: "<value>",
    riStateTaxId: "<id>",
    riSalesFilingId: "<id>",
  },
};
```

### `models.SouthDakotaRegistrationPayload`

```typescript
const value: models.SouthDakotaRegistrationPayload = {
  countryCode: "JM",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    sdStateTaxId: "<id>",
  },
};
```

### `models.FloridaRegistrationPayload`

```typescript
const value: models.FloridaRegistrationPayload = {
  countryCode: "BQ",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_TAX",
    businessName: "<value>",
    flCertificateNumber: "<value>",
    businessPartnerNumber: "<value>",
  },
};
```

### `models.NorthCarolinaRegistrationPayload`

```typescript
const value: models.NorthCarolinaRegistrationPayload = {
  countryCode: "BH",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    ncStateTaxId: "<id>",
    contactName: "<value>",
    contactEmail: "<value>",
    contactPhone: "<value>",
  },
};
```

### `models.WyomingRegistrationPayload`

```typescript
const value: models.WyomingRegistrationPayload = {
  countryCode: "DJ",
  stateCode: "<value>",
  stateName: "<value>",
  jurisdictionSpecificFields: {
    registrationType: "SALES_AND_USE_TAX",
    businessName: "<value>",
    wyStateTaxId: "<id>",
  },
};
```

