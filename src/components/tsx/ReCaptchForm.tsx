import { loadReCaptcha, ReCaptchaInstance } from 'react-recaptcha-google'
import { useForm } from 'react-hook-form'

type Props = {
  onSubmit: (data: any) => Promise<void>
  siteKey: string
}

const ReCaptchaForm: React.FC<Props> = ({ onSubmit, siteKey }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const recaptcha = React.useRef<ReCaptchaInstance>()

  React.useEffect(() => {
    loadReCaptcha(siteKey)
  }, [])

  const onSubmitWithCaptcha = async (data: any) => {
    if (recaptcha.current?.getValue()) {
      await onSubmit(data)
    } else {
      console.log('reCAPTCHA validation failed')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitWithCaptcha)}>
      {/* Render form fields here */}

      <div>
        <ReCaptcha
          ref={recaptcha}
          size="invisible"
          sitekey={siteKey}
          onChange={() => {
            console.log('reCAPTCHA validation successful')
          }}
        />
      </div>

      <input
        type="submit"
        value="Submit"
      />
    </form>
  )
}

export default ReCaptchaForm
