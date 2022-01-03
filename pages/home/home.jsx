import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as TagNames from "../../components/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const URL = "";
  if (loading) <p>Loading...</p>;

  if (error) return <p>{"Error: " + error}</p>;

  useEffect(() => {
    const abortController = new AbortController();
    if (loading) {
      async function fetchData(URL, { signal }) {
        try {
          const { data } = await axios.get(URL);
          setData(data);
          setLoading(false);
        } catch (e) {
          console.log("Error on DataFetch: ", e);
        }
      }
      fetchData(TagNames.getPosts(), abortController.signal);
      return function cleanup() {
        abortController.abort();
      };
    }
    console.log(data);
  }, [data]);

  return (
    <div>
      <ToastContainer />
      <ul className="posts">
        <div>
          {data.map((d) => {
            return (
              <li className="card" key={d.id}>
                <img src={"http://localhost:1337" + d.cover.url} />
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

export default Home;
