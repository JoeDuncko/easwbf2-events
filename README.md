# easwbf2-events

EA Star Wars Battlefront II (2017) community event calendar

# Credits

Star Wars Battlefront II Copyright Electronic Arts Inc.

Responsive images taken directly from [the official EA Star Wars Battlefront II web site](https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2).

Schedule sourced from [EA's forums](https://answers.ea.com/t5/Announcements/Star-Wars-Battlefront-II-Community-Events-Calendar/td-p/9056197), with the updates specified in the [r/StarWarsBattlefront wiki](https://old.reddit.com/r/StarWarsBattlefront/wiki/faq).

Thank you to [u/Potatoslayer2](https://www.reddit.com/r/StarWarsBattlefront/comments/kw74yt/new_to_swbf2_heres_a_calendar_of_upcoming_ingame/gj2pp7p/?context=3) for pointing out that events start at 00:01am CET and conclude the following day at 06:00am CET for a total of 30 hours.

Tools used:

-   [Astro](https://astro.build/)
-   [Halfmoon](https://www.gethalfmoon.com/)
-   [FontAwesome](https://fontawesome.com/)
-   [date-fns](https://date-fns.org/)
-   [date-fns-tz](https://date-fns.org/v2.16.1/docs/Time-Zones)

# Building the PWA

The PWA requires a service worker to function. Workbox generates this service worker.

-   If you don't have Workbox, install it: `npm install workbox-cli --global`
-   `workbox generateSW workbox-config.js`

See https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli for more info.

---

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
