import axios from "axios";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
function App() {
  const [userInputValue, setUserInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [userNotFound, setUserNotFound] = useState(false);
  const searchUsers = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${userInputValue}`
      );
      setUsers([data]);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUsers([]);
      setUserNotFound(true);
    }
  };

  return (
    <div
      className="relative w-96 mx-auto my-16 p-10 md:p-5 bg-white border border-1
    border-gray-300 rounded-lg shadow-md text-center"
    >
      <input
        type="text"
        value={userInputValue}
        placeholder="Search github username"
        className="text-black border border-1
      border-gray-300 rounded-lg py-3 px-6 my-2 cursor-pointer text-base"
        onChange={(event) => setUserInputValue(event.target.value)}
      />
      <button className="absolute py-3  mt-2">
        <LuSearch
          className="w-10 h-10 rounded-2lg text-blue-700"
          onClick={searchUsers}
        />
      </button>
      {users.map((user) => (
        <div key={user.id}>
          <img
            src={user.avatar_url}
            alt=""
            className="rounded-full h-32 w-32 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Name: {user.name}</h3>
          <p className="text-gray-600">Username: {user.login}</p>
          <div className="follow mt-4 flex justify-center gap-6">
            <p>Following: {user.following}</p>
            <p>Followers: {user.followers}</p>
          </div>
          <button className="mt-6 py-4 px-5 w-1/2 bg-sky-500 rounded-md text-white text-lg">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </button>
          {userNotFound && (
            <div className="profile-info">
              <p>User not found</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
// import { useState } from "react";
// import axios from "axios";
// import { LuSearch } from "react-icons/lu";

// function App() {
//   const [userInputValue, setUserInputValue] = useState("");
//   const [users, setUsers] = useState([]);
//   const [userDetails, setUserDetails] = useState(null);
//   const [userNotFound, setUserNotFound] = useState(false);

//   const searchUsers = async () => {
//     try {
//       setUserNotFound(false); // Reset userNotFound status
//       const { data } = await axios.get(
//         `https://api.github.com/users/${userInputValue}`
//       );
//       setUsers([data]); // Update users array with fetched user data
//       setUserDetails(data); // Set userDetails for displaying single user details
//     } catch (error) {
//       console.error("Error fetching user:", error);
//       setUsers([]); // Clear users array on error
//       setUserDetails(null); // Clear userDetails on error
//       setUserNotFound(true);
//     }
//   };

//   return (
//     <div className="container mx-auto my-16 p-10 md:p-5 bg-white border border-1 border-gray-300 rounded-lg shadow-md text-center">
//       <input
//         type="text"
//         placeholder="Search github username"
//         className="text-black border border-1 border-gray-300 rounded-lg py-3 px-6 my-2 cursor-pointer text-base"
//         value={userInputValue}
//         onChange={(event) => setUserInputValue(event.target.value)}
//       />
//       <button className="absolute py-3 mt-2 right-2" onClick={searchUsers}>
//         <LuSearch className="w-10 h-10 rounded-lg text-blue-700" />
//       </button>
//       {users.map((user) => (
//         <div key={user.id} className="profile-info">
//           <img
//             src={user.avatar_url}
//             alt=""
//             className="rounded-full h-32 w-32 mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold mb-2">Name: {user.name}</h3>
//           <p className="text-gray-600">Username: {user.login}</p>
//           <div className="follow mt-4">
//             <p>Following: {user.following}</p>
//             <p>Followers: {user.followers}</p>
//           </div>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
//             <a href={user.html_url} target="_blank" rel="noopener noreferrer">
//               Visit
//             </a>
//           </button>
//         </div>
//       ))}
//       {userNotFound && (
//         <div className="profile-info">
//           <p>User not found</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
