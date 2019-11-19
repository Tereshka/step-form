const validation = (step, user) => {
  const errors = {};
  switch (step) {
    case 1:
      if (user.firstName.length < 5) {
        errors.firstName = 'Must be 5 characters or more';
      }
      if (user.lastName.length < 5) {
        errors.lastName = 'Must be 5 characters or more';
      }
      if (user.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
      }
      if (user.password !== user.passwordRepeat) {
        errors.passwordRepeat = 'Must be equal password';
      }
      break;
    case 2:
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = 'Invalid email address';
      }
      if (!/^\+?([0-9]{1})\)?[-. (]?([0-9]{3})[-. )]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/.test(user.phone)) {
        errors.phone = 'Invalid mobile: +X(XXXX)XXX-XX-XX';
      }
      if (!user.city) {
        errors.country = 'Required';
      }
      break;
    case 3:
      if (!user.avatar) {
        errors.avatar = "Required";
      }
      break;
    default:
      break;
  }

  return errors;
}

export default validation;