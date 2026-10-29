// Reduces an Indian mobile number to its 10 digits: drops spaces, dashes,
// a leading +91/91 or a leading 0.
export function normPhone(v: string) {
  let d = v.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  return d;
}

export function isMobile(v: string) {
  return /^[6-9]\d{9}$/.test(v);
}
