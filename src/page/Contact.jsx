import Footer from "../partial/Footer";
import Header from "../partial/Header";

const Contact = () => {

  const handleContactForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(email, message);
  }

  return (
    <>
      <Header />
      <form onSubmit={handleContactForm}>
        <label>
          Email 
          <input type="email" name="email"></input>
        </label>
        <label>
          Message 
          <input type="text" name="message"></input>
        </label>
        <label> 
          <input type="submit"></input>
        </label>
      </form>
      <Footer />
    </>
  );
};

export default Contact;