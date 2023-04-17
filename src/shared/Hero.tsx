import React from "react";
import { API_BASE_URL } from "../utils";
import Link from "next/link";

const getBookList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);

  if (!res.ok) {
    throw new Error("Failed fetch data  ");
  }

  return res.json();
};

const Hero = async () => {
  const books = await getBookList();

  return (
    <section className=''>
      <div className='container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8'>
        {books?.map((item: any) => (
          <Link href={`/bookDetail/${item.id}`} key={item.id}>
            <div className='item'>
              <img src='https://picsum.photos/400/300' alt='' />
              <div>
                <h2>{item.name}</h2>
                <p>{item.type}</p>
                <span>available:{item.available ? "true" : "false"}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hero;
