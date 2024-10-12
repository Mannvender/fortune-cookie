export const ERRORS = {
  invalid: {
    email: "Invalid email",
    password: "Invalid password",
    name: "Name is required",
  },
};

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length > 5;
};

export const validateName = (name) => {
  return name.trim().length > 0;
};
