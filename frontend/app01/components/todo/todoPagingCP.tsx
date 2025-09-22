// components/todo/todoPagingCP

import Link from "next/link";

interface TodoPagingCPProps {
  totalCount: number;
  page: number;
  size: number;
}

export default function TodoPagingCP({totalCount, page, size} : TodoPagingCPProps) {

   // 1 -> 10, 11 -> 20, 20 -> 20 마지막 페이지 계산
 const tempEnd = Math.ceil(page / 10.0) * 10; // Assuming 10 items per page

 //시작 페이지 계산
 const start = tempEnd - 9; // Start of the current page range

 console.log("------------------------------------------", size)

 const totalPages = Math.ceil(totalCount / Number(size)); // Total number of

 const prev = start > 1;
 const next = tempEnd < totalPages;

 const end = totalPages < tempEnd ? totalPages : tempEnd; // End of the current page range

 //페이지 번호 배열 생성
 const pages = Array.from({length: end - start + 1}, (_, index) => start + index);

  return (
   <nav className="flex justify-center mt-6">
     <div className="flex overflow-x-auto">
       <ul className="flex items-center space-x-1">
         {/* 이전 버튼 */}
         {prev && (
           <li>
             <Link
               href={`/todo/list?page=${start - 1}`}
               className="flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
             >
               &lt;
             </Link>
           </li>
         )}
         {/* 페이지 번호 목록 */}
         {pages.map((num) => (
           <li key={num}>
             <Link
               href={`/todo/list?page=${num}`}
               className={`flex items-center justify-center w-8 h-8 text-sm font-medium rounded-md transition-colors
                 ${Number(page) === num
                   ? 'bg-indigo-600 text-white shadow-sm'
                   : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-100'
                 }`
               }
             >
               {num}
             </Link>
           </li>
         ))}

         {/* 다음 버튼 */}
         {next && (
           <li>
             <Link
               href={`/todo/list?page=${end + 1}`}
               className="flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-500 bg-white rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
             >
               &gt;
             </Link>
           </li>
         )}
       </ul>
     </div>
   </nav>
 );
}
