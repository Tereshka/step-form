const validation = (step, user) => {
  const errors = {};
  switch (step) {
    case 1:
      if (!user.firstName) {
        errors.firstName = 'Required';
      } else if (user.firstName.length < 5) {
        errors.firstName = 'Must be 5 characters or more';
      }
      if (!user.lastName) {
        errors.lastName = 'Required';
      } else if (user.lastName.length < 5) {
        errors.lastName = 'Must be 5 characters or more';
      }
      if (!user.password) {
        errors.password = 'Required';
      } else if (user.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
      }
      if (!user.passwordRepeat) {
        errors.passwordRepeat = 'Required';
      } else if (user.password !== user.passwordRepeat) {
        errors.passwordRepeat = 'Must be equal password';
      }
      break;
    case 2:
      if (!user.email) {
        errors.email = 'Required';
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
        errors.email = 'Invalid email address';
      }
      if (!user.phone) {
        errors.phone = 'Required';
      } else if (!/^\+?([0-9]{1})\)?[-. (]?([0-9]{3})[-. )]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/.test(user.phone)) {
        errors.phone = 'Invalid mobile: +X(XXXX)XXX-XX-XX';
      }
      if (user.country === -1) {
        errors.country = 'Required';
      }
      if (!user.city) {
        errors.city = 'Required';
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