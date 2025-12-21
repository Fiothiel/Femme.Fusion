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

defineRule("personalnumber", (value: string) => {
  if (!value) return false;

  const digits = value.replace(/\D/g, "");

  // YYMMDDXXXX (10) or YYYYMMDDXXXX (12)
  if (digits.length !== 10 && digits.length !== 12) {
    return "Ange ett fullständigt personnummer (10 eller 12 siffror).";
  }

  return true;
});
