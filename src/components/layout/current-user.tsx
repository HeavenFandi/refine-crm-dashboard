import { Avatar, Button, Popover, Space, Typography } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useGetIdentity, useLogout } from "@refinedev/core";

type IUser = {
  id: string;
  name: string;
  avatarUrl?: string;
};

const CurrentUser = () => {
  const { data: user } = useGetIdentity<IUser>();
  const { mutate: logout } = useLogout();

  const content = (
    <div style={{ padding: 12, minWidth: 180 }}>
      <Space direction="vertical" size={8} style={{ width: "100%" }}>
        <Typography.Text strong>{user?.name}</Typography.Text>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={() => logout()}
          block
        >
          Logout
        </Button>
      </Space>
    </div>
  );

  return (
    <Popover
      placement="bottomRight"
      trigger="click"
      content={content}
      overlayInnerStyle={{ padding: 0 }}
      overlayStyle={{ zIndex: 999 }}
    >
      <Avatar
        src={user?.avatarUrl}
        icon={<UserOutlined />}
        style={{ cursor: "pointer" }}
      />
    </Popover>
  );
};

export default CurrentUser;
