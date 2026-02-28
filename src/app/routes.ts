import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { SongPage } from "./components/SongPage";
import { Blog } from "./components/Blog";
import { BlogPostPage } from "./components/BlogPost";
import { About } from "./components/About";
import { Support } from "./components/Support";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "song/:id", Component: SongPage },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPostPage },
      { path: "about", Component: About },
      { path: "support", Component: Support },
      { path: "*", Component: NotFound },
    ],
  },
]);
