import { NodemailerAdapter } from '../../infrastructure/adapters/mail.adapter'
import { getMailConfig } from '../../infrastructure/configs/mail.config'

export interface IMailService {
  sendActionMail(to: string, link: string): Promise<void>;
}

export interface IMailAdapter {
  sendMail(to: string, subject: string, html: string): Promise<void>;
}

class MailServices implements IMailService {
  constructor(private mailAdapter: IMailAdapter) {}

  async sendActionMail(to: string, link: string): Promise<void> {
    const subject = "Action Required: Confirm Your Request";
    const html = `<p>Click <a href="${link}">${link}</a> to confirm.</p>`;
    await this.mailAdapter.sendMail(to, subject, html);
  }
}

const mailServices = new MailServices(new NodemailerAdapter(getMailConfig()))

export default mailServices