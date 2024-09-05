import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';
import { useScroll } from '../Context/ScrollContext';

export default function Contact() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false)

let {scroll} = useScroll()

useEffect(()=>{
  scroll()
},[scroll])

  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = t('contact.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = t('emailInvalid');
    }

    if (!message) {
      errors.message = t('contact.messageRequired');
    } else if (message.length < 6) {
      errors.message = t('contact.messageMinLength');
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

 
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (validate()) {
      axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_g7p7vao',
        template_id: 'template_eerozdn',
        user_id: '2Aq4ly1urZbSUoCxZ',
        template_params: { 
          email, 
          message 
        }
      })
      .then((response) => {
        setIsLoading(false);
        console.log('SUCCESS!', response.status, response.data);
        swal({
          title: t('contact.success'),
          icon: "success",
          button: t('contact.ok'),
        });
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('FAILED...', err);
        swal({
          title: t('contact.error'),
          icon: "error",
          button: t('contact.ok'),
        });
      });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <section id='contact' className='h-screen flex justify-center items-center bottom'>
    <form onSubmit={handleSubmit} className="w-10/12 md:w-1/3 mx-auto p-6 bg-white bg-opacity-80 shadow-lg rounded-lg border border-gray-300">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{t('contact.formTitle')}</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">{t('contact.email')}:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full transition duration-500 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder={t('contact.email')}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">{t('contact.message')}:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full transition duration-500 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder={t('contact.message')}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
    {isLoading ? 
    
    <button
    type="submit"
    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
  >
    <i className="fas fa-spinner fa-spin text-white "></i>
  </button>  
  :
    
  <button
  type="submit"
  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
>
  {t('contact.submit')}
</button>
  }
    </form>
  </section>
  );
}
