# rally-node-sdk (AKA custom-agile-toolkit)

A custom toolkit for interacting with Rally ALM tools in a modern JavaScript and TypeScript Fashion

## License

Distributed under the GNU Lesser General Public License v3.0

## Installation

The toolkit is distributed as an npm module named custom-agile-toolkit.  Simply add to an existing package.json or install from the command line.
```node
npm install custom-agile-toolkit
```

## Getting Started

Begin using the toolkit by creating an instance of Client:

```js
const client = new Client(apiKey, { options });
```
Available options (Toolkit.Api.ClientOptions):

| Name          | Type     | default                       | format             |
| --------- --- | -------- | ------------------------------| -------------------|
| server        | string   | 'https://rally1.rallydev.com' | Standard URL       |
| project       | string   | undefined                     | '/project/12345'   |
| workspace     | string   | undefined                     | '/workspace/12345' |