eslint *.ts --fix > /dev/null&
eslint built/*.js --fix > /dev/null&
git submodule init
git submodule update
node_modules/.bin/typedoc -out tempDocs --tsconfig tsconfig.json --ignoreCompilerErrors --mode modules --theme markdown
mv docs/.git tempDocs/
rm -rf docs/
mv  tempDocs/ docs/
