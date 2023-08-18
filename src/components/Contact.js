import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false); 


  const handleSubmit = event => {
    event.preventDefault();

    setShowAlert(true);

  
  };

  return (
    <div className="max-w-[1240px] mx-auto my-10 py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      {showAlert && (
        <div className="bg-blue-500 p-4 rounded-md mb-4 text-white text-center text-xl ">
          Thanks for submitting!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border  p-2 "
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full border p-2"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
