const codigosAtivos = [
  { codigo: "LOSTADMIN", tipo: "2x EXP" },
  { codigo: "ADMINFIGHT", tipo: "2x EXP" },
  { codigo: "GIFTING_HOURS", tipo: "2x EXP" },
  { codigo: "NOMOREHACK", tipo: "2x EXP" },
  { codigo: "BANEXPLOIT", tipo: "2x EXP" },
  { codigo: "EARN_FRUITS", tipo: "2x EXP" },
  { codigo: "FIGHT4FRUIT", tipo: "2x EXP" },
  { codigo: "NOEXPLOITER", tipo: "2x EXP" },
  { codigo: "NOOB2ADMIN", tipo: "2x EXP" },
  { codigo: "CODESLIDE", tipo: "2x EXP" },
  { codigo: "ADMINHACKED", tipo: "Reset de status" },
  { codigo: "ADMINDARES", tipo: "2x EXP" },
  { codigo: "fruitconcepts", tipo: "2x EXP" },
  { codigo: "krazydares", tipo: "2x EXP" },
  { codigo: "TRIPLEABUSE", tipo: "2x EXP" },
  { codigo: "SEATROLLING", tipo: "2x EXP" },
  { codigo: "24NOADMIN", tipo: "2x EXP" },
  { codigo: "AXIORE", tipo: "2x EXP" },
  { codigo: "BIGNEWS", tipo: "Título" },
  { codigo: "BLUXXY", tipo: "2x EXP" },
  { codigo: "CHANDLER", tipo: "Recompensa de Beli" },
  { codigo: "ENYU_IS_PRO", tipo: "2x EXP" },
  { codigo: "FUDD10", tipo: "Recompensa de Beli" },
  { codigo: "FUDD10_V2", tipo: "Recompensa de Beli" },
  { codigo: "JCWK", tipo: "2x EXP" },
  { codigo: "KITTGAMING", tipo: "2x EXP" },
  { codigo: "KITT_RESET", tipo: "Reset de status" },
  { codigo: "MAGICBUS", tipo: "2x EXP" },
  { codigo: "NEWTROLL", tipo: "2x EXP" },
  { codigo: "REWARDFUN", tipo: "2x EXP" },
  { codigo: "SECRET_ADMIN", tipo: "2x EXP" },
  { codigo: "STARCODEHEO", tipo: "2x EXP" },
  { codigo: "STRAWHATMAINE", tipo: "2x EXP" },
  { codigo: "SUB2CAPTAINMAUI", tipo: "2x EXP" },
  { codigo: "SUB2DAIGROCK", tipo: "2x EXP" },
  { codigo: "SUB2FER999", tipo: "2x EXP" },
  { codigo: "SUB2GAMERROBOT_EXP1", tipo: "2x EXP" },
  { codigo: "SUB2NOOBMASTER123", tipo: "2x EXP" },
  { codigo: "SUB2OFFICIALNOOBIE", tipo: "2x EXP" },
  { codigo: "SUB2UNCLEKIZARU", tipo: "Reset de status" },
  { codigo: "TANTAIGAMING", tipo: "2x EXP" },
  { codigo: "THEGREATACE", tipo: "2x EXP" }
];

const codigosExpirados = [
  "ADMIN_STRENGTH", "SECRET_ADMIN", "ADMIN_TROLL", "STAFFBATTLE", "NOOB2PRO",
  "DRAGONABUSE", "DEVSCOOKING", "NOOB_REFUND", "EXP_5B", "RESET_5B",
  "UPD16", "3BVISITS", "2BILLION", "15B_BESTBROTHERS", "CINCODEMAYO_BOOST",
  "ADMINGIVEAWAY", "GAMER_ROBOT_1M", "SUBGAMERROBOT_RESET", "SUB2GAMERROBOT_RESET1",
  "GAMERROBOT_YT", "TY_FOR_WATCHING", "UPD15", "THIRDSEA", "1MLIKES_RESET",
  "UPD14", "1BILLION", "ShutDownFix2", "XmasExp", "XmasReset",
  "Update11", "PointsReset", "Update10", "Control", "JULYUPDATE_RESET",
  "SUB2GAMERROBOT_RESET1"
];

function criarItem(codigo, tipo) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span><strong>${codigo}</strong> - ${tipo || 'Expirado'}</span>
    <button class="copy-btn" onclick="copiar('${codigo}')">Copiar</button>
  `;
  return li;
}

function carregarCodigos() {
  const listaAtivos = document.getElementById("listaAtivos");
  const listaExpirados = document.getElementById("listaExpirados");
  listaAtivos.innerHTML = "";
  listaExpirados.innerHTML = "";

  const busca = document.getElementById("busca").value.toLowerCase();
  const filtro = document.getElementById("filtro").value;

  codigosAtivos.forEach(({ codigo, tipo }) => {
    if (
      (codigo.toLowerCase().includes(busca) || tipo.toLowerCase().includes(busca)) &&
      (filtro === "todos" || tipo === filtro)
    ) {
      listaAtivos.appendChild(criarItem(codigo, tipo));
    }
  });

  codigosExpirados.forEach((codigo) => {
    if (codigo.toLowerCase().includes(busca)) {
      listaExpirados.appendChild(criarItem(codigo));
    }
  });
}

function copiar(texto) {
  navigator.clipboard.writeText(texto).then(() => {
    alert("Código copiado: " + texto);
  });
}

document.getElementById("busca").addEventListener("input", carregarCodigos);
document.getElementById("filtro").addEventListener("change", carregarCodigos);

window.onload = carregarCodigos;
