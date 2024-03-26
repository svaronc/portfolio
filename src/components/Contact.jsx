import { useRef, useState } from "react"
import styles from "../style"
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({user_name: "", user_email: "", message: ""})
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_107naeb', 'template_vde62pd', form.current, {publicKey: "cnZohqW2n2ve31Cgt"})
      .then((result) => {
          console.log(result.text);
          setFormData({user_name: "", user_email: "", message: ""})
      }, (error) => {
          console.log(error.text);
      });
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }
  return (
    <section id="contact" className={`${styles.container} mt-20`}>
      <h2 className={`${styles.heading2} text-center`}>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="user_name"
            onChange={handleChange}
            value={formData.user_name}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            onChange={handleChange}
            name="user_email"
            value={formData.user_email}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            name="message"
            onChange={handleChange}
            value={formData.message}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact