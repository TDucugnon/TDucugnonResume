import React, { useState } from 'react';
import './style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm, useController } from 'react-hook-form';

function Contact() {
    const { t, i18n } = useTranslation();
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const [editorValue, setEditorValue] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showToMuchRequest, setShowToMuchRequest] = useState(false);

    const onSubmit = async (data) => {
      reset({ emailBody: '' });
      try {
        const response = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();

        if (result.success) {
          setShowSuccessMessage(true);

          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 5000);
        } else if(result.toMuchRequest === true) {
          setShowToMuchRequest(true);
          setTimeout(() => {
            setShowToMuchRequest(false);
          }, 5000);
        } else {
          setShowSuccessMessage(false);
        }
      } catch (error) {
        console.error('Erreur lors de la requête au serveur :', error);
      }
    };
  
    const { field } = useController({
      name: 'emailBody',
      control,
      defaultValue: '',
      rules: { required: t('contact.requiredField') },
    });
  
    return (
      <div className='contactContainer' id='contactContainer'>
        <div className='contactContainerTitle'>
          {t('contact.title')}
          <FontAwesomeIcon className='contactIcon' icon={faMessage}> </FontAwesomeIcon>
        </div>
        <div className='contactInfos'>
          <div className='emailInfo'>
            {t('contact.emailAdress')}
          </div>
          <div className='telInfo'>
            {t('contact.tel')}
          </div>
          <div className='locationInfo'>
            {t('contact.location')}
          </div>
        </div>
        <div className='formTitle'>{t('contact.formTitle')}</div>
        {errors.emailBody && <span>{errors.emailBody.message}</span>}
        {showSuccessMessage && <div className='success'>{t('contact.messageSuccess')}</div>}
        {showToMuchRequest && <div className='error'>{t('contact.toMuchRequest')}</div>}
        <div className='contactContentContainer'>
          <form className='sendContactMail' onSubmit={handleSubmit(onSubmit)}>
            <ReactQuill
              className='quill-editor'
              value={field.value}
              onChange={(value) => field.onChange(value)}
            />
            <button className='submitButton' type="submit">{t('contact.sendMessage')}<FontAwesomeIcon icon={faPaperPlane} className='sendIcon'/></button>
          </form>
        </div>
      </div>
    );
}

export default Contact;