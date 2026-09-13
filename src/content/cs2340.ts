// The /CS2340 page is built from this file. To add a project for the rest of
// the semester, add an entry to `projects` below; the page updates on its own.
//
// Text in `backticks` renders as code. Paragraphs that start with "[Write here"
// are placeholders for you to replace.

export const course = {
  code: "CS 2340",
  slug: "CS2340",
  name: "Objects and Design",
  school: "Georgia Tech",
  term: "Fall 2026",
  student: "Michael C. Peters",
};

// Rubric item 1: an introduction of who you are.
export const intro = [
  "I'm Michael Peters, a computer science major with a math minor at Georgia Tech, class of 2028. I like working close to the metal, so most of what I build is systems software in Rust and C++.",
  "This year that has taken a few forms. At Ditto, a Series B database startup, I interned on the query team: I built a UNION query engine for DQL and a from-scratch Rust expression interpreter that ships to iOS, Android, and the web through UniFFI and WebAssembly. At Trading at Georgia Tech, the school's student quant firm, I work on the high-frequency side, cutting microseconds off order-book updates in Rust and writing live feed listeners for exchanges. In the Tinker Lab I do quantum compilers research on Qwerty, a quantum programming language, extending its MLIR/LLVM compiler with new arithmetic circuits, one of which is merged upstream. And at DiSL, Georgia Tech's Data Intensive Systems Lab, I reproduced and extended H3Fusion, a mixture-of-experts framework for aligning large language models, benchmarking a dozen models on helpfulness, safety, and truthfulness.",
  "This page collects my work for CS 2340, Objects and Design, in Fall 2026.",
];

export type ProjectStatus = "live" | "in progress" | "upcoming";

export type ProjectLink = {
  label: string;
  /** Leave out until you have the link; the row then reads "Not posted yet". */
  href?: string;
  /** Shown instead of the address, for long links like Google Drive or YouTube. */
  text?: string;
};

export type UserStory = {
  story: string;
  /** Which screen(s) of the app answer the story. */
  screen: string;
  /** How the feature works, in a sentence or two. */
  how: string;
  /** Small note next to the story, e.g. "my own story". */
  tag?: string;
};

export type Project = {
  number: number;
  title: string;
  status: ProjectStatus;
  /** Everything a grader needs, in the order they should see it. */
  links?: ProjectLink[];
  /** A short line under the links, e.g. for an upcoming project. */
  note?: string;
  /** Rubric item 2: what the app is and how it's built. Paragraphs. */
  description?: string[];
  /** Rubric item 2: how screens and features respond to the required user stories. */
  userStories?: UserStory[];
  /** Rubric item 3: how you worked, what methodology, how you handled doubts. Paragraphs. */
  process?: string[];
  /** Rubric item 4: the demo. Set `youtubeId` (the part after `v=` in the YouTube URL) to embed it, or `href` to link out. `{}` shows a "coming soon" box. */
  video?: { youtubeId?: string; href?: string };
};

export const projects: Project[] = [
  {
    number: 1,
    title: "GT Movies Store",
    status: "live",
    links: [
      { label: "Live site", href: "https://michaelcpeters115.pythonanywhere.com" },
      { label: "Source code", href: "https://github.com/michaelpeters-dev/moviesstore" },
    ],
    description: [
      "GT Movies Store is a Django web app for browsing and buying movies. Anyone can look through the catalog, search it by title, open a movie to read its description and reviews, and add copies to a cart. Signed-in users can also write reviews, edit or delete their own, buy what's in their cart, and look back at past orders.",
      "The code is split into four Django apps that each own one part of the site: `home` (landing and About pages), `movies` (catalog, movie pages, reviews), `cart` (session-based cart, checkout, orders), and `accounts` (sign up, log in, log out). Each follows Django's Model–View–Template pattern: models backed by SQLite, function views that load data and enforce who may do what, and templates that extend one shared Bootstrap layout. The site is deployed on PythonAnywhere.",
      "On top of the required stories I added one of my own: any signed-in user can report a review as inappropriate. Reporting sets a `reported` flag on the review, and the movie page only lists reviews with the flag off, so a reported review disappears right away without deleting the author's data.",
    ],
    userStories: [
      {
        story: "Browse the movie catalog",
        screen: "Movies page",
        how: "Lists every movie in the store; each card opens that movie's own page.",
      },
      {
        story: "Search for a movie by title",
        screen: "Movies page",
        how: "The search box submits a `search` query; the view filters with a case-insensitive `name__icontains` match and shows only the hits.",
      },
      {
        story: "See a movie's details and reviews",
        screen: "Movie page",
        how: "Shows the description, price, a quantity picker with Add to cart, and every review that hasn't been reported.",
      },
      {
        story: "Create an account, log in, log out",
        screen: "Sign Up and Login pages",
        how: "Sign up uses a custom `UserCreationForm` with its own error formatting; login authenticates and sends you home; logout is only available to signed-in users.",
      },
      {
        story: "Write a review",
        screen: "Movie page",
        how: "Signed-in users get a comment box under the reviews; submitting saves a `Review` linked to the user and the movie.",
      },
      {
        story: "Edit or delete my own review",
        screen: "Movie page, Edit review page",
        how: "Edit and delete controls appear only on your own reviews, and the views check the owner again on the server before changing anything.",
      },
      {
        story: "Add movies to a cart",
        screen: "Movie page, Cart page",
        how: "The quantity (1 to 10) is stored in the Django session keyed by movie id. The cart page lists the movies, totals price × quantity, and can clear the cart.",
      },
      {
        story: "Buy what's in the cart",
        screen: "Purchase confirmation page",
        how: "Checkout (signed-in users only) creates an `Order` with the total and one `Item` per movie, empties the cart, and shows the order number.",
      },
      {
        story: "See my past orders",
        screen: "Orders page",
        how: "Lists the signed-in user's orders with the movies and quantities in each.",
      },
      {
        story: "Read about the store",
        screen: "About page",
        how: "A static page reachable from the navigation bar and the footer.",
      },
      {
        story: "Report an inappropriate review",
        screen: "Movie page",
        how: "A Report control on each review sets `reported = True`; the movie page filters reported reviews out.",
        tag: "my own story",
      },
    ],
    process: [
      "I built the app one user story at a time, in the order the course introduces them: the shared layout and home pages first, then the movies catalog and search, then accounts, reviews, and finally the cart and orders. For each story I added the model change, the view, the URL, and the template together, ran the site locally with `manage.py runserver`, and clicked through the new screen before moving on.",
      "[Write here: did you follow the course textbook chapter by chapter, plan the stories up front, or work in sprints? How did you pick your own user story?]",
      "[Write here: how you handled questions and doubts, e.g. the Django documentation, office hours, Ed Discussion, classmates, or TAs, with one concrete example.]",
      "Once the app worked locally, I put the code on GitHub and deployed it to PythonAnywhere, then added the report-a-review story as its own commit on top of the working app.",
    ],
    video: {},
  },
  {
    number: 2,
    title: "Team project",
    status: "upcoming",
    note: "Posted here once it's assigned.",
  },
];
