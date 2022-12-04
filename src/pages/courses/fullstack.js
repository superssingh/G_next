import { NotFound } from "../../components"
const Fullstack = ({ returnPath }) => {
  return (
    <div className="grid relative ">
      <NotFound message="{ Coming soon... }" returnPath={returnPath} />
    </div>
  )
}

export default Fullstack
