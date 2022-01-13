# Spotify Clone - NextJS 

---

<div>
<b>Spotify For Developers:</b>
<a href="https://developer.spotify.com/dashboard/" target="_blank" rel="noopener noreferrer"
    style="padding:0.35rem 0.7rem;
    color: black;
    background: #F1DEDE;
    border-radius:10px;
    font-size:0.85rem;
    font-weight:600;">Official API Docs</a> 
  <br/>
  <p>
    - Create an app <br/>
    - Add Redirect URIs (e.g: "http://localhost:3000/api/auth/callback/spotify") <br/>
    - Get Client ID, Client Secret and store in .env file <br/>
      (NEXTAUTH_URL=http://localhost:3000,
      NEXT_PUBLIC_CLIENT_SECRET,
      NEXT_PUBLIC_CLIENT_ID,
      JWT_SECRET)
  </p>
</div>


### Routes

---

<div>
  <p>
   - /login <br/>
   - / <br/>
   - /api/auth/[...nextauth].js (to redirect to spotify login page <br/>
     and get back an authentication token)
  </p>
</div>

---


### Tech stack

```
Core:
- Tailwind CSS
- Next.js
- Hooks
- Recoil
- react-spotify-web-playback
- Spotify Web API Node
- Next Middleware
- lodash (shuffle and debounce)

Authentication Through Spotify:
- NextAuth.js

```

## Documents

<div>
<b>spotify-web-api-node:</b>
<a href="https://www.npmjs.com/package/spotify-web-api-node" target="_blank" rel="noopener noreferrer"
    style="padding:0.35rem 0.7rem;
    color: black;
    background: #F1DEDE;
    border-radius:10px;
    font-size:0.85rem;
    font-weight:600;">Official Spotify Web Api Doc</a> 
  
  <br/>
  <b>Spotify Authentication Guide:</b>
  <a href="https://developer.spotify.com/documentation/general/guides/authorization/" target="_blank" rel="noopener noreferrer"
    style="padding:0.35rem 0.7rem;
    color: black;
    background: #F1DEDE;
    border-radius:10px;
    font-size:0.85rem;
    font-weight:600;">Official Spotify Authorization Doc</a>
    
    <br/>
  <b>Next Auth:</b>
  <a href="https://next-auth.js.org/getting-started/example" target="_blank" rel="noopener noreferrer"
    style="padding:0.35rem 0.7rem;
    color: black;
    background: #F1DEDE;
    border-radius:10px;
    font-size:0.85rem;
    font-weight:600;">Official NextAuth.js</a>
    
    <br/>
  <b>Next Auth Rotation:</b>
  <a href="https://next-auth.js.org/tutorials/refresh-token-rotation" target="_blank" rel="noopener noreferrer"
    style="padding:0.35rem 0.7rem;
    color: black;
    background: #F1DEDE;
    border-radius:10px;
    font-size:0.85rem;
    font-weight:600;">Official Refresh Token Rotation</a>
</div>

---




# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
