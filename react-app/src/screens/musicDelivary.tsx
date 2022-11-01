import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import VirtualList from 'rc-virtual-list';
import { Home } from './homePage';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Button } from '@material-ui/core';
import { IconButton, Modal } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SeachInput from '../components/seachForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AddButton from '../components/addButton';
import { PageLayout } from '../components/pageLayoutContainer';
import MusicIcon from '../components/image/musicIcon.png'
import PublicIcon from '@mui/icons-material/Public';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getList, updateMusic } from '../lib/api/music';


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
  id: number,
  title: string,
  theme: string,
  active: boolean,
  audio?: string
}

export const MusicDelivary = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const [item, setItem] = useState(false)
  const [data, setData] = useState<DataType[]>([]);
  const [searchKeyword, updateSearchKeyword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (active: boolean, item: any) => {
    setIsActive(active)
    setItem(item)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    updateSearchKeyword(event.currentTarget.value);
  }

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const res = await getList();
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    }
    catch (e) {
      setLoading(false);
      console.log(e)
    };
  }

  useEffect(() => {
    loadMoreData();
  }, []);

  const onChangeIsActive = async (item: any) => {
    const data: any = {}
    data["active"] = !item.active
    data["title"] = item.title
    data["theme"] = item.theme
    data["release_date"] = item.releaseDate
    try {
      const res = await updateMusic(item.id, data)
      console.log("一応成功")
      loadMoreData()
      setOpen(false)
    } catch (e) {
      console.log(e)
    }
    console.log(data)
  }

  const onChangeIsCansel = () => {
    setOpen(false)
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 300,
    width: 600,
    bgcolor: 'background.paper',
    border: '#000',
    boxShadow: 24,
    p: 4,
  };


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
              next={loadMoreData}
              dataLength={data.length}
              hasMore={data.length > 10}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={data}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={<Avatar src={MusicIcon} style={{ width: "60px", height: "60px" }} />}
                      title={<a href="https://ant.design">{item.title}</a>}
                      description={item.theme}
                    />
                    <IconButton style={{ marginLeft: "16px" }} component={Link} to={`/delivery-music/${item.id}/edit-music/`} >
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton style={{ marginLeft: "4px" }}>
                      {item.active ? <PublicIcon onClick={() => handleOpen(item.active, item)} color="primary" /> : <PublicOffIcon onClick={() => handleOpen(item.active, item)} color="disabled" />}
                    </IconButton>
                    <audio src={item.audio}></audio>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </ContentContainer>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {isActive ?
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  配信停止
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  配信を停止するとアプリ側に表示されることはなくなります。<br />
                  すでに購入されてあるユーザーには表示されます。<br />
                  <div style={{ display: "flex" }}>
                    <Button onClick={() => onChangeIsCansel()} variant="contained" color="primary" style={{
                      top: "90px",
                      left: "310px",
                    }}>
                      キャンセル
                    </Button>
                    <Button onClick={() => onChangeIsActive(item)} variant="contained" color="secondary" style={{
                      top: "90px",
                      left: "340px"
                    }}>
                      楽曲停止
                    </Button>
                  </div>
                </Typography>
              </Box>
              :
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  配信開始
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  配信開始にするとアプリ側に表示されます。<br />
                  アプリからこの楽曲が購入された場合、配信取り消しをしてもアプリから消えることはありません。<br />
                  ※現在はプロトタイプのため配信停止するとアプリから消えます。
                  <div style={{ display: "flex" }}>
                    <Button onClick={() => onChangeIsCansel()} variant="contained" color="inherit" style={{
                      top: "60px",
                      left: "310px",
                    }}>
                      キャンセル
                    </Button>
                    <Button onClick={() => onChangeIsActive(item)} variant="contained" color="secondary" style={{
                      top: "60px",
                      left: "340px"
                    }}>
                      配信停止
                    </Button>
                  </div>
                </Typography>
              </Box>
            }
          </Modal>
        </PageLayout>
      </Home>
    </>
  );
}
