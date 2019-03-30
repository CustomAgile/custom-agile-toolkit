eslint built/*.js --fix > /dev/null&
webpack&
git submodule init
git submodule update
ts-node ClassGenerator.ts> /dev/null
node_modules/.bin/typedoc --theme minimal -out tempDocs --tsconfig docsTsConfig.jsonc --ignoreCompilerErrors --mode modules --includeDeclarations --excludeExternals
rm -rf docs/
mv  tempDocs/ docs/
node_modules/.bin/typedoc -out tempMarkdownDocs --tsconfig tsconfig.json --ignoreCompilerErrors --mode modules --theme markdown --includeDeclarations --excludeExternals
mv  tempMarkdownDocs/ docs/markdown/