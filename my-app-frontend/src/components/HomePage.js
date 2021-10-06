import React from 'react'

function HomePage({ users }) {

    const userData = users.map(user => {
        console.log(user)
        return <h1>{user.name}</h1>
    })

    return (
        <h1>Hi {userData}</h1>
        // <div id="homepage">{users.map(user => {
        //     <div className="profile">
        //         <h2>{user.name}</h2>
        //         <img
        //             src={user.image}
        //             alt={user.name}
        //             className="user-avatar"
        //         />
        //         {/* <p>{user.likes} Likes </p>
        //         <button className="like-btn" onClick={() => handleLikeClick()}>Like {"<3"}</button>
        //         <button className="del-btn">Donate to GoodWill</button> */}
        //     </div>
        // })}</div>
      );
    

    // user => <ToyCard toy={toy} renderUpdatedToy={renderUpdatedToy}/>

    // <div id="toy-collection">{toys.map(toy => <ToyCard toy={toy} renderUpdatedToy={renderUpdatedToy}/>)}</div>

    // return (
    //     <div id="homepage">
    //         <h1>Welcome, {userData.gamer_tag}</h1>
    //         {/* <h2></h2>
    //         <img src="{user.image_url}" alt="{user.name}" /> */}

    //     </div>
    // )
}

export default HomePage;