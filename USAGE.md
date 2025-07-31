<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "@kintsugi-tax/tax-platform-sdk";

const sdk = new SDK();

async function run() {
  const result = await sdk.addressValidation
    .searchV1AddressValidationSearchPost({
      apiKeyHeader: "<YOUR_API_KEY_HERE>",
    }, {
      phone: "555-123-4567",
      street1: "1600 Amphitheatre Parkway",
      street2: "Building 40",
      city: "Mountain View",
      county: "Santa Clara",
      state: "CA",
      postalCode: "94043",
      country: "US",
      fullAddress: "1600 Amphitheatre Parkway, Mountain View, CA 94043",
    });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->