import styled from "styled-components";

const Select = styled.select`
  width: 81px;
  height: 38px;

  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.3px;

  color: #828282;
  border: 1px solid #CDCDCD;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
`;

const SelectBox = ({ id, regionData, register }) => {
  return (
    <Select {...register(id)}>
      {regionData.map((region) => ( 
        <Option key={region.id} value={region.name}>{region.name}</Option>
      ))}
    </Select>
  );
}

export default SelectBox;