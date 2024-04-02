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
    dataCheckIn: new Date(2024, 2, 24, 19, 30),
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
    dataCheckIn: new Date(2024, 2, 29, 10, 40),
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
    dataCheckIn: new Date(2024, 3, 4, 12, 45),
  },
  {
    nome: "Fernando Ramos",
    email: "fernando@gmail.com",
    dataInscricao: new Date(2024, 3, 3, 18, 5),
    dataCheckIn: new Date(2024, 3, 5, 21, 35),
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

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