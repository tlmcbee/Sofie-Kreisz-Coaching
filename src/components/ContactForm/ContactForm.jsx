
import {useState} from "react"

export default function ContactForm () {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: '',
    })
  }

  return (
    <div style={{display: "flex",
      flexDirection: "column"
    }}>
      Contact Me Here!
      <form>
        <input name="name" value={formData.name} onChange={handleChange}></input>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}