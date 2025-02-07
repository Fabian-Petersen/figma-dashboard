// $ Note: Form Row Input Flowbite component.
// $ Use the className prop to add any additional classes to the input element.

type FormRowTextAreaProps = {
  name: string;
  id?: string;
  labelText: string;
  placeholderText?: string;
  className?: string;
  defaultValues?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  row?: number;
};

const FormRowTextArea = ({
  id,
  name,
  labelText,
  row,
  placeholderText,
  className,
  defaultValues,
  onChange,
}: FormRowTextAreaProps) => {
  return (
    <div className="relative col-span-full group">
      <textarea
        id={id}
        rows={row}
        name={name}
        className={`${className} py-3 px-2 peer rounded-sm border-none focus:border-b-2 outline-transparent text-sm
        w-full placeholder-transparent text-fontDark`}
        placeholder={placeholderText}
        defaultValue={defaultValues}
        onChange={onChange}
      ></textarea>
      {labelText ? (
        <label
          htmlFor={name}
          className="absolute text-sm -top-5 left-0 transition-all duration-400 text-gray-400
            peer-placeholder-shown:top-3 px-2 mb-0 peer-placeholder-shown:text-gray-600
            peer-focus:-top-5 peer-focus:text-gray-600 dark:peer-focus:text-gray-400 peer-focus:text-sm tracking-wider
            dark:peer-placeholder-shown:text-fontLight"
        >
          {labelText}
        </label>
      ) : null}
    </div>
  );
};

export default FormRowTextArea;
