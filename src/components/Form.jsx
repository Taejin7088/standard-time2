import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    // TODO: 완료 처리
    e.preventDefault();
    const todo = {
      id: new Date().getTime(),
      title: inputTodo.title,
      content: inputTodo.content,
      isDone: false,
    };
    dispatch(addTodo(todo));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        name='title'
        value={inputTodo.title}
        onChange={(e) => {
          setInputTodo({ ...inputTodo, title: e.target.value });
        }}
        placeholder='할 일 제목을 입력하세요'
      />
      <StyledInput
        type='text'
        name='content'
        value={inputTodo.content}
        onChange={(e) => {
          setInputTodo({ ...inputTodo, content: e.target.value });
        }}
        placeholder='할 일 내용을 입력하세요'
      />
      <StyledButton type='submit'>추가</StyledButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
