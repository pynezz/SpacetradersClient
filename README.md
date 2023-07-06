# SpaceTraders API Client

This is a client for the SpaceTraders API. It is written in SvelteKit, TailwindCSS, and TypeScript.

> SpaceTraders is a programmable fleet-management game played through a headless API.
>
> Build your own UI, automate your trade routes, or just enjoy the game from the comfort of your terminal.
> - [spacetraders.io](https://spacetraders.io)

## Quick start / Todo
1. [ ] Create a new SpaceTraders account/token
> *in Spacetraders, you have a JSON Web Token (JWT) that you use to authenticate your requests*
2. [x] ✅ View contracts
> *contracts/quests/missions are a way to earn credits, etc*
3. [x] ✅ Accept contract
4. [ ] View ships
> *to finish the contract, you need to buy a ship*
5. [ ] Buy ship

## Development
1. [x] ✅ Register a new SpaceTraders account/token
2. [x] ✅ Create a new SvelteKit project
3. [x] ✅ Add TailwindCSS
4. [x] ✅ Create a dashboard

## Quickstart guide
1. [ ] ✅ Create a new agent
2. [ ] First mission
3. [ ] Buy a ship
    - [ ] Find a shipyard
    - [ ] View available ships
    - [ ] Buy a ship

> Shipyards allow you to purchase ships, and will eventually allow you to repair, as well as swap out different modules and mounts. To purchase a ship, you will need to find a waypoint with a shipyard.


4. [ ] Mine asteroids
5. [ ] ~~Buy low,~~ sell ~~high~~
6. [ ] Navigate to delivery waypoint
7. [ ] Deliver cargo
8. [ ] Fulfill contract


### Management
- [x] ✅ Register a new SpaceTraders account/token
- [ ] Switch accounts

### Contracts
- [x] ✅ [GET] View contracts
- [x] ✅ [POST] Accept contracts
- [ ] [POST] Deliver cargo to contract
- [ ] [POST] Fulfill contract


### Fleet management
- [ ] View ships
- [ ] Buy ships
- [ ] Sell ships
- [ ] Orbit ship
- [ ] Dock ship
- [ ] Extract resources

### Ships
- [ ] Add ships to the dashboard
- [ ] Ship cooldown timer
- [ ] Ship modules
- [ ] Ship cargo
- [ ] Ship engine
- [ ] Shipyard
- [ ] Jettison cargo

### Waypoints
- [ ] Waypoints
- [ ] Waypoint factions

### Systems
- [ ] System types
- [ ] System waypoints
- [ ] Jumpgates

### Meta
- [ ] Show items
- [x] ✅ Show current location
- [x] ✅ Show credit balance


---

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
