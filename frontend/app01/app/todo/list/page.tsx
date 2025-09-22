// todo/list
import TodoListCP from "@/components/todo/todoListCP";

interface TodoListPageProps {
  searchParams : {
    page?: string;
  }
}

export const metadata = {
  title : 'Todo List Page',
  description : 'This is a Todo List Page',
  openGraph : {
    title : 'Todo List',
    description : 'This is a Description'
  }

}

export default async function TodoListPage({searchParams}: TodoListPageProps) {

 const query = await searchParams;

 const page = query?.page ||'1';

 const queryObj = new URLSearchParams()
 queryObj.set('page', page);

 const res = await fetch(`http://localhost:8080/api/todos/list?page=${page}`);

 const result = await res.json();

 console.log(result)

 return (

   <div>
     <div>Todo List Page</div>
     <TodoListCP data={result} queryObj={queryObj}></TodoListCP>
   </div>

 )
}
