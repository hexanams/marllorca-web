// Dynamic loading of country codes
let cachedCountryCodes: {
  code: string;
  dialCode: string;
  flag: string;
}[] | null = null;

export const getCountryCodes = async () => {
  // Return cached data if available
  if (cachedCountryCodes) {
    return cachedCountryCodes;
  }

  // Load country codes dynamically
  try {
    // Dynamically import the constants file only when needed
    const { countryCodes } = await import('./constants');
    cachedCountryCodes = countryCodes;
    return countryCodes;
  } catch (error) {
    console.error('Failed to load country codes:', error);
    // Return a minimal fallback set of common country codes
    return [
      { code: "ES", dialCode: "+34", flag: "🇪🇸" }, // Spain first since it's Mallorca
      { code: "US", dialCode: "+1", flag: "🇺🇸" },
      { code: "GB", dialCode: "+44", flag: "🇬🇧" },
      { code: "DE", dialCode: "+49", flag: "🇩🇪" },
      { code: "FR", dialCode: "+33", flag: "🇫🇷" },
    ];
  }
};
