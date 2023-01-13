# claimlink-gateway

Atomichub recently changed the link layout of the well known claim/trading links. They have already fixed this,
but in case you want to future proof your claim links, this gateway can used to share links using your own domain.

The gateway redirects all links in the form of `<domain>/<ID>?key=<key>` to the correct URL on atomichub.

It defaults to the wax mainnet, but supports other chain ids as well, by adding it before the ID: `<domain>/<CHAINID>/<ID>?key=<key>`.


# Deployment

Running `npm run build` will build the site into the `dist/` folder which can be deployed to any static file host.

You need to configure your webserver so that all paths will be handeled by the `index.html` file. A config file for vercel has been provided in the repo.


# Example

An instance of this service has been deployed to `https://claimlink-gateway.vercel.app`.

Valid URLs:

- https://claimlink-gateway.vercel.app/1?key=some-key
- https://claimlink-gateway.vercel.app/wax-mainnet/1919?key=another-key