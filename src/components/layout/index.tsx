import { ThemedLayout, ThemedTitle } from "@refinedev/antd";
import { Outlet } from "react-router";
import Header from './header';

const Layout = () => {
  return (
    <ThemedLayout
      Header={Header}
      Title={(titleProps)=><ThemedTitle {...titleProps} text="refine"/>}
    >
      <Outlet />
    </ThemedLayout>
  );
};

export default Layout;