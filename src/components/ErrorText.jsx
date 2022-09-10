import React from "react";

const ErrorText = (props) => {
  let username,
    error = null;
  if (props.errorInfo) {
    error = props.errorInfo.error;
    username = props.errorInfo.username;
  }
  return (
    <>
      {props.errorInfo && (
        <div className="text-skin-warning text-xl text-center">
          {error.response.status === 404 ? (
            <>Not Found {username}, please try again</>
          ) : (
            <>{error.message}</>
          )}
        </div>
      )}
    </>
  );
};

export default ErrorText;
