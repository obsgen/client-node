# ObsGen Javascript Client

## Installation

```bash
# using npm
npm i obsgen

# using yarn
yarn add obsgen
```

## Usage

```js
import ObsGenClient from "obsgen";
import { env } from "process";

const client = new ObsGenClient(env.OBSGEN_API_KEY);

await client.logEvent({ type: "node-test" });
```
