import React, { useState } from 'react';
import styled from 'styled-components'
import { PageLayout } from '../components/pageLayoutContainer';
import { Home } from './homePage';
import { Controller, useForm } from "react-hook-form";
import DefaultForm, { DefaultTextarea } from '../components/defaultForm';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UploadButton from '../components/uploadFileInput';
import Button from '@mui/material/Button';

const ButtonPosition = styled(Button)`
  float: right;
  margin-right: 16px;
  top: 10px;
`

export const PostMusicPage = () => {
  const {
    setValue,
    watch,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: {}) => {
    console.log(data)
  }

  return (
    <>
      <Home>
        <PageLayout title={"楽曲追加"}>
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
                <ButtonPosition variant="contained" color="success">
                  Success
                </ButtonPosition>
              </Grid>
            </Grid>

          </form>
        </PageLayout>
      </Home>
    </>
  );
}
