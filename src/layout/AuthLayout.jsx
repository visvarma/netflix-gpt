import DefaultHeader from "./AuthHeader";

const AuthLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      <main className="page-body min-h-screen text-gray-500">{children}</main>
    </>
  );
};

export default AuthLayout;
