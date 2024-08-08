# MDposit client build

Builds for the different node clients of the **MDDB MDposit** project.

## Create new build

### Create new folder 

Create a new folder with a **node id** as a name (ie jsc). Inside this folder, copy the [**host-config.js**](./host-config.js) and [**ci.yml**](./ci.yml) files from the root of the project. The structure of the new folder must be:

* NODE_ID/
  * ci.yml
  * host-config.js

### Set Up configuration files

#### ci.yml

ci.yml file inside the new folder:

```yml
stages:
  - build
  - deploy

build_job:
  stage: build
  script:
    - git clone https://gitlab-ci-token:${CI_JOB_TOKEN}@mmb.irbbarcelona.org/gitlab/d.beltran.anadon/mdposit_client.git
    - cp NODE_ID/host-config.js mdposit_client/src
    - cd mdposit_client
    - touch .env
    - cp -r /home/gitlab-runner/node_modules .
    - npm run build
    - cp -r build ../build
  artifacts:
    paths:
      - build
  only:
    changes:
      - NODE_ID/host-config.js

deploy_job:
  stage: deploy
  script:
    - cd NODE_ID
    - git config --global user.email "genis.bayarri@irbbarcelona.org"
    - git config --global user.name "Automatic CI/CD"
    - git clone https://oauth2:${GITLAB_ACCESS_TOKEN}@mmb.irbbarcelona.org/gitlab/gbayarri/mdposit-client-build.git
    - cd mdposit-client-build
    - cp -r ../../build ./NODE_ID
    - cd NODE_ID
    - zip -r build.zip build
    - git add build build.zip
    - git commit -m "Deploy new build for NODE_ID"
    - git push origin main
  only:
    changes:
      - NODE_ID/host-config.js
```

Modify NODE_ID by the **node id** chosen when the folder has been created.

#### host-config.js

The host configuration file is used for **setting up** the target **API** and some **basic visual setup** of the **client**:

```js
// Import default query fields
import defaultQueryFields from 'src/utils/constants/query-fields';

// Set the default description
const DEFAULT_DESCRIPTION = <>
    <strong>MDposit</strong> is an open platform designed to provide web
    access to atomistic molecular dynamics (MD) simulations. The aim of
    this initiative is to ease and promote data sharing along the
    wide-world scientific community in order to contribute in research.
</>;

// Set default values for every host config fields
// These values are used to fill missing values
const DEFAUL_HOST_CONFIGURATION = {
    api: 'http://localhost:8081/rest/', // be aware that the URL must be the same as the one in the server (no relative paths allowed)
    production: false,
    name: 'MDposit',
    favicon: 'mdposit_favicon',
    description: DEFAULT_DESCRIPTION,
    logo: 'logo-mdposit',
    primaryColor: '#808081', // Grey
    secondaryColor: '#fafafa', // Light grey
    searchExample: 'e.g. Orozco lab',
    optionsField: undefined, // No browser selector and no data summary pie chart by default
    optionsLabel: 'Options',
    optionsNiceNames: {},
    queryFields: defaultQueryFields,
};

// Set every host configuration
const HOST_CONFIGURATIONS = {
    // Testing
    'localhost': {
        api: 'API_REST_URL', // be aware that the URL must be the same as the one in the server (no relative paths allowed)))
        primaryColor: '#808081', // Grey,
        logo:'LOGO_MDPOSIT',
        name:'WESITE_NAME'
    }
};

// Set the current host configuration
const HOST_CONFIG = HOST_CONFIGURATIONS['localhost'];

// Fill the host configuration gaps with default values
Object.entries(DEFAUL_HOST_CONFIGURATION).forEach(([ field, defaultValue ]) => {
    if (!HOST_CONFIG[field]) HOST_CONFIG[field] = defaultValue;
});

export default HOST_CONFIG;
```

Parameters that can be changed in this file:

* api - API URL to query. It must be an absolute URL. Take into account that, depending on the [**Virtual Hosts configuration**](https://mmb.irbbarcelona.org/gitlab/gbayarri/mddb-docker/-/blob/main/readme/setup.md#setting-up-virtual-hosts), this URL should look like `http(s)://your_server_ip/api/rest/`.
* production - Set if this is production (true) or development (false)
* global - Set if the API is the global (true) or federated (false)
* name - Name to be displayed in the sheet header
* favicon - Icon filename (without the format extension) to be displayed in the sheet header. Icons are located at public/.
* description - Text or JSX to be displayed in the home page
* logo - Logo filename (without the format extension) to be dipslayed on the top-left corner, in the header. Images are located at src/images/.
* primaryColor - Color of the header and additional regions along the whole web page
* secondaryColor - Color of non-primary regions along the whole web page
* searchExample - Search example: This is shown in search bars as placeholder when they are empty
* optionsField - Field in projects metadata to be used as options in the browse selector and the data summary. If no options field is passed then ignore the options label and options nice names.
* optionsLabel - Name of the options in the browse selector and the data summary
* optionsNiceNames - Nice names for every possible value in the options field. Non-matching values will remain as they are.
* queryFields - Fields to be queried in the search and advanced search pages and their configurations
* options - Additional flags which may be used by the client

### Modify .gitlab-ci.yml file

Once the configuration files inside the **node id** folder have been set up it's time to modify the [**.gitlab-ci.yml**](./.gitlab-ci.yml) file in the root of the project:

```yml
image: node:16

cache:
  paths:
    - node_modules/

stages:
  - build
  - deploy

before_script:
  - apt-get update && apt-get install -y curl
  - |
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install 16.19.1
    nvm use 16.19.1
    node -v
    npm -v

include:
  - local: 'jsc/ci.yml'
  - local: 'NODE_ID/ci.yml'
```

Modify NODE_ID by the **node id** chosen when the folder has been created.

## Update repo

Execute the following git instructions (replacing NODE_ID by **node id**):

    git add .
    git commit -m "Added new NODE_ID build"
    git push

Now it starts the **automatic pipeline** in the gitlab repo. This process takes **several minutes** and, once it's finished, a new **build folder** and a new **build.zip** file will be created in the **NODE_ID** folder. 

Finally, update your **local repo** with the new content:

    git pull

## Set Up CI/CD

For downloading a private repo during the CI/CD pipeline, a **CI/CD variable** must be created:

### Create Project Access Token

Go to **Settings / Aceesss Tokens** and create a new **Project Access Token** with role **Owner** and **api** and **write_repository** scopes. Copy the value given once created.

### Create CI/CD variable

Go to **Settings / CI/CD** and expand the **Variables** section. Add variable with a **Key** name (ie GITLAB_ACCESS_TOKEN) and put as **Value** the Token given in the previous section.

Use the value put in the **Key** field in the CI/CD pipeline.

## Credits

Daniel Beltran, Genís Bayarri, Adam Hospital.

## Copyright & licensing

This website has been developed by the [MMB group](https://mmb.irbbarcelona.org) at the [IRB Barcelona](https://irbbarcelona.org).

© 2024 **Institute for Research in Biomedicine**

Licensed under the **Apache License 2.0**.