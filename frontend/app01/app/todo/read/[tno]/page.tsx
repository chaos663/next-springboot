// /todo/read/[tno]
import TodoReadCP from "@/components/todo/todoReadCP";

interface TodoReadPageProps {
  params: {
    tno: string;
  };
  searchParams: {
    page?: string;
  };
}


export default async function TodoReadPage({params, searchParams}: TodoReadPageProps) {

 const paramObj = await params;

 const query = await searchParams;

 const page = query?.page ||'1';

 const queryObj = new URLSearchParams()
 
 queryObj.set('page', page);

 const res = await fetch(`http://localhost:8080/api/todos/${paramObj.tno}`)

 const todo = await res.json()

 return (
   <div>
     <div>Todo Read Page</div>
     <TodoReadCP todo={todo} queryObj={queryObj}></TodoReadCP>
   </div>
 )

}
