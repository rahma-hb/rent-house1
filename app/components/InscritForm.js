


'use client';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Le nom doit contenir au moins 5 caractères')
    .required('Le nom est obligatoire'),

  cin: Yup.string()
    .matches(/^[0-9]{8}$/, 'Le CIN doit contenir exactement 8 chiffres')
    .required('Le CIN est obligatoire'),

  email: Yup.string()
    .email('Adresse email invalide')
    .required('L’email est obligatoire'),

  password: Yup.string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .required('Le mot de passe est obligatoire'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas')
    .required('La confirmation est obligatoire'),

  acceptTerms: Yup.boolean()
    .oneOf([true], 'Vous devez accepter les conditions'),
});

export default function InscriptionForm({ onSubmit }) {
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
        <label className="block font-semibold mb-1">CIN</label>
        <input
          type="text"
          {...register('cin')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.cin && <p className="text-red-500 text-sm mt-1">{errors.cin.message}</p>}
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
        <label className="block font-semibold mb-1">Mot de passe</label>
        <input
          type="password"
          {...register('password')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Confirmer le mot de passe</label>
        <input
          type="password"
          {...register('confirmPassword')}
          className="w-full p-2 border border-dark rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register('acceptTerms')}
          className="h-4 w-4"
        />
        <label className="text-sm">J'accepte les <a href="#" className="underline">conditions d'utilisation</a></label>
      </div>
      {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>}

      <button
        type="submit"
        className="bg-primary py-2 px-6 text-secondary font-semibold rounded-3xl hover:bg-dark transition duration-200"
      >
        S'inscrire
      </button>
    </form>
  );
}
