import React, { useEffect, useState } from "react";

import UsersList from "../../components/user/UsersList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/users");

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </React.Fragment>
  );
};

export default Users;

//BEFORE ADDING USEHTTPCLIENT()
//  // const [isLoading, setIsLoading] = useState(false);
//   // const [error, setError] = useState();
//   const { isLoading, error, sendRequest, clearError } = useHttpClient();
//   const [loadedUsers, setLoadedUsers] = useState();

//   useEffect(() => {
//     const sendReuest = async () => {
//       setIsLoading(true);

//       try {
//         const response = await fetch("http://localhost:5000/users");

//         const responseData = await response.json();

//         if (!response.ok) {
//           throw new Error(responseData.message);
//         }

//         setLoadedUsers(responseData.users);
//       } catch (err) {
//         setError(err.message);
//       }
//       setIsLoading(false);
//     };
//     sendReuest();
//   }, []);

//   const errorHandler = () => {
//     setError(null);
//   };
