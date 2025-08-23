function InputLayout(props) {
    return (
      <div className="input-container-form">
        <label>
          <input
            type={props.type}
            name={props.name}
            placeholder={props.message}
            value={props.value.name}
            onChange={props.onChange}
            className="input-field"
            maxLength={props.letterLength.max}
            minLength={props.letterLength.min}
          />
        </label>
      </div>
    );
}

export default InputLayout;