let participantes = [
  {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 10),
  },
  {
    nome: "Gabriel Freitas",
    email: "gabriel@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 15, 10),
    dataCheckIn: null,
  },
  {
    nome: "Maria Silva",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 10, 30),
    dataCheckIn: new Date(2024, 2, 27, 14, 20),
  },
  {
    nome: "João Santos",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 12, 45),
    dataCheckIn: new Date(2024, 2, 28, 18, 15),
  },
  {
    nome: "Ana Oliveira",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 27, 8, 0),
    dataCheckIn: null,
  },
  {
    nome: "Carlos Souza",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 28, 16, 20),
    dataCheckIn: new Date(2024, 3, 1, 20, 5),
  },
  {
    nome: "Juliana Lima",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 2, 29, 11, 55),
    dataCheckIn: new Date(2024, 3, 2, 15, 30),
  },
  {
    nome: "Pedro Almeida",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 14, 40),
    dataCheckIn: new Date(2024, 3, 3, 18, 20),
  },
  {
    nome: "Luciana Costa",
    email: "luciana@gmail.com",
    dataInscricao: new Date(2024, 3, 2, 9, 15),
    dataCheckIn: null,
  },
  {
    nome: "Fernando Ramos",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2024, 3, 3, 18, 5),
    dataCheckIn: null,
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if (participante.dataCheckIn == null) {
    dataCheckIn = `
      <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
        Confirmar check-in
      </button>
    `
  }

  return `
  <tr>
    <td>
      <strong>${participante.nome}</strong>
      <br>
      <small>${participante.email}</small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""

  for (let participante of participantes) {
    output += criarNovoParticipante(participante)
  }

  document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if (participanteExiste) {
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

  if(confirm(mensagemConfirmacao) == false) {
    return
  }
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )

  participante.dataCheckIn = new Date()

  atualizarLista(participantes)

}