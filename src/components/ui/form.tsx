// src/components/ui/form.tsx
import * as React from 'react';
import { useForm, FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';

// Form component
export const Form = <T extends FieldValues>({
  children,
  ...props
}: {
  children: React.ReactNode;
} & UseFormReturn<T>) => {
  return <FormProvider {...props}>{children}</FormProvider>;
};

// FormField component
export const FormField = ({
  control,
  name,
  render,
}: {
  control: any;
  name: string;
  render: (props: { field: any }) => React.ReactNode;
}) => {
  return <>{render({ field: control.register(name) })}</>;
};

// FormItem component
export const FormItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2">{children}</div>;
};

// FormLabel component
export const FormLabel = ({ children }: { children: React.ReactNode }) => {
  return <label className="block text-sm font-medium">{children}</label>;
};

// FormControl component
export const FormControl = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>;
};

// FormMessage component
export const FormMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-sm text-red-500">{children}</p>;
};