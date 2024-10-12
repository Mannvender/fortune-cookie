export const ERRORS = {
  // messages should suggest what the user should do to fix the error
  invalid: {
    email: "Email must be in format: <name>@<domain>.<tld>",
    password: "Password must be at least 6 characters long",
    name: "Name cannot be empty",
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
