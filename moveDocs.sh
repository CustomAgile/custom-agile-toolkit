eslint *.ts --fix > /dev/null&
eslint built/*.js --fix > /dev/null&
git submodule init
git submodule update
typedoc -out tempDocs --tsconfig tsconfig.json --ignoreCompilerErrors --mode modules
mv docs/.git tempDocs/
rm -rf docs/
mv  tempDocs/ docs/
