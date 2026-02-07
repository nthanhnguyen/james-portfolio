export const buildEmailHTML = (fromEmail: string, message: string): string => `
<div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a192f; border-radius: 16px; overflow: hidden;">
  <div style="background: linear-gradient(135deg, #facc15, #84cc16); padding: 24px 32px;">
    <h1 style="margin: 0; color: #0a192f; font-size: 22px;">New Message from Portfolio</h1>
  </div>
  <div style="padding: 32px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; color: #8892b0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #233554;">From</td>
      </tr>
      <tr>
        <td style="padding: 12px 0 24px; color: #ccd6f6; font-size: 16px;">
          <a href="mailto:${fromEmail}" style="color: #facc15; text-decoration: none;">${fromEmail}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 12px 0; color: #8892b0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #233554;">Message</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; color: #ccd6f6; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
  </div>
  <div style="padding: 16px 32px; background: #112240; text-align: center;">
    <p style="margin: 0; color: #8892b0; font-size: 12px;">Sent from James Nguyen's Portfolio</p>
  </div>
</div>`;
