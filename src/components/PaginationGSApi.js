import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 4;

const PaginationGSApi = () => {
  // -----Fetch data from Google Sheet API-----
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const API_KEY = process.env.REACT_APP_GOOGLESHEET_API;

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(`https://sheet.best/api/sheets/${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  // 0, 10, 20, 30, ...
  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);

  const currentPageData =
    data &&
    data?.slice(offset, offset + PER_PAGE).map((item) => (
      <div key={item.i} className="bg-bgDefault w-[340px] sm:w-[300px] md:w-[365px] lg:w-[100px] xl:w-[480px] p-4 mx-auto border shadow-lg rounded-md leading-relaxed ">
        <div className="font-bold text-xl">{item.nama}</div>
        <div className="text-titleColor">
          <span className="text-black">di</span> {item.alamat}
        </div>
        <div className="italic">{item.tanggal}</div>
        <div className="font-semibold mt-4">"{item.pesan}"</div>
      </div>
    ));

  // total pages: 500
  const pageCount = Math.ceil(data && data?.length / PER_PAGE);

  return (
    <div className="flex flex-col items-start relative">
      <div className="grid sm:grid-cols-2 grow gap-2 sm:gap-6 md:gap-4 mb-14">{currentPageData}</div>

      <div className="absolute bottom-0 sm:left-36 md:left-48 xl:left-80">
        <ReactPaginate
          previousLabel={"« Previous"}
          nextLabel={"Next »"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination "}
          previousLinkClassName={"font-semibold "}
          nextLinkClassName={"font-semibold"}
          disabledClassName={"disabled"}
          activeClassName={"active font-bold text-xl border-b-2 rounded-md px-2 py-1 bg-blue-200 "}
          className={`flex flex-row gap-2 lg:gap-5 mt-4 lg:text-lg`}
        />
      </div>
    </div>
  );
};

export default PaginationGSApi;
