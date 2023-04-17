import React from "react";
import BookDetailShared from "../../../shared/BookDetail";
const BookDetail = (props: any) => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <BookDetailShared {...props} />
    </>
  );
};

export default BookDetail;
