import styled from "styled-components";

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledCheckBox = styled.input`
  appearance: none;
  width: 23px;
  height: 23px;

  margin-right: 9px;
  border: 1px solid #CDCDCD;
  border-radius: 5px;

  &:checked {
    border: 1px solid #502CE8;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.22901 9.06199L0.708008 5.52099L1.75001 4.47899L4.22901 6.93799L10.25 0.937988L11.292 1.99999L4.22901 9.06199Z' fill='%23502CE8'/%3E%3C/svg%3E%0A");
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const Text = styled.p`
  width: max-content;
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: -0.3px;
  color: #502CE8;
`;

const CheckBox = ({ id, text, register, onChange}) => {
  return (
    <CheckBoxLabel htmlFor={id}>
      <StyledCheckBox {...register(id)} type="checkbox" id={id} onChange={onChange} />
      <Text>{text}</Text>
    </CheckBoxLabel>
  );
}

export default CheckBox;