import { NotFound } from "../../components"
const UI = ({ returnPath }) => {
  return (
    <div className="grid relative ">
      <NotFound message="{ Coming soon... }" returnPath={returnPath} />
    </div>
  )
}

export default UI
