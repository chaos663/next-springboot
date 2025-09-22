import TodoEditCP from "@/components/todo/todoEditCP";

interface TodoEditPageProps {
  params: {
    tno: string;
  };
  searchParams: {
    page?: string;
  };
}

export const metadata = {
 title: 'Todo Edit Page',
 openGraph: {
   title: 'Todo Edit',
 },
};


export default async function TodoEditPage({params, searchParams}: TodoEditPageProps){
const paramObj = await params;

 const query = await searchParams;

 //쿼리 스트링은 문자열이므로
 const page = query?.page ||'1';

 const queryObj = new URLSearchParams()
 queryObj.set('page', page);

 //API 서버에서 조회
 const res = await fetch(`http://localhost:8080/api/todos/${paramObj.tno}`)

 const todo = await res.json()

 //하위 컴포넌트로 todo와 queryObj전달

  return (
   <div>
     <div> Todo Edit Page </div>
     <TodoEditCP todo={todo} queryObj={queryObj}></TodoEditCP>
   </div>
 )

}
