import React, { useState, Fragment, useContext } from 'react';
import styled from 'styled-components'
import Input from '../components/from';
import Button from '../components/submitButton';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css'

import { menuItems } from '../Layout/Menus';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";
import Cookies from 'js-cookie';
import { signOut } from '../lib/api/auth';
import { AuthContext } from "../App"

const { Header, Sider, Content } = Layout;

const PageContent = styled(Content)`
  height: 94vh;
  overflow-y: scroll;
`

const LogoDesign = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 52, 52, 0.3);
  width: 100px;
`


export const Home = ({children}:any) => {
  const { isSignedIn, currentUser, setIsSignedIn } = useContext(AuthContext)

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      console.log("signout")
      const res = await signOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
      <Layout>
        <Header className="header" style={{display: "flex", justifyContent: "space-between"}}>
          <LogoDesign />
          <IconButton  onClick={handleSignOut}>
            <LogoutIcon sx={{ color: "#fff" }} style={{fontSize: "35px"}} />
          </IconButton>
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["/dashboad"]}>
              {
                menuItems.map((item) => {
                  return (
                    <Menu.Item key={item.key}>
                      <Link to={item.path}>{item.label}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <PageContent>{children}</PageContent>
        </Layout>
      </Layout>
    </Fragment>
  );
}
