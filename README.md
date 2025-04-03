# MDposit client build

<div align="center" style="display:flex;align-items:center;justify-content:space-around;padding:20px 0;">
<img src="md-build.png" alt="mdposit" />
</div>

Common build for the different node clients of the **MDDB MDposit** project. Download the [**build.zip**](./build.zip) file with all the files needed for deploying the MDposit client in any of its flavours.

## Add new client

Open the [**host-config.js**](./host-config.js) file and insert the new data into **HOST_CONFIGURATIONS**:

```js
'<URL>': {
    production: false, // production or development
    api: 'https://<URL>/api/rest/', // be aware that the URL must be the same as the one in the server (no relative paths allowed)))
    primaryColor: '#000000', // main color for the node
    logoLabel: '<NODE> node',
    name:'MDposit <NODE>'
}
```

Once the data is pushed, the [**build.yml**](./.github/workflows/build.yml) GitHub action will take care of creating the new build automatically.

## Setup

As this repo gets data from a private repo for building the [**build.zip**](./build.zip) file, a couple of secrets are needed:

### Generating GITHUB_TOKEN

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens

2. Click "Generate new token" → "Fine-grained personal access token"

    * Repository Access: Select ORG_NAME/PRIVATE_REPO

    * Permissions:

        * Contents: Read-Only

    * Set an expiration date (optional).

3. Copy the token and add it as a secret in your repository

    * Go to Settings → Secrets and variables → Actions

    * Click New repository secret

    * Name it PRIVATE_REPO_PAT

    * Paste the token

### Generating DEPLOY_TOKEN

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens

2. Generate a new token:

    * Repository Access: Select ORG_NAME/CURRENT_REPO

    * Permissions:

      * Contents: Read & Write

    * Expiration: (Optional)

3. Save the token and add it to GitHub Actions secrets in your repository:

    *  Go to Settings → Secrets and variables → Actions

    * Click New repository secret

    * Name it DEPLOY_TOKEN

    * Paste the token

## Credits

Daniel Beltran, Genís Bayarri, Adam Hospital.

## Copyright & licensing

This website has been developed by the [MMB group](https://mmb.irbbarcelona.org) at the [IRB Barcelona](https://irbbarcelona.org).

© 2025 **Institute for Research in Biomedicine**

Licensed under the **Apache License 2.0**.