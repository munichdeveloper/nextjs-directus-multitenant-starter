import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout } from "antd"
import { Dispatch, SetStateAction, createElement } from "react"

const { Header } = Layout

const HeaderLayout = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean
  setCollapsed: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Header
      className={"site_Layout__Background"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
      <div className="flex items-center gap-2">
        {/* <NotificationsDropDown /> */}
        {/* <Avatar className="cursor-pointer" /> */}
        {/* <AvatarDropdown /> */}
      </div>
    </Header>
  )
}

export default HeaderLayout
