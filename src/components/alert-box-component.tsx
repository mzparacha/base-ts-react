import React from 'react'
import styled from 'styled-components'
import { Colors } from '../lib/style-guide'
import { dialogDataType } from '../lib/types'

interface AlertDialogProps {
  dialogData: dialogDataType
}

const AlertDialog: FC<AlertDialogProps> = (props) => {
  const {
    title,
    alertMessage,
    buttonText,
    onSubmit,
    message,
    isHidden,
    alertType
  } = props.dialogData

  const { className } = props

  if (isHidden) {
    return null
  }
  return (
    <div className={className}>
      <div className="container">
        <div className="dialog-header">
          <span className="dialog-title">{title}</span>
          <span className="close" onClick={() => onSubmit && onSubmit(false)}>
            &times;
          </span>
        </div>
        <div className={`alert ${alertType}`}>
          <span className={`alert-title ${alertType}`}>
            {alertType.charAt(0).toUpperCase() + alertType.slice(1)}
          </span>
          <p className="alert-description">{alertMessage}</p>
        </div>
        <p className="dialog-description">{message}</p>
        <button
          onClick={() => onSubmit && onSubmit(true)}
          className="submit-button"
        >
          {buttonText ? buttonText : 'Archive'}
        </button>
      </div>
    </div>
  )
}

const StyledAlertDialog = styled(AlertDialog)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgb(0, 0, 0, 0.7);

  .container {
    position: absolute;
    width: 440px;
    height: 320px;
    align-self: center;
    background-color: white;
    left: 50%;
    padding: 40px;
    transform: translateX(-50%);
  }

  .dialog-header {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    height: 20px;
    width: 360px;
  }

  .dialog-title {
    font-family: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }

  .close {
    font-family: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
  }

  .alert {
    height: 60px;
    margin-top: 30px;
    border: 1px solid ${Colors.Border};
    padding: 10px;
    padding-left: 20px;

    &.warning {
      border-left: 3.89px solid ${Colors.warning};
    }

    &.danger {
      border-left: 3.89px solid ${Colors.Stalled};
    }

    &.success {
      border-left: 3.89px solid ${Colors.OnTrack};
    }
  }

  .alert-title {
    font-family: inherit;
    font-style: normal;
    font-size: 16px;
    line-height: 16px;

    &.warning {
      color: ${Colors.warning};
    }

    &.danger {
      color: ${Colors.Stalled};
    }

    &.success {
      color: ${Colors.OnTrack};
    }
  }

  .alert-description {
    font-family: inherit;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 12px;
    color: ${Colors.TX2};
  }

  .dialog-description {
    margin-top: 20px;
  }

  .submit-button {
    width: 360px;
    height: 40px;
    font-size: 14px;
    position: absolute;
    bottom: 40px;
    color: ${Colors.PureWhite};
    background-color: ${Colors.AccordBlue};

    &:focus {
      outline: none;
    }
  }
`

export { StyledAlertDialog as AlertDialog }
