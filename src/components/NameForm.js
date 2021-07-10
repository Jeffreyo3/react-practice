import { useState } from "react"


const NameForm = ({name, setName}) => {
  const [formValue, setFormValue] = useState(name)
  const handleChange = (event) => {
    setFormValue(event.target.value)
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      setName(formValue)
  }
    return(
        <form onSubmit={handleSubmit}>
            <input name={"name"} placeholder={"EntEr A NaMe"} value={formValue} onChange={handleChange}/>
            <button type="submit">
                Search
            </button>
        </form>
    )
  }

  export default NameForm