import { TodoItems } from '@/components/serverComponets';
import React, { Suspense } from 'react';
import Form from './addTodoForm';
import Todos from './todos';

const Page = () => {
  return (
    <div className="container">
      <Form />

      <section className="todosContainer">
        <Suspense fallback={<div>Loading...</div>}>
          <Todos />
        </Suspense>
      </section>
    </div>
  );
};

export default Page;
