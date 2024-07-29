import AboutMe from "../../components/AboutMe/AboutMe"
import Blog from "../../components/Blog/Blog"
import ContactForm from "../../components/ContactForm/ContactForm"

export default function Home(){
  return (
    <>
      <AboutMe />
      <hr />
      <Blog />
      <hr />
      <ContactForm />
    </>
  )
}