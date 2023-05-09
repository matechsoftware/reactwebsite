import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '../models/contactform.interface';

const Contact: React.FC = () => {
  const [backendIsAvailable, setBackendIsAvailable] = useState<boolean>(false);
  const [showSuccessfulSent, setshowSuccessfulSent] = useState<boolean>(false);
  const [showNotSuccessfulSent, setshowNotSuccessfulSent] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const checkBackendAvailability = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/healthcheck', {
        method: 'GET',
      });
      if (response.ok) {
        setBackendIsAvailable(true);
      } else {
        setBackendIsAvailable(false);
      }
    } catch (error) {
      setBackendIsAvailable(false);
    }
  };

  const sendMail = async (apiKey: string, message: { message: string }) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        setshowSuccessfulSent(true);
      } else {
        setshowNotSuccessfulSent(false);
      }
    } catch (error) {
      setshowNotSuccessfulSent(false);
    }
  };

  const onSubmit = (data: ContactFormData) => {
    checkBackendAvailability();
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!backendIsAvailable || apiKey === undefined) {
      setshowNotSuccessfulSent(true);
      return;
    }
    const message = {
      message: `sender: ${data.contactEmail} message: ${data.contactMessage}`,
    };

    sendMail(apiKey, message);
  };

  return (
    <div>
      <section id="contact" className="s-contact target-section">
        <div className="overlay"></div>

        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Kontakt</h3>
            <h1>Wir sind für Sie da!</h1>

            <p className="lead">
              Ob Sie eine kurze Beratung oder einen aufwendigen Projektauftrag
              benötigen, zögern Sie nicht uns zu kontaktieren. Wir stehen Ihnen
              mit unserem Fachwissen und unserer Expertise zur Verfügung. Melden
              Sie sich bei uns und lassen Sie uns gemeinsam Ihre Ziele
              erreichen.
            </p>
          </div>
        </div>

        <div className="row contact__main">
          <div className="col-eight tab-full contact__form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
            >
              <fieldset>
                <div className="form-field">
                  <input
                    {...register('contactName', {
                      required: true,
                      minLength: 2,
                    })}
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Name"
                    minLength={2}
                    required={true}
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    {...register('contactEmail', { required: true })}
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Ihre Email"
                    required={true}
                    aria-required="true"
                    className="full-width"
                  />
                  {errors.contactEmail && <span>This field is required</span>}
                </div>
                <div className="form-field">
                  <input
                    {...register('contactSubject')}
                    type="text"
                    id="contactSubject"
                    placeholder="Betreff"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    {...register('contactMessage', { required: true })}
                    id="contactMessage"
                    placeholder="Nachricht"
                    rows={10}
                    cols={50}
                    maxLength={500}
                    className="full-width"
                  ></textarea>
                  {errors.contactMessage && <span>This field is required</span>}
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Absenden</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {showSuccessfulSent ? (
              <div className="message-success">
                Ihre Nachricht wurde versendet. Vielen Dank!
              </div>
            ) : (
              <div></div>
            )}
            {showNotSuccessfulSent ? (
              <div className="message-warning">
                Das hat leider nicht funktioniert. Versuchen Sie es noch einmal
                oder wenden Sie sich telefonisch an uns!
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="col-four tab-full contact__infos">
            <h4 className="h06">Email</h4>
            <p>kontakt@matech-software.de</p>

            <h4 className="h06">Adresse</h4>
            <p>
              MaTech Software GbR
              <br />
              Enzianweg 8<br />
              83052 Bruckmühl
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
