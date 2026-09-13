// The /CS2340 page is built from this file. To add a project for the rest of
// the semester, add an entry to `projects` below; the page updates on its own.
//
// Text in `backticks` renders as code.

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
  "I'm Michael Peters, a CS student with a math minor at Georgia Tech! I like working in low-level systems, so a lot of what I've built has been in Rust and C++. Working in Python with Django has been a new learning opportunity for me!",
  "So far, I've interned at Ditto, a Series B startup in Atlanta, working on offline edge database technology; developed HFT technology as part of the Georgia Tech Trading Club's Quant Sector; and done research on Qwerty, a quantum programming language.",
  "This page contains the work and effort I've put into CS 2340, Objects and Design, in Fall 2026. I hope you enjoy!",
];

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
  /** Everything a grader needs, in the order they should see it. A project with no links is shown as upcoming. */
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
    links: [
      { label: "Live site", href: "https://michaelcpeters115.pythonanywhere.com" },
      { label: "Source code", href: "https://github.com/michaelpeters-dev/moviesstore" },
    ],
    description: [
      "GT Movies Store is a Django web app I built for this class. It's an online store for movies: you can browse the catalog, search for a movie by name, read what other people think of it, and buy it. If you make an account, you can also write your own reviews and keep track of what you've ordered.",
      "I split the project into four Django apps, one for each part of the store: home, movies, cart, and accounts. Each has its own models, views, templates, and URLs, which kept things easy to find as the project grew. The site is deployed on PythonAnywhere.",
      "For my own user story, I added the ability to report a review. Any signed-in user can flag a review that's inappropriate, and it's hidden from the movie page right away.",
    ],
    userStories: [
      {
        story: "Browse the movies",
        screen: "Movies page",
        how: "Every movie in the store is shown as a card. Clicking one opens its page.",
      },
      {
        story: "Search for a movie",
        screen: "Movies page",
        how: "A search bar at the top filters the list down to movies whose name matches what you typed.",
      },
      {
        story: "See a movie's details and reviews",
        screen: "Movie page",
        how: "Shows the description, the price, an Add to cart button with a quantity, and the reviews people have left.",
      },
      {
        story: "Sign up, log in, and log out",
        screen: "Sign Up and Login pages",
        how: "New users create an account with a username and password. The navbar shows Login and Sign Up when you're logged out, and Orders and Logout when you're in.",
      },
      {
        story: "Write a review",
        screen: "Movie page",
        how: "Logged-in users get a comment box under the reviews. Submitting it adds your review to the list.",
      },
      {
        story: "Edit or delete my review",
        screen: "Movie page, Edit review page",
        how: "Your own reviews have Edit and Delete options. Nobody else's do, and the server checks that too.",
      },
      {
        story: "Add movies to my cart",
        screen: "Movie page, Cart page",
        how: "Pick a quantity and click Add to cart. The Cart page lists what you've added, shows the total, and can clear everything.",
      },
      {
        story: "Buy the movies in my cart",
        screen: "Purchase confirmation page",
        how: "Checking out (while logged in) saves an order with everything in the cart, empties the cart, and shows a confirmation with the order number.",
      },
      {
        story: "See my orders",
        screen: "Orders page",
        how: "Lists every order you've placed, with the movies in each and the total.",
      },
      {
        story: "Learn about the store",
        screen: "About page",
        how: "A simple page about the store, linked from the navbar and the footer.",
      },
      {
        story: "Report an inappropriate review",
        screen: "Movie page",
        how: "Every review has a Report option. Reporting hides the review from the page for everyone.",
        tag: "my own story",
      },
    ],
    process: [
      "I worked on this project one user story at a time. For each one I'd add the model, the view, the URL, and the template it needed, run the site locally, and click through the new screen until it worked before moving on. I built things in the order the course introduces them: the layout and home page first, then movies, accounts, reviews, and finally the cart and orders. That way I always had a working site and only one new thing to debug.",
      "Python and Django were new to me, so when I had a question my first stop was the course textbook, then the Django documentation. When something broke, I read the error page Django gives you, checked the docs for the piece I was using, and tried small changes until it made sense. Coming from Rust and C++, the biggest adjustment was letting the framework do things for me instead of writing them myself.",
      "Once everything worked locally, I put the code on GitHub, deployed the site to PythonAnywhere, and then added my own user story, reporting reviews, on top of the working app.",
    ],
    video: {},
  },
  {
    number: 2,
    title: "Team project",
    note: "Posted here once it's assigned.",
  },
];
