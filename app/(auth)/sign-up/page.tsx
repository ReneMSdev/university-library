'use client'

import AuthForm from '@/components/AuthForm'
import { signInSchema } from '@/lib/validations'

const page = () => (
  <AuthForm
    type='SIGN_UP'
    schema={signInSchema}
    defaultValues={{
      email: '',
      password: '',
      fullName: '',
      universityId: 0,
      universityCard: '',
    }}
    onSubmit={() => {}}
  />
)

export default page
