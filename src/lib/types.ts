export type AlertType = 'danger' | 'success' | 'warning'

export type dialogDataType = {
  title?: string
  alertMessage?: string
  alertType: AlertType
  message?: string
  buttonText?: string
  isHidden?: boolean
  onSubmit?: (v: boolean) => void
}
