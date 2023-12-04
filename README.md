# nextjs-directus-multitenant-starter
A nextjs Starter Template for directus CMS enriched with some multi tenancy features

## What is this?
This nextjs starter is meant to be used with [directus cms](https://directus.io/). If you don't know what directus is or why you could need it, this starter is also not for you ;-)
This starter requires a running instance of directus, however i will not cover here, how to setup up directus, just the frontend integration with nextjs.
Also, this starter here is based on [this repository here from fredygerman](https://github.com/fredygerman/next-js-directus-starter) - i have only added the multi tenancy functionality and adapted some things to my needs. If you think this starter template here is helpful, also consider to show some love to fredygerman. Also, if you don't need the multi tenancy functionality, consider using the starter from fredygerman directly.

## Features of this starter
- NextJS 13
- Radix UI / Tailwind CSS
- Lucide Icons
- Themes with next-themes
- <em>Multi tenancy functionality</em>

## License
This repository and the including source code is licensed under the MIT license, so is the code from fredygerman.

## How does it work?
I will only describe the multi tenancy functionality here, as this is what i have added.
For documentation on the basic functionality of the starter, please refer to the repo of fredygerman.
For documentation on directus, head over to [directus.io](https://directus.io/)

## Get started
Create a .env file in the root of the project with the following entries:
- DIRECTUS_URL -> The url of your self hosted directus instance, e.g. https://directus.your-domain.com
- DIRECTUS_TOKEN_EXPIRATION_ADJUSTMENT -> The session lifetime in seconds, needs to be appropriate to your directus setting, e.g. 86400 for a sessions lifetime of a day
- DIRECTUS_USER_CREATOR_TOKEN
- DIRECTUS_DEFAULT_ROLE_ID

## Multi tenancy


