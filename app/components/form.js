

'use client';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Le nom doit contenir au moins 4 caractères')
    .required('Le nom est obligatoire'),

  email: Yup.string()
    .email('Adresse email invalide')
    .required('L’email est obligatoire'),

  phone: Yup.string()
    .matches(/^[0-9]{8}$/, 'Le numéro de téléphone doit contenir exactement 8 chiffres')
    .required('Le numéro de téléphone est obligatoire'),

  message: Yup.string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(30, 'Le message ne doit pas dépasser 30 caractères')
    .required('Le message est requis'),
});

export default function ContactForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-4 border border-dark rounded-lg bg-background space-y-4 shadow-2xl"
    >
     
      <div>
        <label className="block font-semibold mb-1">Nom</label>
        <input
          type="text"
          {...register('name')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Téléphone</label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Message</label>
        <textarea
          rows="5"
          {...register('message')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-primary py-2 px-6 text-secondary font-semibold rounded-3xl hover:bg-dark transition duration-200"
      >
        Envoyer le message
      </button>
    </form>
  );
}
