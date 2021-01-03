# Factorial Calculator

This is my basic flask app which calculates factorial for a non-negative number.

`npm install` installs the necessary packages.
`npm run build:local` builds the docker image.
`npm run run:local` runs the containered application on local docker server.
`npm start`runs the application natively.

This repo contains a file named `buildspec.yml`. This file is the config file for describing **AWS CodeBuild** stage steps. It builds the image and pushes it to **AWS Elastic Container Registry**. Then it creates a `imagespecificatoins.json` file for the **AWS CodeDeploy** stage to deploy the image on **AWS Elastic Container Service**.

## CDK

If you come here from the [CDK Examples](https://github.com/volaka/cdk-examples), you should clone this repo to your local and then change remote with your CodeCommit ssh url.

```bash
git remote remove origin
git remote add origin <codecommit_ssh_url>
```
