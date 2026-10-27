# 1. Project Overview

Application name: BoardVault

Application Category / Topic: Board game catalog and personal collection manager

Main Purpose:
Board Vault helps users discover board games and keep track of games they have added or liked. Visitors can browse the catalog, search by title, and view detailed game information. Registered users can add games, edit or delete their own entries, and access their owned and liked games through My Vault.

# 2. User Access and Permissions

Guest (Not Authenticated)
- Available pages / routes: Home (/), Catalog (/catalog), Game Details (/game-details/:gameId), Login (/login), and Register (/register).
- Public data shown: Game titles, images, descriptions, categories, designer, release year, player counts, playtime, and difficulty.
- Guests cannot access My Vault, Create Game, or Edit Game, or perform like, create, edit, and delete actions.

Authenticated User
- Main sections / pages: All public content, My Vault (/my-vault), and Create Game (/create-game). My Vault displays owned and liked games with filtering and counts.
- Details pages: Users can view every game’s details. Creators also see Edit and Delete controls on their own games.
- Create / Edit / Delete actions: Users can create games, edit their own entries at /edit-game/:gameId, and delete their own entries after confirmation. They can like and unlike games.
- Private and guest-only route guards control page access. Supabase policies enforce record ownership and permissions. Signed-in users are redirected away from Login and Register.

# 3. Authentication & Session Handling 

Authentication Flow

- When the app loads: AuthProvider reads the saved session from localStorage. If no valid session is stored, the application counts the visitor as a guest. If the stored access token has expired, the application displays a restoration message while requesting a refreshed session.
- Checking authentication status: Components access the current user and access token through Auth Context using the useAuth hook. Route guards use this state to control access to private and guest-only pages. Supabase verifies tokens and database permissions for API requests.
- Successful login: Supabase returns the user and session tokens. The application saves the session, updates Context, and redirects the user to the requested private page or Catalog.
- Successful registration: Supabase creates the account and stores the username in user metadata. If a session is returned, the application signs the user in and redirects it to the catalog.
- Logout: The application clears Context and localStorage immediately, then requests logout from Supabase. The interface returns to its guest state, and private routes become inaccessible.

Session Persistence

The session is stored in localStorage under board-vault-session and shared through Auth Context. It contains the user, access token, refresh token, and expiry time; the password is never stored.

After a page refresh, the application restores the stored session without asking for credentials. Access tokens are refreshed shortly before expiry, and the replacement tokens are saved to Context and localStorage. If refreshing fails, the application clears the session and requires the user to log in again.

# 4. Routing Structure
Board Vault uses React Router for navigation. It has eight main page routes and a fallback route for unknown URLs.

| Route | Page | Access |
|---|---|---|
| `/` | Home | Public |
| `/catalog` | Catalog | Public |
| `/game-details/:gameId` | Game Details | Public |
| `/login` | Login | Guests only |
| `/register` | Register | Guests only |
| `/my-vault` | My Vault | Authenticated users |
| `/create-game` | Create Game | Authenticated users |
| `/edit-game/:gameId` | Edit Game | Record creator only |
| `*` | Not Found | Public |

## Route Guards Logic

PrivateGuard wraps My Vault, Create Game, and Edit Game. Guests attempting to open these pages are redirected to Login. After successful login, they return to the page they requested.

GuestGuard wraps Login and Register. Authenticated users attempting to open the pages are redirected to Catalog.

The Edit Game page additionally checks whether the current user’s ID matches the game’s owner_id. Supabase policies independently enforce ownership for updates and deletions.

## Dynamic Routes

Game Details and Edit Game use the :gameId URL parameter to fetch a specific game. Catalog, Game Details, Edit Game, and My Vault display data loaded from Supabase.

## Nested Routing

The application uses pathless parent routes for PrivateGuard and GuestGuard. Their child routes render through React Router’s Outlet when the access check passes. These parent routes group pages by permission without adding a URL segment.

The shared Header, main content area, and Footer are defined in App.jsx around the routes.

## Parameterized Routes
- /game-details/:gameId — loads and displays the selected game.
- /edit-game/:gameId — loads the selected game into the edit form and checks ownership.
Both pages read gameId using useParams and use it to request the matching record from Supabase.

# 5. List -> Details Page

## Catalog

The Catalog fetches game records from Supabase and displays them using reusable GameCard components. Each card shows the game’s title, cover image, description, player count, and playtime.

Users can search by title through a controlled search input. Authenticated users can like or unlike games using the heart shaped button. Home also supports category filtering, while My Vault provides [All, Owned, Liked] filters.

## Details Page

Clicking a card’s View details link navigates to /game-details/:gameId using React Router’s NavLink.

The Details page reads gameId with useParams and requests a matching game from Supabase. Only the ID is passed through the URL. The full game record is fetched separately.

The page displays the game’s description, story, category, mechanics when available, designer, release year, player count, playtime, and difficulty. Loading, request-error, and missing-game states are handled. The creator also sees Edit and Delete controls.

# 6. Data Source & Backend

Board Vault uses Supabase. BoardVault communicates with Supabase's REST API using fetch. The database stores games and user likes and uses RLS policies that allow public game reads, restrict game updates and deletions (only the creator can do that) and allow users to manage only their own likes.

There is not separate backend used.

## 7. Data Operations (CRUD)

All four CRUD operations are implemented for the games collection through gameService.js and Supabase’s REST API.

## Create (POST)

When authenticated users open Create Game and fill the shared GameForm, then the form validates the inputs before sending a POST request to /rest/v1/games with the user’s access token. Supabase assigns the record’s ownership using the authenticated user. After creation, the application navigates to My Vault, which fetches the user’s games.

## Read (GET)

Home and Catalog fetch games from Supabase and display them using reusable cards. Game Details fetches a single record using the gameId route parameter. My Vault fetches the current user’s owned and liked games. Loading, error, and empty states provide feedback while requests are processed.

## Update (PATCH)

The creator opens /edit-game/:gameId using the Edit button on Game Details. The page fetches the game, checks ownership, and prefills the shared form.

After validation, a PATCH request sends the editable fields to /rest/v1/games?id=eq.{gameId}. Supabase policies enforce ownership. On success, the application navigates to Game Details, which fetches and displays the updated record. Failed updates show an error and keep the form available.

## Delete (DELETE)

The creator clicks Delete on Game Details and confirms the action. The application sends a DELETE request filtered by the game ID, using the current user’s access token. Supabase policies prevent deleting another user’s records.

After deleting a game, you’re taken to Catalog. It fetches the games again, so the deleted game disappears. Supabase automatically deletes any likes linked to that game. If deletion fails, you stay on Game Details and see an error message.

# 8. Forms and Validation

## Forms Used
- Registration form: collects username, email, password, and password confirmation.
- Login form: collects email and password.
- Create Game form: collects the title, description, story, image URL, release year, designer, player counts, playtimes, category, and difficulty.
- Edit Game form: uses the same shared GameForm, prefilled with the selected game’s data.

## Validation Rules
- Game title: required; must contain 3–100 characters after trimming whitespace.
- Player counts: required positive whole numbers. Maximum players must be greater than or equal to minimum players.
- Password (multiple rules): registration requires at least 8 characters, including a letter and a number. Password confirmation must match.
- Username: trimmed before validation; must contain 3–30 characters and cannot consist only of spaces.
- Image URL: required; must be a valid URL using HTTP or HTTPS.
- Playtime: required positive whole numbers. Maximum playtime must be greater than or equal to minimum playtime.

Invalid game data prevents submission and displays an inline message. Registration validation uses alerts and a separate password-mismatch message.

# 9. React-Specific Techniques

## Hooks & Component Lifecycle
- useState: manages fetched records, loading/errors, controlled game-form values, validation, likes, and Vault filters.
- useEffect: fetches remote data when pages load or dependencies change. AuthProvider also uses an effect to schedule token refresh and register browser event listeners.
- useRef: keeps references to the current session and ongoing refresh request in AuthProvider.
- useParams: reads gameId on Details and Edit pages.
- useNavigate: redirects users after login and successful create, edit, or delete operations.
- useLocation: records the private page a guest requested so login can return them there.
- Custom useAuth hook: accesses authentication state and actions through useContext.

## Context API

Auth Context shares the current user, access token, onAuthenticate, and onLogout. Consumers include the Header, route guards, authentication pages, Create/Edit pages, Game Details, My Vault, and LikeButton. This way we keep authentication state consistent without passing it through every component.

## Component Styling

I use a ready template for the html and css.
The components use external CSS files, primarily App.css and index.css. For example: shared classes style buttons, forms, cards, layouts, and feedback messages. 

# 10. Typical User Flow
1. A visitor browses Home or Catalog, searches for a game by title, and opens its details using View details.
2. The visitor registers or logs in to access personal features.
3. The user likes games and views them in My Vault, switching between All, Owned, and Liked filters.
4. The user adds a game through Create Game. They can then edit or delete their own entry from Game Details and log out when finished.

# 11. Error & Edge Case Handling

## Authentication Errors

Login and registration display API errors through alerts. Registration also checks required fields, username length, password strength, and password confirmation. Route guards redirect guests away from private pages and authenticated users away from Login/Register. If session refresh fails, the saved session is cleared and the user must log in again.

## Network or Data Errors

Data-driven pages display loading feedback while requests are pending and error messages if requests fail. 
Invalid game-form values prevent submission and show an inline validation message. 
Failed edits and deletions display errors without reporting success. 
Like buttons are disabled while requests are pending and display failures.

## Empty or Missing Data States

Home displays a message when no games match the selected category. 
My Vault displays an empty-state message when the collection or selected filter contains no games. 
Details and Edit handle missing records, while Edit also denies access to users who do not own the game. 
Unknown URLs display the Not Found page.

# Run locally

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
