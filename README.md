# coway-dialogflow-deploy
Coway Dialogflow CX Deployment (Github) by TypeScript


##

```bash
npm install @google-cloud/dialogflow-cx
```

## Local Build & Test

```bash
yarn build
```

```bash
tsc
```

```bash
yarn test
```

```bash
(node:27298) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///Users/seongjungkim/Development/python/datacollector/coway/coway-dialogflow-deploy/dist/dialogflow.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /Users/seongjungkim/Development/python/datacollector/coway/coway-dialogflow-deploy/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
(node:27298) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^
```

```bash
Error: 7 PERMISSION_DENIED: Dialogflow API has not been used in project dl-cloud-search before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/dialogflow.googleapis.com/overview?project=dl-cloud-search then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.
```