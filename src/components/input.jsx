function InputLayout(props) {
    return (
      <div className="input-container">
        <label>
          <input
            type={props.type}
            name={props.name}
            placeholder={props.message}
            value={props.value.name}
            onChange={props.onChange}
            className="input-field"
          />
        </label>
      </div>
    );
}

export default InputLayout;