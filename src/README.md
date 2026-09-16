# Nuxt Minimal Starter

## Markera ett event som fullbokat

Lägg till `"soldOut": true` på eventet i `public/data/events.json` och publicera
webbplatsen igen. Då visas **Fullbokad** i listan och på eventsidan, bokningsknappen
ersätts och eventet går inte att välja i anmälningsformuläret.

Sätt `"soldOut": false` eller ta bort fältet för att öppna bokningen igen.
Behåll `buttonText` som bokningstext, statusen visas automatiskt.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
