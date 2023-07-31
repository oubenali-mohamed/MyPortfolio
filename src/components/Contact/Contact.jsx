import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const publicKey = import.meta.env.VITE_PUBLIC_KEY

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data, r) => {
    sendFeedBack(templateId, serviceId, {
      lastname: data.lastname,
      firstname: data.firstname,
      email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: r.target.reset(),
    })
    const formulaire = document.getElementById('formulaire')
    formulaire.style.color = '#97feed9b'
    formulaire.style.textAlign = 'center'
    formulaire.style.fontSize = '24px'
    formulaire.style.fontWeight = 'bold'
    formulaire.innerHTML = 'votre message à bien été envoyé'
  }

  const sendFeedBack = (templateId, serviceId, variables) => {
    //
    emailjs.send(serviceId, templateId, variables, publicKey).then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div id="formulaire">
      <h2>Contactez Moi</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <label className="label" htmlFor="lastname">
            Nom:
          </label>
          <br />
          <input
            {...register('lastname', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.lastname?.type === 'required' && (
            <p className="msgError">Ce champ est requis</p>
          )}
          {errors?.lastname?.type === 'minLength' && (
            <p className="msgError">
              Votre nom doit contenir plus de 3 caractères
            </p>
          )}
          {errors?.lastname?.type === 'maxLength' && (
            <p className="msgError">
              Votre nom ne peut pas etre supérieur à 20 caractères
            </p>
          )}
          {errors?.lastname?.type === 'pattern' && (
            <p className="msgError">
              Votre nom ne peut pas contenir de chiffres
            </p>
          )}
        </div>
        <br />
        <div>
          <label className="label" htmlFor="firstname">
            Prénom:
          </label>
          <br />
          <input
            {...register('firstname', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstname?.type === 'required' && (
            <p className="msgError">Ce champ est requis</p>
          )}
          {errors?.firstname?.type === 'minLength' && (
            <p className="msgError">
              Votre prénom doit contenir plus de 3 caractères
            </p>
          )}
          {errors?.firstname?.type === 'maxLength' && (
            <p className="msgError">
              Votre prénom ne peut pas etre supérieur à 20 caractères
            </p>
          )}
          {errors?.firstname?.type === 'pattern' && (
            <p className="msgError">
              Votre prénom ne peut pas contenir de chiffres
            </p>
          )}
        </div>
        <br />
        <div>
          <label className="label" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            {...register('email', {
              required: true,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,6}$/i,
            })}
          />
          {errors?.email?.type === 'required' && (
            <p className="msgError">Ce champ est requis</p>
          )}
          {errors?.email?.type === 'pattern' && (
            <p className="msgError">Votre email est invalide</p>
          )}
        </div>
        <br />
        <div>
          <label className="label" htmlFor="subject">
            Sujet:
          </label>
          <br />
          <input
            {...register('subject', {
              required: true,
              minLength: 10,
            })}
          />
          {errors?.subject?.type === 'minLength' && (
            <p className="msgError">
              Ce champ doit contenir un minimum de 10 caractères
            </p>
          )}
          {errors?.subject?.type === 'required' && (
            <p className="msgError">Ce champ est requis</p>
          )}
        </div>
        <br />
        <div>
          <label className="label" htmlFor="message">
            Votre Message:
          </label>
          <br />
          <textarea
            rows={10}
            {...register('message', {
              required: true,
            })}
          />
          {errors?.message?.type === 'required' && (
            <p className="msgError">Ce champ est requis</p>
          )}
        </div>
        <br />
        <input type="submit" className="btnSubmit" />
      </form>
    </div>
  )
}
export default Contact
