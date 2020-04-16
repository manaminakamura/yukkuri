import React from 'react';
import { TextField, Button } from '@material-ui/core';
import classes from './Form.module.css'

export const FormSp = ({ handleChange, inputText, invalidTextLength, handleClickAnalize, handleClickReset }) => {
  return (
    <>
      <div className={classes.form}>
        <TextField
          placeholder="韓国語のテキストを入力 （例）오늘은 좋은 날씨 네요."
          onChange={handleChange}
          value={inputText}
          multiline={true}
          error={invalidTextLength()}
          helperText={invalidTextLength() ? "文字数制限（500字）を超えています" : ""}
          fullWidth
        />
      </div>
      <div className={classes.form}>
        <Button
          onClick={handleClickAnalize}
          size="large"
          variant="contained"
          color="primary">
          解析する
        </Button>
        <Button
          onClick={handleClickReset}
          size="large"
          variant="contained">
          リセット
        </Button>
      </div>
    </>
  )
}