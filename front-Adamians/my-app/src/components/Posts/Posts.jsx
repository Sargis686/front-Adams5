import React, { useState, useEffect, useRef } from "react";
import s from "./style.module.css"
import PostCard from "../PostCard/PostCard";


function Posts() {



  const [allUsers, setAllUsers] = useState([]);
  const [post, setPosts] = useState([])


  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  const handleSearchClick = () => {
    setIsSearchVisible(true);
  };




  useEffect(() => {
    //IIFE 3
    (async () => {
      let postData;
      //try -um json file  catch -um array
      try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://cloud.codesupply.co/endpoint/react/data.json")
        // const response = await fetch("https://randomuser.me/api/?results=10").rezults
        postData = await response.json()
        //  mainArray = json.data;
        // Extracting the main array from the JSON object
        // console.log(mainArray);
      }
      catch (errors) {
        console.log(errors);
        postData = []
      }

      //postData array vortex lcnum enq json- tvialnery
      setAllUsers(postData)
      setPosts(postData)
      console.log(postData);

    })()
  }, [])


  const filterCards = (ev) => {
    const value = ev.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(post => (
      `${post.title}`.toLowerCase()

        .includes(value)
    ));

    setPosts(filteredUsers)

  }



  return (
    <div className="App">

      <div>
        <h3>Posts</h3>
      
        <div className={s["search-container"]}>
          {/* //ete false a tox ereva input-y ete che tox click anelic button-y ereva ev yndhakaraky tox input-y ereva */}
          {isSearchVisible ? (
            <div>
            <input
              onInput={filterCards}
              className={s.SearchBox}
              placeholder="Search..."
              ref={searchRef}
            /><span></span>
            </div>
          ) : (
            <span className={s.search} onClick={handleSearchClick}>Search</span>
          )


          }
        </div>
      </div>

      <div className={s['cards-container']}>
        {post.map((posts, index) => (
          // <div key={index}>
          //   <h2>{post.title}</h2>
          //   <p>{post.body}</p>
          // </div>
          <div> <PostCard postCards={posts} key={index} /> </div>

        ))}
      </div>
    </div>
  );
}






export default Posts;
