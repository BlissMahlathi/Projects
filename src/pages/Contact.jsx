import  { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    reason: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      tel: formData.tel,
      reason: formData.reason,
      message: formData.message
    };

    emailjs.send('service_io0guey', 'template_2hrl3bb', templateParams, '_hMzTyeUc7dW7IHWU')
      .then((result) => {
          console.log('Email successfully sent!', result.status, result.text);
      }, (error) => {
          console.log('Failed to send email.', error);
      });

    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <form onSubmit={sendEmail} className="text-slate-300">
        <h1 className="text-3xl text-center font-bold text-slate-300 mb-4">Contact Me</h1>

        <label htmlFor="name">Name*</label><br/>
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Full Name" 
          required 
          className="p-2 mb-4 bg-gray-800 border border-slate-500 rounded"
          onChange={handleInputChange}
        /><br/>

        <label htmlFor="email">Email*</label><br/>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="example@gmail.com" 
          required 
          className="p-2 mb-4 bg-gray-800 border border-slate-500 rounded"
          onChange={handleInputChange}
        /><br/>

        <label htmlFor="tel">Phone Number</label><br/>
        <input 
          type="tel" 
          name="tel" 
          id="tel" 
          placeholder="+27 71 234 5678" 
          className="p-2 mb-4 bg-gray-800 border border-slate-500 rounded"
          onChange={handleInputChange}
        /><br/>

        <div className="text-slate-500 mb-4">
          <label htmlFor="reason">Reason for Enquiry</label>
          <select 
            id="reason" 
            name="reason" 
            required 
            className="p-2 bg-gray-800 border border-slate-500 rounded w-full"
            onChange={handleInputChange}
          >
            <option disabled selected>Select One</option>
            <option value="Design">Design</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <label htmlFor="message">Message</label><br/>
        <textarea 
          id="message" 
          name="message" 
          className="p-2 mb-4 bg-gray-800 border border-slate-500 rounded w-full text-slate-500" 
          rows="4" 
          placeholder="Your message here..."
          onChange={handleInputChange}
        /><br/>

        <button 
          type="submit" 
          className="p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact;
