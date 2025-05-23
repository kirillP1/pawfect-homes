export interface MailConfig {
	host: string;
	port: number;
	secure: boolean;
	user: string;
	password: string;
}

export function getMailConfig(): MailConfig {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password) {
    throw new Error("Missing required SMTP configuration");
  }

  return { host, port, secure, user, password };
}