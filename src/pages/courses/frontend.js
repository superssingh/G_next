import { NotFound } from "../../components"
const Frontend = ({ returnPath }) => {
  return (
    <div className="grid relative ">
      <NotFound message="{ Coming soon... }" returnPath={returnPath} />
    </div>
  )
}

export default Frontend
