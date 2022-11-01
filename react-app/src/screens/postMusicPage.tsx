import React, { useContext, useState } from 'react';
import styled from 'styled-components'
import { PageLayout } from '../components/pageLayoutContainer';
import { Home } from './homePage';
import { Controller, useForm } from "react-hook-form";
import DefaultForm, { DefaultTextarea } from '../components/defaultForm';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UploadButton from '../components/uploadFileInput';
import Button from '@mui/material/Button';
import { createMusic } from '../lib/api/music';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';


const ButtonPosition = styled(Button)`
  float: right;
  margin-right: 16px;
  top: 10px;
`

export const PostMusicPage = () => {
  const { currentUser }: any = useContext(AuthContext)

  const [newMusicTitle, setNewMusicTitle] = useState("")
  const [newMusicDate, setNewMusicDate] = useState("")
  const [newMusicTheme, setNewMusicTheme] = useState("")

  const [audio, setAudio] = useState<any | null>(null)

  // const handleMusicTitle = (e: any) => setNewMusicTitle(e.target.value)
  // const handleseMusicDate = (e: any) => setNewMusicDate(e.target.value)
  // const handleseMusicTheme = (e: any) => setNewMusicTheme(e.target.value)
  // const selectAudio = (e: any) => {
  //   const selectedAudio = e.target.files[0]
  //   console.log(e.target.files[0])
  //   setAudio(selectedAudio)
  // }

  const createFormData = () => {
    const formData = new FormData()

    if (audio) return
    formData.append('music[title]', newMusicTitle)
    formData.append('music[release_date]', newMusicDate)
    formData.append('music[theme]', newMusicTheme)
    formData.append('music[audio]', audio)
    console.log(formData)
    return formData
  }

  const navigate = useNavigate();

  const sendFormData = async () => {
    const data = createFormData()
    try {
      const res = await createMusic(data)
      console.log("一応成功")
    } catch (e) {
      console.log(data)
      console.log("error")
    }
  }

  const {
    setValue,
    watch,
    handleSubmit,
    control,
    setError,
    formState: { errors }
  } = useForm();

  const watchAudio = watch('audio')

  const onChangeFile = (e: any) => {
    const selectedAudio = e.target.files[0]
    setAudio(selectedAudio)
  }

  const onSubmit = async (data: any) => {
    try {
      const res = await createMusic(data)
      console.log("一応成功")
    } catch (e) {
      console.log("errorro")
    }
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
                  name="title"
                  render={({ field: { onChange, value } }) => (
                    <DefaultForm onChange={onChange} value={value} type={"text"} label={"楽曲名"} />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Controller
                  control={control}
                  name="release_date"
                  render={({ field: { onChange, value } }) => (
                    <DefaultForm onChange={onChange} value={value} type={"text"} label={"発表した年"} />
                  )}
                />
              </Grid>
              <Grid item xs={10}>
                <Controller
                  control={control}
                  name="theme"
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
      </Home>
    </>
  );
}
