import React from 'react';
import Footer from '../Footer/Footer.jsx'

const Contact = () => {
    return (
        <div id='contact' className='h-fit flex flex-col items-center justify-between bg-gradient-to-br from-slate-800 to-slate-600 min-h-screen -mt-35 gap-10'>
            <div>
                <h2 className='text-4xl font-bold border-b border-pink-500 pt-10 m-4'>CONTACT ME</h2>
                <h3 className='text-lg mb-5 text-pink-500'>Unlocking Opportunities Together</h3>
            </div>
            <form className='flex flex-col w-3/4 gap-3' action='https://api.web3forms.com/submit' method='POST'>
                <input type="hidden" name="access_key" value="77d41956-2a30-44fc-9175-078d0a554950" />
                <label htmlFor="name" className="text-gray-300">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-gray-800 text-white p-2 rounded-md mb-2"
                />

                <label htmlFor="email" className="text-gray-300">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-gray-800 text-white p-2 rounded-md mb-2"
                />

                <label htmlFor="message" className="text-gray-300">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="bg-gray-800 text-white p-2 rounded-md mb-2"
                ></textarea>

                <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 hover:text-slate-900 hover:scale-110 transition-transform max-w-96 self-center mt-8">
                    Send Message
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default Contact;