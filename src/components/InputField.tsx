import { InputProps } from './Contact';
import styles from './InputField.module.scss';

const InputField = ({
  props,
  error,
  disabled,
}: {
  props: InputProps;
  disabled: boolean;
  error?: boolean;
}) => {
  const [value, setValue] = props.valueState;

  return (
    <div className={styles.inputField}>
      <div
        className={`${styles.input} ${
          props.isOnState !== undefined && !props.isOnState[0]
            ? styles['input--disabled']
            : error
            ? styles['input--error']
            : ''
        }`}
      >
        {props.type === 'input' ? (
          <input
            type='text'
            placeholder={props.placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={
              disabled || (props.isOnState !== undefined && !props.isOnState[0])
            }
            id={`input-${props.name}`}
          />
        ) : (
          <textarea
            rows={4}
            placeholder={props.placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id={`input-${props.name}`}
            disabled={
              disabled || (props.isOnState !== undefined && !props.isOnState[0])
            }
          />
        )}
      </div>
      {props.isOnState !== undefined ? (
        <input
          type='checkbox'
          className={styles.onOff}
          checked={props.isOnState[0]}
          onChange={() => {
            const [checked, setChecked] = props.isOnState!;
            setChecked(!checked);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputField;
