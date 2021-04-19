import { useState } from "react"

const useInput = () => {
  const [value, setValue] = useState("")

  const onHandleChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: onHandleChange,
  }
}

export default useInput
