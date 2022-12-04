import { NotFound } from "../../components"
const Deployment = ({ returnPath }) => {
  return (
    <div className="grid relative ">
      <NotFound message="{ Coming soon... }" returnPath={returnPath} />
    </div>
  )
}

export default Deployment
