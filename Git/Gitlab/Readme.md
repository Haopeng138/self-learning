# Gitlab CI/CD

## Create a `.gitlab-ci.yml` file in the root of your repository

```yaml
stages:
  - build
  - test
  - deploy

build:
    stage: build
    script:
        - echo "Building the app"

test:
    stage: test
    script:
        - echo "Testing the app"

deploy:
    stage: deploy
    script:
        - echo "Deploying the app"
```
