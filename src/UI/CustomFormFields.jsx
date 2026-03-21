export const CustomFields = (props) => {
  const { fieldType, options, onChange, value, placeholder, label, id, name, minDate, maxDate, error, validate } = props;

  const isRequired = validate?.isRequired ?? false;
  const errorId = id ? `${id}-error` : undefined;

  const commonProps = {
    value,
    placeholder,
    name,
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error && errorId ? errorId : undefined,
    "aria-required": isRequired || undefined,
    required: isRequired || undefined,
  };

  const baseInput = "w-full px-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 transition bg-white dark:bg-gray-700 dark:text-gray-100 cursor-pointer";

  const normalState = "border-gray-200 dark:border-gray-600 focus:ring-blue-500";
  const errorState = "border-red-400 focus:ring-red-400";

  const inputClass = `${baseInput} ${error ? errorState : normalState}`;

  switch (fieldType) {
    case "textField":
      return (
        <div className="flex flex-col gap-1">
          <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
            {label}
            {isRequired && <span aria-hidden="true" className="text-red-500 ml-0.5">*</span>}
          </label>

          <input type="text" {...commonProps} onChange={onChange} className={inputClass} />

          {error && <p id={errorId} role="alert" className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      );

    case "selectField":
      return (
        <div className="flex flex-col gap-1">
          <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
            {label}
            {isRequired && <span aria-hidden="true" className="text-red-500 ml-0.5">*</span>}
          </label>

          <select id={id} name={name} value={value} onChange={onChange} aria-invalid={error ? true : undefined} aria-describedby={error && errorId ? errorId : undefined} aria-required={isRequired || undefined} required={isRequired || undefined} className={`${inputClass} bg-white dark:bg-gray-700`}>
            <option value="" disabled>
              {placeholder}
            </option>

            {options.map((option) => {
              return <option key={option?.value} value={option?.value}>{option?.label}</option>;
            })}
          </select>
          {error && <p id={errorId} role="alert" className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      );

    case "date":
      return (
        <div className="flex flex-col gap-1">
          <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
            {label}
            {isRequired && <span aria-hidden="true" className="text-red-500 ml-0.5">*</span>}
          </label>

          <input
            type="date"
            {...(minDate && { min: minDate })}
            {...(maxDate && { max: maxDate })}
            {...commonProps}
            onChange={onChange}
            className={inputClass}
          />
          {error && <p id={errorId} role="alert" className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
      );

    default:
      return null;
  }
};
