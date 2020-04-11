import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fetchAnalysis } from '../actions/index.js'
import { Container, TextField, Button } from '@material-ui/core';
import classes from './Form.module.css'

export const Form = () => {
  const [inputText, setInputText] = useState('')
  const handleChange = (event) => setInputText(event.target.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (!inputText || invalidTextLength()) return
    dispatch(fetchAnalysis(inputText))
  }
  const invalidTextLength = () => inputText.length > 500

  return (
    <div className={classes.form}>
      <TextField
        placeholder="韓国語のテキストを入力 （例）오늘은 좋은 날씨 네요."
        onChange={handleChange}
        value={inputText}
        multiline={true}
        className={classes.inputText}
        error={invalidTextLength()}
        helperText={invalidTextLength() ? "文字数制限（500字）を超えています" : ""}
      />
      <Button
        onClick={handleClick}
        variant="contained"
        className={classes.inputButton}
        color="primary">
        解析する
      </Button>
    </div>
  )
}