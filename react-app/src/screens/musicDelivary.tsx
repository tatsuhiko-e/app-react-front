import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import VirtualList from 'rc-virtual-list';
import { Home } from './homePage';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button } from '@material-ui/core';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SeachInput from '../components/seachForm';
import { Link } from 'react-router-dom';
import AddButton from '../components/addButton';
import { PageLayout } from '../components/pageLayoutContainer';


const SeachAddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  left: 44px;
  margin-top: 16px;
  margin-bottom: 24px;
  background: #e7e7e7;
`

const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  margin-bottom: 32px;
  width: 90%;
  height: 100%;
  max-height: 1200px;
  overflow-y: 'auto';
  padding: '0 16px';
  border: '1px solid rgba(140, 140, 140, 0.35)';
`

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export const MusicDelivary = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType[]>([]);
  const [searchKeyword, updateSearchKeyword] = React.useState("");

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    // 入力キーワードをstateに格納する
    updateSearchKeyword(event.currentTarget.value);
  }

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then(res => res.json())
      .then(body => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <>
      <Home>
        <PageLayout title={"楽曲一覧"}>
          <SeachAddContainer>
            <Link to='/delivery-music/post-music'>
              <AddButton children={'音楽を追加'} />
            </Link>
            <SeachInput type={"text"} placeholder={"検索"} onInput={onInput} />
          </SeachAddContainer>
          <ContentContainer>
            <InfiniteScroll
              dataLength={data.length}
              next={loadMoreData}
              hasMore={data.length < 20}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={data}
                renderItem={item => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} size={64} />}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                    < IconButton>
                      <ModeEditIcon />
                    </ IconButton>
                    < IconButton>
                      <DeleteIcon color="error" />
                    </ IconButton>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </ContentContainer>
          
        </PageLayout>
      </Home>
    </>
  );
}
