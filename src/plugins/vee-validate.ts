import { configure, defineRule } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
// @ts-ignore
import es from "@vee-validate/i18n/dist/locale/es.json";
import { email, required, max } from "@vee-validate/rules";

configure({
  generateMessage: localize({
    es,
  }),
});

defineRule("phone_number", (value: string, [target]: string): string | boolean => {
  if (Number(value[0]) === Number(0)) {
      return "El campo" + target + "debe comensar con un número válido";
  }
  return true
})

defineRule("required", required);
defineRule("email", email);
defineRule("max", max);

setLocale("es");
