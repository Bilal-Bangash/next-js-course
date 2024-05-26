import { resend } from '@/lib/resend/resend'
import MagicaLinkEmail from '@/emails/MagicaLinkEmail'

export async function sendVerificationRequest(params) {
  const { identifier, url, provider, theme } = params
  const { host } = new URL(url)

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'karamatshah78@gmail.com',
      subject: `Log in to ${host}`,
      text: text({ url, host }),
      react: MagicaLinkEmail({ url, host, provider, theme })
    })

    return { success: true, data }
  } catch (error) {
    throw new Error('Failed to send the verification Email')
  }
}

function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`
}
