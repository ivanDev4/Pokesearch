import { useState } from "react";

export default function useForm({ initialForm = {} }) {
  const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    onInputChange,
    onResetForm,
  };
}
