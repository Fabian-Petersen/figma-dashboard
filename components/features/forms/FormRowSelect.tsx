"use client";

// $ Note: Form Row Input Flowbite component
// $ For the peer element to work, the label element must be a sibling of the input element after the input element.

type FormRowSelectProps = {
  name: string;
  id?: string;
  labelText: string;
  className?: string;
  options: string[];
  defaultValues?: string;
  onChange?: (selectedValues: string[]) => void;
  required?: boolean;
  multiple?: boolean;
};

const FormRowSelect = ({
  id,
  name,
  labelText,
  options,
  className,
  defaultValues,
  multiple,
  onChange,
  required,
}: FormRowSelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = multiple
      ? Array.from(event.target.selectedOptions, (option) => option.value)
      : [event.target.value]; // Wrap single value in array

    if (onChange) onChange(selectedOptions);
  };

  return (
    <div className="relative w-full mb-2 group">
      <select
        id={id}
        name={name}
        multiple={multiple}
        className={`${className} text-sm py-3 px-2 peer
          outline-none border-none focus:border-b-rose-600 text-fontDark rounded-md
          w-full placeholder-transparent`}
        defaultValue={defaultValues}
        onChange={handleChange}
        required={required}
      >
        {!multiple && (
          <option value="select an option">select an option</option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {labelText && (
        <label
          htmlFor={name}
          className="absolute left-0 top-4 px-2 mb-0 text-gray-500
            peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-valid:text-sm dark:peer-valid:text-gray-300
            peer-focus:text-gray-600 peer-focus:text-sm tracking-wider peer-not-placeholder-shown:top-[-22px] peer-valid:top-[-20px]
            dark:peer-focus:text-gray-200 peer-placeholder-shown:text-gray-600 peer-valid:opacity-100 transition-all duration-300"
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FormRowSelect;
