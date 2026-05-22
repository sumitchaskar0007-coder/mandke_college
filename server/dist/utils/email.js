import nodemailer from "nodemailer";
export function createTransport() {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!user || !pass)
        return null;
    return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
    });
}
export async function sendMail(to, subject, html) {
    const t = createTransport();
    const from = process.env.SMTP_USER || process.env.ADMIN_EMAIL;
    if (!t || !from)
        return { skipped: true };
    await t.sendMail({ from, to, subject, html });
    return { skipped: false };
}
