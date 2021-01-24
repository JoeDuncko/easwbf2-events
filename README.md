# easwbf2-events

EA Star Wars Battlefront II (2017) community event calendar

# Credits

Star Wars Battlefront II Copyright Electronic Arts Inc.

Responsive images taken directly from [the office EA Star Wars Battlefront II web site](https://www.ea.com/games/starwars/battlefront/star-wars-battlefront-2).

Schedule sourced from [EA's forums](https://answers.ea.com/t5/Announcements/Star-Wars-Battlefront-II-Community-Events-Calendar/td-p/9056197), with the updates specified in the [r/StarWarsBattlefront wiki](https://old.reddit.com/r/StarWarsBattlefront/wiki/faq).

Thank you to [u/Potatoslayer2](https://www.reddit.com/r/StarWarsBattlefront/comments/kw74yt/new_to_swbf2_heres_a_calendar_of_upcoming_ingame/gj2pp7p/?context=3) for pointing out that events start at 00:01am CET and conclude the following day at 06:00am CET for a total of 30 hours.

Tools used:

- [Halfmoon](https://www.gethalfmoon.com/)
- [FontAwesome](https://fontawesome.com/)
- [esm.run](https://www.jsdelivr.com/esm)
- [date-fns](https://date-fns.org/)
- [date-fns-tz](https://date-fns.org/v2.16.1/docs/Time-Zones)

# Building the PWA

The PWA requires a service worker to function. Workbox generates this service worker.

- If you don't have Workbox, install it: `npm install workbox-cli --global`
- `workbox generateSW workbox-config.js`

See https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli for more info.
