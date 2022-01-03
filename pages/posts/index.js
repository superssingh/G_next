import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as TagNames from "../../components/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  if (error) return <p>{"Error: " + error}</p>;

  useEffect(() => {
    const abortController = new AbortController();
    if (!posts) {
      async function fetchData(URL, QUERY, { signal }) {
        try {
          const { data } = await axios.get("http://localhost:1337/blogs/");
          if (!data) {
            setError("Error on fetching posts!");
          } else {
            setPosts(data);
          }
        } catch (e) {
          console.log("Error on DataFetch: ", e);
        }
      }
      fetchData(TagNames.getPosts(), abortController.signal);
      return function cleanup() {
        abortController.abort();
      };
    }
    console.log(Posts);
  }, []);

  return (
    <div>
      <ToastContainer />
      <ul className="posts">
        <div>
          {posts.map((d) => {
            return (
              <li className="card" key={d.id}>
                <Image src={"http://localhost:1337" + d.cover.url} />
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.body}...</p>
                </div>
                <Link className="btn-read" key={d.id} href="#">
                  Read
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Posts;
