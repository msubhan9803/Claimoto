//Components
import Home from "views/pages/Home/Home"
import Test from "views/pages/Test/Test";

export const defaultRoutes = () => {
  return [
    {
      path: "/",
      component: <Home />,
      layout: "/",
    },
    {
      path: "/Test",
      component: <Test />,
      layout: "/",
    }
  ];
};
