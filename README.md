# Board Vault

Board Vault is a board game discovery and personal collection application built as a React exam project.

**Status:** Work in progress. Home, Catalog, and a fallback page are implemented as static interfaces. Authentication, backend integration, and collection management are pending.

**Deployed frontend:** Not deployed yet.

## Installation and running

```sh
npm install
npm run dev
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build after building |
| `npm run lint` | Run ESLint |

## Technology and architecture

The frontend uses React 19, React Router, Vite, and external CSS. ESLint is configured for code checks.

```text
src/
  assets/
    icons/                 
    images/                SVG game artwork
  components/
    Header.jsx
    Navigation.jsx
    Footer.jsx
    Home.jsx
    FeaturedGame.jsx
    DiscoveryFilters.jsx
    DiscoverGames.jsx
    CollectionInvitation.jsx
    Catalog.jsx
    NotFound.jsx
    GameCard.jsx
  App.jsx                  Shared layout and routes
  App.css                  Global and component styling
  index.css                Additional global stylesheet
  main.jsx                 Entry point and BrowserRouter
```

`main.jsx` wraps the application in `BrowserRouter`. `App` renders the shared header, one `<main>` containing the selected page, and the footer. Page components return their content without another `<main>`. `Home` composes the featured game, filters, game previews, and collection invitation. SVG assets are imported from `src/assets` for Vite to process.

## Functional Guide

This guide follows the supplied exam template. Pending items describe the current development status, not completed features.

### 1. Project overview

- **Application name:** Board Vault
- **Category:** Board game catalog and personal collection manager
- **Purpose:** Help visitors discover board games and compare categories, ratings, player counts, and play times. The planned application will let registered users manage game records and curate a personal vault.

### 2. User access and permissions

**Current:** All implemented routes are public. Game previews are static. The visible account controls are placeholders; there is no authenticated session.

**Planned:** Guests can browse Catalog and Details. Authenticated users can create records and access their vault. Only a record's author can edit or delete it. Access restrictions are not implemented yet.

### 3. Authentication and session handling

Not implemented. There is no authentication check on load, registration/login/logout flow, or session persistence. The backend and session storage strategy remain to be selected. Document the actual authentication flow, logout behavior, and automatic session restoration after refresh when implemented.

### 4. Routing structure

| Route | Component | Access |
| --- | --- | --- |
| `/` | `Home` | Public |
| `/catalog` | `Catalog` | Public |
| `*` | `NotFound` | Unmatched-route fallback |

Primary navigation uses React Router `Link`. Some other links still target `.html` paths and need conversion as their routes are implemented. `/my-vault` and `/create-game` appear in navigation but have no matching page routes yet.

No route guards, nested route definitions, or parameterized routes are implemented. Planned pages include game details and editing with a game ID, creation, login, registration, and a personal vault. The exam requires at least five pages, at least two routes with URL parameters, and three dynamic pages; the current static views do not yet meet these requirements.

### 5. List to details flow

Home shows hardcoded game previews with artwork, names, categories, ratings, descriptions, player counts, and play times. Catalog has search, filter, and sorting controls, but their behavior is not implemented. Details links currently use static HTML targets; no details route or parameter-based record lookup exists yet.

The planned flow is to fetch games from the backend, render reusable cards, and navigate to a selected game's details using its ID.

### 6. Data source and backend

No backend or remote requests are implemented. Game content is hardcoded for layout development and must be replaced with persisted remote data for the exam.

The backend provider has not been selected. The final application needs a publicly reachable backend with persistent data and a deployed frontend. A hosted backend service or a separately deployed custom API can satisfy this requirement. Record the chosen service, setup instructions, and any required environment variables here when configured.

### 7. Data operations (CRUD)

The intended non-user collection is **games**.

| Operation | Planned behavior | Current status |
| --- | --- | --- |
| Create | Authenticated users create game records | Pending |
| Read | Fetch records for Catalog and Details | Static content only |
| Update | Authors edit their own records | Pending |
| Delete | Authors delete their own records | Pending |

API calls, ownership enforcement, and UI refresh after changes are pending. An additional API-backed interaction, such as favorites, is planned. Document the actual requests and state updates when implemented.

### 8. Forms and validation

Planned validation examples, subject to the final data model:

- Email: required and valid email format.
- Password: required with a defined minimum length.
- Game title: required, trimmed, and checked against defined length limits.
- Player counts: positive integers, with maximum players at least equal to minimum players.

### 9. React-specific techniques

**Components:** Shared layout and page sections are extracted into components. `GameCard.jsx` exists, but `DiscoverGames` still contains the individual cards directly; making the card reusable through props is pending.

**Hooks and lifecycle:** Application state hooks and mount/update/unmount examples are pending.

**Context API:** No Context state is implemented. Sharing authentication/session state is planned.

**Styling:** External `App.css` and `index.css` files provide styling. `App.css` contains shared variables, resets, layout rules, component classes, and responsive styles. Separate CSS files per component are optional.

### 10. Typical user flow

Current flow:

1. Open Home to see the featured game and static previews.
2. Use the Catalog navigation link to open Catalog.
3. Open an unmatched route to see the fallback page.

Planned complete flow:

1. Browse/filter remotely loaded games.
2. Open a game's details.
3. Register or log in.
4. Create a record or interact with an existing game through the API.
5. Edit/delete an owned record and log out.

### 11. Error and edge case handling

An unmatched-route page is implemented. Authentication errors, network errors, loading states, empty results, and missing game records are pending. These need visible feedback when the corresponding features are added.

## Remaining submission requirements

- Replace hardcoded data with remote, persistent data.
- Implement the required dynamic pages, parameterized routes, and route guards.
- Add authentication, session persistence, and shared Context state.
- Implement game CRUD with author-only edit/delete and an API-backed user interaction.
- Add controlled forms, validation, loading/error states, and hook lifecycle examples.
- Deploy the frontend and backend, and add the frontend URL above.
- Complete this Functional Guide with the finished behavior and backend setup.
- Submit a public GitHub repository with at least five meaningful commits spread across at least three different days.