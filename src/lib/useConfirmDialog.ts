import React from 'react'
import { AlertType, dialogDataType } from './types'

const useConfirmDialog = () => {
  const [isHidden, setIsHidden] = React.useState(true)
  const [title, setTitle] = React.useState<string>('')
  const [alertType, setAlertType] = React.useState<AlertType>('warning')
  const [alertMessage, setAlertMessage] = React.useState<string>('')
  const [buttonText, setButtonText] = React.useState<string>('')
  const [message, setMessage] = React.useState<string>('')

  const resolvePromise = React.useRef<(v: boolean) => void>()
  const rejectPromise = React.useRef<(v: boolean) => void>()

  function showConfirmDialog(dialog: dialogDataType) {
    return new Promise((resolve, reject) => {
      resolvePromise.current = resolve
      rejectPromise.current = reject

      const { title, alertType, alertMessage, message, buttonText } = dialog

      title && setTitle(title)
      alertMessage && setAlertMessage(alertMessage)
      buttonText && setButtonText(buttonText)
      message && setMessage(message)
      setAlertType(alertType)
      setIsHidden(false)
    })
  }

  function dialogData() {
    return {
      title,
      alertType,
      alertMessage,
      message,
      buttonText,
      isHidden,
      onSubmit: (submitted: boolean) => {
        submitted
          ? resolvePromise.current && resolvePromise.current(true)
          : rejectPromise.current && rejectPromise.current(false)
        setIsHidden(!isHidden)
      }
    }
  }

  return {
    showConfirmDialog,
    dialogData
  }
}

export default useConfirmDialog
