# MDposit client build

<div align="center" style="display:flex;align-items:center;justify-content:space-around;padding:20px 0;">
<img src="md-build.png" alt="mdposit" />
</div>

Common build for the different node clients of the **MDDB MDposit** project. Download the [**build.zip**](./build.zip) file with all the files needed for deploying the MDposit client in any of its flavours.

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