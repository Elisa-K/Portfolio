import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const initialFormData = Object.freeze({
    name: '',
    email: '',
    message: '',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [successMsg, setSuccessMsg] = useState(false)

  const sendFeedback = (serviceId, templateId, variables) => {
    window.emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        setSuccessMsg(true)
        console.log('email send')
      })
      .catch((err) => {
        setSuccessMsg(false)
        console.error('erreur envoie mail', err)
      })
  }

  const onSubmit = (formData) => {
    const templateId = import.meta.env.PUBLIC_TEMPLATE_ID
    const serviceId = import.meta.env.PUBLIC_SERVICE_ID
    sendFeedback(serviceId, templateId, {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: 'elisaklein66@gmail.com',
    })
  }

  return (
    <div className="container px-5 mx-auto">
      <h2 className="text-3xl uppercase text-center text-red-dark font-bold">
        Me contacter
      </h2>
      <hr className="w-16 h-1 mx-auto mt-1 mb-16 bg-red-light border-0  dark:bg-gray-700" />
      <div className="lg:w-1/2 md:w-2/3 mx-auto shadow-md bg-white p-5 md:p-16 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -m-2">
          <div className="p-2 w-full md:w-1/2">
            <label
              htmlFor="name"
              className="block text-md font-medium mb-2 dark:text-white"
            >
              Nom - Prénom
            </label>
            <input
              type="text"
              name="name"
              {...register('name', {
                required: 'Veuillez renseigner votre nom et prénom',
                minLength: {
                  value: 5,
                  message:
                    'Votre nom et prénom doit contenir 5 caractères minimum',
                },
              })}
              className="py-3 px-4 block w-full shadow rounded-md border border-gray-200 leading-tight focus:outline-none focus:border-green-dark focus:ring focus:ring-opacity-30 focus:ring-green-dark"
              aria-describedby="hs-validation-name-error-helper"
            />
            {errors.name && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-name-error-helper"
              >
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="p-2 w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-md font-medium mb-2 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              {...register('email', {
                required: 'Veuillez renseigner votre email',
                pattern: {
                  value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                  message: 'Veuillez renseigner un email valide',
                },
              })}
              className="py-3 px-4 block w-full shadow rounded-md border border-gray-200 leading-tight focus:outline-none focus:border-green-dark focus:ring focus:ring-opacity-30 focus:ring-green-dark"
              aria-describedby="hs-validation-email-error-helper"
            />
            {errors.email && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-email-error-helper"
              >
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="p-2 w-full">
            <label
              htmlFor="message"
              className="block text-md font-medium mb-2 dark:text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              {...register('message', {
                required: 'Veuillez renseigner votre message',
                minLength: {
                  value: 30,
                  message: 'Votre message doit contenir minimum 30 caractères.',
                },
              })}
              className="py-3 px-4 w-full h-48 block shadow rounded-md border border-gray-200 leading-tight focus:outline-none focus:border-green-dark focus:ring focus:ring-opacity-30 focus:ring-green-dark"
              aria-describedby="hs-validation-message-error-helper"
            ></textarea>
            {errors.message && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-message-error-helper"
              >
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="p-2 w-full">
            <input
              type="checkbox"
              name="rgpd"
              {...register('rgpd', { required: 'Veuillez cocher la case' })}
              className="shrink-0 mt-0.5 border border-gray-200 rounded-md  text-blue-600 focus:outline-none focus:border-green-dark focus:ring focus:ring-green-dark focus:ring-opacity-30 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              id="hs-checkbox-group-1"
            />
            <label
              htmlFor="hs-checkbox-group-1"
              className="text-sm text-gray-500 ml-3 dark:text-gray-400"
            >
              En soumettant ce formulaire, j'accepte que mes données
              personnelles soient utilisées pour me recontacter. Pour en savoir
              plus, veuillez consulter la{' '}
              <a href="/politique-confidentialite" className="font-bold">
                politique de confidentialité
              </a>
            </label>
            {errors.rgpd && (
              <p
                className="text-sm text-red-600 mt-2"
                id="hs-validation-message-error-helper"
              >
                {errors.rgpd.message}
              </p>
            )}
          </div>
          <div className="p-2 w-full">
            <button
              type="submit"
              className="flex mx-auto py-3 px-4 justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-red-dark text-white uppercase hover:bg-red-light focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              Envoyer
            </button>
          </div>
          {successMsg && (
            <div
              class="bg-green-900 font-bold text-sm m-auto text-white rounded-md p-4"
              role="alert"
            >
              Votre message a bien été envoyé !
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
