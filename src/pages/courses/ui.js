import { NotFound } from "../../components"
const UI = () => {
  return (
    <div className="grid relative ">
      <NotFound
        message="{ Coming soon... }"
        returnPath="/courses"
      />
    </div>
  );
}

export default UI
