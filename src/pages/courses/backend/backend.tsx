import { NotFound } from '../../../components'
const Backend = () => {
  return (
    <div className="grid relative ">
      <NotFound
        message="{ Coming soon... }"
        returnPath="/courses"
      />
    </div>
  )
}

export default Backend