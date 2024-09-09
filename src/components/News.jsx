import React, { Component, useEffect } from "react";
import { useState } from "react";
import Newsitem from "./Newsitem";
import Loading from "./Loading";
const News =(props)=> {
  const [page, setpage] = useState(1);  
  const up = (element) => {
    let a = element.charAt(0).toUpperCase() + element.slice(1);
    return a;
  };
 
 const [articles, setarticles] = useState([""]);
 const [totalResults, settotalResults] = useState(0);
 const [loading, setloading] = useState(true);
 if (props.category === "") {
  document.title = `NewsMonkey - Home`;
} else {
  document.title = `NewsMonkey - ${up(props.category)}`;
}
const updateNews = async () => {
let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
    props.category
  }&apiKey=${import.meta.env.VITE_APIKEY}&page=${
    page 
  }&pagesize=${props.pagesize}`;
  setloading(true);
  let data = await fetch(url);
  let parsed = await data.json();
  parsed.articles.filter((element) => {
    if (element.urlToImage === null) {
      element.urlToImage =
        "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
    }
  });
  setarticles(parsed.articles);
  settotalResults(parsed.totalResults);
  setloading(false);
}
  console.log(articles);
  useEffect(() => {
    updateNews();
  }, []);
  

  const handleOnPrevious =async() => {
    if(page>1){
    setpage(page-1);
    updateNews();}
  };
  const handleOnNext = async() => {

    if(page >= Math.ceil(totalResults / props.pagesize)){
      console.log("next disabled")
    }
    else{
      setpage(page+1);
    updateNews();
    }
  };

  
    let { category } = props;
    console.log(page);
    return (
      <div style={{display: "flex",
        flexDirection: "column",
        width: "100vw",
        position: "absolute",
        top: "75px"}}>
        <div className="container" style={{ width:"100vw" }}>
          <h2>NewsMonkey - Top Headlines {up(category)}</h2>
          {loading && <Loading />}

          <div className="row">
            {!loading &&
              articles.map((element) => {
                return (
                  <div className="col md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      ImageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author ? element.author : "Unknown"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handleOnPrevious}
          >
            Previous
          </button>
          <button
            disabled={
              page >= Math.ceil(totalResults / props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleOnNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  
}

export default News;
