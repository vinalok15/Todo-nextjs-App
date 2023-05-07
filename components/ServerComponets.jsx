import { TodoButton } from './Clients';

export const TodoItems = ({ title, description, id, completed }) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <TodoButton id={id} completed={completed} />
      </div>
    </div>
  );
};
