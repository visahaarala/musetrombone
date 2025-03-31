import { InputProps } from './Contact';
import styles from './InputField.module.scss';

const InputField = ({
  props,
  error,
}: {
  props: InputProps;
  error?: boolean;
}) => {
  const [value, setValue] = props.valueState;

  if (props.type === 'input') {
    return (
      <div className={`${styles.input} ${error ? styles.error : ''}`}>
        <input
          type='text'
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  } else {
    return (
      <div className={`${styles.input} ${error ? styles.error : ''}`}>
        <textarea
          placeholder={props.placeholder}
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    );
  }
};

export default InputField;
