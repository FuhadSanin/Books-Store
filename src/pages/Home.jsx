import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("")
  //     .then((response) => {
  //       setBooks(response.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  const datas = [
    {
      No: 1,
      Title: "Sample Title 1",
      Author: "Author A",
      Publish_Year: 2020,
      Operations: "SANINTE",
    },
    {
      No: 2,
      Title: "Sample Title 2",
      Author: "Author B",
      Publish_Year: 2018,
      Operations: "Andi Oomb",
    },
    {
      No: 3,
      Title: "Sample Title 3",
      Author: "Author C",
      Publish_Year: 2021,
      Operations: "Scneneneeeee",
    },
    // Add more data entries as needed...
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create" target="_blank">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-seperater border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={data.No} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {data.Title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {data.Author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {data.Publish_Year}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`books/details/${data.No}`} target="_blank">
                      <IoIosInformationCircleOutline />
                    </Link>
                    <Link to={`books/edit/${data.No}`} target="_blank">
                      <MdOutlineModeEdit/>
                    </Link>
                    <Link to={`books/delete/${data.No}`} target="_blank">
                      <MdDeleteOutline/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
