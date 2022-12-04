import { NotFound } from "../../components"
const Backend = ({ returnPath }) => {
  return (
    <div className="grid relative ">
      <NotFound message="{ Coming soon... }" returnPath={returnPath} />
    </div>
  )
}

export default Backend
