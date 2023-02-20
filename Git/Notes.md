# For commits:

npm install -g commitizen

npm i cz-customizable --save-dev


add this code to package-lock.json:

```json
"config":{
    "commitizen":{
    "path" : "node_modules/cz-customizable"
    }
}
```


npm install --save-dev @commitlint/config-conventional @commitlint/cli