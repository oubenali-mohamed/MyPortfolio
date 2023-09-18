import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import '/src/styles.css'

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
    <div className=' bg-gray-400 border-t border-black dark:bg-black dark:border-gray-100' id="formulaire">
      <h2 className="text-xl text-black  text-center pt-11 pb-11 md:text-3xl dark:text-white">
        Contactez Moi
      </h2>
      <form  id="formulaire" onSubmit={handleSubmit(onSubmit)}>
        <div className="form ">
          <label
            className="label text-xl text-black ml-8 md:text-2xl md:ml-48 lg:ml-96 dark:text-white"
            htmlFor="lastname"
          >
            Nom:
          </label>
          <br />
          <input
            className="w-5/6 h-10 ml-8 rounded-md md:w-3/6 md:ml-48 lg:ml-96"
            {...register('lastname', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.lastname?.type === 'required' && (
            <p className="msgError ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Ce champ est requis
            </p>
          )}
          {errors?.lastname?.type === 'minLength' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre nom doit contenir plus de 3 caractères
            </p>
          )}
          {errors?.lastname?.type === 'maxLength' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre nom ne peut pas etre supérieur à 20 caractères
            </p>
          )}
          {errors?.lastname?.type === 'pattern' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre nom ne peut pas contenir de chiffres
            </p>
          )}
        </div>
        <br />
        <div>
          <label
            className="label ml-8 text-xl text-black md:text-2xl md:ml-48 lg:ml-96 dark:text-white"
            htmlFor="firstname"
          >
            Prénom:
          </label>
          <br />
          <input
            className="w-5/6 h-10 ml-8 rounded-md md:w-3/6 md:ml-48 lg:ml-96"
            {...register('firstname', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.firstname?.type === 'required' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Ce champ est requis
            </p>
          )}
          {errors?.firstname?.type === 'minLength' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre prénom doit contenir plus de 3 caractères
            </p>
          )}
          {errors?.firstname?.type === 'maxLength' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre prénom ne peut pas etre supérieur à 20 caractères
            </p>
          )}
          {errors?.firstname?.type === 'pattern' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre prénom ne peut pas contenir de chiffres
            </p>
          )}
        </div>
        <br />
        <div>
          <label
            className="label ml-8 text-xl text-black md:ml-48 md:text-2xl lg:ml-96 dark:text-white"
            htmlFor="email"
          >
            Email:
          </label>
          <br />
          <input
            className="w-5/6 h-10 ml-8 rounded-md md:ml-48 md:w-3/6 lg:ml-96"
            {...register('email', {
              required: true,
              maxLength: 20,
              pattern: /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-z]{2,6}$/i,
            })}
          />
          {errors?.email?.type === 'required' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Ce champ est requis
            </p>
          )}
          {errors?.email?.type === 'pattern' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Votre email est invalide
            </p>
          )}
        </div>
        <br />
        <div>
          <label
            className="label text-xl ml-8 text-black md:ml-48 md:text-2xl lg:ml-96 dark:text-white"
            htmlFor="subject"
          >
            Sujet:
          </label>
          <br />
          <input
            className="w-5/6 h-10 ml-8 rounded-md md:ml-48 md:w-3/6 lg:ml-96"
            {...register('subject', {
              required: true,
              minLength: 10,
            })}
          />
          {errors?.subject?.type === 'minLength' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Ce champ doit contenir un minimum de 10 caractères
            </p>
          )}
          {errors?.subject?.type === 'required' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Ce champ est requis
            </p>
          )}
        </div>
        <br />
        <div>
          <label
            className="label text-xl ml-8 text-black md:ml-48 md:text-2xl lg:ml-96 dark:text-white"
            htmlFor="message"
          >
            Votre Message:
          </label>
          <br />
          <textarea
            className="w-5/6 ml-8 rounded-md md:ml-48 md:w-3/6 lg:ml-96"
            rows={10}
            {...register('message', {
              required: true,
            })}
          />
          {errors?.message?.type === 'required' && (
            <p className="msgError  ml-8 pt-2 text-red-500 md:ml-48 lg:ml-96">
              Ce champ est requis
            </p>
          )}
        </div>
        <br />
        <input
          type="submit"
          className="btnSubmit w-52 h-10 rounded-md text-center text-white mb-8 border-0 ml-20 md:ml-48 md:w-3/6 md:cursor-pointer lg:ml-96"
        />
      </form>
    </div>
  )
}
export default Contact
