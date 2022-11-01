import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { PageLayout } from '../components/pageLayoutContainer';
import { Home } from './homePage';
import { Controller, useForm } from "react-hook-form";
import DefaultForm, { DefaultTextarea } from '../components/defaultForm';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UploadButton from '../components/uploadFileInput';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';

const ButtonPosition = styled(Button)`
  float: right;
  margin-right: 16px;
  top: 10px;
`

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '#000',
  boxShadow: 24,
  p: 4,
};

export const EditMusicPage = () => {
  const { musicId } = useParams()
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState<any>({});
  const {
    setValue,
    watch,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm();

  console.log(musicId)

  const onSubmit = (data: {}) => {
    handleOpen()
    console.log(data)
  }

  useEffect(() => {
    loadMoreData();
  }, []);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    fetch(`http://localhost:3001/api/v1/musics/${musicId}`)
      .then(res => res.json())
      .then(body => {
        setData(body);
        setLoading(false);
        setValue('musicTitle', body.title)
        setValue('releaseYear', body.release_date)
        setValue('musicTheme', body.theme)
      })
      .catch(() => {
        setLoading(false);
      });
  };


  return (
    <>
      <Home>
        <PageLayout title={"楽曲情報編集"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Controller
                  control={control}
                  name="musicTitle"
                  render={({ field: { onChange, value } }) => (
                    <DefaultForm onChange={onChange} value={value} type={"text"} label={"楽曲名"} />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  control={control}
                  name="releaseYear"
                  render={({ field: { onChange, value } }) => (
                    <DefaultForm onChange={onChange} value={value} type={"text"} label={"発表した年"} />
                  )}
                />
              </Grid>
              <Grid item xs={10}>
                <Controller
                  control={control}
                  name="musicTheme"
                  render={({ field: { onChange, value } }) => (
                    <DefaultTextarea onChange={onChange} value={value} label={"楽曲のテーマ"} />
                  )}
                />
              </Grid>
              <Grid item xs={9}>
                <UploadButton />
              </Grid>
              <Grid item xs={3}>
                <ButtonPosition type="submit" variant="contained" color="success">
                  Success
                </ButtonPosition>
              </Grid>
            </Grid>
          </form>
        </PageLayout>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Home>
    </>
  );
}
