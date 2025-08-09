import { configure, defineRule } from "vee-validate";
import { required, email, numeric, min } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";

export default defineNuxtPlugin(() => {
  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);
  defineRule("numeric", numeric);

  configure({
    generateMessage: localize("sv", {
      messages: {
        required: "Måste vara ifyllt",
        min: "Minst {length} tecken",
        numeric: "Får endast innehålla siffror",
        email: "Fyll i en korrekt e-postadress",
      },
    }),
  });
});
