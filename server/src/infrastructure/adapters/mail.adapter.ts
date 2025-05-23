import nodemailer from "nodemailer";
import { IMailAdapter } from '../../core/services/mail.services'
import { MailConfig } from '../configs/mail.config'

export class NodemailerAdapter implements IMailAdapter {
  private transporter: nodemailer.Transporter;

  constructor(config: MailConfig) {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.password,
      },
    });
  }

  async sendMail(to: string, subject: string, html: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: `"Pet Adoption" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
      });
    } catch (error) {
      throw new Error(`Failed to send email: ${(error as Error).message}`);
    }
  }
}