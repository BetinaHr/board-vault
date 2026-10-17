# Board Vault

A board game catalog built with React, Vite, React Router and Supabase for my React exam project.

The project is still in development. The frontend is not deployed yet.

## Run locally

```sh
npm install
```

```sh
npm run dev
```

Other commands:

- `npm run build` - build the app.
- `npm run preview` - preview the build.
- `npm run lint` - check the code with ESLint.

## Project structure

- `src/components/` - pages, shared components and layout.
- `src/services/` - game and authentication requests.
- `src/utils/request.js` - shared fetch helper.
- `src/assets/` - images and icons.
- `src/App.jsx` - routes and current authentication state.
- `src/App.css` and `src/index.css` - styles.

## Functional Guide

### 1. Project overview

Board Vault lets visitors browse board games and view their details. Personal collections and game management are still being built.

### 2. User access and permissions

Guests can browse Home, Catalog and game details. The navigation shows My Vault, Add Game and Logout when a user is signed in. Route guards are not implemented yet, so hiding these links does not prevent direct access.

### 3. Authentication and session handling

Register, Login and Logout use Supabase Auth. Registration stores the username in user metadata and checks that the passwords match.

The user and access token are kept in React state. Logout calls Supabase and clears the user state. Session restoration, token refresh and clearing the stored access token on logout still need to be added. Refreshing the page currently resets the local authentication state.

### 4. Routing structure

| Route | Page |
| --- | --- |
| `/` | Home |
| `/catalog` | Catalog |
| `/game-details/:gameId` | Game details |
| `/login` | Login |
| `/register` | Register |
| `/my-vault` | My Vault, currently a static preview |
| `/create-game` | Create Game, currently a form without saving |
| `*` | Not Found |

Some older links still need to be changed to React Router links. A second route with a URL parameter is also still needed.

### 5. List to details flow

Home and Catalog load games from Supabase and use a shared GameCard component. Home supports category filtering, and Catalog supports searching by title. The other Catalog filters and sorting are not connected yet.

The View Details button opens a page using the game ID. That page fetches the selected game. Some content on the details page is still hardcoded.

### 6. Data source and backend

Supabase provides the database and authentication. The app uses fetch requests to the REST API. Game requests are in `gameService.js`, and authentication requests are in `authService.js`.

### 7. Data operations (CRUD)

Reading games is implemented. Creating, editing and deleting games are not implemented yet. The games table has an owner_id linked to a Supabase user. Ownership checks and database policies for writes still need to be completed and tested.

My Vault, comments and favorites are not connected to the API yet.

### 8. Forms and validation

Login and Register read values with FormData. Required fields, email inputs and a password confirmation check provide basic validation. Authentication errors are shown with alerts.

Catalog search uses a controlled input. The authentication and game forms still need controlled inputs, more validation and submission loading states.

### 9. React-specific techniques

The app uses reusable components, props, useState and useEffect. Effects fetch games when pages load and fetch details when the game ID changes. React Router handles navigation and URL parameters.

Authentication state is currently passed through props. Context API and effect cleanup still need to be added. Styling uses external CSS files.

### 10. Typical user flow

1. Browse games on Home or Catalog.
2. Search by title or filter Home games by category.
3. Open a game using View Details.
4. Register or log in.
5. Log out from the header.

Creating games and managing a personal vault will be added next.

### 11. Error and edge case handling

Game requests have loading and error states. Home shows a message when no games match the selected category. Details handles missing games, and unknown routes show the Not Found page.

Error messages, retry buttons and empty states still need improvements.

## Still to do

- Finish session handling and add Auth Context.
- Add private and guest-only route guards.
- Implement game creation, editing and deletion.
- Connect My Vault to the signed-in user's games.
- Add an API interaction, such as comments or favorites.
- Finish form validation and remove remaining static content.
- Deploy the frontend and update this guide.
