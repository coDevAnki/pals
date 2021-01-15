const useForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return { onSubmit };
};

export default useForm;
