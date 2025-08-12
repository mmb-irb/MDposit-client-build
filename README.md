# MDposit client build

<div align="center" style="display:flex;align-items:center;justify-content:space-around;padding:20px 0;">
<img src="md-build.png" alt="mdposit" />
</div>

Common build for the different node clients of the **MDDB MDposit** project. 

## Deploy into an MDDB node

Log in to the MDDB node to update as the user with docker permissions. Access to the folder where the [MDDB docker repo](https://github.com/mmb-irb/MDDB-docker) is and execute:

    python3 scripts/rebuild.py -s vre_lite -t my_stack

## Credits

Daniel Beltran, Genís Bayarri, Adam Hospital.

## Copyright & licensing

This website has been developed by the [MMB group](https://mmb.irbbarcelona.org) at the [IRB Barcelona](https://irbbarcelona.org).

© 2025 **Institute for Research in Biomedicine**

Licensed under the **Apache License 2.0**.