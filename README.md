<p align="center">
  <a href="https://hashpire.io">
    <img alt="hashpire" src="https://avatars.githubusercontent.com/u/42939082?s=200&v=4" width="60" />
  </a>
</p>
<h1 align="center">
  Hashpire Web3 Digital Garden Website
</h1>

This repo contains the code for the Official Hashpire Web3 Digital Garden Website — `https://hashpire.io`.

The site is built using [React](https://reactjs.org/), [Gatsby](https://www.gatsbyjs.com/), and [Tailwind CSS](https://tailwindcss.com/) to turn a collection of interlinked markdown files called a [Eureka](https://github.com/tonghualabs/eureka) Module into a static website for easy content consumption.

To contribute content to the site, please see [eureka-web3](https://github.com/hashpire/eureka-web3).

## 🚀 Getting Started

```bash
git clone https://github.com/hashpire/web3-garden.git
cd web3-garden
yarn start
```

## 💫 Deploy

When a `git push` is made to the `main` branch, `Github Actions` will automatically run `yarn build` and deploy the site to `hashpire.io` which is hosted on `Github Pages`.
