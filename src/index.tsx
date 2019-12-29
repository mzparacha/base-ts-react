import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { AlertDialog } from './components/alert-box-component'
import useConfirmDialog from './lib/useConfirmDialog'

console.info(`⚛️ ${React.version}`)

const App = () => {
  const { showConfirmDialog, dialogData } = useConfirmDialog()

  const openDialog = async () => {
    const shouldArchive = await showConfirmDialog({
      title: 'Confirmation',
      alertType: 'warning',
      alertMessage: 'Evaluations are deactivated once archived',
      message: 'Are you sure you want to archive this evaluation?',
      buttonText: 'Archive'
    })

    if (shouldArchive) {
      const shouldSubmit = await showConfirmDialog({
        title: 'Next Confirmation',
        alertType: 'success',
        alertMessage: 'Evaluations are deactivated once archived',
        message: 'Are you sure you want to archive this evaluation?',
        buttonText: 'Submit'
      })

      if (shouldSubmit) alert('There')
    }
  }

  return (
    <>
      <GlobalStyle />
      <button onClick={() => openDialog()}>Open Dialog</button>
      Hello World
      <AlertDialog dialogData={dialogData()} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
