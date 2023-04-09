import { NotFound } from '../../components'
const Frontend = () => {
  return (
    <div className="grid relative ">
      <NotFound
        message="{ Coming soon... }"
        returnPath="/courses"
      />
    </div>
  )
}

export default Frontend
