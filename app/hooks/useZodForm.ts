/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, UseFormProps, UseFormReturn, FieldValues } from 'react-hook-form'
import { ZodType, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function useZodForm<TSchema extends ZodType<any, any>>(
  schema: TSchema,
  options?: Omit<UseFormProps<TypeOf<TSchema>>, 'resolver'>
): UseFormReturn<TypeOf<TSchema>> {
  return useForm<TypeOf<TSchema>>({
    ...options,
    resolver: zodResolver(schema) as any, 
  })
}
