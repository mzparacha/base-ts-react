import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import { AlertDialog } from './components/alert-box-component'

console.info(`⚛️ ${React.version}`)

const App = () => {
  const [isHidden, setIsHidden] = React.useState<boolean>(false)

  const toggleModel = React.useCallback(() => {
    setIsHidden(!isHidden)
  }, [isHidden])

  return (
    <>
      <GlobalStyle />
      Hello World
      <button onClick={toggleModel}>Open Dialog</button>
      <AlertDialog
        title="Confirmation"
        alertType="warning"
        alertMessage="Evaluations are deactivated once archived"
        message="Are you sure you want to archive this evaluation?"
        buttonText="Archive"
        isHidden={isHidden}
        onSubmit={toggleModel}
      />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
