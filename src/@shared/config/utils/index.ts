export const castBooleanEnv = (envVar, defaultValue = false) =>
  process.env[envVar] ? process.env[envVar]?.toLowerCase() === 'true' : defaultValue
export const castIntEnv = (envVar, defaultValue) =>
  parseInt(process.env[envVar], 10) || defaultValue
export const castStringArrayEnv = (envVar, defaultValue = []) =>
  process.env[envVar]?.length
    ? (process.env[envVar]).split(',').map((field) => field.trim())
    : defaultValue

export default { castBooleanEnv, castIntEnv, castStringArrayEnv }
