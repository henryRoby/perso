const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.nom = !isEmpty(data.nom) ? data.nom : "";
  data.prenom = !isEmpty(data.prenom) ? data.prenom : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.nom)) {
    errors.nom = "Le champs nom est obligatoire";
  }

  if (Validator.isEmpty(data.prenom)) {
    errors.prenom = "Le champs nom est obligatoire";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Le champs Email est obligatoire";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "E-mail non valider";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = " Le champs Password est obligatoire";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Le champs Confirm Password est obligatoire";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Veuiller entrer au moin 6 caractère";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "le mot de passe devrais etre exacte";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
