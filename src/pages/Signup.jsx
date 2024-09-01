import signupImg from "../assets/Images/signup.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Explore the world of coding with StudyCode"
      description1="Enhance your abilities for every challenge ahead."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup