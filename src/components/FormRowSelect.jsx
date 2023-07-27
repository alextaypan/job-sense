const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((statusValue, index) => {
          return (
            <option key={index} value={statusValue}>
              {statusValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
