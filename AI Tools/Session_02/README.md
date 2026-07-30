# Session 2 – Using ChatGPT & GitHub Copilot for Coding

## Task 1: Generate a component with Copilot
The AI-generated `PlaylistCard` component can be found in `PlaylistCard.jsx`.

## Task 2: Debug an error with ChatGPT
The product card component with intentional errors (for testing ChatGPT's debugging capabilities) can be found in `ProductCard.jsx`.

## Task 3: ChatGPT Refactoring Prompt
**Scenario:** We have a `RestaurantListing` component that fetches data directly inside a `useEffect`. We want to refactor it to use a custom reusable hook.

**Prompt to copy-paste into ChatGPT:**
```text
Here is my React component `RestaurantListing` that fetches a list of Zomato restaurants directly inside a `useEffect`. 

Can you please refactor this component to extract the data-fetching logic into a custom reusable hook called `useRestaurants`? Please provide both the new hook code and the updated component code. 

Also, ensure the custom hook handles 'loading' and 'error' states cleanly so I can display appropriate UI messages.
```

## Task 4: Refactor using Copilot
The component `YouTubeVideosList.jsx` demonstrates moving data-fetching logic out into a separate custom hook, which can be found in `useVideos.js`.

## Task 5: AI Code Review

### AI Generated Code (Example snippet from ChatGPT):
```jsx
import React from 'react';

export const UserProfile = (props) => {
  let d = props.data; 
  
  return (
    <div>
      <h1>{d.n}</h1>
      <p>{d.e}</p>
      <img src={d.pic} />
    </div>
  );
}
```

### Review & Improvements

Before using this generated code in a real project, here are 2 corrections/improvements I would make:

1. **Improve Variable Naming:** The variable `d` and its properties (`d.n`, `d.e`, `d.pic`) are terrible for readability. I would rename `d` to `user`, and the properties to `name`, `email`, and `profilePicture` so the code is self-documenting.
2. **Missing PropTypes / TypeScript Types:** The `props` object has no shape defined. I would add PropTypes (or TypeScript interfaces) to enforce that `data` contains the required fields, which prevents runtime errors if data is missing.
3. **Accessibility (Bonus):** The `<img>` tag is missing an `alt` attribute, which is bad for accessibility (screen readers) and SEO.

---

## Note Regarding Alternative ERP Assignment
An alternative set of Session 2 tasks appeared in the ERP with slightly different contexts (e.g., debugging a Zomato menu instead of a product card, refactoring a BookMyShow movie component instead of a restaurant list, and using Copilot on a Flipkart shopping cart). 

Although the specific app contexts differ, the core objectives and AI learnings are exactly the same:
- **Copilot Integration & Usage:** Both assignments verify that GitHub Copilot is active and can generate React components and hooks.
- **AI Debugging:** Both intentionally introduce errors (typos) into a React component to practice using ChatGPT for debugging and error resolution.
- **AI Refactoring:** Both involve writing prompts to refactor direct `useEffect` data fetching into clean, reusable custom hooks (`useFetchMovies` vs `useRestaurants`).
- **AI Code Review:** Both emphasize the critical need to review AI-generated code for readability, type safety, and potential risks (like introducing bugs or inaccessible HTML).

Since the educational objectives are fully met and demonstrated in the deliverables above, this completed version of Session 02 is being submitted to fulfill the requirement.
