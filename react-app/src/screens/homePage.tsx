import React, { useCallback, useMemo, useState, Fragment, useEffect, ReactNode } from 'react';
import styled from 'styled-components'
import Input from '../components/from';
import Button from '../components/submitButton';
import { Link, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css'

import { menuItems } from '../Layout/Menus';

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
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Fragment>
      <Layout>
        <Header className="header">
          <LogoDesign />
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
