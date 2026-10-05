import { AuthPage } from "@refinedev/antd";
import { authCredentials } from "../../providers";

export const LoginPage = () => {
  return <AuthPage type="login" 
  formProps={{
    initialValues:authCredentials
  }}/>;
};
