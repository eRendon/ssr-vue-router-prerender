export interface IPublicCard {
  investment_card_id?: string; // auto upon creation NEW
  creation_date?: string; // auto upon creation NEW
  creation_date_utc?: string; // auto upon creation NEW
  guarantee_id?: string; // from admin
  guarantee_value?: string; // from admin
  guarantee_thumbnail?: string; // from admin - Image File() blob
  state?: string; // from admin (open, closed, hidden)
  balance?: string; // from admin - maybe not needed
  label?: string; // from admin
  real_estate_city?: string; // from admin
  real_estate_province?: string; // from admin
  real_estate_estrato?: string; // from admin
  real_estate_type?: string; // from admin
  real_estate_area?: string; // from admin
  real_estate_neighborhood?: string; // from admin
  return_investment?: string; // from admin
  minimum_investment?: string; // from admin  NEW
  amount_requested?: string; // from admin  NEW
  amount_committed?: string; // from admin  NEW
  number_investors?: string; // from admin  NEW
  deadline?: string; // from admin  NEW
  investment_requests?: IInvestmentRequest[]; // investment_requests are the only thing users can post on this entity  NEW
}

export interface IInvestmentRequest {
  investor_id: string;
  investor_phone: string; // required
  investor_email: string;
  request_amount: string; // slider !!!!!!!
  request_date: string;
  investor_tracking: string;
  investor_notes: string;
}

export interface IFormPublicCard {
  investor_id?: string; // Si existe en el sistema, se manda el id, si no, se manda un string vacío - esto era lo que habíamos hablado de capturarlo del cookie o localStorage
  investor_phone: string; // Obligatorio
  investor_email: string; // Debe ir en la petición, pero van a haber casos en los que los usuarios no lo van a ingresar - por lo tanto si no tenemos el email desde el formulario, se debe enviar uno ficticio creado por nosotros así:+57{{investor_phone}}@crm.sureti.co
  investor_persona: string; // obligatorio - aún no hemos implementado A/B testing en el website así que por defecto este campo será siempre 'persona_2'
  investor_tracking?: string; // Enviar vacío por ahora (string vacío)
  request_amount: string; // Obligatorio - String numérico '100000.00'
  request_date: string; // Obligatorio - Formato UTC - es la fecha/hora de envío del formulario
  investor_notes?: string; // Enviar vacío por ahora (string vacío)
  lead_has_home?: "Si tiene vivienda" | "No tiene vivienda" | "";
}

export interface IFormLoanCard {
  lead_email: string;
  lead_id?: string;
  lead_notes?: string;
  lead_persona: string;
  lead_phone: string;
  lead_tracking?: string;
  lead_type: string;
  request_amount: string;
  request_date: string;
  lead_has_home: "Si tiene vivienda" | "No tiene vivienda" | "";
}
