import { NotFound } from '../../components'
const Fullstack = () => {
  return (
    <div className="grid relative ">
      <NotFound
        message="{ Coming soon... }"
        returnPath="/courses"
      />
    </div>
  )
}

export default Fullstack
