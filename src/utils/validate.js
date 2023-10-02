export const checkValidData = (email,password,fullname) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

    // const isPhonenovalid = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phno)

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isFullName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/.test(fullname)

  if (!isEmailValid) return "please enter a valid email address";

  if (!isPasswordValid) return "please enter a valid password";
  

  if(fullname==="" && !isFullName) return "please enter a valid name";

  return null;
};
