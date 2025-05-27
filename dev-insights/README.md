# Dev Insights Mini Blog

A simple internal platform for sharing web development tips, insights, and updates, built with React, TypeScript, and Vite.

## 🚀 Project Overview

This project is the foundation for an internal "Mini Blog" at Dev Insights. Employees can share quick posts about web development. The app demonstrates core React concepts, TypeScript usage, component styling, and optimization techniques.

## 🏗️ Features

- **Header**: Displays the "Dev Insights" logo and a navigation link to "New Post".
- **PostList**: Shows a list of sample blog posts with title, author, preview, and date.
- **Post**: Reusable component for rendering individual post details.
- **Styling**: Uses both external CSS and inline styles. Conditional styling highlights posts by a specific author and shows a "New!" badge for recent posts.
- **Optimization**: Utilizes `React.memo` to prevent unnecessary re-renders and unique keys for list items.
- **Higher-Order Component**: Includes a `withLogger` HOC that logs mount/unmount events for wrapped components.

## 📁 Directory Structure

```
src/
  components/
    Header.tsx
    PostList.tsx
    Post.tsx
    withLogger.tsx
  styles/
    Header.css
    PostList.css
    Post.css
  App.tsx
  main.tsx
  types/
    Post.ts
```

## 🛠️ Technologies Used

- **React with TypeScript**: For building robust, type-safe UI components.
- **Vite**: Fast development server and build tool.
- **Styled Components**: For scoped, maintainable component-level styling and theming.
- **React Hooks**: For state and lifecycle management in functional components.

## 🛠️ Installation & Running

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-org/dev-insights-mini-blog.git
   cd dev-insights-mini-blog
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server (Vite):**
   ```sh
   npm run dev
   ```

4. **Run tests (if available):**
   ```sh
   npm test
   ```

## 🧑‍💻 Component Design Choices

### Functional vs Class Components

All components are implemented as **functional components** because:
- They are simpler and more concise.
- They work seamlessly with TypeScript.
- They support React Hooks for state and lifecycle logic.
- They are the recommended approach in modern React.

**Post Component**: Chosen as a functional component because it is stateless and benefits from `React.memo` for optimization.

## 🎨 Styling Methods

- **Styled Components**: Used for most components, providing scoped styles and easy theming.
- **External CSS**: Used for global and component-specific styles (e.g., `Header.css`, `PostList.css`).
- **Inline Styles**: Applied for conditional styling, such as highlighting posts by a specific author.
- **Conditional Styling**: Posts by "Jane Doe" have a different background. Posts within the last 24 hours show a "New!" badge.

## ⚡ Optimization Strategies

- **React.memo**: Used on the `Post` component to prevent unnecessary re-renders when parent state changes don't affect it.
- **Unique Keys**: Each post in the list uses a unique `id` as the key prop.
- **Higher-Order Component (HOC)**: `withLogger` demonstrates the HOC pattern and adds logging functionality for mount/unmount events.

## 🧩 External Libraries

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [styled-components](https://styled-components.com/) (optional, for CSS-in-JS)

## 📝 Challenges and Solutions

- **TypeScript Typing**: Initially struggled with typing styled components with props. Solved by using the `$highlight` pattern and proper TypeScript interfaces.
- **Date Handling**: Implemented logic to check if a post was created within the last 24 hours for the "New!" badge.
- **HOC Implementation**: Faced TypeScript issues when creating the HOC. Fixed by properly typing the generic component props.
- **Conditional Styling**: Implementing dynamic styles based on post data required careful prop management.
- **Optimization**: Understanding when to use `React.memo` and HOCs helped improve performance and code organization.
- **Vite Setup**: Vite made the development process fast and smooth, but required some initial learning.

## 💡 Reflection

This project helped solidify my understanding of:
- Proper typing patterns in React with TypeScript.
- Component optimization techniques (React.memo, HOCs).
- The power of styled-components for maintainable styling.

**Areas for further exploration:**
- More advanced TypeScript patterns with React.
- Performance profiling and deeper optimization.
- State management solutions beyond `useState`.

## ✅ Final Notes

The project meets all requirements:
1. Proper Vite + TypeScript setup.
2. Core components implemented with TypeScript types.
3. Styling using Styled Components and global CSS, with conditional styling.
4. Optimization with React.memo, proper key usage, and an HOC.
5. Comprehensive README with all required information.

The application provides a clean, responsive interface for the mini blog platform with all specified features working.

## 📚 How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

---

Happy coding! 🚀
