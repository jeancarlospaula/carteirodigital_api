const replyMessageHTML = (name: string, message: string) => {
  return `<p>Olá ${name}, recebemos sua mensagem e em breve entraremos em contato com você.</p><p>Mensagem: <b>${message}</b></p><br/><br/><p><i>Email enviado automaticamente pelo Carteiro Digital, por favor não responda.</i></p><p><i>Se você não entrou em contato, por favor ignore este email.</i></p>`
}

const replyMessageText = (name: string, message: string) => {
  return `Olá ${name}, recebemos sua mensagem e em breve entraremos em contato com você.\n\nMensagem: ${message}\n\nEmail enviado automaticamente pelo Carteiro Digital, por favor não responda.\n\nSe você não entrou em contato, por favor ignore este email.`
}

const messageHTML = (name: string, email: string, message: string) => {
  return `<p>Nome: <b>${name}</b></p><p>Email: <b>${email}</b></p><p>Mensagem: <b>${message}</b></p>`
}

const messageText = (name: string, email: string, message: string) => {
  return `Nome: ${name}\n\nEmail: ${email}\n\nMensagem: ${message}`
}

export { replyMessageHTML, replyMessageText, messageHTML, messageText }
