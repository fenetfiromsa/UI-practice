function Input({ label }) {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label className="font-medium">{label}</label>}
      <input className="" />
    </div>
  );
}

export default Input;
