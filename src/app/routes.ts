import { createBrowserRouter, redirect } from "react-router";
import { LangLayout } from "./components/LangLayout";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { SongPage } from "./components/SongPage";
import { Blog } from "./components/Blog";
import { BlogPostPage } from "./components/BlogPost";
import { About } from "./components/About";
import { Support } from "./components/Support";
import { NotFound } from "./components/NotFound";
import { RootRedirect } from "./components/RootRedirect";

export const router = createBrowserRouter([
  // Root redirects to preferred language
  {
    path: "/",
    Component: RootRedirect,
  },
  // Legacy URLs redirect to /en/...
  {
    path: "/song/:id",
    loader: ({ params }) => redirect(`/en/song/${params.id}`),
  },
  {
    path: "/blog",
    loader: () => redirect("/en/blog"),
  },
  {
    path: "/blog/:id",
    loader: ({ params }) => redirect(`/en/blog/${params.id}`),
  },
  {
    path: "/about",
    loader: () => redirect("/en/about"),
  },
  {
    path: "/support",
    loader: () => redirect("/en/support"),
  },
  // Language-prefixed routes
  {
    path: "/:lang",
    Component: LangLayout,
    children: [
      {
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
    ],
  },
]);
