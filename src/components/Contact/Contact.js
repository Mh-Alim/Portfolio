import React from 'react'
import "./Contact.css"


const Contact = () => {
  return (
    <div className='contact' id='contact'>
       <div className="contact_heading">Contact Me</div>
       <div className="contact_content">
          <div className="contact_content_texts">
              <h2 className='contact_content_texts_heading'>Get In Touch</h2>
              <p>Thanks for stopping by, I'm currently looking for new opportunities. If you think we might be a good fit for one another, Send me a mail or Contact here..</p>
          </div>
          <div className="contact_content_forms">
              <form action="" method='POST' className='input-icons'>
                  <div className='input_element'>
                      <i className="fa fa-user icon"></i>
                      <input type="text" name='name' id='name' placeholder='Your name'/>
                  </div>
                  <div className='input_element'>
                      <i className="fa fa-envelope icon"></i>
                      <input type="email" name='email' id='email' placeholder='Email'/>
                  </div>
                  <div className='input_element'>
                      <i className="fa fa-comment" aria-hidden="true"></i>
                      <input type="text" name='subject' id='subject' placeholder='Subject'/>
                  </div>
                  <div className='input_element'>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='message'></textarea>
                  </div>
                  <button type='submit' className='contact_btn input_element'>Him me up!!</button>
              </form>
          </div>
       </div>
    </div>
  )
}

export default Contact